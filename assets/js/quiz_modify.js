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
    },

    {
        question: "What is the benefit of paying off debt early?",
        answers: [
            {key: "A", text: "A. It reduces the total interest paid", correct: true},
            {key: "B", text: "B. It increases the debt amount", correct: false},
            {key: "C", text: "C. It improves spending habits", correct: false},
            {key: "D", text: "D. It decreases credit score", correct: false}
        ]
    },
    {
        question: "Which type of loan usually has the lowest interest rate?",
        answers: [
            {key: "A", text: "A. Personal loan", correct: false},
            {key: "B", text: "B. Payday loan", correct: false},
            {key: "C", text: "C. Mortgage", correct: true},
            {key: "D", text: "D. Credit card", correct: false}
        ]
    },
    {
        question: "What is the purpose of a financial advisor?",
        answers: [
            {key: "A", text: "A. To sell life insurance", correct: false},
            {key: "B", text: "B. To provide personalized financial planning", correct: true},
            {key: "C", text: "C. To manage government investments", correct: false},
            {key: "D", text: "D. To increase taxes", correct: false}
        ]
    },
    {
        question: "What does an expense ratio measure?",
        answers: [
            {key: "A", text: "A. The cost of managing a mutual fund", correct: true},
            {key: "B", text: "B. The proportion of income spent on expenses", correct: false},
            {key: "C", text: "C. The average cost of living", correct: false},
            {key: "D", text: "D. The ratio of expenses to assets", correct: false}
        ]
    },
    {
        question: "What is the main benefit of using a high-yield savings account?",
        answers: [
            {key: "A", text: "A. Higher interest rates compared to regular savings accounts", correct: true},
            {key: "B", text: "B. No need to pay taxes on the interest earned", correct: false},
            {key: "C", text: "C. Guaranteed access to credit", correct: false},
            {key: "D", text: "D. No risk of losing money", correct: false}
        ]
    },
    {
        question: "Why is it important to review your credit report regularly?",
        answers: [
            {key: "A", text: "A. To increase your credit score", correct: false},
            {key: "B", text: "B. To identify potential errors and fraud", correct: true},
            {key: "C", text: "C. To receive better loan offers", correct: false},
            {key: "D", text: "D. To qualify for more credit cards", correct: false}
        ]
    },
    {
        question: "What does 'liquidity' refer to in financial terms?",
        answers: [
            {key: "A", text: "A. The ability to pay off debts", correct: false},
            {key: "B", text: "B. The ease of converting assets to cash", correct: true},
            {key: "C", text: "C. The amount of money in a checking account", correct: false},
            {key: "D", text: "D. The level of interest on investments", correct: false}
        ]
    },
    {
        question: "What does 'APR' stand for?",
        answers: [
            {key: "A", text: "A. Annual Percentage Rate", correct: true},
            {key: "B", text: "B. Annual Payment Ratio", correct: false},
            {key: "C", text: "C. Average Payback Rate", correct: false},
            {key: "D", text: "D. Asset Performance Rate", correct: false}
        ]
    },
    {
        question: "What is the key difference between a traditional IRA and a Roth IRA?",
        answers: [
            {key: "A", text: "A. Contribution limits", correct: false},
            {key: "B", text: "B. Tax treatment of contributions and withdrawals", correct: true},
            {key: "C", text: "C. Eligibility age", correct: false},
            {key: "D", text: "D. Investment risk", correct: false}
        ]
    },
    {
        question: "What does 'net worth' refer to?",
        answers: [
            {key: "A", text: "A. The amount of money in a savings account", correct: false},
            {key: "B", text: "B. The value of all assets minus liabilities", correct: true},
            {key: "C", text: "C. The income after taxes", correct: false},
            {key: "D", text: "D. The total amount of debt", correct: false}
        ]
    },

    {
        question: "What is cryptocurrency?",
        answers: [
            {key: "A", text: "A. A digital currency that operates on a decentralized network", correct: true},
            {key: "B", text: "B. A type of physical currency backed by gold", correct: false},
            {key: "C", text: "C. A currency used exclusively by banks", correct: false},
            {key: "D", text: "D. A government-issued digital token", correct: false}
        ]
    },
    {
        question: "What is the significance of ESG investing?",
        answers: [
            {key: "A", text: "A. It focuses on emerging stock markets", correct: false},
            {key: "B", text: "B. It incorporates environmental, social, and governance factors into investment decisions", correct: true},
            {key: "C", text: "C. It guarantees high returns on investments", correct: false},
            {key: "D", text: "D. It prioritizes only government-backed bonds", correct: false}
        ]
    },
    {
        question: "What is fintech?",
        answers: [
            {key: "A", text: "A. A new form of stock exchange", correct: false},
            {key: "B", text: "B. The integration of technology in providing financial services", correct: true},
            {key: "C", text: "C. A mobile app for stock trading", correct: false},
            {key: "D", text: "D. A branch of finance focusing on physical currencies", correct: false}
        ]
    },
    {
        question: "What is the primary purpose of a robo-advisor?",
        answers: [
            {key: "A", text: "A. To provide automated, algorithm-driven financial planning services", correct: true},
            {key: "B", text: "B. To invest only in cryptocurrency", correct: false},
            {key: "C", text: "C. To offer high-risk investment opportunities", correct: false},
            {key: "D", text: "D. To create investment portfolios for high-net-worth individuals", correct: false}
        ]
    },
    {
        question: "What is a 'blockchain'?",
        answers: [
            {key: "A", text: "A. A digital ledger used to record transactions in a decentralized manner", correct: true},
            {key: "B", text: "B. A physical chain used to protect financial assets", correct: false},
            {key: "C", text: "C. A type of government bond", correct: false},
            {key: "D", text: "D. A method for storing physical currency", correct: false}
        ]
    },
    {
        question: "Why have interest rates risen in many countries recently?",
        answers: [
            {key: "A", text: "A. To stimulate economic growth", correct: false},
            {key: "B", text: "B. To curb inflation by reducing borrowing", correct: true},
            {key: "C", text: "C. To increase consumer spending", correct: false},
            {key: "D", text: "D. To weaken the national currency", correct: false}
        ]
    },
    {
        question: "What is the purpose of central banks engaging in 'quantitative easing'?",
        answers: [
            {key: "A", text: "A. To reduce inflation", correct: false},
            {key: "B", text: "B. To increase the money supply and encourage lending and investment", correct: true},
            {key: "C", text: "C. To raise interest rates", correct: false},
            {key: "D", text: "D. To decrease government debt", correct: false}
        ]
    },
    {
        question: "What is the gig economy?",
        answers: [
            {key: "A", text: "A. An economy driven by full-time corporate jobs", correct: false},
            {key: "B", text: "B. A labor market characterized by freelance and short-term jobs", correct: true},
            {key: "C", text: "C. An economy focused on agriculture", correct: false},
            {key: "D", text: "D. A financial market for technology companies", correct: false}
        ]
    },
    {
        question: "What is a 'SPAC' in financial markets?",
        answers: [
            {key: "A", text: "A. A Special Purpose Acquisition Company used to raise money to buy another company", correct: true},
            {key: "B", text: "B. A type of mutual fund", correct: false},
            {key: "C", text: "C. A type of bond", correct: false},
            {key: "D", text: "D. A government-backed loan", correct: false}
        ]
    },
    {
        question: "What impact does inflation have on purchasing power?",
        answers: [
            {key: "A", text: "A. It increases purchasing power", correct: false},
            {key: "B", text: "B. It decreases purchasing power as the cost of goods rises", correct: true},
            {key: "C", text: "C. It has no effect on purchasing power", correct: false},
            {key: "D", text: "D. It only impacts foreign currency holders", correct: false}
        ]
    },

    {
        question: "What is a stock?",
        answers: [
            {key: "A", text: "A. A loan to a company", correct: false},
            {key: "B", text: "B. A share of ownership in a company", correct: true},
            {key: "C", text: "C. A savings account with a bank", correct: false},
            {key: "D", text: "D. A type of bond", correct: false}
        ]
    },
    {
        question: "What does it mean when a stock price increases?",
        answers: [
            {key: "A", text: "A. The company is borrowing more money", correct: false},
            {key: "B", text: "B. More people want to buy the stock", correct: true},
            {key: "C", text: "C. The company is going bankrupt", correct: false},
            {key: "D", text: "D. The company is producing more goods", correct: false}
        ]
    },
    {
        question: "What is the stock market?",
        answers: [
            {key: "A", text: "A. A place where people buy and sell ownership in companies", correct: true},
            {key: "B", text: "B. A store that sells goods", correct: false},
            {key: "C", text: "C. A place to exchange physical money", correct: false},
            {key: "D", text: "D. A government-run organization", correct: false}
        ]
    },
    {
        question: "What is a dividend?",
        answers: [
            {key: "A", text: "A. Interest paid on a loan", correct: false},
            {key: "B", text: "B. A portion of a company’s profit paid to shareholders", correct: true},
            {key: "C", text: "C. A fee paid to buy stocks", correct: false},
            {key: "D", text: "D. The cost of buying a bond", correct: false}
        ]
    },
    {
        question: "What does it mean to invest in the stock market?",
        answers: [
            {key: "A", text: "A. Buying goods and services", correct: false},
            {key: "B", text: "B. Purchasing shares of companies to potentially make a profit", correct: true},
            {key: "C", text: "C. Lending money to the government", correct: false},
            {key: "D", text: "D. Saving money in a bank", correct: false}
        ]
    },
    {
        question: "What is a stockbroker?",
        answers: [
            {key: "A", text: "A. A person who manages a company", correct: false},
            {key: "B", text: "B. A person who helps buy and sell stocks for investors", correct: true},
            {key: "C", text: "C. A government official regulating banks", correct: false},
            {key: "D", text: "D. A person who lends money to companies", correct: false}
        ]
    },
    {
        question: "What is a stock exchange?",
        answers: [
            {key: "A", text: "A. A place where stocks are bought and sold", correct: true},
            {key: "B", text: "B. A store that sells stocks", correct: false},
            {key: "C", text: "C. A government office", correct: false},
            {key: "D", text: "D. A bank that issues stocks", correct: false}
        ]
    },
    {
        question: "What is a bear market?",
        answers: [
            {key: "A", text: "A. A market where prices are rising rapidly", correct: false},
            {key: "B", text: "B. A market where stock prices are generally falling", correct: true},
            {key: "C", text: "C. A market with no significant price changes", correct: false},
            {key: "D", text: "D. A market with high trading volumes", correct: false}
        ]
    },
    {
        question: "Why do companies issue stocks?",
        answers: [
            {key: "A", text: "A. To raise money to grow and expand the business", correct: true},
            {key: "B", text: "B. To pay off their debts", correct: false},
            {key: "C", text: "C. To replace their leadership", correct: false},
            {key: "D", text: "D. To lower their stock prices", correct: false}
        ]
    },
    {
        question: "What is the difference between a stock and a bond?",
        answers: [
            {key: "A", text: "A. Stocks represent ownership in a company, while bonds are loans to a company or government", correct: true},
            {key: "B", text: "B. Stocks are risk-free, while bonds are risky", correct: false},
            {key: "C", text: "C. Bonds are only for short-term investments", correct: false},
            {key: "D", text: "D. Stocks pay fixed interest rates, while bonds pay dividends", correct: false}
        ]
    },

    {
        question: "What is financial literacy?",
        answers: [
            {key: "A", text: "A. Understanding complex accounting principles", correct: false},
            {key: "B", text: "B. The ability to manage personal finances effectively", correct: true},
            {key: "C", text: "C. Knowing how to trade stocks", correct: false},
            {key: "D", text: "D. Being able to understand tax laws", correct: false}
        ]
    },
    {
        question: "Why is creating a budget important?",
        answers: [
            {key: "A", text: "A. It helps in tracking income and controlling spending", correct: true},
            {key: "B", text: "B. It increases your savings automatically", correct: false},
            {key: "C", text: "C. It eliminates debt", correct: false},
            {key: "D", text: "D. It prevents you from spending money", correct: false}
        ]
    },
    {
        question: "What is the difference between a need and a want in personal finance?",
        answers: [
            {key: "A", text: "A. A need is something essential, while a want is something desirable but not necessary", correct: true},
            {key: "B", text: "B. A want is more important than a need", correct: false},
            {key: "C", text: "C. A need costs more than a want", correct: false},
            {key: "D", text: "D. A need is something you can postpone, while a want is urgent", correct: false}
        ]
    },
    {
        question: "Which of these platforms offers both podcasts and financial analysis reports for global economics?",
        answers: [
            {key: "A", text: "A. Yahoo Finance", correct: false},
            {key: "B", text: "B. The Economist", correct: true},
            {key: "C", text: "C. Reddit", correct: false},
            {key: "D", text: "D. World Bank", correct: false}
        ]
    },
    {
        question: "What is a credit score?",
        answers: [
            {key: "A", text: "A. A score given for excellent saving habits", correct: false},
            {key: "B", text: "B. A numerical representation of your creditworthiness", correct: true},
            {key: "C", text: "C. A score assigned based on your income level", correct: false},
            {key: "D", text: "D. A score that reflects the number of credit cards you own", correct: false}
        ]
    },
    {
        question: "What is the purpose of an emergency fund?",
        answers: [
            {key: "A", text: "A. To pay for vacations", correct: false},
            {key: "B", text: "B. To invest in stocks", correct: false},
            {key: "C", text: "C. To cover unexpected expenses or financial emergencies", correct: true},
            {key: "D", text: "D. To increase your credit score", correct: false}
        ]
    },
    {
        question: "What does it mean to live within your means?",
        answers: [
            {key: "A", text: "A. Spending more money than you earn", correct: false},
            {key: "B", text: "B. Spending less or equal to what you earn", correct: true},
            {key: "C", text: "C. Taking out loans to support your lifestyle", correct: false},
            {key: "D", text: "D. Earning more by working multiple jobs", correct: false}
        ]
    },
    {
        question: "Which financial news platform is known for providing real-time market updates and analysis globally?",
        answers: [
            {key: "A", text: "A. Bloomberg", correct: true},
            {key: "B", text: "B. Reddit", correct: false},
            {key: "C", text: "C. Seeking Alpha", correct: false},
            {key: "D", text: "D. Twitter", correct: false}
        ]
    },
    {
        question: "What is compound interest?",
        answers: [
            {key: "A", text: "A. Interest calculated only on the initial amount invested", correct: false},
            {key: "B", text: "B. Interest earned on both the initial amount and any interest already accumulated", correct: true},
            {key: "C", text: "C. A type of tax on savings", correct: false},
            {key: "D", text: "D. A penalty for withdrawing savings early", correct: false}
        ]
    },
    {
        question: "Why is it important to track your spending?",
        answers: [
            {key: "A", text: "A. It helps you stay aware of your financial habits and control unnecessary expenses", correct: true},
            {key: "B", text: "B. To avoid paying taxes", correct: false},
            {key: "C", text: "C. To help with loan approvals", correct: false},
            {key: "D", text: "D. To spend more without guilt", correct: false}
        ]
    }
];

const quizimg1=document.getElementById("quizimg1");
const quizimg2=document.getElementById("quizimg2");
const quizimg3=document.getElementById("quizimg3");
const quizimg4=document.getElementById("quizimg4");
const quizimg5=document.getElementById("quizimg5");
const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");
const submitButton=document.getElementById("submit-btn");
const passButton=document.getElementById("pass-btn");
const playagainButton=document.getElementById("play-again-btn");

const spanCorrect= document.getElementById('correct-span');
const spanIncorrect= document.getElementById('incorrect-span');

const progressBar= document.getElementById('quiz-progress');
const progressBox=document.getElementById('quiz-progress-bar');
const progressText= document.getElementById('completed-perc');

let currentQuestionIndex=0;
let score=0;
let questionNo=0;
let num=0;
let numbers = [];

function startQuiz(){
    console.log(questions.length);
    spanCorrect.style.display='none';
    spanIncorrect.style.display='none';
    // progressBox.style.display='block';
    playagainButton.style.display='none';

    //the code below will generate 10 random numbers from 0-49
    while (numbers.length < 10) {
        let randomNumber = Math.floor(Math.random() * 50); 
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber); 
        }
    }
    // for(let i=0;i<numbers.length;i++){
    //     console.log(numbers[i]);
    // }
    //num is used as the index of numbers list
    if(num<numbers.length){
        currentQuestionIndex=numbers[num];
    }
    score=0;
    questionNo=0;
    nextButton.style.display='none';
    showQuestion();

    quizimg.style.display="none";
}

function updateProgress(){
    let percentProgress= (questionNo-1) * 10;
    progressBar.style.width= percentProgress + '%';
    progressText.innerHTML=percentProgress+ "% COMPLETED";
}

function showQuestion(){
    resetState();
    
    spanCorrect.style.display='none';
    spanIncorrect.style.display='none';
    submitButton.disabled=true;
    currentQuestionIndex = numbers[num];
    let currentQuestion = questions[currentQuestionIndex];
    
    questionNo++;

    questionElement.innerHTML=(questionNo)+". "+ currentQuestion.question; 

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

    updateProgress();
    
}


function resetState(){
    nextButton.style.display="none";
    quizimg1.style.display="none";
    quizimg2.style.display="none";
    quizimg3.style.display="none";
    quizimg4.style.display="none";
    quizimg5.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

let isCorrect;
let selectedBtn;
let previouslyChosenBtn;
function selectAnswer(e){
    e.preventDefault();
    console.log('here')
    if (previouslyChosenBtn) {
        previouslyChosenBtn.classList.remove("chosen");
    }
    
    selectedBtn=e.target;
    selectedBtn.classList.add("chosen");
    previouslyChosenBtn = selectedBtn;
    isCorrect = selectedBtn.dataset.correct==="true";
    submitButton.disabled=false;
    submitButton.addEventListener("click", submitAnswer)   
}

function submitAnswer(){
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score+=1;
        spanCorrect.style.display='block';
        spanCorrect.innerHTML = `Yay Correct Answer! <br> Score: ${score}/10`;
        }
    else{            
        selectedBtn.classList.add("incorrect");
        spanIncorrect.style.display='block';
        spanIncorrect.innerHTML = `Oops.. Wrong Answer <br> Score: ${score}/10`;

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

    progressBox.style.display='none';
    progressText.style.display='none';
    
    playagainButton.style.display='block';
    
    resetState();
    if(score < 2){
        questionElement.innerHTML= ` You scored ${score} out of ${10} !`;
        quizimg1.style.display="block";
    }
     else if(score < 4){
        questionElement.innerHTML=` You scored ${score} out of ${10} !`;
        quizimg2.style.display="block";
    }
     else if(score < 6){
        questionElement.innerHTML=` You scored ${score} out of ${10} !`;
        quizimg3.style.display="block";
    }
    else if(score < 8){
        questionElement.innerHTML=` You scored ${score} out of ${10} !`;
        quizimg4.style.display="block";
    }
     else if(score <=10 ){
        questionElement.innerHTML=` You scored ${score} out of ${10} !`;
        quizimg5.style.display="block";
    }
    else{
        questionElement.innerHTML= `You scored ${score} out of ${10}!`;
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
    if(num<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
};

function handleNextButton(){
    nextButton.style.display='none'; 
    submitButton.style.display='block';
    passButton.style.display='block';
    num++;
    if(num<10){
        showQuestion();
    }else{
        showScore();
    }
}
startQuiz()
