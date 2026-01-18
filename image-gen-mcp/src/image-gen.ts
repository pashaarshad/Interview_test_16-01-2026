import axios from 'axios';
import fs from 'fs';
import path from 'path';

export async function generateImage(prompt: string, outputPath: string, width: number = 1024, height: number = 1024): Promise<string> {
    const encodedPrompt = encodeURIComponent(prompt);
    const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=${width}&height=${height}&model=flux`;

    console.log(`Downloading image from: ${url}`);

    const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream'
    });

    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    const writer = fs.createWriteStream(outputPath);
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
        writer.on('finish', () => resolve(outputPath));
        writer.on('error', reject);
    });
}
