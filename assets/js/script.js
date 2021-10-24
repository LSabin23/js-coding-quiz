var startButtonEl = document.querySelector('#start-btn')

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
  console.log('test')
  // start timer from 75 seconds and countdown by 1000ms

  // show first array item when start quiz is clicked
}

// add event listener for click on Start Quiz button
startButtonEl.addEventListener('click', startQuiz)
