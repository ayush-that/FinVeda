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

    // Clear previous error messages
    clearErrorMessages();

    // Validate inputs and display errors if any
    const hasError = validateInputs(amount, taxSlab);
    if (hasError) return;

    let gstAmount, postGSTAmount;

    if (mode === 'exclusive') {
        gstAmount = amount * (taxSlab / 100);
        postGSTAmount = amount + gstAmount;
    } else if (mode === 'inclusive') {
        gstAmount = amount * (taxSlab / (100 + taxSlab));
        postGSTAmount = amount - gstAmount;
    } else {
        showError('modeError', 'Please select a valid GST mode.');
        return;
    }

    const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    });

    document.getElementById('total-gst').innerText = `GST Amount: ${formatter.format(gstAmount)}`;
    document.getElementById('post-gst-amount').innerText = `Post GST Amount: ${formatter.format(postGSTAmount)}`;
}

function validateInputs(amount, taxSlab) {
    let hasError = false;

    if (isNaN(amount) || amount <= 0) {
        showError('amountError', 'Please enter a valid positive number for the amount.');
        hasError = true;
    }
    if (isNaN(taxSlab) || taxSlab <= 0) {
        showError('taxSlabError', 'Please enter a valid positive number for the tax slab.');
        hasError = true;
    }

    return hasError;
}

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearErrorMessages() {
    document.getElementById('amountError').textContent = '';
    document.getElementById('taxSlabError').textContent = '';
    document.getElementById('modeError').textContent = '';
}

function clearGST() {
    document.getElementById('gst-calculator').reset();
    document.getElementById('total-gst').innerText = '';
    document.getElementById('post-gst-amount').innerText = '';
    clearErrorMessages();
}