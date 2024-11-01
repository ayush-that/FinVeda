const jobSearchInput = document.getElementById('jobSearch');
const jobsContainer = document.querySelector('.jobs-table tbody'); // Ensure you select the correct tbody
const noResults = document.createElement('p');
noResults.className = 'no-results';
noResults.textContent = 'No jobs found';
noResults.style.display = 'none'; // Hide initially
jobsContainer.parentElement.appendChild(noResults); // Append the "No jobs found" message

// Event listener for input to filter jobs
jobSearchInput.addEventListener('input', function() {
    filterJobs(); // Call filter function on input
});

// Event listener for keydown to capture Enter key
jobSearchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission
        filterJobs(); // Call filter function on Enter key press
    }
});

// Function to filter jobs based on input
function filterJobs() {
    const query = jobSearchInput.value.toLowerCase();
    const jobs = jobsContainer.getElementsByTagName('tr');
    let jobFound = false;

    Array.from(jobs).forEach(function(job) {
        const jobTitle = job.getElementsByTagName('td')[0].textContent.toLowerCase();

        if (jobTitle.includes(query)) {
            job.style.display = ''; // Show job row if it matches
            jobFound = true; // At least one job found
        } else {
            job.style.display = 'none'; // Hide job row if it doesn't match
        }
    });

    // Show or hide "No jobs found" message
    noResults.style.display = jobFound ? 'none' : 'block'; // Show message if no jobs match
}
