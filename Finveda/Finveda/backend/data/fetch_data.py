import requests

def fetch_data(asset):
    # Fetch data from an external API (e.g., Yahoo Finance).
    response = requests.get(f"https://api.example.com/asset/{asset}/history")
    return response.json() if response.status_code == 200 else None
