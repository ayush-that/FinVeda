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

 window.onscroll = function () {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
  };

  const next = document.getElementById('nextButton');
  const prev = document.getElementById('prevButton');

function getCurrentIndex(id) {
const match = id.match(/\d+$/); // Extract the number from the ID
return match ? parseInt(match[0], 10) : -1;
}

function getIdWithIndex(index) {
// Format index to match ID format with leading zeros
return `slick-slide-control${index.toString().padStart(2, '0')}`;
}

function getNextId(currentId) {
// Decrease 1 from the total count
const total = document.getElementsByClassName("slick-dots")[0].children.length  -1; //Since the counting starts from 1
let index = getCurrentIndex(currentId);
index = (index + 1) % (total + 1); // Wrap around to 0 after the max
return getIdWithIndex(index);
}

function getPrevId(currentId) {
// Decrease 1 from the total count
const total = document.getElementsByClassName("slick-dots")[0].children.length  -1; //Since the counting starts from 1
let index = getCurrentIndex(currentId);
index = (index - 1 + (total + 1)) % (total + 1); // Wrap around to max
return getIdWithIndex(index);
}


  prev.addEventListener('click', function() {

  stuffs = document.getElementsByClassName("slick-active")
  last = stuffs.length - 1

  const currentId = stuffs[last].children[0].getAttribute('id');;
  const prevId = getPrevId(currentId);
      
  const targetButton = document.getElementById(prevId);
      targetButton.click();
  }); 
  
  
  next.addEventListener('click', function() {
    
  stuffs = document.getElementsByClassName("slick-active")
  last = stuffs.length - 1

  const currentId = stuffs[last].children[0].getAttribute('id');;
    const nextID = getNextId(currentId);
        
     const targetButton = document.getElementById(nextID);
        targetButton.click();
    }); 

 document.addEventListener('DOMContentLoaded', () => {
      const feedbackForm = document.getElementById('feedback-form');
      const successNotif = document.getElementById('successnotification');
      const closeSuccess = document.getElementById('closeSuccessNotification');
      
      // Show success notification and reset form
      feedbackForm.addEventListener('submit', (event) => {
          event.preventDefault(); // Prevent form submission
  
          // Check if all fields are filled out (validation)
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const comments = document.getElementById('comments').value;
          const ratingChecked = document.querySelector('input[name="rating"]:checked');
          
          if (name === '' || email === '' || !ratingChecked || comments === '') {
            return;
          }
          
          // Display the success notification
          successNotif.style.display = 'flex';
          
          // Reset the form after 2 seconds
          setTimeout(() => {
            feedbackForm.reset();
            successNotif.style.display = 'none';
          }, 2000);
        });
  
        // Close the notification manually
        closeSuccess.addEventListener('click', () => {
          successNotif.style.display = 'none';
        });
        
      // Handle emoji descriptions
      const emojis = document.querySelectorAll('.emojis input');
      const descriptions = [
          "Very Bad",
          "Bad",
          "Neutral",
          "Good",
          "Excellent"
        ];
        
        emojis.forEach((emoji, index) => {
          emoji.addEventListener('change', () => {
            document.getElementById('emoji-description').textContent = descriptions[index];
          });
        });
      });
  
document.addEventListener("DOMContentLoaded", () => {
      const counters = document.querySelectorAll('.counter');

      counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            
            const speed = 500;
            const increment = target / speed;

            if (count < target) {
              counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 40);
              } else {
                counter.innerText = target;
              }
            };

            updateCount();
          });

          // Separate function for the Likes counter
          const likesCounter = document.querySelector('.counter-likes');
          const updateLikesCount = () => {
          const target = +likesCounter.getAttribute('data-target');
          const count = +likesCounter.innerText;
          
          const speed = 5000;
          const increment = target / speed;
          
          if (count < target) {
            likesCounter.innerText = Math.ceil(count + increment);
              setTimeout(updateLikesCount, 900);
            } else {
              likesCounter.innerText = target;
            }
      };
      updateLikesCount();
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

      
function toggleDropdown(show) {
  const dropdownMenu = document.querySelector('.dropdown-menu');
  if (show) {
    dropdownMenu.style.display = 'block';
  } else {
    dropdownMenu.style.display = 'none';
  }
}
  