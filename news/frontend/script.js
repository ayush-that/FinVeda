// Fetch the news articles from the Flask API
fetch('/news-feed')
    .then(response => {
        // Check if the response is okay (status code 200)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const newsFeed = document.getElementById('news-feed');
        
        // Clear the news feed before adding new articles
        newsFeed.innerHTML = '';

        // Loop through the articles and create HTML for each one
        data.forEach(article => {
            const articleHTML = `
                <div class="news-article">
                    <img src="${article.urlToImage}" alt="${article.title}">
                    <h2>${article.title}</h2>
                    <p>${article.description}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                </div>
            `;
            newsFeed.innerHTML += articleHTML; // Append the article HTML to the news feed
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });