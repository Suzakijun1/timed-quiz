var highScoreButton = document.querySelector(".view-high-scores");
var startQuizButton = document.querySelector(".start-quiz");
var timerElement = document.querySelector(".timer-count");
var startButtonSound = document.querySelector("#start-sound");
var wrongButtonSound = document.querySelector("#wrong-sound");
var welcomeScreenPage = document.querySelector("#welcome-screen");
var questionPage = document.querySelector("#question-page");
var endGamePage = document.querySelector("#end-game-screen");
var submitButton = document.querySelector(".submit-button");

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
      a: ".comment",
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

// put the time on the page
function setTime() {
  timer = setInterval(function () {
    time--;
    timerElement.textContent = "Time: " + time;

    if (time === 0) {
      clearInterval(timer);
    }
  }, 1000);
}

function storeNameData() {
  storeNameData.preventDefault;
  var highScore = time;
  var initials = document.querySelector("#input").value;
  var data = {
    highScore: highScore,
    initials: initials,
  };
  localStorage.setItem("input", JSON.stringify(data));
}

// input
var createInput = document.createElement("input");
createInput.setAttribute("type", "text");
createInput.setAttribute("id", "initials");
createInput.textContent = "";
var done = document.querySelector(".all-done");
done.appendChild(createInput);

// submit
var createSubmit = document.createElement("button");
createSubmit.setAttribute("type", "submit");
createSubmit.setAttribute("id", "Submit");
createSubmit.textContent = "Submit";

var submitButton1 = document.querySelector(".all-done");
submitButton1.appendChild(createSubmit);

// Event listener to capture initials and local storage for initials and score
createSubmit.addEventListener("click", function () {
  var initials = createInput.value;

  if (initials === null) {
    console.log("No value entered!");
  } else {
    var finalScore = {
      initials: initials,
      score: time,
    };
    console.log(finalScore);
    var allScores = localStorage.getItem("allScores");
    if (allScores === null) {
      allScores = [];
    } else {
      allScores = JSON.parse(allScores);
    }
    allScores.push(finalScore);
    var newScore = JSON.stringify(allScores);
    localStorage.setItem("allScores", newScore);
    // Travels to final page
    window.location.replace("./assets/scores.html");
  }
});
