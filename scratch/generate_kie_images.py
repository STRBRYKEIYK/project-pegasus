import requests
import json
import os
import time

API_KEY = "9edcb47acf9df800a97e175b354522f0"
BASE_URL = "https://api.kie.ai"
CREATE_ENDPOINT = "/api/v1/images/generate"

# Let's try the standard OpenAI format first to see if Kie supports it, 
# or just print whatever Kie API returns to "/api/v1/jobs/createTask".
# Wait, the search results showed /api/v1/jobs/createTask for Kie.ai. Let's try to print the response.

prompts = {
    "hero-bg.jpg": "A cinematic, neo-futuristic abstract landscape representing a global digital ecosystem, glowing nodes connecting, deep navy and cyan hues, ultra high-resolution, photorealistic, 2k",
}

output_dir = r"c:\Users\keith\Documents\project-pegasus\public\images"
os.makedirs(output_dir, exist_ok=True)

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

def create_task(prompt):
    payload = {
        "model": "nano-banana-2",
        "prompt": prompt,
        "aspect_ratio": "16:9",
        "resolution": "2K"
    }
    print("Sending payload:", payload)
    response = requests.post(f"{BASE_URL}/api/v1/jobs/createTask", headers=headers, json=payload)
    print("Status code:", response.status_code)
    print("Response text:", response.text)
    return response.json()

for filename, prompt in prompts.items():
    print(f"Generating image for {filename}...")
    try:
        task_data = create_task(prompt)
    except Exception as e:
        print(f"Error for {filename}: {e}")
