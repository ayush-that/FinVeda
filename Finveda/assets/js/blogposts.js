//for the headings of blog in blog cards (grid) on blog and main page
document.addEventListener('DOMContentLoaded', () => {
    const reviewTexts = document.querySelectorAll('.reviewtext');
    
    reviewTexts.forEach(text => {
      const lineHeight = parseInt(window.getComputedStyle(text).lineHeight);
      const maxHeight = lineHeight * 3;
      if (text.scrollHeight > maxHeight) {
        text.style.height = `${maxHeight}px`;
        text.style.overflow = 'hidden';
        text.style.display = '-webkit-box';
        text.style.webkitLineClamp = '3';
        text.style.webkitBoxOrient = 'vertical';
      }
    });
  });