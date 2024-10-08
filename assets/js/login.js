 function openModal() {
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
      }
      function closeModal() {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
      }
      window.onclick = function (event) {
        var modal = document.getElementById("myModal");
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
      
      document.addEventListener("DOMContentLoaded", function () {
        const registerModal = document.getElementById("registerModal");
        const loginModal = document.getElementById("myModal");
        const registerLink = document.getElementById("registerLink");
        const loginLink = document.getElementById("loginLink");

        registerLink.addEventListener("click", function (event) {
          event.preventDefault();
          loginModal.style.display = "none";
          registerModal.style.display = "block";
        });

        loginLink.addEventListener("click", function (event) {
          event.preventDefault();
          registerModal.style.display = "none";
          loginModal.style.display = "block";
        });

        registerModal.querySelector(".close").addEventListener("click", function () {
          registerModal.style.display = "none";
        });

        loginModal.querySelector(".close").addEventListener("click", function () {
          loginModal.style.display = "none";
        });
      });

      function togglePasswordVisibility(inputId) {
        const input = document.getElementById(inputId);
        const iconShow = input.nextElementSibling.querySelector(".fa-regular.fa-eye");
        const iconHide = input.nextElementSibling.querySelector(".fa-solid.fa-eye-slash");

        if (input.type === "password") {
          input.type = "text";
          iconShow.style.display = "none";
          iconHide.style.display = "inline";
        } else {
          input.type = "password";
          iconShow.style.display = "inline";
          iconHide.style.display = "none";
        }
      }

      document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;
        const errorDiv = document.getElementById("login-error");

        if (!email || !password) {
          errorDiv.textContent = "Please fill out all fields.";
        } else {
          errorDiv.textContent = "";
          // Submit the form
          this.submit();
        }
      });

      document.getElementById("registerForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("register-email").value;
        const username = document.getElementById("register-username").value;
        const password = document.getElementById("register-password").value;
        const terms = document.getElementById("register-terms").checked;
        const errorDiv = document.getElementById("register-error");

        if (!email || !username || !password || !terms) {
          errorDiv.textContent = "Please fill out all fields and accept the terms and conditions.";
        } else {
          errorDiv.textContent = "";
          // Submit the form
          this.submit();
        }
      });
    