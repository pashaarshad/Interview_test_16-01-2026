"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const image_gen_js_1 = require("./image-gen.js");
const path_1 = __importDefault(require("path"));
async function main() {
    const args = process.argv.slice(2);
    if (args.length < 2) {
        console.error("Usage: node build/cli.js <prompt> <filename> [width] [height]");
        process.exit(1);
    }
    const prompt = args[0];
    const filename = args[1];
    const width = args[2] ? parseInt(args[2]) : 1024;
    const height = args[3] ? parseInt(args[3]) : 1024;
    let savePath = filename;
    if (!path_1.default.isAbsolute(filename)) {
        // Save to public/images by default relative to CWD if not absolute
        savePath = path_1.default.resolve(process.cwd(), "public", "images", filename);
    }
    try {
        const finalPath = await (0, image_gen_js_1.generateImage)(prompt, savePath, width, height);
        console.log(`Successfully generated image: ${finalPath}`);
    }
    catch (error) {
        console.error(`Failed to generate image: ${error.message}`);
        process.exit(1);
    }
}
main();
