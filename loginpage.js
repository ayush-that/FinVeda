// Registration functionality
document.querySelector(".sign-up-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.querySelector(".sign-up-form input[type='text']").value;
    const email = document.querySelector(".sign-up-form input[type='email']").value;
    const password = document.getElementById("password-input-signup").value;
  
    // Check if user already exists
    if (localStorage.getItem(username)) {
      alert("Username already exists. Please choose a different one.");
    } else {
      // Save user data in local storage
      const userData = { username, email, password };
      localStorage.setItem(username, JSON.stringify(userData));
  
      alert("🎉 User successfully registered!");
       // Redirect to index.html
       window.location.href = "loginpage.html";
    }
  });
  
  let generatedOtp = "";

// Function to generate and display OTP
function generateAndSendOTP() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    // Generate a 6-digit OTP
    generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    alert(`Your OTP is: ${generatedOtp}`); // Display OTP for testing (replace with SMS or email in production)
    
    // Show the OTP input section
    document.getElementById("otp-section").style.display = "block";
  } else {
    alert("Please enter a valid username and password.");
  }
}

// Function to verify the OTP entered by the user
function verifyOTP() {
  const userOtp = document.getElementById("otp").value;

  if (userOtp === generatedOtp) {
    alert("OTP verified! Login successful.");
    window.location.href = "homepage.html"; // Redirect to the dashboard
  } else {
    alert("Invalid OTP. Please try again.");
  }
}

  // Login functionality
  document.querySelector(".sign-in-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.querySelector(".sign-in-form input[type='text']").value;
    const password = document.getElementById("password-input").value;
    
    // Retrieve user data from local storage
    const storedUserData = localStorage.getItem(username);
    
    if (!storedUserData) {
      alert("User not found. Please register first.");
      return;
    }
  
    const { password: storedPassword } = JSON.parse(storedUserData);
  
    // Validate password
    if (password === storedPassword) {
      alert("🔓 User logged in successfully!");

  
      // Save logged-in status
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("currentUser", username);
  
      // Redirect to index.html
      window.location.href = "index.html";
    } else {
      alert("Incorrect password. Please try again.");
    }
  });
  