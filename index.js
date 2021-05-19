var gamePattern=[];
var buttonColours=["red","blue","green","yellow"];
var userClickedPattern=[];
var level=0;
var started = false;


$(document).keypress(function() {
  if (!started) {

    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});


$(".btn").click(function() {
  var userClickedColor=this.id;
  userClickedPattern.push(userClickedColor);
  var audio = new Audio("sounds/" + userClickedColor + ".mp3");
   audio.play();
  animatePress(userClickedColor)
  checkAnswer(userClickedPattern.length-1)
  });



function nextSequence() {
    level++;
    document.querySelector("#level-title").innerHTML="Level "+ level
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
  
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
  
    
    
}

function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        console.log("success")
        if (gamePattern.length===currentLevel+1)
    {userClickedPattern=[]
      
      setTimeout(() => {nextSequence()}, 1000)

} }
    else{
      console.log("wrong")
      $("body").addClass("game-over")
      setTimeout(() => {$("body").removeClass("game-over") }, 200)
      var audio = new Audio("sounds/wrong.mp3");
      audio.play();
      startOver()
      document.querySelector("#level-title").innerHTML="Game Over, Press Any Key to Restart"
    }
    
}

 function startOver(){
   level=0
   gamePattern=[]
   started=false
   userClickedPattern=[]
 }

function animatePress(currentColor){
      $("#"+currentColor).addClass("pressed")
      setTimeout(() => {$("#"+currentColor).removeClass("pressed") }, 100)
} 

