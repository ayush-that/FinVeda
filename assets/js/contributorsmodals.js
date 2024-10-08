var loginModal = document.getElementById('myModal');
    var registerModal = document.getElementById('registerModal');
  
    // Get the button that opens the login modal
    var loginBtn = document.getElementById('loginBtn');
  
    // Get the links that open the register and login modals
    var registerLink = document.getElementById('registerLink');
    var loginLink = document.getElementById('loginLink');
  
    // Get the <span> elements that close the modals
    var closeBtns = document.getElementsByClassName('close');
  
    //show and hide icon button
    document.addEventListener('DOMContentLoaded', () => {
      const togglePasswordButtons = document.querySelectorAll('.toggle-password-btn');
  
      togglePasswordButtons.forEach(button => {
        button.addEventListener('click', () => {
          const passwordInput = button.previousElementSibling;
          if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            button.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`
          } else {
            passwordInput.type = 'password';
            button.innerHTML = `<i class="fa-solid fa-eye"></i>`
          }
        });
      });
    });
  
    // When the user clicks the register link, open the register modal
    registerLink.onclick = function (event) {
      event.preventDefault();
      loginModal.style.display = 'none';
      registerModal.style.display = 'block';
    }
  
    // When the user clicks the login link, open the login modal
    loginLink.onclick = function (event) {
      event.preventDefault();
      registerModal.style.display = 'none';
      loginModal.style.display = 'block';
    }
  
    // When the user clicks on <span> (x), close the modal
    for (var i = 0; i < closeBtns.length; i++) {
      closeBtns[i].onclick = function () {
        loginModal.style.display = 'none';
        registerModal.style.display = 'none';
      }
    }
  
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == loginModal) {
        loginModal.style.display = 'none';
      }
      if (event.target == registerModal) {
        registerModal.style.display = 'none';
      }
    }