var startButton = document.querySelector('#startbutton');
var quiz = document.querySelector('#quiz');

startButton.addEventListener('click', function(){
  if (startButton.hidden = true) {
    var count = 60;
var startTimer = setInterval(function (){
  document.getElementById('timer').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(startTimer);
    document.getElementById('timer').innerHTML = 'Done';
  }
   var finish = document.querySelector('#submit')
  finish.addEventListener('click', function(){
    clearInterval(startTimer);
    document.getElementById('timer').innerHTML = 'Done';
  })
  if (startButton.hidden = true){
    showQuestions (myQuestions, quizContainer);
  }
}, 1000);
  }
})
  
var myQuestions = [
	{
		question: "What does HTML stand for?",
		answers: {
			a: 'Heavy Time Machine Layout',
			b: 'HyperText Markup Language',
			c: 'Hermione The Magic Lady',
      d: 'HyperText Makeup Letter'
		},
		correctAnswer: 'b'
	},
	{
		question: "In which HTML element do we put in JavaScript code?",
		answers: {
			a: '<js>',
			b: '<script>',
			c: '<body>',
      d: '<link>'
		},
		correctAnswer: 'b'
	},
  {
  question: "How would you write 'Hello' in an alert box?",
    answers: {
      a: 'msg("Hello")',
      b: 'alertBox("Hello")',
      c: 'document.write("Hello")',
      d: 'alert("Hello")',
  },
    correctAnswer: 'd'
  }
];
function showQuestions(myQuestions, quizContainer){
	for (var i = 0; i < myQuestions.length; i++){
    i.checked = i++;
  }

	myQuestions.innerHTML = document.getElementById('#quizContainer')
}

    
