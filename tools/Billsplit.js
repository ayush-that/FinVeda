document.addEventListener('DOMContentLoaded', function () {
    const billSubtotalInput = document.getElementById('billSubtotal');
    const tipPercentageInput = document.getElementById('tipPercentage');
    const numberOfPersonsInput = document.getElementById('numberOfPersons');
    const totalBillOutput = document.getElementById('totalBill');
    const billPerPersonOutput = document.getElementById('billPerPerson');

    document.getElementById('calculateBtn5').addEventListener('click', function () {
        const billSubtotal = parseFloat(billSubtotalInput.value);
        const tipPercentage = parseFloat(tipPercentageInput.value);
        const numberOfPersons = parseInt(numberOfPersonsInput.value);

        let errorMessage = '';

        if (isNaN(billSubtotal) || billSubtotal < 0) {
            errorMessage += 'Please enter a valid positive number for Bill Subtotal.\n';
        }

        if (isNaN(tipPercentage) || tipPercentage < 0 || tipPercentage > 100) {
            errorMessage += 'Please enter a valid Tip Percentage (0-100).\n';
        }

        if (isNaN(numberOfPersons) || numberOfPersons <= 0) {
            errorMessage += 'Please enter a valid number of persons (greater than 0).\n';
        }

        if (errorMessage) {
            alert(errorMessage);
            return;
        }

        try {
            const totalTip = (billSubtotal * tipPercentage) / 100;
            const totalBill = billSubtotal + totalTip;
            const billPerPerson = totalBill / numberOfPersons;

            totalBillOutput.textContent = `₹${totalBill.toFixed(2)}`;
            billPerPersonOutput.textContent = `₹${billPerPerson.toFixed(2)}`;
        } catch (error) {
            alert('An error occurred while calculating the bill. Please try again.');
            console.error(error); 
        }
    });

    document.getElementById('clearBtn5').addEventListener('click', function () {
        billSubtotalInput.value = '';
        tipPercentageInput.value = '';
        numberOfPersonsInput.value = '';
        totalBillOutput.textContent = '₹00.00';
        billPerPersonOutput.textContent = '₹00.00';
    });
});
