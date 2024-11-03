document.getElementById("editButton").addEventListener("click", function () {
  // Hide the display section
  document.getElementById("profileDisplay").style.display = "none";

  // Show the edit form
  document.getElementById("profileEdit").style.display = "block";
});

document
  .getElementById("profileForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get updated values
    const updatedUsername = document.getElementById("username").value;
    const updatedEmail = document.getElementById("email").value;
    const updatedBio = document.getElementById("bio").value;

    // Update the displayed values
    document.getElementById("displayUsername").textContent = updatedUsername;
    document.getElementById("displayEmail").textContent = updatedEmail;
    document.getElementById("displayBio").textContent = updatedBio;

    // Hide the edit form and show the display section again
    document.getElementById("profileEdit").style.display = "none";
    document.getElementById("profileDisplay").style.display = "flex"; // Show as flex for alignment

    alert("Profile updated successfully!");
  });

// Handle cancel button
document.getElementById("cancelButton").addEventListener("click", function () {
  // Hide the edit form and show the display section again
  document.getElementById("profileEdit").style.display = "none";
  document.getElementById("profileDisplay").style.display = "flex"; // Show as flex for alignment
});

// Handle image upload
document
  .getElementById("imageUpload")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      document.getElementById("profileImage").src = e.target.result; // Update the image src to the new file
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  });
