const repoOwner = "ayush-that";  // Repository owner for FinVeda
const repoName = "FinVeda";      // Repository name for FinVeda

// URLs to fetch data
const contributorsUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contributors`;
const repoUrl = `https://api.github.com/repos/${repoOwner}/${repoName}`;

async function fetchContributorData() {
  try {
    // Fetch all contributors with pagination
    const contributors = await fetchAllContributors();

    // Fetch repository data (stars, forks, etc.)
    const repoRes = await fetch(repoUrl);
    const repoData = await repoRes.json();

    // Render stats
    renderStats(repoData, contributors);

    // Render contributors
    renderContributors(contributors);

    // Apply mouse effect to cards
    applyMouseEffectToCards();

  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Fetch all contributors across pages
async function fetchAllContributors() {
  let contributors = [];
  let page = 1;
  let response;

  do {
    response = await fetch(`${contributorsUrl}?page=${page}&per_page=100`);
    const contributorsData = await response.json();
    contributors.push(...contributorsData);
    page++;
  } while (response.headers.get('link') && response.headers.get('link').includes('rel="next"')); // Check for next page

  return contributors;
}

function animateCount(element, target, duration = 1000) {
  let start = 0;
  const increment = target / (duration / 16);  // Calculates increment 
  
  function updateCount() {
    start += increment;
    if (start < target) {
      element.innerText = Math.floor(start);
      requestAnimationFrame(updateCount);
    } else {
      element.innerText = target; // Ensure final value is exact
    }
  }
  
  updateCount();
}

// Render stats like total contributions, stars, forks, etc.
function renderStats(repoData, contributors) {
  const statsGrid = document.getElementById("statsGrid");

  statsGrid.innerHTML = `
    <div class="contributor-stat-card"><h3 id="contributor-count">${contributors.length}</h3><p>Contributors</p></div>
    <div class="contributor-stat-card"><h3 id="total-contributions">${contributors.reduce((sum, { contributions }) => sum + contributions, 0)}</h3><p>Total Contributions</p></div>
    <div class="contributor-stat-card"><h3 id="stars-count">${repoData.stargazers_count}</h3><p>GitHub Stars</p></div>
    <div class="contributor-stat-card"><h3 id="forks-count">${repoData.forks_count}</h3><p>Forks</p></div>
  `;
   // Apply counting animation to each stat
  animateCount(document.getElementById("contributor-count"), contributors.length);
  animateCount(document.getElementById("total-contributions"), contributors.reduce((sum, { contributions }) => sum + contributions, 0));
  animateCount(document.getElementById("stars-count"), repoData.stargazers_count);
  animateCount(document.getElementById("forks-count"), repoData.forks_count);
}

// Render the list of contributors
function renderContributors(contributors) {
  const contributorsContainer = document.getElementById("contributors");

  contributorsContainer.innerHTML = contributors.map(({ login, contributions, avatar_url, html_url }) => `
    <div class="contributor-card" style="--clr:#5affe7">
      <img src="${avatar_url}" alt="${login}'s avatar">
      <p><strong>${login}</strong></p>
      <p>Contributions: ${contributions}</p>
      <a href="${html_url}" target="_blank">GitHub Profile</a>
    </div>
  `).join('');
}

// Apply mouse effect on the contributor cards
function applyMouseEffectToCards() {
  const cards = document.querySelectorAll('.contributor-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--x', x + 'px');
      card.style.setProperty('--y', y + 'px');
    });
  });
}

// Call the function to fetch and display data
fetchContributorData();

// Initialize the page when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  // Your initialization code here if needed
});
