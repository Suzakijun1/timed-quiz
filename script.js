var highScoreButton = document.querySelector(".view-high-scores");
var startQuizButton = document.querySelector(".start-quiz");
var timerElement = document.querySelector(".timer-count");
var startButtonSound = document.querySelector("#start-sound");
var wrongButtonSound = document.querySelector("#wrong-sound");
var welcomeScreenPage = document.querySelector("#welcome-screen");
var questionPage = document.querySelector("#question-page");
var endGamePage = document.querySelector("#end-game-screen");

//function goToScores() {
//    "otherpage.html = "./assets/scores.html";
//}

startQuizButton.addEventListener("click", function () {
  startButtonSound.play();
  setTime();
  welcomeScreenPage.classList.add("hidden");
  questionPage.classList.remove("hidden");
  showQuestion();
});

// We need to track which question we are currently on
var QIndex = 0;
var time = 70;

// The Questions should be stored in an array (Each One is an Object)
var questions = [
  {
    q: "How to make a variable",
    answers: {
      a: "var",
      b: "make",
      c: "third",
      d: "four",
    },

    correctAnswer: "a",
  },
  {
    q: "How to make a function",
    answers: {
      a: "one",
      b: "two",
      c: "three",
      d: "four",
    },

    correctAnswer: "b",
  },

  {
    q: "How to make a word",
    answers: {
      a: "hi",
      b: "fun",
      c: "three",
      d: "four",
    },

    correctAnswer: "c",
  },
];

function showQuestion() {
  questionPage.innerHTML = `
  <div class="question">${questions[QIndex].q}</div>
  <button id="a" class = "answer-target">${questions[QIndex].answers.a}</button>
  <button id="b" class = "answer-target">${questions[QIndex].answers.b}</button>
  <button id="c" class = "answer-target">${questions[QIndex].answers.c}</button>
  <button id="d" class = "answer-target">${questions[QIndex].answers.d}</button>
  `;
  var answerButtons = document.querySelectorAll(".answer-target");
  for (let i = 0; i < answerButtons.length; i++) {
    const button = answerButtons[i];
    button.addEventListener("click", function () {
      if (button.id !== questions[QIndex].correctAnswer) {
        time -= 50;
      }
      if (time <= 0) {
        endGame();
      }
      if (QIndex !== questions.length - 1) {
        QIndex++;
        showQuestion();
      } else {
        endGame();
      }
    });
  }
}

var timer = null;

function endGame() {
  questionPage.classList.add("hidden");
  endGamePage.classList.remove("hidden");
  clearInterval(timer);
  if (time < 0) {
    time = 0;
  }
  timerElement.textContent = "Time: " + time;
}

// A function to make sure we can start from the very beginning
//start = (i) => {
// put the time on the page
// start ther timer
function setTime() {
  timer = setInterval(function () {
    time--;
    timerElement.textContent = "Time: " + time;

    if (time === 0) {
      clearInterval(timer);
    }
    // update the page with the time.
  }, 1000);
}

// loop over the questions[i].answers
// format of score array
// var scores =[
// {
//   initials: 'hi'
//   score: 29
// },
// {
//   initials: 'fdh'
//   score: 39
// }
// ]
