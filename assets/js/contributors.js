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

document.addEventListener('DOMContentLoaded', function () {
  const contributorsContainer = document.getElementById('contributors');

  async function fetchRepoStats() {
      try {
          const response = await fetch('https://api.github.com/repos/ayush-that/FinVeda');
          return await response.json();
      } catch (error) {
          console.error('Error fetching repository stats:', error);
          return {};
      }
  }

  async function fetchContributors() {
      try {
          let page = 1;
          const perPage = 100;
          let totalContributors = [];

          while (true) {
              const response = await fetch(`https://api.github.com/repos/ayush-that/FinVeda/contributors?per_page=${perPage}&page=${page}`);
              const contributors = await response.json();

              if (contributors.length === 0) break;

              totalContributors = totalContributors.concat(contributors);
              page++;
          }

          totalContributors.forEach(contributor => {
              const contributorCard = document.createElement('a');
              contributorCard.href = contributor.html_url;
              contributorCard.target = '_blank';
              contributorCard.className = 'contributor-card';
              contributorCard.innerHTML = `
                  <img src="${contributor.avatar_url}" alt="${contributor.login}">
                  <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">${contributor.login}</h2>
                  <p class="text-gray-700 dark:text-gray-400">Contributions: ${contributor.contributions}</p>
                  <p class="text-gray-700 dark:text-gray-400 flex-center"><i class="fab fa-github mr-1"></i> GitHub Profile</p>
              `;
              contributorsContainer.appendChild(contributorCard);
          });

          // Get repository stats
          const repoStats = await fetchRepoStats();
          const totalContributions = totalContributors.reduce((sum, c) => sum + c.contributions, 0);

          // Call renderStats with the prepared data
          renderStats({
              totalContributions,
              stargazers_count: repoStats.stargazers_count,
              forks_count: repoStats.forks_count
          }, totalContributors.length);
      } catch (error) {
          console.error('Error fetching contributors:', error);
      }
  }

  fetchContributors();
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

document.getElementById("copyright-year").textContent = new Date().getFullYear();

// Render stats
function renderStats(repoStats, contributorsCount) {
  const statsGrid = document.getElementById('statsGrid');
  const stats = [
      { label: 'Contributors', value: contributorsCount, icon: 'users' },
      { label: 'Total Contributions', value: repoStats.totalContributions || 0, icon: 'git-commit' },
      { label: 'GitHub Stars', value: repoStats.stargazers_count || 0, icon: 'star' },
      { label: 'Forks', value: repoStats.forks_count || 0, icon: 'git-branch' }
  ];

  statsGrid.innerHTML = stats.map(stat => `
      <div class="contributor-stat-card">
          <div class="contributor-icon">${getIcon(stat.icon)}</div>
          <h3>${stat.value}</h3>
          <p>${stat.label}</p>
      </div>
  `).join('');
}


// Function to get icons (ensure this is defined)
function getIcon(iconName) {
  // Placeholder implementation; replace with actual icon logic
  return `<i class="icon-${iconName}"></i>`;
}


function getIcon(iconName) {
  switch (iconName) {
      case 'users':
          return '<i class="fas fa-users"></i>'; // Font Awesome Users Icon
      case 'git-commit':
          return '<i class="fas fa-clipboard-check"></i>'; // Font Awesome Contributions Icon
      case 'star':
          return '<i class="fas fa-star"></i>'; // Font Awesome Star Icon
      case 'git-branch':
          return '<i class="fas fa-code-branch"></i>'; // Font Awesome Forks Icon
      default:
          return ''; // Fallback for unknown icons
  }
}

