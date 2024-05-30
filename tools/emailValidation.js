function validate() {
    var mail = document.getElementById("text").value;

    const approvedDomains = [".com", ".in", ".org", ".net", ".edu"];


    var regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9\-]+\.[a-zA-Z]{2,})$/;

    if (regex.test(mail)) {
      const domain = mail.split('@')[1];

      const isValidDomain = approvedDomains.some((approvedDomain) => domain.endsWith(approvedDomain));

      if (isValidDomain) {
        message.style.color = "green";
        message.textContent = "Subscribed to the Newsletter!";
        return true;
      } else {
        message.style.color = "red";
        message.textContent = "Please enter a valid email with an approved domain (e.g., .com, .in)";
        return false;
      }
    } else {
        message.style.color = "red";
        message.textContent = "Please enter a valid email ID";
      return false;
    }
  }
