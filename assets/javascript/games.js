var userWins = 0;
var userLosses = 0;
var userScore = 0;
var redGemNum = parseInt(Math.floor(Math.random() * 12) + 1);
var diamondNum = parseInt(Math.floor(Math.random() * 12) + 1);
var yelGemNum = parseInt(Math.floor(Math.random() * 12) + 1);
var squareGemNum = parseInt(Math.floor(Math.random() * 12) + 1);
var matchScore;
//Adds the Gem clicks to the User's Score
function scoreBucket(){
  $("#totalScore").text(userScore);
}
//Generates the random Gem Numbers
function randomGemGenerator(){
  redGemNum;
  diamondNum;
  yelGemNum;
  squareGemNum;
  matchScore = Math.floor(Math.random()*(120-19+1)+19);
  console.log("Match Score: " + matchScore);
  console.log("User Score: " + userScore);
}
function clearNumbers(){
  redGemNum = 0;
  diamondNum = 0;
  yelGemNum = 0;
  squareGemNum = 0;
}
//Checks wins and losses
function winLossCheck(){
  if (userScore == matchScore){
    //User Wins!
    userWins++;
    $("#winTracker").text(userWins++);
    $("#intCurtain").show();
    $("#winScreen").show();
    $("#lossScreen").hide();
    $("#gameInstructions").hide();
    console.log("is win working?");
  } else if (userScore > matchScore){
    //User Lost
    userLosses++;
  	$("#lossTracker").text(userLosses);
    $("#intCurtain").show();
    $("#lossScreen").show();
    $("#winScreen").hide();
    $("#gameInstructions").hide();
    console.log("is loss working?");
  }
}

//Game Instructions Modal
function gameInst(){
  $("#howToLink a").on("click", function(){
    $("#intCurtain").show();
    $("#gameInstructions").show();
  });
  $("#btnInstructions").on("click", function(){
    $("#intCurtain").hide();
    $("#gameInstructions").hide();
    $("#lossScreen").hide();
    $("#winScreen").hide();
  });
}

//Close all modals
function closeCurtain(){
  $(".playAgain").on("click", function(){
    $("#gameInstructions").hide();
    $("#intCurtain").hide();
    $("#lossScreen").hide();
    $("#winScreen").hide();
    gamePlay();
  });
}
//Game Click Fuction
function gamePlay(){
    userScore = 0;
    randomGemGenerator();
    scoreBucket();
    $("#currentScore h2").text(matchScore);
    //Red Gems
    $("#redGem").on("click", function(){
      userScore = redGemNum + userScore;
      scoreBucket();
      console.log("Red Gem = " + redGemNum);
      winLossCheck();
    });
    //Diamonds
    $("#diamond").on("click", function(){
      userScore = diamondNum + userScore;
      scoreBucket();
      console.log("Diamond = " + diamondNum);
      winLossCheck();
    });
    //Yellow Gems
    $("#yellowGem").on("click", function(){
      userScore = yelGemNum + userScore;
      scoreBucket();
      console.log("Yellow Gem = " + yelGemNum);
      winLossCheck();
    });
    //Square Gems
    $("#squareGem").on("click", function(){
      userScore = squareGemNum + userScore;
      scoreBucket();
      console.log("Square Gem = " + squareGemNum);
      winLossCheck();
    });
}
gamePlay();
gameInst();
closeCurtain();
