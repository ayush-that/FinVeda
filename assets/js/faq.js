document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const isActive = answer.style.display === 'block';

            // Close all open answers
            document.querySelectorAll('.faq-answer').forEach(answer => {
                answer.style.display = 'none';
            });

            // Toggle the clicked answer
            if (!isActive) {
                answer.style.display = 'block';
            }
        });
    });
});
