// Get elements
const loginModal = document.getElementById('myModal');
const registerModal = document.getElementById('registerModal');
const loginBtn = document.getElementById('loginBtn');
const registerLink = document.getElementById('registerLink');
const loginLink = document.getElementById('loginLink');
const closeBtns = document.querySelectorAll('.close');
const popupMessage = document.getElementById('popupMessage'); // Assuming there's a popupMessage element

// Toggle password visibility
document.addEventListener('DOMContentLoaded', () => {
  const togglePasswordButtons = document.querySelectorAll('.toggle-password-btn');

  togglePasswordButtons.forEach(button => {
    button.addEventListener('click', () => {
      const passwordInput = button.previousElementSibling;
      passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
      button.innerHTML = passwordInput.type === 'text' 
        ? `<i class="fa-solid fa-eye-slash"></i>` 
        : `<i class="fa-solid fa-eye"></i>`;
    });
  });
});

// Function to show popup message with updated duration (3 seconds)
function showPopupMessage() {
  popupMessage.style.display = 'block';
  setTimeout(() => popupMessage.style.display = 'none', 3000); // Shows popup for 3 seconds
}

// Function to open modals
function openModal(modal) {
  modal.style.display = 'block';
  document.title = "Login/Register - FinVeda";
}

// Function to close modals
function closeModal() {
  loginModal.style.display = 'none';
  registerModal.style.display = 'none';
  document.title = "FinVeda";
}

// Event listeners for opening modals
registerLink.addEventListener('click', (event) => {
  event.preventDefault();
  openModal(registerModal);
  loginModal.style.display = 'none';
});

loginLink.addEventListener('click', (event) => {
  event.preventDefault();
  openModal(loginModal);
  registerModal.style.display = 'none';
});

// Close modal when clicking 'x'
closeBtns.forEach(btn => btn.addEventListener('click', closeModal));

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
  if (event.target === loginModal || event.target === registerModal) {
    closeModal();
  }
});

// Optimized Circle Animation Logic with Idle Detection
let coords = { x: 0, y: 0 };
let idleTimer = null;
let isAnimating = false;

document.addEventListener('mousemove', (event) => {
  // Only update coordinates if the mouse position changes
  if (coords.x !== event.clientX || coords.y !== event.clientY) {
    coords.x = event.clientX;
    coords.y = event.clientY;
    if (!isAnimating) startAnimation();
    
    // Reset idle timer when the mouse moves
    clearTimeout(idleTimer);
    idleTimer = setTimeout(stopAnimation, 5000); // Stop animation after 5 seconds of inactivity
  }
});

function startAnimation() {
  isAnimating = true;
  requestAnimationFrame(animate);
}

function stopAnimation() {
  isAnimating = false;
}

function animate() {
  if (!isAnimating) return;
  // Animation logic here
  requestAnimationFrame(animate);
}

// Improved Animation Reset Mechanism for Border Animation
function toggleBorderAnimation(element) {
  element.classList.toggle('border-animation'); // Add or remove 'border-animation' class for resetting
}

// Assuming there's an element for border animation reset
const borderAnimationDiv = document.getElementById('borderAnimationDiv');
borderAnimationDiv.addEventListener('animationend', () => {
  toggleBorderAnimation(borderAnimationDiv);
});

// Event Delegation for Expandability
document.body.addEventListener('click', (event) => {
  if (event.target.matches('.expandable-element')) {
    // Handle click event for dynamically added or existing expandable elements
    event.target.classList.toggle('expanded');
  }
});