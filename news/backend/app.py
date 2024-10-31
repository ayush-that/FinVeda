from flask import Flask, jsonify
from news_api import get_curated_news_feed

app = Flask(__name__)

@app.route('/news-feed', methods=['GET'])
def get_news_feed():
    keywords = ["stock market", "investing", "economy"]  # default keywords
    news_feed = get_curated_news_feed(keywords)
    return jsonify(news_feed)

if __name__ == '__main__':
    app.run(debug=True)