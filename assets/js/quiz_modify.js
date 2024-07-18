const questions=[
    {
        question:"What is the primary purpose of creating a budget?",
        answers :[
            {text:"A. To restrict spending",correct:false},
            {text:"B. To track income and expenses",correct:true},
            {text:"C. To increase debt",correct:false},
            {text:"D. To eliminate savings",correct:false},

        ]
    },
    
    {
        question:"Why is maintaining an emergency fund important?",
        answers :[
            {text:"A. It earns high interest",correct:false},
            {text:"B. It provides investment opportunities",correct:false},
            {text:"C. It covers unexpected expenses",correct:true},
            {text:"D. It helps build credit",correct:false},

        ]
    },

    {
        question:"What is a credit score based on?",
        answers :[
            {text:"A. Monthly income",correct:false},
            {text:"B. Number of credit cards",correct:false},
            {text:"C. Payment history and debt utilization",correct:true},
            {text:"D. Social media activity",correct:false},

        ]
    },

    {
        question:"How does compound interest affect debt?",
        answers :[
            {text:"A. It reduces interest over time",correct:false},
            {text:"B. It increases debt exponentially",correct:true},
            {text:"C. It only applies to savings accounts",correct:false},
            {text:"D. It has no impact on debt",correct:false},

        ]
    },

    {
        question:"What is the primary purpose of diversification in an investment portfolio?",
        answers :[
            {text:"A. To maximize returns",correct:false},
            {text:"B. To minimize risk",correct:true},
            {text:"C. To focus on a single investment",correct:false},
            {text:"D. To avoid taxes",correct:false},

        ]
    },
    {
        question:"What is a stock?",
        answers :[
            {text:"A. A type of bond",correct:false},
            {text:"B. Ownership in a company",correct:true},
            {text:"C. A savings account",correct:false},
            {text:"D. A loan to the government",correct:false},

        ]
    },
    {
        question:"Why is starting to save for retirement early advantageous?",
        answers :[
            {text:"A. Early savers receive higher interest rates",correct:false},
            {text:"B. Retirement accounts are only available to young savers",correct:false},
            {text:"C. Compounding can work over a longer period",correct:true},
            {text:"D. Early savers pay fewer taxes",correct:false},

        ]
    },
    {
        question:"What is the main difference between a 401(k) and an IRA?",
        answers :[
            {text:"A. Contribution limits",correct:true},
            {text:"B. Eligibility criteria",correct:false},
            {text:"C. Investment options",correct:false},
            {text:"D. Tax treatment",correct:false},

        ]
    },
    {
        question:"Why is health insurance important?",
        answers :[
            {text:"A. It helps save for retirement",correct:false},
            {text:"B. It covers unexpected expenses",correct:false},
            {text:"C. It protects against medical costs",correct:true},
            {text:"D. It provides life coverage",correct:false},

        ]
    },
    {
        question:"What does life insurance primarily provide?",
        answers :[
            {text:"A. Investment returns",correct:false},
            {text:"B. Retirement income",correct:false},
            {text:"C. Death benefit to beneficiaries",correct:true},
            {text:"D. Home insurance",correct:false},

        ]
    }
];

const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();

    let currentQuestion =questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const but=document.createElement("button");
        but.innerHTML=answer.text;
        but.classList.add("btn");
        answerButton.appendChild(but);
        if(answer.correct){
            but.dataset.correct=answer.correct;
        }
        but.addEventListener("click",selectAnswer);
    });
}


function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect =selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score+=5;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(but=>{
        if(but.dataset.correct==='true'){
            but.classList.add("correct");
        }
        but.disabled=true;
    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    if(score>30){
        questionElement.innerHTML=`Congratulations! You scored ${score} out of ${questions.length*5} !`;
    }
    else{
        questionElement.innerHTML=`You scored ${score} out of ${questions.length*5} !`;
    }
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}

function nextbtn(event){
    event.preventDefault();
}

nextButton.addEventListener("click",nextbtn);

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz()
