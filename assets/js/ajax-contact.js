$(function() {
  var form = $("#contact-form");
  var formMessages = $(".form-message");

  form.submit(function(e) {
    e.preventDefault();

    var formData = form.serialize();

    $.ajax({
      type: "POST",
      url: form.attr("action"),
      data: formData,
    })
    .done(function(response) {
      formMessages.removeClass("error").addClass("success").text(response);
      form.find("input, textarea").val("");
    })
    .fail(function(data) {
      formMessages.removeClass("success").addClass("error");
      formMessages.text(data.responseText || "Oops! An error occurred and your message could not be sent.");
    });
  });
});
