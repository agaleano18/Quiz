var quizQuestions = [{
  question: "Who invented JavaScript?",
  answers: {
    a: "Douglas Crockford",
    b: "Brendan Eich",
    c: "Sheryl Sandberg"
  },
  correctAnswer: "b"
}, {
  question: "What is JavaScript?",
  answers: {
    a: "A coffee",
    b: "An object-oriented computer programming language commonly used to create interactive effects within web browsers",
    c: "What actor read for their play"
  },
  correctAnswer: "b"
}, {
  question: "Are javascript and html the same thing?",
  answers: {
    a: "Yes",
    b: "No",
    c: "Maybe"
  },
  correctAnswer: "b"

}]
var intervalId
var currentQuestion = 0
var timeRemaining =45
displayNextquestion()
addOnclickhandlers()
$("#container").hide()
$("#score-container").hide()
$("#start-btn").click(function () {
  $("#container").show()
  $("#start-container").hide()
  intervalId=setInterval(function(){
$("#time").text(timeRemaining)
timeRemaining--
  },1000)
})
function wrongAnswer() {
  if (!lastQuestion()) {
    // change the timer value
    updateTimer(10)
    //increase current question
    incrementCurrentquestion()
    //unbind on click handlers
    unbindClickhandler()
    displayNextquestion()
    addOnclickhandlers()
  }


}
function updateTimer(seconds) {
 timeRemaining=timeRemaining-seconds
  $("#time").text(timeRemaining)
  console.log(`decreasing timer by ${seconds}`)
}
function incrementCurrentquestion() {
  currentQuestion = currentQuestion + 1

}
function unbindClickhandler() {
  $("#answer1").unbind("click")
  $("#answer2").unbind("click")
  $("#answer3").unbind("click")
}
function rightAnswer() {
  if (!lastQuestion()) {
    //increase current question
    incrementCurrentquestion()
    //unbind on click handlers
    unbindClickhandler()
    displayNextquestion()
    addOnclickhandlers()
  }

}
function addOnclickhandlers() {
  //if correct answer is a then 
  //if correct answer is b then
  //if correct answer is c then
  if (quizQuestions[currentQuestion].correctAnswer == "a") {
    $("#answer1").click(rightAnswer)
    $("#answer2").click(wrongAnswer)
    $("#answer3").click(wrongAnswer)

  } else if (quizQuestions[currentQuestion].correctAnswer == "b") {
    $("#answer1").click(wrongAnswer)
    $("#answer2").click(rightAnswer)
    $("#answer3").click(wrongAnswer)
  }
  else if (quizQuestions[currentQuestion].correctAnswer == "c") {
    $("#answer1").click(wrongAnswer)
    $("#answer2").click(wrongAnswer)
    $("#answer3").click(rightAnswer)
  }

}
function displayNextquestion() {
  // get current question
  var q = quizQuestions[currentQuestion]

  // update html text 
  $("#question").text(q.question)
  $("#answer1").text(quizQuestions[currentQuestion].answers.a)
  $("#answer2").text(quizQuestions[currentQuestion].answers.b)
  $("#answer3").text(quizQuestions[currentQuestion].answers.c)



}
function lastQuestion() {
  if (currentQuestion >= (quizQuestions.length - 1)) {
    $("#finalScore").text("Your final score is "+timeRemaining)
    clearInterval(intervalId)
    $("#score-container").show()
    $("#container").hide()
    $("#time").text(timeRemaining)
    return true
  }
  return false
}
