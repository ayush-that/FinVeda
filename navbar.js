const mobileMenu = document.querySelector(".mobile-menu");
const mobileTrigger = document.querySelector(".mobile-menu__trigger");
const overlay = document.querySelector(".overlay");
const navbar = document.querySelector(".navbar-collapse");
const navLinks = document.querySelectorAll(".navbar-nav .nav-item a");

// Handle Mobile Menu Toggle
mobileTrigger.addEventListener("click", () => {
  mobileMenu.classList.toggle("mobile-menu_open");
  overlay.style.visibility = mobileMenu.classList.contains("mobile-menu_open") ? "visible" : "hidden";
});

overlay.addEventListener("click", () => {
  mobileMenu.classList.remove("mobile-menu_open");
  overlay.style.visibility = "hidden";
});

// Scroll Event Logic for Navbar
window.addEventListener("scroll", () => {
  const isDarkMode = document.body.classList.contains("dark-mode");

  if (window.scrollY > 50) {
    navbar.style.backgroundColor = isDarkMode ? "#1a1c29" : "#3a90dc";
    navLinks.forEach(link => (link.style.color = isDarkMode ? "#ffffff" : "#000000"));
  } else {
    navbar.style.backgroundColor = isDarkMode ? "#222" : "#2b2d42";
    navLinks.forEach(link => (link.style.color = isDarkMode ? "#edf2f4" : "#000000"));
  }
});

// Theme Toggle Logic
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;
const currentTheme = localStorage.getItem("theme") || "light";

// Set the initial theme
if (currentTheme === "dark") {
  body.classList.add("dark-mode");
} else {
  body.classList.remove("dark-mode");
}

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const newTheme = body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", newTheme); // Save theme preference
});
