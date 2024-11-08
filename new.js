// Function to initialize theme based on localStorage
function initializeTheme() {
  const body = document.body;
  const toggleButton = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme");

  // Apply saved theme
  if (currentTheme === "dark") {
    body.classList.add("dark-mode");
    toggleButton.classList.add("dark");
    toggleButton.querySelector("span").textContent = "🌙"; // Dark mode icon
  } else {
    toggleButton.querySelector("span").textContent = "🌞"; // Light mode icon
  }
}

// Call initializeTheme on page load
document.addEventListener("DOMContentLoaded", () => {
  initializeTheme();

  const toggleButton = document.getElementById("theme-toggle");
  const body = document.body;

  // Event listener for theme toggle
  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    toggleButton.classList.toggle("dark");

    // Update icon and save theme
    if (body.classList.contains("dark-mode")) {
      toggleButton.querySelector("span").textContent = "🌙"; // Dark mode icon
      localStorage.setItem("theme", "dark");
    } else {
      toggleButton.querySelector("span").textContent = "🌞"; // Light mode icon
      localStorage.setItem("theme", "light");
    }

    loadShow(); // Call any additional function if needed
  });
});

// Function placeholder for additional operations (if needed)
function loadShow() {
  // Additional actions can go here
}

function filterFAQs() {
  const searchInput = document
    .getElementById("faq-search-input")
    .value.toLowerCase();
  const faqs = document.querySelectorAll(".accordion-item");

  faqs.forEach((faq) => {
    const question = faq
      .querySelector(".accordion-button")
      .textContent.toLowerCase();
    const answer = faq
      .querySelector(".accordion-body")
      .textContent.toLowerCase();

    // Display the FAQ item only if the search term matches either the question or answer
    if (question.includes(searchInput) || answer.includes(searchInput)) {
      faq.style.display = "block";
    } else {
      faq.style.display = "none";
    }
  });
}

// Function for the contributors section
const owner = "ayush-that";
const repo = "FinVeda";
const contributorsPerPage = 8;
let contributors = [];
let currentPage = 1;

async function fetchContributors() {
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contributors`
  );
  if (!response.ok) {
    console.error("Failed to fetch contributors:", response.statusText);
    return;
  }
  contributors = await response.json();
  displayContributors();
  createPaginationButtons();
}

function displayContributors() {
  const container = document.getElementById("contributor-cards");
  container.innerHTML = "";
  const start = (currentPage - 1) * contributorsPerPage;
  const end = start + contributorsPerPage;
  const currentContributors = contributors.slice(start, end);

  currentContributors.forEach((contributor) => {
    const card = document.createElement("div");
    card.className = "contributor-member";
    card.setAttribute("data-tilt", "");

    const img = document.createElement("img");
    img.src = contributor.avatar_url;
    img.alt = contributor.login;

    const name = document.createElement("h3");
    name.textContent = contributor.login;

    const contributions = document.createElement("p");
    contributions.textContent = `${contributor.contributions} contributions`;

    const viewProfileButton = document.createElement("button");
    viewProfileButton.textContent = "View Profile";
    viewProfileButton.addEventListener("click", () => {
      window.open(contributor.html_url, "_blank");
    });

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(contributions);
    container.appendChild(card);
    card.appendChild(viewProfileButton);
  });
}

function createPaginationButtons() {
  const paginationContainer = document.getElementById("pagination");
  paginationContainer.innerHTML = "";
  const totalPages = Math.ceil(contributors.length / contributorsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.classList.add("pagination-button");
    if (i === currentPage) {
      button.classList.add("active");
    }
    button.addEventListener("click", () => {
      currentPage = i;
      displayContributors();
      updatePaginationButtons();
    });
    paginationContainer.appendChild(button);
  }
}

function updatePaginationButtons() {
  const buttons = document.querySelectorAll(".pagination-button");
  buttons.forEach((button) => {
    button.classList.remove("active");
    if (parseInt(button.textContent) === currentPage) {
      button.classList.add("active");
    }
  });
}

fetchContributors();
