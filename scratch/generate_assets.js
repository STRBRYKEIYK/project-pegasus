
import axios from 'axios';
import fs from 'fs';
import path from 'path';

const KIE_API_KEY = '9edcb47acf9df800a97e175b354522f0';
const ENDPOINT = 'https://api.kie.ai/api/v1/jobs/createTask';
const STATUS_ENDPOINT = 'https://api.kie.ai/api/v1/jobs/recordInfo';

async function generateImage(prompt, name, aspectRatio = "16:9") {
    console.log(`Generating image: ${name} with prompt: ${prompt}`);
    try {
        const response = await axios.post(ENDPOINT, {
            model: "nano-banana-2",
            input: {
                prompt: prompt,
                aspect_ratio: aspectRatio,
                resolution: "2K",
                output_format: "png"
            }
        }, {
            headers: {
                'Authorization': `Bearer ${KIE_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.data.code !== 200) {
            throw new Error(`API Error: ${response.data.msg}`);
        }

        const taskId = response.data.data.taskId;
        console.log(`Task created. ID: ${taskId}. Polling for result...`);

        // Polling
        while (true) {
            await new Promise(resolve => setTimeout(resolve, 5000));
            const statusResponse = await axios.get(`${STATUS_ENDPOINT}?taskId=${taskId}`, {
                headers: {
                    'Authorization': `Bearer ${KIE_API_KEY}`
                }
            });

            const state = statusResponse.data.data.state;
            console.log(`Status: ${state}`);

            if (state === 'success') {
                const resultJson = JSON.parse(statusResponse.data.data.resultJson);
                const imageUrl = resultJson.resultUrls[0];
                console.log(`Success! Image URL: ${imageUrl}`);
                
                // Download image
                const imagePath = path.join(process.cwd(), 'public', 'images', `${name}.png`);
                const writer = fs.createWriteStream(imagePath);
                const imageResponse = await axios.get(imageUrl, { responseType: 'stream' });
                imageResponse.data.pipe(writer);
                
                return new Promise((resolve, reject) => {
                    writer.on('finish', resolve);
                    writer.on('error', reject);
                });
            } else if (state === 'fail') {
                throw new Error(`Task failed: ${statusResponse.data.data.failMsg}`);
            }
        }
    } catch (error) {
        console.error(`Error generating ${name}:`, error.message);
    }
}

async function main() {
    const imagesDir = path.join(process.cwd(), 'public', 'images');
    if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });

    await generateImage(
        "A hyper-realistic, futuristic 3D dashboard for an AI affiliate platform. Floating holographic charts, neon cyan and emerald glowing lines, obsidian glass surfaces, deep space background, 8K resolution, cinematic lighting, sleek UI elements.",
        "hero"
    );

    await generateImage(
        "Abstract 3D nodes and interconnected glowing crystals representing an AI campaign builder. Refined glass textures, volumetric lighting, minimal but powerful, neon blue and white accents, high-end editorial photography style.",
        "campaign",
        "3:2"
    );

    await generateImage(
        "A premium, golden mechanical engine core with intricate gears and glowing emerald circuits. Luxury material finish, macro photography, soft bokeh, representating a high-performance commission tracking engine.",
        "commission",
        "3:2"
    );
}

main();
