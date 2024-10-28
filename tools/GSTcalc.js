document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('gst-calculator').addEventListener('submit', function(event) {
        event.preventDefault();
        calculateGST();
    });

    document.getElementById('clearBtn7').addEventListener('click', function() {
        clearGST();
    });
});

function calculateGST() {
    const mode = document.getElementById('mode').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const taxSlab = parseFloat(document.getElementById('tax-slab').value);

    let errorMessage = '';

    if (isNaN(amount) || amount <= 0) {
        errorMessage += 'Please enter a valid positive number for the amount.\n';
    }
    if (isNaN(taxSlab) || taxSlab <= 0) {
        errorMessage += 'Please enter a valid positive number for the tax slab.\n';
    }

    if (errorMessage) {
        alert(errorMessage);
        return;
    }

    let gstAmount, postGSTAmount;

    if (mode === 'exclusive') {
        gstAmount = amount * (taxSlab / 100);
        postGSTAmount = amount + gstAmount;
    } else if (mode === 'inclusive') {
        gstAmount = amount * (taxSlab / (100 + taxSlab));
        postGSTAmount = amount - gstAmount;
    } else {
        alert('Please select a valid GST mode.');
        return;
    }

    document.getElementById('total-gst').innerText = `GST Amount: ₹${gstAmount.toFixed(2)}`;
    document.getElementById('post-gst-amount').innerText = `Post GST Amount: ₹${postGSTAmount.toFixed(2)}`;
}

function clearGST() {
    document.getElementById('gst-calculator').reset();
    document.getElementById('total-gst').innerText = '';
    document.getElementById('post-gst-amount').innerText = '';
}
