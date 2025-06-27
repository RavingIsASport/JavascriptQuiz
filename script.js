// get elements by ID
let nextBtn = document.getElementById("next");
let submitBtn = document.getElementById("submit");
let quest = document.getElementById("question");
let optionsContainer = document.getElementById("options");

// Initialize variables
var currentQuestion = 0;
var score = 0;

var quizQuestions = [
  {
    // generate random question
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "paris",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "NaCl"],
    answer: "h2o",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: [
      "Harper Lee",
      "Mark Twain",
      "Ernest Hemingway",
      "F. Scott Fitzgerald",
    ],
    answer: "harper lee",
  },
  {
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
    answer: "mitochondria",
  },
  {
    question: "Which programming language makes websites interactive?",
    options: ["Javascript", "Python", "Java", "C++"],
    answer: "javascript",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Mars", "Jupiter", "Venus", "Saturn"],
    answer: "jupiter",
  },
];

// Load the first question
loadQuestion(currentQuestion);

// Hide the play again button initially
let playAgainBtn = document.createElement("button");
playAgainBtn.innerHTML = "Play Again";
playAgainBtn.id = "play-again";
playAgainBtn.addEventListener("click", playAgain);
document.body.appendChild(playAgainBtn);

// Hide the play again button initially
playAgainBtn.style.display = "none";

// Event listeners for buttons
submitBtn.addEventListener("click", function () {
  submitQuiz();
});

nextBtn.addEventListener("click", function () {
  checkAnswer(currentQuestion);
  currentQuestion++;
  if (currentQuestion < quizQuestions.length) {
    loadQuestion(currentQuestion);
  } else {
    alert("Quiz completed! Your score: " + score);
    currentQuestion = 0; // Reset for next attempt
    score = 0; // Reset score
    loadQuestion(currentQuestion); // Load the first question again
  }
});

// Function to load the question and options
function loadQuestion(questIndex) {
  // set the question text
  quest.innerHTML = quizQuestions[questIndex].question;

  // clear previous options
  optionsContainer.innerHTML = "";

  // set the options
  quizQuestions[questIndex].options.forEach((option) => {
    // create radio button for each option
    let optionElement = document.createElement("input");
    optionElement.type = "radio";
    optionElement.name = "option";
    optionElement.value = option.toLowerCase();
    optionElement.id = option.toLowerCase();
    optionsContainer.appendChild(optionElement);
    let labelElement = document.createElement("label");
    labelElement.htmlFor = option.toLowerCase();
    labelElement.innerHTML = option;
    optionsContainer.appendChild(labelElement);
    optionsContainer.appendChild(document.createElement("br"));
  });

  // hide submit button initially
  if (questIndex === quizQuestions.length - 1) {
    // Last question → hide Next, show Submit
    nextBtn.style.display = "none";
    submitBtn.style.display = "inline-block";
  } else {
    // Not last question → show Next, hide Submit
    nextBtn.style.display = "inline-block";
    submitBtn.style.display = "none";
  }
}

// check the selected answer
function checkAnswer(arr) {
  let selected = document.querySelector('input[name="option"]:checked');
  if (selected && selected.value === quizQuestions[arr].answer) {
    score++;
  }
}

// Function to submit the quiz and show the score
function submitQuiz() {
  checkAnswer(currentQuestion);
  alert("Quiz submitted! Your score: " + score);
  playAgainBtn.style.display = "inline-block"; // Show play again button
}

// Reset the quiz
function playAgain() {
  currentQuestion = 0;
  score = 0;
  loadQuestion(currentQuestion);
  nextBtn.style.display = "inline-block";
  submitBtn.style.display = "none";
  playAgainBtn.style.display = "none"; // Hide play again button
}
