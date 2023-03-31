// We need to track which question we are currently on
var QIndex = 0;
var time = 70;
// The Questions should be stored in an array (Each One is an Object)
var questions = [
    {
        q:"How to make a variable",
        answers:["var","make","do it"],
        a:"var"
    },
    {
        q:"How to make a function",
        answers:["makeFunction()","createOne()","function"],
        a:"function"
    }
]
// A function to make sure we can start from the very beginning
start = (i) => {
// put the time on the page
// start ther timer
var timer = setInterval(function(){
    time--;
    // update the page with the time.
},1000)
qDiv.textContent = questions[i].q
// loop over the questions[i].answers

// add the click handler to the answers button

// append these to the answers div

}
// create a function to handle the button click
function getAnswer(params) {
    // check the clicked button for the correct answer
}
start(QIndex)