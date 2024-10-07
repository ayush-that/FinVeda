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

        if (isNaN(billSubtotal) || isNaN(tipPercentage) || isNaN(numberOfPersons) || numberOfPersons <= 0) {
            alert('Please enter valid values.');
            return;
        }

        const totalTip = (billSubtotal * tipPercentage) / 100;
        const totalBill = billSubtotal + totalTip;
        const billPerPerson = totalBill / numberOfPersons;

        totalBillOutput.textContent = `₹${totalBill.toFixed(2)}`;
        billPerPersonOutput.textContent = `₹${billPerPerson.toFixed(2)}`;
    });

    document.getElementById('clearBtn5').addEventListener('click', function () {
        billSubtotalInput.value = '';
        tipPercentageInput.value = '';
        numberOfPersonsInput.value = '';
        totalBillOutput.textContent = '₹00.00';
        billPerPersonOutput.textContent = '₹00.00';
    });
});
