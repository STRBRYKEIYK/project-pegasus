import requests
import json

API_KEY = "9edcb47acf9df800a97e175b354522f0"
BASE_URL = "https://api.kie.ai"
headers = {"Authorization": f"Bearer {API_KEY}", "Content-Type": "application/json"}

payloads = [
    {"model": "nano-banana-2", "prompt": "Test", "size": "1024x1024"}, # OpenAI format
    {"input": {"prompt": "Test"}, "model": "nano-banana-2"},
    {"model": "nano-banana-2", "prompt": "Test", "callBackUrl": "http://localhost/"} # With callback
]

for p in payloads:
    print("Testing payload:", p)
    res = requests.post(f"{BASE_URL}/api/v1/jobs/createTask", headers=headers, json=p)
    print("createTask:", res.text)
    res = requests.post(f"{BASE_URL}/v1/images/generations", headers=headers, json=p)
    print("images/generations:", res.text)
