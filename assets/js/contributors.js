// contributor.js

const repoOwner = "ayush-that";  // Repository owner for FinVeda
const repoName = "FinVeda";      // Repository name for FinVeda

// URLs to fetch data
const contributorsUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contributors`;
const repoUrl = `https://api.github.com/repos/${repoOwner}/${repoName}`;

async function fetchContributorData() {
  try {
    // Fetch both contributors and repository data at the same time
    const [contributorsRes, repoRes] = await Promise.all([
      fetch(contributorsUrl),
      fetch(repoUrl)
    ]);

    // Parse the JSON responses
    const contributors = await contributorsRes.json();
    const repoData = await repoRes.json();

    // Fetch data from GitHub API with pagination
    async function fetchData() {
      try {
        const contributors = [];
        let page = 1;
        let response;

        // Loop to fetch all contributors across multiple pages
        do {
          response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contributors?page=${page}&per_page=100`);
          const contributorsData = await response.json();
          contributors.push(...contributorsData);
          page++;
        } while (response.headers.get('link') && response.headers.get('link').includes('rel="next"')); // Check if there is a "next" page

        const repoResponse = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}`);
        const repoData = await repoResponse.json();

        return { contributors, repoStats: repoData };
      } catch (error) {
        console.error('Error fetching data:', error);
        return { contributors: [], repoStats: {} };
      }
    }

    // Render stats
    function renderStats(repoStats, contributorsCount) {
      const statsGrid = document.getElementById('statsGrid');
      const stats = [
        { label: 'Contributors', value: contributorsCount, icon: 'users' },
        { label: 'Total Contributions', value: repoStats.contributors?.reduce((sum, contributor) => sum + contributor.contributions, 0) || 0, icon: 'git-commit' },
        { label: 'GitHub Stars', value: repoStats.stargazers_count || 0, icon: 'star' },
        { label: 'Forks', value: repoStats.forks_count || 0, icon: 'git-branch' }
      ];

      statsGrid.innerHTML = stats.map(stat => `
        <div class="stat-card">
          <div class="icon">${getIcon(stat.icon)}</div>
          <h3>${stat.value}</h3>
          <p>${stat.label}</p>
        </div>
      `).join('');
    }

    // Render contributors
    function renderContributors(contributors) {
      const contributorsGrid = document.getElementById('contributorsGrid');
      contributorsGrid.innerHTML = contributors.map(contributor => `
        <div class="contributor-card">
          <img src="${contributor.avatar_url}" alt="${contributor.login}">
          <h3>${contributor.login}</h3>
          <p>${contributor.type}</p>
          <div class="contributions">${contributor.contributions} contributions</div>
          <div class="footer">
            <a href="${contributor.html_url}" target="_blank" rel="noopener noreferrer">
              ${getIcon('external-link')}
              View Profile
            </a>
            ${getIcon('github')}
          </div>
        </div>
      `).join('');
    }

    // Helper function to get icons (simplified version)
    function getIcon(name) {
      const icons = {
        'users': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
        'git-commit': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line></svg>',
        'star': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
        'git-branch': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>',
        'external-link': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21  9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>',
        'github': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>'
      };
      return icons[name] || '';
    }

    // Display project stats in a grid
    const statsGrid = document.getElementById("statsGrid");

    statsGrid.innerHTML = `
      <div class="contributor-stat-card"><h3>${contributors.length}</h3><p>Contributors</p></div>
      <div class="contributor-stat-card"><h3>${contributors.reduce((sum, { contributions }) => sum + contributions, 0)}</h3><p>Total Contributions</p></div>
      <div class="contributor-stat-card"><h3>${repoData.stargazers_count}</h3><p>GitHub Stars</p></div>
      <div class="contributor-stat-card"><h3>${repoData.forks_count}</h3><p>Forks</p></div>
    `;

    // Display each contributor's data (avatar, username, and contributions)
    const contributorsContainer = document.getElementById("contributors");
    contributorsContainer.innerHTML = contributors.map(({ login, contributions, avatar_url, html_url }) => `
      <div class="contributor-card" style="--clr:#5affe7">
        <img src="${avatar_url}" alt="${login}'s avatar">
        <p><strong>${login}</strong></p>
        <p>Contributions: ${contributions}</p>
        <a href="${html_url}" target="_blank">GitHub Profile</a>
      </div>
    `).join('');

    // Apply the mouse effect to each contributor card
    applyMouseEffectToCards();

  } catch (error) {
    // Handle any errors that occur during the fetch
    console.error("Error fetching data:", error);
  }
}

// Function to apply the mouse effect to the contributor cards
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
document.addEventListener('DOMContentLoaded', init);
