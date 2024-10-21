document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('roi-form').addEventListener('submit', function(event) {
        event.preventDefault();
        calculateROI();
    });

    document.getElementById('clearBtn').addEventListener('click', clearROI);
});

function calculateROI() {
    const invested = parseFloat(document.getElementById('invested').value);
    const returned = parseFloat(document.getElementById('return').value);

    if (isNaN(invested) || isNaN(returned) || invested <= 0) {
        alert('Please enter valid positive numbers for both fields.');
        return;
    }

    const gl = returned - invested;
    const roi = (gl / invested) * 100;

    document.getElementById('gl').textContent = `Gain: ₹${gl.toFixed(2)}`;
    document.getElementById('result').textContent = `ROI: ${roi.toFixed(2)}%`;
}

function clearROI() {
    document.getElementById('roi-form').reset();
    document.getElementById('gl').innerText = '';
    document.getElementById('result').innerText = '';
}
