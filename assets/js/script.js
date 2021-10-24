var startButtonEl = document.querySelector('#start-btn')
var headerEl = document.querySelector('#header')
var timerEl = document.querySelector('#timer')

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
  var timeLeft = 75

  var timeInterval = setInterval(function () {
    if (timeLeft < 0) {
      clearInterval(timeInterval)
      console.log('Game Over.')
      // call a function to show the score submission element
    }
    else {
      // display timer value to timerEl.textContent
      timerEl.textContent = 'Timer: ' + timeLeft
      timeLeft = timeLeft - 1
    }
  }, 1000)
}

var askQuestion = function () {
  // set .container child div to first array object content
}

// add event listener for click on Start Quiz button
startButtonEl.addEventListener('click', startQuiz)
