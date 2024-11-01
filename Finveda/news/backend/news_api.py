import requests
import json

API_KEY = "YOUR_API_KEY_HERE"

def get_news_articles():
    url = f"https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey={API_KEY}"
    response = requests.get(url)
    data = json.loads(response.text)
    return data["articles"]

def filter_news_articles(articles, keywords):
    filtered_articles = []
    for article in articles:
        for keyword in keywords:
            if keyword.lower() in article["title"].lower() or keyword.lower() in article["description"].lower():
                filtered_articles.append(article)
                break
    return filtered_articles

def get_curated_news_feed(keywords):
    articles = get_news_articles()
    filtered_articles = filter_news_articles(articles, keywords)
    return filtered_articles