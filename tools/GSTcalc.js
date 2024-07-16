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
