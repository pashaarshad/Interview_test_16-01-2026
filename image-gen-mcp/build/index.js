"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mcp_js_1 = require("@modelcontextprotocol/sdk/server/mcp.js");
const stdio_js_1 = require("@modelcontextprotocol/sdk/server/stdio.js");
const zod_1 = require("zod");
const image_gen_js_1 = require("./image-gen.js");
const path_1 = __importDefault(require("path"));
// Create an MCP server
const server = new mcp_js_1.McpServer({
    name: "image-gen-server",
    version: "1.0.0"
});
// Define the generate_image tool
server.tool("generate_image", "Generate an image based on a prompt and save it to a file", {
    prompt: zod_1.z.string().describe("The description of the image to generate"),
    filename: zod_1.z.string().describe("The filename to save the image as (relative to project root/public/images or absolute)"),
    width: zod_1.z.number().optional().describe("Width of the image (default 1024)"),
    height: zod_1.z.number().optional().describe("Height of the image (default 1024)")
}, async ({ prompt, filename, width, height }) => {
    try {
        // Resolve path - if relative, assume it goes to project public/images
        let savePath = filename;
        if (!path_1.default.isAbsolute(filename)) {
            // Assuming we are running inside the subfolder image-gen-mcp, we go up one level
            // But better to be explicit or save to a known location
            // Let's resolve relative to the MAIN project's public folder
            savePath = path_1.default.resolve(process.cwd(), "..", "public", "images", filename);
        }
        await (0, image_gen_js_1.generateImage)(prompt, savePath, width, height);
        return {
            content: [
                {
                    type: "text",
                    text: `Image generated successfully at: ${savePath}`
                }
            ]
        };
    }
    catch (error) {
        return {
            content: [
                {
                    type: "text",
                    text: `Error generating image: ${error.message}`
                }
            ],
            isError: true
        };
    }
});
// Start the server
async function main() {
    const transport = new stdio_js_1.StdioServerTransport();
    await server.connect(transport);
    console.error("Image Gen MCP Server running on stdio");
}
main().catch((error) => {
    console.error("Fatal error in main():", error);
    process.exit(1);
});
