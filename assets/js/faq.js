document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const icon = question.querySelector('.faq-icon');

        question.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const isActive = answer.classList.contains('show');

            // Close all open answers
            document.querySelectorAll('.faq-answer').forEach(answer => {
                answer.classList.remove('show');
                answer.style.maxHeight = '0'; // Hide immediately
                answer.style.opacity = '0'; // Fade out
                answer.style.padding = '0'; // Reduce padding
            });
            document.querySelectorAll('.faq-icon').forEach(icon => {
                icon.textContent = '+'; // Reset all icons to "+"
            });
            // Toggle the clicked answer
            if (!isActive) {
                answer.style.display = 'block'; // Ensure display is block to apply transition
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        answer.classList.add('show'); // Add class for transition
                        answer.style.maxHeight = '1000px'; // Allow height to adjust to content
                        answer.style.opacity = '1'; // Fade in
                        answer.style.padding = '10px 20px'; // Restore padding
                    });
                });
                icon.textContent = '-';
            } else {
                icon.textContent = '+';
            }
        });
    });
});
