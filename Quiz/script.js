// Quiz Questions (Array of Objects)
const quizData = [
    {
        question: "HTML stands for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Mark Language",
            "None of the above"
        ],
        correct: 0
    },
    {
        question: "Which tag is used to create a paragraph?",
        options: ["<p>", "<div>", "<h1>", "<span>"],
        correct: 0
    },
    {
        question: "CSS stands for?",
        options: [
            "Color Style Sheets",
            "Cascading Style Sheets",
            "Creative Style Sheets",
            "Computer Style Sheets"
        ],
        correct: 1
    },
    {
        question: "Which property is used to change text color in CSS?",
        options: ["font-color", "text-color", "color", "bgcolor"],
        correct: 2
    },
    {
        question: "Which language is used to make web pages interactive?",
        options: ["HTML", "CSS", "JavaScript", "SQL"],
        correct: 2
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: ["<!-- -->", "//", "#", "**"],
        correct: 1
    },
    {
        question: "Which HTML tag is used to display images?",
        options: ["<image>", "<img>", "<pic>", "<src>"],
        correct: 1
    },
    {
        question: "Which CSS property controls the font size?",
        options: ["text-size", "font-size", "size", "font-style"],
        correct: 1
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<a>", "<link>", "<href>", "<url>"],
        correct: 0
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["int", "var", "string", "value"],
        correct: 1
    },
    {
        question: "Which CSS property is used to align text?",
        options: ["align", "float", "text-align", "position"],
        correct: 2
    },
    {
        question: "Which HTML tag defines the largest heading?",
        options: ["<h6>", "<h4>", "<h2>", "<h1>"],
        correct: 3
    },
    {
        question: "Which operator is used for strict comparison in JavaScript?",
        options: ["=", "==", "===", "!="],
        correct: 2
    },
    {
        question: "Which event occurs when a button is clicked?",
        options: ["onchange", "onmouseover", "onclick", "onload"],
        correct: 2
    },
    {
        question: "Which method is used to print output in the browser console?",
        options: ["print()", "log()", "console.log()", "display()"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 10;
let timer;

// Load Question
function loadQuestion() {
    clearInterval(timer);
    timeLeft = 10;
    document.getElementById("timer").innerText = "Time: " + timeLeft;

    const q = quizData[currentQuestion];
    document.getElementById("question").innerText = q.question;

    const options = document.querySelectorAll(".option");
    options.forEach((btn, index) => {
        btn.innerText = q.options[index];
        btn.disabled = false;
        btn.style.background = "#ffb6c1";
    });

    startTimer();
}

// Timer Function
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = "Time: " + timeLeft;

        if (timeLeft === 0) {
            nextQuestion();
        }
    }, 1000);
}

// Answer Selection
function selectAnswer(index) {
    const correctIndex = quizData[currentQuestion].correct;
    const options = document.querySelectorAll(".option");

    if (index === correctIndex) {
        score++;
        options[index].style.background = "#90ee90"; // green
    } else {
        options[index].style.background = "#ff7f7f"; // red
        options[correctIndex].style.background = "#90ee90";
    }

    options.forEach(btn => btn.disabled = true);
    clearInterval(timer);
}

// Next Question
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Result Page
function showResult() {
    document.querySelector(".quiz-container").innerHTML = `
        <h2>Quiz Completed 🎉</h2>
        <p>Your Score: ${score} / ${quizData.length}</p>
        <button onclick="location.reload()">Restart Quiz</button>
    `;
}

// Start Quiz
loadQuestion();