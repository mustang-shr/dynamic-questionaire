const quizData = [
    {
        question: "What is the capital of France?",
        options: [
            { text: "Berlin", nextQuestion: 1 },
            { text: "Paris", nextQuestion: 2 },
           
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        options: [
            { text: "Earth", nextQuestion: 7 },
            { text: "Jupiter", nextQuestion: 5 },
            { text: "Mars", nextQuestion: 4 },
           
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        options: [
            { text: "Leonardo da Vinci", nextQuestion: 3 },
            { text: "Vincent van Gogh", nextQuestion: 6 },
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: [
           
            { text: "India", nextQuestion: 7 },
            { text: "Japan", nextQuestion: 4 },
           
        ]
    },
    {
        question: "What is the currency of Japan?",
        options: [
            { text: "Yen", nextQuestion: 5 },
            { text: "Euro", nextQuestion: 3 },
          
        ]
    },
    {
        question: "How many continents are there in the world?",
        options: [
            { text: "Four", nextQuestion: 9 },
            { text: "Five", nextQuestion: 6 }
        ]
    },
    {
        question: "What is the largest ocean in the world?",
        options: [
            { text: "Indian Ocean", nextQuestion: 8 },
            { text: "Atlantic Ocean", nextQuestion: 0 },
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        options: [
            { text: "Monaco", nextQuestion: 7},
            { text: "Vatican City", nextQuestion: 9},
        ]
    },
    {
        question: "What is the world's largest continent?",
        options: [
            { text: "Europe", nextQuestion: 1 },
            { text: "North America", nextQuestion: 2 },
        ]
    },
    {
        question: "Who developed the theory of relativity?",
        options: [
            { text: "Isaac Newton", nextQuestion: null },
            { text: "Galileo Galilei", nextQuestion: null},
            { text: "Albert Einstein", nextQuestion: null }
        ]
    }
   
];


const questionElm = document.getElementById("question");
const optionsElm = document.getElementById("options");
const submitBtn = document.getElementById("submit");
const quizContainer = document.getElementById("quiz");

let currentQuiz = 0;

const loadQuiz = () => {
    const currentQuestion = quizData[currentQuiz];

    if (currentQuiz >= quizData.length) {
        quizContainer.innerHTML = "<h2>Quiz Completed</h2><p>Thank you for completing the quiz!</p>";
        return;
    }

    questionElm.innerText = currentQuestion.question;
    optionsElm.innerHTML = ''; // Clear previous options

    currentQuestion.options.forEach((option, index) => {
        const optionInput = document.createElement("input");
        optionInput.setAttribute("type", "radio");
        optionInput.setAttribute("name", "options");
        optionInput.setAttribute("class", "answer");
        optionInput.setAttribute("value", index);
        
        const optionLabel = document.createElement("label");
        optionLabel.innerText = option.text;
        
        optionsElm.appendChild(optionInput);
        optionsElm.appendChild(optionLabel);
        optionsElm.appendChild(document.createElement("br"));
    });

    submitBtn.onclick = () => {
        const selectedOptionIndex = getSelectedOption();

        if (selectedOptionIndex > -1) {
            const nextQuestionIndex = currentQuestion.options[selectedOptionIndex].nextQuestion;

            if (nextQuestionIndex !== null && nextQuestionIndex < quizData.length) {
                currentQuiz = nextQuestionIndex;
                loadQuiz();
                resetRadioButtons();
            } else {
                currentQuiz = quizData.length;
                loadQuiz();
            }
        } else {
            console.log("Please select an option");
        }
    };
};

loadQuiz(); // Initial load

const getSelectedOption = () => {
    return Array.from(document.getElementsByClassName("answer")).findIndex(curElem => curElem.checked);
};

const resetRadioButtons = () => {
    const radioButtons = document.getElementsByClassName("answer");
    Array.from(radioButtons).forEach(elem => elem.checked = false);
};
