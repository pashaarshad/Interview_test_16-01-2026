import { McpServer } from "@modelcontextprotocol/sdk/server/mcp";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio";
import { z } from "zod";
import { generateImage } from "./image-gen.js";
import path from "path";

// Create an MCP server
const server = new McpServer({
    name: "image-gen-server",
    version: "1.0.0"
});

// Define the generate_image tool
server.tool(
    "generate_image",
    "Generate an image based on a prompt and save it to a file",
    {
        prompt: z.string().describe("The description of the image to generate"),
        filename: z.string().describe("The filename to save the image as (relative to project root/public/images or absolute)"),
        width: z.number().optional().describe("Width of the image (default 1024)"),
        height: z.number().optional().describe("Height of the image (default 1024)")
    },
    async ({ prompt, filename, width, height }) => {
        try {
            // Resolve path - if relative, assume it goes to project public/images
            let savePath = filename;
            if (!path.isAbsolute(filename)) {
                // Assuming we are running inside the subfolder image-gen-mcp, we go up one level
                // But better to be explicit or save to a known location
                // Let's resolve relative to the MAIN project's public folder
                savePath = path.resolve(process.cwd(), "..", "public", "images", filename);
            }

            await generateImage(prompt, savePath, width, height);

            return {
                content: [
                    {
                        type: "text",
                        text: `Image generated successfully at: ${savePath}`
                    }
                ]
            };
        } catch (error: any) {
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
    }
);

// Start the server
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("Image Gen MCP Server running on stdio");
}

main().catch((error) => {
    console.error("Fatal error in main():", error);
    process.exit(1);
});
