function gradeQuiz() {
  const answers = {
    Q1: "B", // Correct answer: B. To track income and expenses
    Q2: "C", // Correct answer: C. It covers unexpected expenses
    Q3: "C", // Correct answer: C. Payment history and debt utilization
    Q4: "B", // Correct answer: B. It increases debt exponentially
    Q5: "B", // Correct answer: B. To minimize risk
    Q6: "B", // Correct answer: B. Ownership in a company
    Q7: "C", // Correct answer: C. Compounding can work over a longer period
    Q8: "A", // Correct answer: A. Contribution limits
    Q9: "C", // Correct answer: C. It protects against medical costs
    Q10: "C", // Correct answer: C. Death benefit to beneficiaries
  };

  let score = 0;
  let explanations = "";

  for (const question in answers) {
    const selectedAnswer = document.querySelector(
      `input[name=${question}]:checked`
    );

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

  const resultElement = document.getElementById("quizResult");
  resultElement.innerHTML = `<h3>Quiz Result:</h3>
                               <p>You scored ${score} out of ${
    Object.keys(answers).length
  }.</p>
                               <p>Explanations of Answers:</p>
                               <ul>${explanations}</ul>`;
}
