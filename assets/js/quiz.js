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
    //explaination to each answers
    const explain = {
        q1: "The correct answer is B. To track income and expenses. Creating a budget helps in tracking where your money comes from and where it goes.",
        q2: "The correct answer is C. It covers unexpected expenses. An emergency fund provides a financial safety net for unexpected expenses like medical emergencies or car repairs.",
        q3: "The correct answer is C. Payment history and debt utilization. A credit score is primarily based on your history of paying bills on time and how much of your available credit you're using.",
        q4: "The correct answer is B. It increases debt exponentially. Compound interest on debt means you'll be charged interest on both the initial principal and the accumulated interest, leading to rapid debt growth.",
        q5: "The correct answer is B. To minimize risk. Diversification involves spreading your investments across different assets to reduce the impact of any single investment's performance on your overall portfolio.",
        q6: "The correct answer is B. Ownership in a company. A stock represents ownership in a corporation, entitling the stockholder to a share of the company's assets and profits.",
        q7: "The correct answer is C. Compounding can work over a longer period. Starting to save for retirement early allows your investments to grow over time through compounding, potentially resulting in a larger retirement nest egg.",
        q8: "The correct answer is A. Contribution limits. A 401(k) typically has higher contribution limits than an IRA, allowing you to save more money for retirement on a tax-deferred basis.",
        q9: "The correct answer is C. It protects against medical costs. Health insurance helps cover medical expenses, reducing the financial burden of unexpected healthcare needs.",
        q10: "The correct answer is C. Death benefit to beneficiaries. Life insurance provides a lump-sum payment to designated beneficiaries upon the insured person's death, providing financial protection to loved ones."
    };
    
    let score = 0;
    let explanations = "";

    for (const question in answers) {
        const selectedAnswer = document.querySelector(`input[name=${question}]:checked`);

        if (selectedAnswer) {
            const userAnswer = selectedAnswer.value;
            if (userAnswer === answers[question]) {
                score++;
                //added green color
                explanations += `<strong style="color: #2ecc71">${question.toUpperCase()}: Correct!</strong>`;
            } else {
                // added colors and explanation
                explanations += `<p style="color: red"> <strong>${question.toUpperCase()}: Incorrect.</strong><span style="color:green">${explain[question]}</span></p>`;
            }
        }
    }

    const resultElement = document.getElementById('quizResult');
    resultElement.innerHTML = `<h3>Quiz Result:</h3>
                               <p>You scored ${score} out of ${Object.keys(answers).length}.</p>
                               <p>Explanations of Answers:</p>
                               <ul>${explanations}</ul>`;
    // quiz section reset after clicking submit
    document.querySelector('#financeQuizForm').reset()
}
