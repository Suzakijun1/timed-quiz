var submitButton = document.querySelector(".submit-button");

function renderMessage() {
  var finalScore = JSON.parse(localStorage.getItem("input"));
  document.querySelector(".score-container").textContent =
    "Your final score is: " +
    finalScore.highScore +
    " , Your initials: " +
    finalScore.initials;
  // document.getElementById("highScore").textContent = highScore;
}
renderMessage();
//document.getElementById("highScore").textContent = highScore;
