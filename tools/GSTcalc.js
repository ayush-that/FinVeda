document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('gst-calculator').addEventListener('submit', function(event) {
      event.preventDefault();
    var mode = $("#mode").val();
    var amount = parseFloat($("#amount").val());
    var taxSlab = parseFloat($("#tax-slab").val()) / 100;

    if (mode === "exclusive") {
      var totalGst = amount * taxSlab;
      var postGstAmount = amount + totalGst;
    } else {
      var postGstAmount = amount;
      var totalGst = postGstAmount * taxSlab;
      var amount = postGstAmount - totalGst;
    }

    $("#total-gst").text("Total GST : ₹ " + totalGst.toFixed(2));
    $("#post-gst-amount").text(
      "Post GST Amount : ₹ " + postGstAmount.toFixed(2)
    );
  });
});
function clearGST() {
  document.getElementById('gst-calculator').reset();
  document.getElementById('total-gst').innerText = '';
  document.getElementById('post-gst-amount').innerText = '';
}

document.getElementById('gst-calculator').addEventListener('submit', function(event) {
  event.preventDefault();
  calculateGST();
});

function calculateGST() {
  const mode = document.getElementById('mode').value;
  const amount = parseFloat(document.getElementById('amount').value);
  const taxSlab = parseFloat(document.getElementById('tax-slab').value);

  if (isNaN(amount) || isNaN(taxSlab)) {
      alert('Please enter valid numbers for both amount and tax slab.');
      return;
  }

  let gstAmount, postGSTAmount;

  if (mode === 'exclusive') {
      gstAmount = (amount * (taxSlab / 100));
      postGSTAmount = amount + gstAmount;
  } else if (mode === 'inclusive') {
      gstAmount = (amount * (taxSlab / (100 + taxSlab)));
      postGSTAmount = amount - gstAmount;
  }

  document.getElementById('total-gst').innerText = `GST Amount: Rs. ${gstAmount.toFixed(2)}`;
  document.getElementById('post-gst-amount').innerText = `Post GST Amount: Rs. ${postGSTAmount.toFixed(2)}`;
}
