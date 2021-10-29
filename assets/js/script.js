var startButtonEl = document.querySelector('#start-btn')
var headerEl = document.querySelector('#header')
var timerEl = document.querySelector('#timer')
var introEl = document.querySelector('#intro')
var questionEl = document.querySelector('#questions')
var submitFormEl = document.querySelector('#submit-score')
var restartButtonEl = document.querySelector('#restart-btn')
var saveScoresButtonEl = document.querySelector('#save-scores-btn')
var highScoresEl = document.querySelector('#high-scores')

// add array of question objects with title and answer properties
var quizArray = [
  {
    title: 'Question 1',
    answer1: '1. Answer 1',
    answer2: '2. Answer 2',
    answerRight: '3. Answer 3',
    answer4: '4. Answer 4'
  },
  {
    title: 'Question 2',
    answer1: '1. Answer 1',
    answer2: '2. Answer 2',
    answerRight: '3. Answer 3',
    answer4: '4. Answer 4'
  },
  {
    title: 'Question 3',
    answer1: '1. Answer 1',
    answer2: '2. Answer 2',
    answerRight: '3. Answer 3',
    answer4: '4. Answer 4'
  },
  {
    title: 'Question 4',
    answer1: '1. Answer 1',
    answer2: '2. Answer 2',
    answerRight: '3. Answer 3',
    answer4: '4. Answer 4'
  },
  {
    title: 'Question 5',
    answer1: '1. Answer 1',
    answer2: '2. Answer 2',
    answerRight: '3. Answer 3',
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
    // add condition to check if answer button clicked property name is not rightAnswer then subtract 10 from timeLeft
    // else if {
    // }
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
  questionEl.classList.toggle('flex')

  // set display of submission container to block to show it
  submitFormEl.classList.toggle('hidden')

  // set display of headerEl to none to hide it
  headerEl.classList.toggle('hidden')

  // call a saveScore function to save score input to localStorage
}

var askQuestion = function () {
  // set intro div display to hidden
  introEl.classList.toggle('hidden')
  // set questions div display to shown
  questionEl.classList.toggle('hidden')

  // set question div to first array object content
  for (var i = 0; i < quizArray.length; i++) {
    // create new h2 element for question text
    var questionTextEl = document.createElement('h2')
    // set question text to index object's title property content
    questionTextEl.textContent = quizArray[i].title
    // append question text element to question el container for visibility
    questionEl.appendChild(questionTextEl)
    // create button element for each answer property on index object
    var answerChoice1 = document.createElement('button')
    answerChoice1.textContent = quizArray[i].answer1
    questionEl.appendChild(answerChoice1)

    var answerChoice2 = document.createElement('button')
    answerChoice2.textContent = quizArray[i].answer2
    questionEl.appendChild(answerChoice2)

    var answerChoiceRight = document.createElement('button')
    answerChoiceRight.setAttribute('id', 'correct-answer')
    answerChoiceRight.textContent = quizArray[i].answerRight
    questionEl.appendChild(answerChoiceRight)

    var answerChoice4 = document.createElement('button')
    answerChoice4.textContent = quizArray[i].answer4
    questionEl.appendChild(answerChoice4)

    // add event listener for click on a button with id correct-answer
    questionEl.addEventListener('click', 'button', function (event) {
      if (event.target.id !== 'correct-answer') {
        // subtract 10 seconds from timer
        // continue the for loop
      }
    })
  }
}

var reloadPage = function () {
  location.reload()
}

var showScores = function () {
  // set submission container display to hidden to hide it
  submitFormEl.classList.toggle('hidden')
  // set high scores container display to show it
  highScoresEl.classList.toggle('hidden')
}

// add event listener for click on Start Quiz button to call startQuiz function
startButtonEl.addEventListener('click', startQuiz)

// add event listener for click on Go Back button to reload page
restartButtonEl.addEventListener('click', reloadPage)

// add event listener for click on score submit button to call showScores function
saveScoresButtonEl.addEventListener('click', showScores)
