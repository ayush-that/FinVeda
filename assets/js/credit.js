let creditCards = [];

async function fetchCreditCards() {
    try {
        const response = await fetch('./assets/js/creditData.json');
        creditCards = await response.json();
        populateCardList(creditCards);
    } catch (error) {
        console.error('Error fetching credit card data:', error);
    }
}

function createCardElement(card) {
    const cardElement = document.createElement('div');
    cardElement.className = 'cc-card';
    cardElement.innerHTML = `
        <div class="cc-card-header" style="background-color: ${getRandomColor()}">
            <h3>${card.name}</h3>
            <p>${card.issuer}</p>
        </div>
        <div class="cc-card-body">
            <p><strong>APR:</strong> ${card.apr}%</p>
            <p><strong>Annual Fee:</strong> ₹${card.annualFee}</p>
            <p><strong>Cashback Rate:</strong> ${card.cashbackRate}%</p>
            <p><strong>Credit Score:</strong> ${card.creditScore}</p>
            <p><strong>Welcome Bonus:</strong> ${card.welcomeBonus}</p>
            <h4>Features:</h4>
            <ul>
                ${card.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
        <button class="compare-btn" data-id="${card.id}">Compare</button>
    `;
    return cardElement;
}

function getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 80%)`;
}

function populateCardList(cards) {
    const cardList = document.getElementById('cc-list');
    cardList.innerHTML = ''; // Clear existing cards
    cards.forEach(card => {
        cardList.appendChild(createCardElement(card));
    });
}

function createComparisonCard(card) {
    const comparisonCard = document.createElement('div');
    comparisonCard.className = 'comparison-card';
    comparisonCard.innerHTML = `
        <h3>${card.name}</h3>
        <p><strong>Issuer:</strong> ${card.issuer}</p>
        <p><strong>APR:</strong> ${card.apr}%</p>
        <p><strong>Annual Fee:</strong> ₹${card.annualFee}</p>
        <p><strong>Cashback Rate:</strong> ${card.cashbackRate}%</p>
        <p><strong>Credit Score:</strong> ${card.creditScore}</p>
        <p><strong>Welcome Bonus:</strong> ${card.welcomeBonus}</p>
        <h4>Features:</h4>
        <ul>
            ${card.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
    `;
    return comparisonCard;
}

function compareCards(cardIds) {
    const comparisonContainer = document.getElementById('comparison-container');
    comparisonContainer.innerHTML = '';
    cardIds.forEach(id => {
        const card = creditCards.find(c => c.id === id);
        if (card) {
            comparisonContainer.appendChild(createComparisonCard(card));
        }
    });
}

function initializeComparison() {
    const cardList = document.getElementById('cc-list');
    const selectedCards = new Set();

    cardList.addEventListener('click', (e) => {
        if (e.target.classList.contains('compare-btn')) {
            const cardId = parseInt(e.target.dataset.id);
            if (selectedCards.has(cardId)) {
                selectedCards.delete(cardId);
                e.target.textContent = 'Compare';
                e.target.classList.remove('selected');
            } else if (selectedCards.size < 3) {
                selectedCards.add(cardId);
                e.target.textContent = 'Remove';
                e.target.classList.add('selected');
            } else {
                alert('You can compare up to 3 cards at a time.');
                return;
            }
            compareCards(Array.from(selectedCards));
        }
    });
}

function initializeFilters() {
    const cashbackSlider = document.getElementById('cashback');
    const cashbackValue = document.getElementById('cashback-value');
    const annualFeeSlider = document.getElementById('annual-fee');
    const annualFeeValue = document.getElementById('annual-fee-value');
    const creditScoreSelect = document.getElementById('credit-score');

    cashbackSlider.addEventListener('input', updateFilters);
    annualFeeSlider.addEventListener('input', updateFilters);
    creditScoreSelect.addEventListener('change', updateFilters);

    function updateFilters() {
        const minCashback = parseFloat(cashbackSlider.value);
        const maxAnnualFee = parseInt(annualFeeSlider.value);
        const selectedCreditScore = creditScoreSelect.value;

        cashbackValue.textContent = `${minCashback}%`;
        annualFeeValue.textContent = `₹${maxAnnualFee}`;

        const filteredCards = creditCards.filter(card => 
            card.cashbackRate >= minCashback &&
            card.annualFee <= maxAnnualFee &&
            (selectedCreditScore === 'all' || card.creditScore === selectedCreditScore)
        );

        populateCardList(filteredCards);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchCreditCards().then(() => {
        initializeComparison();
        initializeFilters();
    });
});
