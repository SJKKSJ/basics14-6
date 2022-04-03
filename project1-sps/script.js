// record user's Win Loss Draw score
var userWinRecord = 0;
var userLoseRecord = 0;
var userDrawRecord = 0;

// computerOption helper function
var computerSPS = function (input) {
  var randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(randomNumber);
  if (randomNumber == 1) {
    return "scissors";
  } else if (randomNumber == 2) {
    return "paper";
  } else {
    return "stone";
  }
};

var main = function (input) {
  // user input validation
  // if user input not equals to scissors/paper/stone, run invalid msg
  if (!input == "scissors" || "paper" || "stone") {
    var myOutputValue =
      "Please enter a valid game input - scissors, paper, stone";
  }
  var playerOption = input;
  var computerOption = computerSPS();
  // game win or lose conditions
  // if player and computer same option, draw
  if (playerOption == computerOption) {
    myOutputValue = "It's a draw.";
    userDrawRecord = userDrawRecord + 1;
  }
  // Player puts out scissors, if computer plays paper, user wins, else lose
  else if (playerOption == "scissors") {
    if (computerOption == "paper") {
      myOutputValue = "You win! ";
      userWinRecord = userWinRecord + 1;
    } else {
      myOutputValue = "You lose! ";
      userLoseRecord = userLoseRecord + 1;
    }
  }
  // Player puts out paper, if computer plays stone, user wins, else lose
  else if (playerOption == "paper") {
    if (computerOption == "stone") {
      myOutputValue = "You win! ";
      userWinRecord = userWinRecord + 1;
    } else {
      myOutputValue = "You lose! ";
      userLoseRecord = userLoseRecord + 1;
    }
  }
  // Player puts out stone, if computer plays scissors, user wins, else lose
  else if (playerOption == "stone") {
    if (computerOption == "scissors") {
      myOutputValue = "You win! ";
      userWinRecord = userWinRecord + 1;
    } else {
      myOutputValue = "You lose! ";
      userLoseRecord = userLoseRecord + 1;
    }
  }
  // total number of games played, to calculate win loss percentage
  var totalGamesPlayed = userWinRecord + userLoseRecord + userDrawRecord;

  return `${myOutputValue} Wins: ${userWinRecord}(${
    (userWinRecord * 100) / totalGamesPlayed
  }%) Losses: ${userLoseRecord}(${
    (userLoseRecord * 100) / totalGamesPlayed
  }%) Draws: ${userDrawRecord}(${
    (userDrawRecord * 100) / totalGamesPlayed
  }%) Total Games Played: ${userWinRecord + userLoseRecord + userDrawRecord}`;
};
