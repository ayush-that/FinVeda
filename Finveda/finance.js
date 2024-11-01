document.getElementById('postForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const postContent = document.getElementById('postContent').value;
  if (postContent.trim() === '') return;

  const postContainer = document.getElementById('posts');
  const newPost = document.createElement('div');
  newPost.classList.add('post');
  newPost.textContent = postContent;

  postContainer.appendChild(newPost);
  document.getElementById('postContent').value = ''; // Clear the textarea
});
// Array of video course data
const courses = [
  {
    title: "Introduction to Finance and Accounting",
    url: "https://www.youtube.com/watch?v=kdd4SmNfZVk",
    duration: "2:30 hours"
  },
  {
    title: "Understanding Financial Statements",
    url: "https://www.youtube.com/watch?v=7Y2nLfn1M2E",
    duration: "1:45 hours"
  },
  {
    title: "Basics of Investment",
    url: "https://www.youtube.com/watch?v=RgT_KxfpItg",
    duration: "1:20 hours"
  },
  {
    title: "Personal Finance 101",
    url: "https://www.youtube.com/watch?v=bk-x9LHzl90",
    duration: "3:00 hours"
  },
  {
    title: "Introduction to Corporate Finance",
    url: "https://www.youtube.com/watch?v=SnfDF7fRIaM",
    duration: "2:10 hours"
  }
];

// Function to render video courses
function renderCourses() {
  const videoCoursesContainer = document.getElementById("video-courses");

  courses.forEach(course => {
    const courseItem = document.createElement("div");
    courseItem.className = "course-item";

    const courseLink = document.createElement("a");
    courseLink.className = "course-title";
    courseLink.href = course.url;
    courseLink.textContent = course.title;
    courseLink.target = "_blank";

    const courseDuration = document.createElement("span");
    courseDuration.className = "course-duration";
    courseDuration.textContent = course.duration;

    courseItem.appendChild(courseLink);
    courseItem.appendChild(courseDuration);

    videoCoursesContainer.appendChild(courseItem);
  });
}

// Show the button when the user scrolls down 100px from the top of the page
window.onscroll = function() {
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.style.display = "block";
} else {
    scrollToTopBtn.style.display = "none";
}
};

// Smooth scroll to the top when the button is clicked
function scrollToTop() {
window.scrollTo({ top: 0, behavior: 'smooth' });
}


// Call the function to render courses on page load
window.onload = renderCourses;
