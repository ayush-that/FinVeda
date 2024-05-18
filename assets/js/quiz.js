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

    const explanationsText = {
        q1: "The correct answer is B. To track income and expenses helps in managing personal finance efficiently.",
        q2: "The correct answer is C. An emergency fund covers unexpected expenses.",
        q3: "The correct answer is C. Payment history and debt utilization are crucial factors in your credit score.",
        q4: "The correct answer is B. Compound interest can increase debt exponentially if not managed.",
        q5: "The correct answer is B. Diversification in investments helps to minimize risk.",
        q6: "The correct answer is B. Stocks represent ownership in a company.",
        q7: "The correct answer is C. Compounding can significantly grow your investment over a longer period.",
        q8: "The correct answer is A. Contribution limits are a key feature of retirement accounts.",
        q9: "The correct answer is C. Health insurance protects against high medical costs.",
        q10: "The correct answer is C. Life insurance provides a death benefit to beneficiaries."
    };

    let score = 0;
    let explanations = "";

    for (const question in answers) {
        const selectedAnswer = document.querySelector(`input[name=${question}]:checked`);

        if (selectedAnswer) {
            const userAnswer = selectedAnswer.value;
            if (userAnswer === answers[question]) {
                score++;
                explanations += `<li>${question.toUpperCase()}: Correct!</li>`;
            } else {
                explanations += `<li style="color:red">${question.toUpperCase()}: Incorrect. ${explanationsText[question]}</li>`;
            }
        } else {
            explanations += `<li style="color:grey">${question.toUpperCase()}: Incomplete. ${explanationsText[question]}</li>`;
        }
    }

    const resultElement = document.getElementById('quizResult');
    resultElement.innerHTML = `<h3>Quiz Result:</h3>
                               <p>You scored ${score} out of ${Object.keys(answers).length}.</p>
                               <p>Explanations of Answers:</p>
                               <ul>${explanations}</ul>`;
}
