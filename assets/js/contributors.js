const repoOwner = "ayush-that";  // Repository owner for FinVeda
const repoName = "FinVeda";      // Repository name for FinVeda

// URLs to fetch data
const contributorsUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contributors`;
const repoUrl = `https://api.github.com/repos/${repoOwner}/${repoName}`;

const contributorsPerPage = 9; // Contributors per page
let currentPage = 1; // Current page

async function fetchContributorData() {
  try {
    // Fetch all contributors with pagination
    const contributors = await fetchAllContributors();

    // Fetch repository data (stars, forks, etc.)
    const repoRes = await fetch(repoUrl);
    const repoData = await repoRes.json();

    // Render stats
    renderStats(repoData, contributors);

    // Render contributors for the current page
    renderContributors(contributors);

    // Render pagination
    renderPagination(contributors);

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

// Render stats like total contributions, stars, forks, etc.
function renderStats(repoData, contributors) {
  const statsGrid = document.getElementById("statsGrid");

  statsGrid.innerHTML = `
    <div class="contributor-stat-card"><h3>${contributors.length}</h3><p>Contributors</p></div>
    <div class="contributor-stat-card"><h3>${contributors.reduce((sum, { contributions }) => sum + contributions, 0)}</h3><p>Total Contributions</p></div>
    <div class="contributor-stat-card"><h3>${repoData.stargazers_count}</h3><p>GitHub Stars</p></div>
    <div class="contributor-stat-card"><h3>${repoData.forks_count}</h3><p>Forks</p></div>
  `;
}

// Render the list of contributors for the current page
function renderContributors(contributors) {
  const contributorsContainer = document.getElementById("contributors");

  const start = (currentPage - 1) * contributorsPerPage;
  const end = start + contributorsPerPage;
  const contributorsToShow = contributors.slice(start, end);

  contributorsContainer.innerHTML = contributorsToShow.map(({ login, contributions, avatar_url, html_url }) => `
    <div class="contributor-card" style="--clr:#5affe7">
      <img src="${avatar_url}" alt="${login}'s avatar">
      <p><strong>${login}</strong></p>
      <p>Contributions: ${contributions}</p>
      <a href="${html_url}" target="_blank">GitHub Profile</a>
    </div>
  `).join('');
}

// Render pagination controls
function renderPagination(contributors) {
  const paginationContainer = document.getElementById('pagination');
  const totalPages = Math.ceil(contributors.length / contributorsPerPage);

  paginationContainer.innerHTML = ''; // Clear existing pagination

  // Create Previous button
  const prevButton = document.createElement('button');
  prevButton.innerText = 'Previous';
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderContributors(contributors);
      renderPagination(contributors);
    }
  });
  paginationContainer.appendChild(prevButton);

  // Determine the range of page numbers to show
  let startPage = Math.max(1, currentPage - 2); // Ensure we don't go below 1
  let endPage = Math.min(totalPages, currentPage + 2); // Ensure we don't go above the total pages

  // Adjust the range if we're near the beginning or end
  if (currentPage <= 3) {
    endPage = Math.min(totalPages, 5); // Show the first 5 pages
  }
  if (currentPage >= totalPages - 2) {
    startPage = Math.max(1, totalPages - 4); // Show the last 5 pages
  }

  // Create page numbers
  for (let i = startPage; i <= endPage; i++) {
    const pageButton = document.createElement('button');
    pageButton.innerText = i;
    pageButton.classList.add('page-button');
    pageButton.disabled = i === currentPage;
    pageButton.addEventListener('click', () => {
      currentPage = i;
      renderContributors(contributors);
      renderPagination(contributors);
    });
    paginationContainer.appendChild(pageButton);
  }

  // Create Next button
  const nextButton = document.createElement('button');
  nextButton.innerText = 'Next';
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderContributors(contributors);
      renderPagination(contributors);
    }
  });
  paginationContainer.appendChild(nextButton);
}


// Apply mouse effect on the contributor cards
function applyMouseEffectToCards() {
  const cards = document.querySelectorAll('.contributor-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', function (e) {
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
