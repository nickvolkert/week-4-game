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
//Generates a random number the user has to press gems to match
function matchScoreGenerator(){
    $("#currentScore h2").html(matchScore);
}
function gameCurtain(){
    $("#intCurtain").show();
}
//Generates the random Gem Numbers
function randomGemGenerator(){
  redGemNum
  diamondNum
  yelGemNum
  squareGemNum
  matchScore = Math.floor(Math.random()*(120-19+1)+19);
  console.log(matchScore)
}

//Checks wins and losses
function winLossCheck(){
  if (userScore == matchScore){
    //User Wins!
    userWins++;
    gameCurtain()
    $("#winScreen").show();
    $("#lossScreen").hide();
  	restartGems();
    console.log("is win working?");
  } else if (userScore > matchScore){
    //User Lost
  	userLosses++;
    gameCurtain()
    $("#lossScreen").show();
    restartGems();
    console.log("is loss working?");
  }
}

//Restarts the Game
function restartGems() {
  $(".playAgain").on("click", function(){
    $("#currentScore h2").empty(matchScore);
    $("#currentScore h2").append(matchScore);
    randomGemGenerator();
    userScore = 0;
    scoreBucket();
  });
}
function gameInst(){
  $("#howToLink a").on("click", function(){
    gameCurtain();
    $("#gameInstructions").show();
  });
}
function closeCurtain(){
  $(".playAgain").on("click", function(){
    $("#gameInstructions").hide();
    $("#intCurtain").hide();
  });
}
//Game Click Fuction
function gamePlay(){
    randomGemGenerator();
    matchScoreGenerator();
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
