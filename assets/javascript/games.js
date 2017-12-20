var userWins = 0;
var userLosses = 0;
var userScore = 0;
var redGemNum = parseInt(Math.floor(Math.random() * 12) + 1);
var diamondNum = parseInt(Math.floor(Math.random() * 12) + 1);
var yelGemNum = parseInt(Math.floor(Math.random() * 12) + 1);
var squareGemNum = parseInt(Math.floor(Math.random() * 12) + 1);
var matchScore = Math.floor(Math.random()*(120-19+1)+19);
//Adds the Gem clicks to the User's Score
function scoreBucket(){
  $("#totalScore").text(userScore);
}
//Generates a random number the user has to press gems to match
function matchScoreGenerator(){
    $("#currentScore h2").html(matchScore);
}

//Generates the random Gem Numbers
function randomGemGenerator(){
  redGemNum
  diamondNum
  yelGemNum
  squareGemNum
}

//Checks wins and losses
function winLossCheck(){
  if (userScore == matchScore){
    winMatch();
  } else if (userScore > matchScore){
    loseMatch();
  }
}

//User Wins
function winMatch() {
  $("#winlossalert").html("You won, hooray!");
	userWins++;
	$("#winTracker").text(userWins);
  restartGems();
}

//User Loses
function loseMatch() {
  $("#winlossalert").html("No gems for you!");
	userLosses++;
	$("#lossTracker").text(userLosses);
  restartGems();
}

//Restarts the Game
function restartGems() {
  //$("#winlossalert").html("");
  //var matchScore = Math.floor(Math.random()*(120-19+1)+19);
  $("#currentScore h2").empty(matchScore);
  $("#currentScore h2").append(matchScore);
  randomGemGenerator();
  userScore = 0;
  scoreBucket();
}

//Game Click Fuction
function gamePlay(){
    matchScoreGenerator();
    randomGemGenerator();
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
