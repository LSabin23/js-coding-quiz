var startButtonEl = document.querySelector('#start-btn')
var headerEl = document.querySelector('#header')
var timerEl = document.querySelector('#timer')
var introEl = document.querySelector('#intro')
var questionEl = document.querySelector('#questions')
var submitFormEl = document.querySelector('#submit-score')
var restartButtonEl = document.querySelector('#restart')

// add array of question objects with title and answer properties
var quizArray = [
  {
    title: 'Question 1',
    answer1: '1. Answer 1',
    answer2: '2. Answer 2',
    answer3: '3. Answer 3',
    answer4: '4. Answer 4'
  },
  {
    title: 'Question 2',
    answer1: '1. Answer 1',
    answer2: '2. Answer 2',
    answer3: '3. Answer 3',
    answer4: '4. Answer 4'
  },
  {
    title: 'Question 3',
    answer1: '1. Answer 1',
    answer2: '2. Answer 2',
    answer3: '3. Answer 3',
    answer4: '4. Answer 4'
  },
  {
    title: 'Question 4',
    answer1: '1. Answer 1',
    answer2: '2. Answer 2',
    answer3: '3. Answer 3',
    answer4: '4. Answer 4'
  },
  {
    title: 'Question 5',
    answer1: '1. Answer 1',
    answer2: '2. Answer 2',
    answer3: '3. Answer 3',
    answer4: '4. Answer 4'
  }
]

var startQuiz = function () {
  // display timer value to #timer element
  countdownTimer()

  // call fxn to show quiz questions
  askQuestion()
}

var countdownTimer = function () {
  // start timer from 75 seconds and countdown by 1000ms
  var timeLeft = 15

  var timeInterval = setInterval(function () {
    if (timeLeft < 0) {
      clearInterval(timeInterval)
      // call a function to show the score submission element instead of ask question
      submitScore()
    }
    else {
      // display timer value to timerEl.textContent
      timerEl.textContent = 'Timer: ' + timeLeft
      timeLeft = timeLeft - 1
    }
  }, 1000)
}

var submitScore = function () {
  // set display of question container to none to hide it
  questionEl.classList.toggle('hidden')

  // set display of submission container to block to show it
  submitFormEl.classList.toggle('hidden')

  // set display of headerEl to none to hide it
  headerEl.classList.toggle('hidden')

  // call a saveScore function to save score input to localStorage
  // call a showScores function to display high scores list, go back btn, and clear scores btn
}

var askQuestion = function () {
  // set intro div display to hidden
  introEl.classList.toggle('hidden')
  // set questions div display to shown
  questionEl.classList.toggle('hidden')
  // set question div to first array object content
}

var reloadPage = function () {
  location.reload()
}

// add event listener for click on Start Quiz button
startButtonEl.addEventListener('click', startQuiz)

// add event listener for click on Go Back button
restartButtonEl.addEventListener('click', reloadPage)
