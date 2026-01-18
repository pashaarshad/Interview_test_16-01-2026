import { generateImage } from "./image-gen.js";
import path from "path";

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
    if (!path.isAbsolute(filename)) {
        // Save to public/images by default relative to CWD if not absolute
        savePath = path.resolve(process.cwd(), "public", "images", filename);
    }

    try {
        const finalPath = await generateImage(prompt, savePath, width, height);
        console.log(`Successfully generated image: ${finalPath}`);
    } catch (error: any) {
        console.error(`Failed to generate image: ${error.message}`);
        process.exit(1);
    }
}

main();
