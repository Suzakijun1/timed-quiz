var highScoreButton = document.querySelector(".view-high-scores");
var startQuizButton = document.querySelector(".start-quiz");
var timerElement = document.querySelector(".timer-count");
var startButtonSound = document.querySelector("#start-sound");
var wrongButtonSound = document.querySelector("#wrong-sound");
var welcomeScreenPage = document.querySelector("#welcome-screen");
var questionPage = document.querySelector("#question-page");
var endGamePage = document.querySelector("#end-game-screen");
var submitButton = document.querySelector(".submit-button");

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
    q: "A very useful tool for development and debugging is:",
    answers: {
      a: "console log",
      b: "css",
      c: "div",
      d: "stylesheet",
    },

    correctAnswer: "a",
  },
  {
    q: "Arrays in Javascript can be used to store _____",
    answers: {
      a: "booleans",
      b: "other arrays",
      c: "numbers and strings",
      d: "all of the above",
    },

    correctAnswer: "d",
  },

  {
    q: "How can you add a comment in JavaScript? ",
    answers: {
      a: "<!---->",
      b: "\\",
      c: "//",
      d: "/* */",
    },

    correctAnswer: "c",
  },

  {
    q: "the condition in an if / else statement is enclosed within ____ ",
    answers: {
      a: "curly brackets",
      b: "square brackets",
      c: "parentheses",
      d: "quotes",
    },

    correctAnswer: "c",
  },
];

function showQuestion() {
  questionPage.innerHTML = `
  <div class="question">${questions[QIndex].q}</div><br>
  <button id="a" class = "answer-target">${questions[QIndex].answers.a}</button><br>
  <button id="b" class = "answer-target">${questions[QIndex].answers.b}</button><br>
  <button id="c" class = "answer-target">${questions[QIndex].answers.c}</button><br>
  <button id="d" class = "answer-target">${questions[QIndex].answers.d}</button><br>
  `;
  var answerButtons = document.querySelectorAll(".answer-target");
  for (let i = 0; i < answerButtons.length; i++) {
    const button = answerButtons[i];
    button.addEventListener("click", function () {
      if (button.id !== questions[QIndex].correctAnswer) {
        time -= 10;
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
  document.querySelector(".score-text").textContent =
    "Your final score is: " + time;
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

function storeNameData() {
  storeNameData.preventDefault;
  var highScore = time;
  var initials = document.querySelector("#input").value;
  var data = {
    highScore: highScore,
    initials: initials,
  };
  localStorage.setItem("input", JSON.stringify(data));
  // var saveDrop = localStorage.getItem("data").value;
  //var dropHistory = JSON.parse(localStorage.getItem("data")) || [];
  //dropHistory.push(saveDrop);
  //localStorage.setItem("history", JSON.stringify(dropHistory));
  //renderMessage();
}

function renderMessage() {
  var finalScore = JSON.parse(localStorage.getItem("input"));
  document.querySelector(".score-container").textContent =
    "Your final score is: " +
    finalScore.highScore +
    " , Your initials: " +
    finalScore.initials;
  renderMessage();
}

//renderMessage();
submitButton.addEventListener("click", function () {
  storeNameData();
  window.location.href = "./assets/scores.html";
  renderMessage();
});
