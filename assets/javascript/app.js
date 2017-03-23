alert("hello world");

var number = 30;
var intervalId;
var questions = [ 
      {script: "Who played First Base", answer: ["Rizzo", "Bryant","Ross", "Baez"],correctAnswer:"Rizzo"},
      {script: "Who Played Second Base",answer:["Fowler","Haywerd","Baez","Russell"],correctAnswer:"Baez"},
      {script: "Who Played Third Base",answer:["Almora","Bryant","Baez","Russell"],correctAnswer:"Bryant"}
      ];
//counts how many question have been asked/answered
var counter = 0;
var correct = 0;
var incorrect = 0;


$(document).ready(function(){

function timer(){

	intervalId = setInterval(decrement, 1000);

}
function restTimer(){
   setTimeout(forward, 4000);

   setTimeout(number,4000);

}
function resultPage(){
   $("#answer").html(
      "<p> Correct Answers "+correct +"</p>" +
      "<p> Incorrect Answers "+incorrect +"</p>");
}

function decrement() {
  
      $("#countDown").html("Time Remaining " + number);
      number--;

      if (number < 1) {

       
        clearInterval(intervalId);
        resultPage();
      }
    }
    // question and answer function
    function insertQuestion (){
      $("#question").append("<div>"+questions[counter].script+"</div>");
      $("#answer").append("<div class='click'>"+questions[counter].answer[0]+ "</div>"+
        "<div class = 'click'>"+questions[counter].answer[1]+"</div>"+
        "<div class = 'click'>"+questions[counter].answer[2]+"</div>"+
        "<div class = 'click'>"+questions[counter].answer[3]+"</div>"
        );
   }
   // checks user input vs quesiton arrays answer
   function checkAnswers(){
    $("#answer").on("click",".click", function(){
      var userGuess = $(this).text();
      if(userGuess === questions[counter].correctAnswer){
       alert("right");

        $("#answer").empty();
        $("#question").empty();
        counter++;
        correct++;
        $("#correct").html(correct);

       restTimer();
        
      }
      else{
        alert("wrong");
        $("#answer").empty();
        $("#question").empty();
        counter++;
        incorrect++;
        $("#incorrect").html(incorrect);
        setTimeout(forward, 4000);
        
      }
    });
   }
   // moves the program forward to the next question
   function forward(){
    if(counter<4){
      insertQuestion();
    }
  }
   
   function playGame(){	

  	$("#startButton").click(function(){
  	
    	
  		
      insertQuestion();
      checkAnswers();
      
      timer();
  	});


}

playGame();
// console.log(question1);




}); 