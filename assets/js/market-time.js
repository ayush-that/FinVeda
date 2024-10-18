async function fetchMarketDataUnique() {
  try {
    const response = await fetch(
      "https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=IVLR8O4HGBJ1B41T"
    );
    const data = await response.json();
    const markets = data.markets;
    const container = document.getElementById("marketStatusContainerUnique");

    // Clear the container for new data
    container.innerHTML = "";

    // Loop through the market data and create cards
    markets.forEach((market) => {
      const card = document.createElement("div");
      card.classList.add("market-card-unique");

      const status = document.createElement("span");
      status.classList.add("market-status-tag-unique");
      status.textContent = market.current_status === "open" ? "Open" : "Closed";
      status.classList.add(
        market.current_status === "open"
          ? "market-status-open-unique"
          : "market-status-closed-unique"
      );

      const title = document.createElement("h3");
      title.classList.add("market-card-title-unique");
      title.textContent = `${market.region} (${market.market_type})`;

      const exchanges = document.createElement("p");
      exchanges.classList.add("market-card-info-unique");
      exchanges.textContent = `Primary Exchanges: ${market.primary_exchanges}`;

      const time = document.createElement("p");
      time.classList.add("market-card-info-unique");
      time.textContent = `Open: ${market.local_open}, Close: ${market.local_close}`;

      const notes = document.createElement("p");
      notes.textContent = market.notes ? `Notes: ${market.notes}` : "";
      notes.classList.add("market-card-notes-unique");

      card.appendChild(status);
      card.appendChild(title);
      card.appendChild(exchanges);
      card.appendChild(time);
      card.appendChild(notes);

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching market data:", error);
  }
}

// Call the function once to load data initially
fetchMarketDataUnique();

// Set up an interval to refresh the data every 1 minute (60000 ms)
setInterval(fetchMarketDataUnique, 60000); // 60 seconds interval
