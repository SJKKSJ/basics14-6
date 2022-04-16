// function to roll random dice
var rollDice = function () {
  // return 5; - testing draw results
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

// global variables
// initial game mode
var gameMode = "playerOneRoll";
// arrays to store the dice numbers rolled
var playerOneNumbers = [];
var playerTwoNumbers = [];
// for the player combined numbers
var playerOneScore;
var playerTwoScore;
// player accumulated score
//var totalPlayerOneScore;
//var totalPlayerTwoScore;

// game results helper function - can it be here??
var gameResults = function () {
  var winnerMessage = `Player One's Number: ${playerOneScore} <br> Player Two's Number: ${playerTwoScore}`;
  var winnerScore = Math.min(playerOneScore, playerTwoScore);
  console.log(playerOneScore, playerTwoScore, winnerScore);
  if (playerOneScore == playerTwoScore) {
    winnerMessage += "<br> It's a draw!";
  } else if (playerOneScore == winnerScore) {
    winnerMessage += "<br> Player 2 Wins! 🏆";
  } else winnerMessage += "<br> Player 1 Wins! 🏆";
  return winnerMessage;
};

// main function
var main = function (input) {
  // initial myOutputValue
  var myOutputValue = "";

  // in the initial game mode, player 1 to roll the dice twice
  if (gameMode === "playerOneRoll") {
    var rollDice1 = rollDice();
    var rollDice2 = rollDice();
    // to keep record of the dice numbers
    playerOneNumbers[0] = rollDice1;
    playerOneNumbers[1] = rollDice2;
    // output dice number rolled and instruction for next game step
    myOutputValue = `Player One has rolled ${playerOneNumbers[0]} and ${playerOneNumbers[1]}. <br> Please choose order 1 or 2.`;
    // change to the next game mode
    gameMode = "playerOneOrder";
  }
  // in the next game mode, player 1 to choose the order of their dice numbers
  else if (gameMode === "playerOneOrder") {
    console.log(gameMode);
    // input validation
    if (Number(input) !== 1 && Number(input) !== 2) {
      myOutputValue = `Player One, you rolled ${playerOneNumbers[0]} and ${playerOneNumbers[1]}. <br> Please enter a valid order choice - 1 or 2`;
      return myOutputValue;
    }
    // input order choice of 1 or 2
    if (Number(input) === 1) {
      playerOneScore = Number(
        String(playerOneNumbers[0]) + String(playerOneNumbers[1])
      );
      myOutputValue = `Player One, you have chosen your number as ${playerOneScore}. <br> Player Two can roll now.`;
      // change the game mode to player 2's turn to roll
      gameMode = "playerTwoRoll";
    }
    if (Number(input) === 2) {
      playerOneScore = Number(
        String(playerOneNumbers[1]) + String(playerOneNumbers[0])
      );
      myOutputValue = `Player One, you have chosen your number as ${playerOneScore}. <br> Player Two can roll now.`;
      // change the game mode to player 2's turn to roll
      gameMode = "playerTwoRoll";
    }

    // player 2 game turn to roll the dice
  } else if (gameMode === "playerTwoRoll") {
    console.log(gameMode);
    var rollDice1 = rollDice();
    var rollDice2 = rollDice();
    // to keep record of the dice numbers
    playerTwoNumbers[0] = rollDice1;
    playerTwoNumbers[1] = rollDice2;
    // output dice number rolled and instruction for next game step
    myOutputValue = `Player Two has rolled ${playerTwoNumbers[0]} and ${playerTwoNumbers[1]}. <br> Please choose order 1 or 2.`;
    // change to the next game mode
    gameMode = "playerTwoOrder";
  }

  // in the next game mode, player 2 to choose the order of their dice numbers
  else if (gameMode === "playerTwoOrder") {
    console.log(gameMode);
    // input validation
    if (Number(input) !== 1 && Number(input) !== 2) {
      myOutputValue = `Player Two, you rolled ${playerTwoNumbers[0]} and ${playerTwoNumbers[1]}. <br> Please enter a valid order choice - 1 or 2`;
    }
    // player 2 input order choice of 1 or 2
    if (Number(input) === 1) {
      playerTwoScore = Number(
        String(playerTwoNumbers[0]) + String(playerTwoNumbers[1])
      );
      myOutputValue = `Player Two, you have chosen your number as ${playerTwoScore}.`;
      // change the game mode to results
      gameMode = "gameResults";
    }
    if (Number(input) === 2) {
      playerTwoScore = Number(
        String(playerTwoNumbers[1]) + String(playerTwoNumbers[0])
      );
      myOutputValue = `Player Two, you have chosen your number as ${playerTwoScore}.`;
      gameMode = "gameResults";
    }
  }

  // to call the game results function to find out the winner
  else if (gameMode === "gameResults") {
    var winner = gameResults();
    return winner;
  }
  return myOutputValue;
};
