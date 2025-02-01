//let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question")
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");

let questionCount;
let scoreCount = 0;
// let count = 11;
// let countDown;

let quizArray = [
    {
        id : 0,
        question: "What does HTML stands for?",
        options: [
            "HighText Machine Language",
            "HyperText and Link Markup Language",
            "HyperText Markup Language",
            "None of these",
        ],
        correct: "HyperText Markup Language",
    },
    {
        id : 1,
        question: "What is the shape of Earth?",
        options: [
            "Triangle",
            "Sphere",
            "Oval",
            "Cicle",
        ],
        correct: "Sphere",
    },
    {
        id : 2,
        question: "Which of these colour is part of the Rainbow colours?",
        options: [
            "Blue",
            "Gold",
            "Lime",
            "silver",
        ],
        correct: "Blue",
    },
    {
        id : 3,
        question: "What's the odd one out?",
        options: [
            "Bag",
            "Purple",
            "Pen",
            "Table",
        ],
        correct: "Purple",
    },
    {
        id : 4,
        question: "What does HTML stands for?",
        options: [
            "HighText Machine Language",
            "HyperText and Link Markup Language",
            "HyperText Markup Language",
            "None of these",
        ],
        correct: "HyperText Markup Language",
    },
];

// Event listener for the restart button
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});
// Event listener for the next button
nextBtn.addEventListener("click", () => {
    questionCount ++;
    if(questionCount >= quizArray.length){
        displayContainer.classList.add("hide"); // Hide quiz container
        scoreContainer.classList.remove("hide"); // Show score container
        userScore.innerHTML = `Your Score Is ${scoreCount} out of ${quizArray.length}`;
    }
    else{
        countOfQuestion.innerHTML = `${questionCount + 1} of ${quizArray.length} Questions`; // Update question count display
        quizDisplay(questionCount); // Show the next question
    }
});
// Function to display the current question
function quizDisplay(questionIndex) {
    let quizCards = document.querySelectorAll(".container-mid");
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    quizCards[questionIndex]?.classList.remove("hide");
}
// const quizDisplay = (questionCount) => {
//     let quizCards = document.querySelectorAll(".container-mid");
//     quizCards.forEach((card) => {
//         card.classList.add("hide");
//     });
//     quizCards[questionCount]?.classList.remove("hide");
// };

// Function to create and display quiz questions and options
function quizCreater(){
    quizArray.sort(() => Math.random() - 0.5); // Shuffle questions
    
    quizArray.forEach((item, index) => {
        item.options.sort(() => Math.random() - 0.5);
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide"); // Create a div for the question card

        countOfQuestion.innerHTML = `1 of ${quizArray.length} Questions`;  // Initialize question count display

        let questionDiv = document.createElement("p");
        questionDiv.classList.add("question");
        questionDiv.innerHTML = item.question;  // Add the question text
        div.appendChild(questionDiv);

        item.options.forEach(option => {
            let button = document.createElement("button");
            button.classList.add("option-div");
            button.innerHTML = option;
            button.addEventListener("click", () => checker(button));
            div.appendChild(button);
        });
        
        // div.innerHTML += `
        // <button class="option-div" onclick="checker(this)">
        //     ${item.options[0]}
        // </button>
        // <button class="option-div" onclick="checker(this)">
        //     ${item.options[1]}
        // </button>
        // <button class="option-div" onclick="checker(this)">
        //     ${item.options[2]}
        // </button>
        // <button class="option-div" onclick="checker(this)">
        //     ${item.options[3]}
        // </button>
        // `;

        quizContainer.appendChild(div);
    });
}

    // for(let i of quizArray){
    //     i.options.sort(() => Math.random() - 0.5);
    //     let div = document.createElement("div");
    //     div.classList.add("continer-mid", "hide");

    //     countOfQuestion.innerHTML = 1 + "of" + quizArray.length + "Question";

    //     let question_DIV = document.createElement("p");
    //     question_DIV.classList.add("question");
    //     question_DIV.innerHTML = i.question;
    //     div.appendChild(question_DIV);

    //     div.innerHTML += `
    //     <button class="option-div" onclick="checker(this)">
    //     ${i.options[0]}<button>
    //     <button class="option-div" onclick="checker(this)">
    //     ${i.options[1]}<button>
    //     <button class="option-div" onclick="checker(this)">
    //     ${i.options[2]}<button>
    //     <button class="option-div" onclick="checker(this)">
    //     ${i.options[3]}<button>
    //     `;

    //     quizContainer.appendChild(div);
    // }
// }

// Function to handle user answer checking
function checker(userOption){
    let userSolution = userOption.innerHTML;
    let question = document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    // options.forEach((option) => {
    //     if (option.innerHTML === quizArray[questionCount].correct) {
    //         option.classList.add("correct");
    //     } else {
    //         option.classList.add("incorrect");
    //     }
    //     option.disabled = true;
    // });

    // if (userSolution === quizArray[questionCount].correct) {
    //     userOption.classList.add("correct");
    //     scoreCount++;
    // } else {
    //     userOption.classList.add("incorrect");
    // }
    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        options.forEach((element) => {
            if (element.innerHTML === quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }
}

// Function to initialize the quiz
function initial(){
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    //count = 11;
    // clearInterval(countdown);
    // timerDisplay();
    quizCreater();
    quizDisplay(questionCount);
}

// Event listener for the start button
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide"); // Hide the start screen
    displayContainer.classList.remove("hide"); // Show the quiz container
    initial();
});

// Show the start screen and hide the quiz container on page load
window.onload = () => {
    startScreen.classList.remove("hide");  // Show the start screen
    displayContainer.classList.add("hide"); // Hide the quiz container
};


