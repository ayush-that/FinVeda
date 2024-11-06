// Show the pop-up automatically when the page loads
window.onload = function() {
    document.getElementById('popup-nl').style.display = 'flex';
  };

  // Close the pop-up when the user clicks the close button
  document.querySelector('.close-nl').addEventListener('click', function() {
    document.getElementById('popup-nl').style.display = 'none';
  });

  if (localStorage.getItem("noThanksClicked") === "true") {
    document.getElementById('popup-nl').style.visibility = 'hidden';
  }

  // // Close the pop-up when clicking outside the pop-up content
  // window.addEventListener('click', function(event) {
  //   const popupContent = document.querySelector('.popup-content'); // Select the popup content
  //   if (event.target === document.getElementById('popup')) {
  //       document.getElementById('popup').style.display = 'none';
  //   }
  // });

  // Handle form submission
  document.getElementById('emailForm-nl').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email-nl').value;
    if (email) {
      // Call showModal function to display the custom modal with the success message
      showModal(email);
      
      // Hide the popup after submission
      document.getElementById('popup').style.display = 'none';
    }
});

// Show the modal with a custom message
function showModal(email) {
  // Set the modal message content dynamically
  document.getElementById('modalMessage').innerText = `Your email ID ${email} has been registered successfully for the newsletter.`;
  
  // Display the modal
  document.getElementById('customModal').style.display = 'flex';
}

// Close the modal when the close button or "OK" button is clicked
function closeModal() {
  document.getElementById('customModal').style.display = 'none';
}


  // Handle "No thanks" link
  document.querySelector('.no-thanks-nl').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('popup-nl').style.display = 'none';
    localStorage.setItem("noThanksClicked", "true");
  });