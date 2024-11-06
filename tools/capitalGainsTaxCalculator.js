document.getElementById('calculateBtn1').addEventListener('click', calculateCapitalGains);

function calculateCapitalGains() {
    const initialInvestment = parseFloat(document.getElementById('initialInvestment').value);
    const salePrice = parseFloat(document.getElementById('salePrice').value);
    const investmentDuration = parseFloat(document.getElementById('investmentDuration').value);
    const assetType = document.getElementById('assetType').value;

    if (isNaN(initialInvestment) || isNaN(salePrice) || isNaN(investmentDuration) || assetType === "") {
        alert("Please fill all fields.");
        return;
    }

    const profit = salePrice - initialInvestment;
    let taxRate = 0;

    // Set tax rate based on asset type and holding period
    if (assetType === "short-term") {
        taxRate = 0.15; // Example short-term rate
    } else if (assetType === "long-term" && investmentDuration >= 1) {
        taxRate = 0.10; // Example long-term rate
    } else {
        alert("Invalid asset type or duration.");
        return;
    }

    const capitalGainsTax = profit * taxRate;

    const capitalGainsTaxElement = document.getElementById('capitalGainsTax');
    capitalGainsTaxElement.textContent = `₹${capitalGainsTax.toFixed(2)}`;
}

document.getElementById('clearBtn1').addEventListener('click', function() {
    document.getElementById('initialInvestment').value = '';
    document.getElementById('salePrice').value = '';
    document.getElementById('investmentDuration').value = '';
    document.getElementById('assetType').value = '';
    document.getElementById('capitalGainsTax').innerText = '';
});
