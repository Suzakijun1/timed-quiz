var highScoreButton = document.querySelector(".view-high-scores");
var startQuizButton = document.querySelector(".start-quiz");
var timerElement = document.querySelector(".timer-count");
var startButtonSound = document.querySelector("#start-sound");
var wrongButtonSound = document.querySelector("#wrong-sound");
var welcomeScreenPage = document.querySelector("#welcome-screen");
var questionPage = document.querySelector("#question-page");

//function goToScores() {
//    "otherpage.html = "./assets/scores.html";
//}

startQuizButton.addEventListener("click", function () {
  startButtonSound.play();
  setTime();
  welcomeScreenPage.classList.add("hidden");
  questionPage.classList.remove("hidden");
});

// We need to track which question we are currently on
var QIndex = 0;
var time = 70;
// The Questions should be stored in an array (Each One is an Object)
var questions = [
  {
    q: "How to make a variable",
    answers:{
      a: 'var',
      b: 'make',
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

//function displayQuiz() {
//const quizContainer = document.getElementById("quiz-container");
//   for (let i = 0; i < questions.length; i++) {
//      console.log(`Question ${i + 1}: ${questions[i].question}`);
//     for (let j = 0; j < questions[i].answers.length; j++) {
//         console.log(`  ${j + 1}. ${questions[i].answers[j]}`);
//       }
//  }

//}

// A function to make sure we can start from the very beginning
//start = (i) => {
// put the time on the page
// start ther timer
function setTime() {
  var timer = setInterval(function () {
    time--;
    timerElement.textContent = "Time: " + time;

    if (time === 0) {
      clearInterval(timer);
    }
    // update the page with the time.
  }, 1000);
}

qDiv.textContent = questions[i].q;
// loop over the questions[i].answers

// add the click handler to the answers button

// append these to the answers div

//}
// create a function to handle the button click
//function getAnswer(params) {
// check the clicked button for the correct answer
//}
//start(QIndex)

//function that checks if users answer is right
