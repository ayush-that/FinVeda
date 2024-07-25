const questions=[
    {
        question:"What is the primary purpose of creating a budget?",
        answers :[
            {key:"A", text:"A. To restrict spending",correct:false},
            {key:"B", text:"B. To track income and expenses",correct:true},
            {key:"C", text:"C. To increase debt",correct:false},
            {key:"D", text:"D. To eliminate savings",correct:false},

        ]
    },
    
    {
        question:"Why is maintaining an emergency fund important?",
        answers :[
            {key:"A", text:"A. It earns high interest",correct:false},
            {key:"B", text:"B. It provides investment opportunities",correct:false},
            {key:"C", text:"C. It covers unexpected expenses",correct:true},
            {key:"D", text:"D. It helps build credit",correct:false},

        ]
    },

    {
        question:"What is a credit score based on?",
        answers :[
            {key:"A", text:"A. Monthly income",correct:false},
            {key:"B", text:"B. Number of credit cards",correct:false},
            {key:"C", text:"C. Payment history and debt utilization",correct:true},
            {key:"D", text:"D. Social media activity",correct:false},

        ]
    },

    {
        question:"How does compound interest affect debt?",
        answers :[
            {key:"A", text:"A. It reduces interest over time",correct:false},
            {key:"B", text:"B. It increases debt exponentially",correct:true},
            {key:"C", text:"C. It only applies to savings accounts",correct:false},
            {key:"D", text:"D. It has no impact on debt",correct:false},

        ]
    },

    {
        question:"What is the primary purpose of diversification in an investment portfolio?",
        answers :[
            {key:"A", text:"A. To maximize returns",correct:false},
            {key:"B", text:"B. To minimize risk",correct:true},
            {key:"C", text:"C. To focus on a single investment",correct:false},
            {key:"D", text:"D. To avoid taxes",correct:false},

        ]
    },
    {
        question:"What is a stock?",
        answers :[
            {key:"A", text:"A. A type of bond",correct:false},
            {key:"B", text:"B. Ownership in a company",correct:true},
            {key:"C", text:"C. A savings account",correct:false},
            {key:"D", text:"D. A loan to the government",correct:false},

        ]
    },
    {
        question:"Why is starting to save for retirement early advantageous?",
        answers :[
            {key:"A", text:"A. Early savers receive higher interest rates",correct:false},
            {key:"B", text:"B. Retirement accounts are only available to young savers",correct:false},
            {key:"C", text:"C. Compounding can work over a longer period",correct:true},
            {key:"D", text:"D. Early savers pay fewer taxes",correct:false},

        ]
    },
    {
        question:"What is the main difference between a 401(k) and an IRA?",
        answers :[
            {key:"A", text:"A. Contribution limits",correct:true},
            {key:"B", text:"B. Eligibility criteria",correct:false},
            {key:"C", text:"C. Investment options",correct:false},
            {key:"D", text:"D. Tax treatment",correct:false},

        ]
    },
    {
        question:"Why is health insurance important?",
        answers :[
            {key:"A", text:"A. It helps save for retirement",correct:false},
            {key:"B", text:"B. It covers unexpected expenses",correct:false},
            {key:"C", text:"C. It protects against medical costs",correct:true},
            {key:"D", text:"D. It provides life coverage",correct:false},

        ]
    },
    {
        question:"What does life insurance primarily provide?",
        answers :[
            {key:"A", text:"A. Investment returns",correct:false},
            {key:"B", text:"B. Retirement income",correct:false},
            {key:"C", text:"C. Death benefit to beneficiaries",correct:true},
            {key:"D", text:"D. Home insurance",correct:false},

        ]
    }
];

const quizimg=document.getElementById("quizimg");
const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");
const submitButton=document.getElementById("submit-btn");
const passButton=document.getElementById("pass-btn");
const playagainButton=document.getElementById("play-again-btn");

const spanCorrect= document.getElementById('correct-span');
const spanIncorrect= document.getElementById('incorrect-span');

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    spanCorrect.style.display='none';
    spanIncorrect.style.display='none';
    playagainButton.style.display='none'
    currentQuestionIndex=0;
    score=0;
    nextButton.style.display='none';
    showQuestion();
    quizimg.style.display="none";
}

function showQuestion(){
    resetState();
    spanCorrect.style.display='none';
    spanIncorrect.style.display='none';
    submitButton.disabled=true;
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
    // nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

let isCorrect;
let selectedBtn;
function selectAnswer(e){
    e.preventDefault();
    selectedBtn=e.target;
    isCorrect = selectedBtn.dataset.correct==="true";
    console.log(isCorrect)
    submitButton.disabled=false;
    submitButton.addEventListener("click", submitAnswer)   
}

function submitAnswer(){
    console.log(isCorrect)
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score+=5;
        spanCorrect.style.display='block';
        }
    else{            
        selectedBtn.classList.add("incorrect");
        spanIncorrect.style.display='block';
    }
    Array.from(answerButton.children).forEach(but=>{
        if(but.dataset.correct==='true'){
            but.classList.add("correct");
        }
        but.disabled=true;  
    });
    nextButton.style.display='block'; 
    submitButton.style.display='none';
    passButton.style.display='none';
    nextButton.addEventListener("click", nextQuestion);
}
function showScore(){
    nextButton.style.display='none'; 
    submitButton.style.display='none';
    passButton.style.display='none';
    spanCorrect.style.display='none';
    spanIncorrect.style.display='none';
    
    playagainButton.style.display='block';
    
    resetState();
    if(score>30){
        questionElement.innerHTML=`You scored ${score} out of ${questions.length*5} !`;
    }
    else{
        questionElement.innerHTML=`You scored ${score} out of ${questions.length*5} !`;
    }
    // nextButton./style.display="block";
    quizimg.style.display="block";
}

function nextbtn(event){
    event.preventDefault();
}

nextButton.addEventListener("click",nextbtn);
submitButton.addEventListener("click",nextbtn);
passButton.addEventListener("click",nextbtn);
passButton.addEventListener("click",passQuestion);

function passQuestion(){
    handleNextButton();
}

function nextQuestion(){
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
};

function handleNextButton(){
    nextButton.style.display='none'; 
    submitButton.style.display='block';
    passButton.style.display='block';
    console.log(currentQuestionIndex);
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


startQuiz()
