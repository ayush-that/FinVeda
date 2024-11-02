// For the headings of blog in blog cards (grid) on blog and main page
document.addEventListener('DOMContentLoaded', () => {
  const reviewTexts = document.querySelectorAll('.reviewtext');

  // Add CSS for clamped text and Read More button dynamically
  const style = document.createElement('style');
  style.innerHTML = `
      /* Style for truncated text */
      .clamped {
          text-overflow: ellipsis;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
      }

      /* Style for "Read More" button */
      .read-more {
          color: #007bff;
          background: none;
          border: none;
          cursor: pointer;
          padding: 5px;
          font-size: 0.9em;
      }
  `;
  document.head.appendChild(style);

  reviewTexts.forEach(text => {
      // Retrieve computed line height, use parseFloat for non-integer values, with fallback to 20px if undefined
      let lineHeight = parseFloat(window.getComputedStyle(text).lineHeight) || 20;

      // Calculate max height for 3 lines
      const maxHeight = lineHeight * 3;

      // Check if text needs truncating (only applies if content height exceeds maxHeight)
      if (text.scrollHeight > maxHeight) {
          // Apply clamping for WebKit browsers
          text.style.height = `${maxHeight}px`;
          text.style.overflow = 'hidden';

          // Cross-browser compatible text truncation with ellipsis
          if (CSS.supports('-webkit-line-clamp', '3')) {
              text.style.display = '-webkit-box';
              text.style.webkitLineClamp = '3';
              text.style.webkitBoxOrient = 'vertical';
          } else {
              // Non-WebKit fallback: truncate text to character limit with ellipsis
              const maxChars = 100; // Adjust character limit as needed
              if (text.textContent.length > maxChars) {
                  text.textContent = text.textContent.slice(0, maxChars) + '...';
              }
          }

          // Add a "Read More" button to redirect to the full post
          const readMore = document.createElement('button');
          readMore.textContent = 'Read more';
          readMore.className = 'read-more';
          readMore.setAttribute('aria-label', 'Read more about this review');

          // Set the URL to redirect to when "Read More" is clicked
          const redirectUrl = text.getAttribute('data-url') || '/finance.html';// Replace with the actual URL of the full post

          // Redirect to the specified URL when the button is clicked
          readMore.addEventListener('click', () => {
            window.location.href = redirectUrl;
          });

          text.parentNode.insertBefore(readMore, text.nextSibling);
      }
  });
});