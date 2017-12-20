$(document).ready(function(){
  $("#start-button").click(function(){
// ----------------------------------------------------------------
 // declaring the value for the timer to 60 seconds
 // hide the start button and rules
  	var number = 60;
  	alert("Start Trivia Game");
    //
    $("#start-button").on("click", start);  // starts the games 
    $("#submit").on("click", finish);  // submits answers and finishes the game
    $("#restart").on("click", restart);  // restarts the games 
// ----------------------------------------------------------------
// functions
    function start(){
    	counter = setInterval(timer, 1200);
    	showMe(".question");
    	showMe(".answers");
    	showMe("#submit");
	    hideMe("#start-button");
	    hideMe(".rules");
	    hideMe("#restart");
	    hideMe("#results");
    }
    function timer(){
      number--       
      $("#show-number").html("<h2>" + number + "</h2>" );
      if (number === 0){
        alert("Times Up!")
        stop();
      }
    }
    function stop(){
    	clearInterval(counter); 
    	$("#results").show();
    	$("#restart").show();
		  $(".question").hide();
		  $(".answers").hide();
		  $("#submit").hide();
    }
    function finish(){
    	number = 1; 
    	clearInterval(counter); 
    	timer();
    }

    function restart(){
    	number = 60;
    	start();
    }

    function hideMe(e) {
    	$(e).hide();
    }
    function showMe(e) {
    	$(e).show();
    }
  	start(); 
  });
});