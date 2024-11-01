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
  