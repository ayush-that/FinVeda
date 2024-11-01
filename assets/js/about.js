window.onscroll = function () {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("progressBar").style.width = scrolled + "%";
      };

      document.addEventListener("DOMContentLoaded", function () {
        const coords = { x: 0, y: 0 };
        const circles = document.querySelectorAll(".circle");
    
        circles.forEach(function (circle) {
          circle.x = 0;
          circle.y = 0;
        });
    
        window.addEventListener("mousemove", function (e) {
          coords.x = e.pageX;
          coords.y = e.pageY - window.scrollY; // Adjust for vertical scroll position
        });
    
        function animateCircles() {
          let x = coords.x;
          let y = coords.y;
    
          circles.forEach(function (circle, index) {
            circle.style.left = `${x - 12}px`;
            circle.style.top = `${y - 12}px`;
            circle.style.transform = `scale(${(circles.length - index) / circles.length})`;
    
            const nextCircle = circles[index + 1] || circles[0];
            circle.x = x;
            circle.y = y;
    
            x += (nextCircle.x - x) * 0.3;
            y += (nextCircle.y - y) * 0.3;
          });
    
          requestAnimationFrame(animateCircles);
        }
    
        animateCircles();
      });

      document.getElementById('unique-subscribe-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally
    
        // Show popup message
        var messageDiv = document.getElementById('unique-message');
        messageDiv.style.display = 'block';
        
        // Reset existing animation
        var borderAnimationDiv = messageDiv.querySelector('.border-animation');
        borderAnimationDiv.style.animation = 'none';
        borderAnimationDiv.offsetHeight; // Trigger reflow to restart the animation
        borderAnimationDiv.style.animation = 'borderAnimation 3s linear forwards';
    
        // Hide popup message after 10 seconds
        setTimeout(function() {
          messageDiv.style.display = 'none';
        }, 3000); // 10 seconds
    
        // Reset form
        this.reset();
      });

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

      