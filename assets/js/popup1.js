// Show the pop-up automatically when the page loads
window.onload = function() {
    document.getElementById('popup').style.display = 'flex';
};

// Close the pop-up when the user clicks the close button or anywhere outside the pop-up content
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

document.getElementById('popup').addEventListener('click', function(event) {
    if (event.target === document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';
    }
});

// Handle form submission
document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    if (email) {
        alert(`Thank you! A welcome email has been sent to ${email}`);
        document.getElementById('popup').style.display = 'none';
    }
});
