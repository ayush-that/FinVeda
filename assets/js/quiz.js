// function gradeQuiz() {
//   const answers = {
//     q1: "B", // Correct answer: B. To track income and expenses
//     q2: "C", // Correct answer: C. It covers unexpected expenses
//     q3: "C", // Correct answer: C. Payment history and debt utilization
//     q4: "B", // Correct answer: B. It increases debt exponentially
//     q5: "B", // Correct answer: B. To minimize risk
//     q6: "B", // Correct answer: B. Ownership in a company
//     q7: "C", // Correct answer: C. Compounding can work over a longer period
//     q8: "A", // Correct answer: A. Contribution limits
//     q9: "C", // Correct answer: C. It protects against medical costs
//     q10: "C", // Correct answer: C. Death benefit to beneficiaries
//   };
//   const explanations = {
//     q1: "Creating a budget helps individuals or organizations monitor their financial situation by keeping track of their income and expenses, allowing for better financial planning and management.",
//     q2: "Credit scores are primarily determined by factors such as how consistently you pay your bills on time (payment history) and how much of your available credit you are using (debt utilization), among other factors.",
//     q3: "A credit score is a numerical representation of an individual's creditworthiness, based on their credit history.",
//     q4: "Compound interest causes debt to grow at an accelerating rate because interest is charged not only on the initial principal but also on the accumulated interest from previous periods. This means that over time, the amount of debt can increase significantly if not managed properly.",
//     q5: "Diversification involves spreading investments across different asset classes, sectors, or geographic regions to reduce the impact of any single investment's poor performance on the overall portfolio. This strategy helps to mitigate risk and provides more stable returns over time.",
//     q6: "When you buy a stock, you purchase a share in the ownership of a company, which entitles you to a portion of the company's profits and assets.",
//     q7: "The power of compound interest means that the earlier you start saving, the more time your money has to grow. Compounding allows the interest you earn on your savings to itself earn interest, leading to exponential growth of your retirement funds over time.",
//     q8: "While there are several differences between 401(k)s and IRAs, one of the primary distinctions is the contribution limits. 401(k) plans, which are employer-sponsored, generally have higher annual contribution limits compared to IRAs, which are individual retirement accounts.",
//     q9: "Health insurance helps individuals manage and mitigate the financial burden of medical expenses, including those resulting from unexpected illnesses, accidents, or routine healthcare needs.",
//     q10: "This payment, known as the death benefit, is typically intended to provide financial support to the insured's beneficiaries in the event of their death.",
//   };

//   // let score = 0;
//   // let answerResults = "";
//   let answeredAll = true; // Flag to track if all questions have been answered

//   for (const question in answers) {
//     const selectedAnswer = document.querySelector(`input[name=${question}]:checked`);

//     if (selectedAnswer) {
//       const userAnswer = selectedAnswer.value;
//       if (userAnswer === answers[question]) {
//         score++;
//         answerResults += `<li>${question}: Correct! (${explanations[question]})</li>`;
//       } else {
//         answerResults += `<li>${question}: Incorrect. (${explanations[question]})</li>`;
//       }
//     } else {
//       answeredAll = false; // Set the flag to false if any question remains unanswered
//     }
//   }

//   const resultElement = document.getElementById('quizResult');

//   if (answeredAll) { // Check if all questions have been answered
//     resultElement.innerHTML = `<h3>Quiz Result:</h3>
//                                <p>You scored ${score} out of ${Object.keys(answers).length}.</p>
//                                <p>Explanations of Answers:</p>
//                                <ul>${answerResults}</ul>`;
//   } else {
//     resultElement.innerHTML = `<p style="color: red;">Please answer all questions before submitting.</p>`;
//   }
// }
 
document.addEventListener("DOMContentLoaded", function () {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");

    circles.forEach(function (circle) {
      circle.x = 0;
      circle.y = 0;
    });

    window.addEventListener("mousemove", function (e) {
      coords.x = e.pageX;
      coords.y = e.pageY - window.scrollY; // Adjust for vertical scroll position
    });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach(function (circle, index) {
        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;
        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

        const nextCircle = circles[index + 1] || circles[0];
        circle.x = x;
        circle.y = y;

        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();
  });

  document.getElementById('unique-subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Show popup message
    var messageDiv = document.getElementById('unique-message');
    messageDiv.style.display = 'block';
    
    // Reset existing animation
    var borderAnimationDiv = messageDiv.querySelector('.border-animation');
    borderAnimationDiv.style.animation = 'none';
    borderAnimationDiv.offsetHeight; // Trigger reflow to restart the animation
    borderAnimationDiv.style.animation = 'borderAnimation 3s linear forwards';

    // Hide popup message after 10 seconds
    setTimeout(function() {
      messageDiv.style.display = 'none';
    }, 3000); // 10 seconds

    // Reset form
    this.reset();
  });
