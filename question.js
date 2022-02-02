
//construct question 
function Question(text,choices,answer){
    this.text=text;
    this.choices=choices;
    this.answer=answer;
}

//Quiz Constructor
function Quiz(questions){
    this.score=0;
    this.questions=questions;
    this.questionIndex=0;
}

//Get index for question
Quiz.prototype.getQuestionIndex=function(){
    return this.questions[this.questionIndex];
}

//to check answer
Quiz.prototype.guess = function(id,answer){
    
    if(this.getQuestionIndex().isCorrectAnsewr(answer)){

        var audio=new Audio("succ.mp3");
        audio.play();  
        this.score++;
    }   else{
        var audio=new Audio("fail.mp3");
        audio.play();}

    this.questionIndex++;
}

//To check the answer is true ot not
Question.prototype.isCorrectAnsewr = function(choice){
    return this.answer === choice;
}

//Check if quiz is end
Quiz.prototype.isEnd=function(){
    return this.questionIndex === this.questions.length;
}

//Show Score (result)
function showScores(){
    var gameOverHTML="<h1>Result</h1>";
    gameOverHTML +="<h2 id='score'> Your Scores: "+quiz.score + "</h2>";
    var element=document.getElementById("quiz");
    element.innerHTML=gameOverHTML;
    
}


//Display the whole quiz
function display(){

    if(quiz.isEnd()){
        showScores();
    }else {
        //show question
        var element=document.getElementById("question");
        element.innerHTML=quiz.getQuestionIndex().text;

        //Show Choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i=0;i < choices.length;i++){
            var element=document.getElementById("choice"+i);
            element.innerHTML=choices[i];
            guess("btn"+i,choices[i]);
        }
        
        showProgress();
    }

};

function guess(id,choice){
    var button=document.getElementById(id);
    button.onclick=function(){
        quiz.guess(id,choice);
        display();
    }
};

function showProgress(){
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}


//create questions here
var questions=[
    new Question("How do you create function in java script?",["function:myfunction()", "function myfunction()","function=myfunction()", "nothing"],"function myfunction()"),
    new Question("How To write any if statement in javaScript?",["if i=5","if(i==5)","if i==5 then","if i=5 then"],"if(i==5)"),
    new Question("Inside which HTML element do we put the JavaScript?",["&lt;scripting&gt;","&lt;script&gt;","&lt;JS&gt;","&lt;javascript&gt;"],"&lt;script&gt;"),
    new Question('What is the correct syntax for referring to an external script called "xxx.js"?',['&lt;script href="xxx.js"&gt;','&lt;script src="xxx.js"&gt;','&lt;script name="xxx.js"&gt;',"nothing"],'&lt;script src="xxx.js"&gt;'),
    new Question('How do you write "Hello World" in an alert box?',['msgBox("Hello World")','alert("Hello World")','msg("Hello World")','alrtBox("Hello World")'],'alert("Hello World")'),
    new Question('How to write an IF statement for executing some code if "i" is NOT equal to 5?',["if(i !=5)","if i =! 5 then","if(i<>5)","if i<> 5"],"if(i !=5)"),
    new Question('How does a WHILE loop syntax start?',["while (i <= 10; i++)","while (i <=10)","while i =1 to 10","nothing"],"while (i <=10)"),
    new Question('How does a FOR loop start?',['for(i <= 5;i++','for(i=0;i<=5;i++)','for(i=0;i<=5)','for i=1 to 5'],'for(i=0;i<=5;i++)'),
    new Question('How can you add one line comment in a JavaScript?',['&lt!--This is a comment--&gt','"this is a comment','//This is a comment',"nothing"],'//This is a comment'),
    new Question('How do you round the number 7.25, to the nearest integer?',["rnd(7.25)","round(7.25)","Math.round(7.25)","Math.rnd(7.25)"],"Math.round(7.25)")
];

//create quiz
var quiz=new Quiz(questions);

// display quiz
display(); 



window.onload=timer();



function timer(){
    var count = 20;
    var interval = setInterval(function(){
      document.getElementById('count').innerHTML=count;
      count--;
      if (count === 0){
        clearInterval(interval);
        document.getElementById('count').innerHTML='Done';
        swal({
            title: "You're out of time",
            icon: "warning",
            buttons: {
            OK:"Show Result",
            cancel:"Re-try",}
          })
          .then((willDelete) => {
            if (willDelete) {
                showScores();
            } else {
                window.location.reload(true);
            }
          });
      }
    }, 1000);
};
    