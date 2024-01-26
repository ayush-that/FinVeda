function gradeQuiz() {
    const answers = {
        q1: "B", // Correct answer: B. To track income and expenses
        q2: "C", // Correct answer: C. It covers unexpected expenses
        q3: "C", // Correct answer: C. Payment history and debt utilization
        q4: "B", // Correct answer: B. It increases debt exponentially
        q5: "B", // Correct answer: B. To minimize risk
        q6: "B", // Correct answer: B. Ownership in a company
        q7: "C", // Correct answer: C. Compounding can work over a longer period
        q8: "A", // Correct answer: A. Contribution limits
        q9: "C", // Correct answer: C. It protects against medical costs
        q10: "C" // Correct answer: C. Death benefit to beneficiaries
    };

    let score = 0;
    let explanations = "";

    for (const question in answers) {
        const selectedAnswer = document.querySelector(`input[name=${question}]:checked`);

        if (selectedAnswer) {
            const userAnswer = selectedAnswer.value;
            if (userAnswer === answers[question]) {
                score++;
                explanations += `<li>${question}: Correct!</li>`;
            } else {
                explanations += `<li>${question}: Incorrect.</li>`;
            }
        }
    }

    const resultElement = document.getElementById('quizResult');
    resultElement.innerHTML = `<h3>Quiz Result:</h3>
                               <p>You scored ${score} out of ${Object.keys(answers).length}.</p>
                               <p>Explanations of Answers:</p>
                               <ul>${explanations}</ul>`;
}
