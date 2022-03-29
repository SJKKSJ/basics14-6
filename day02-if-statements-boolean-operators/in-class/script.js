// Day 2 In Class Base Lucky 11

var rollDice = function () {
  var diceRollStart = Math.random() * 6;
  var diceRoll = Math.floor(diceRollStart) + 1;
  return diceRoll;
};

var lucky11Main = function (input) {
  // Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.
  var rollDice1 = rollDice();
  var rollDice2 = rollDice();
  // default output value
  var myOutputValue = "You Lose";
  if (rollDice1 == input || rollDice2 == input || rollDice1 + rollDice2 == 11) {
    myOutputValue = "You Win";
  }
  return myOutputValue;
};

// Day 2 In Class Base Hawker Food Categorisation

var hawkerFoodCategorisationMain = function (input) {
  // Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.
  var myOutputValue = "hello world";
  if (input == "chicken rice" || input == "nasi lemak") {
    myOutputValue = "rice";
  } else if (input == "hokkien mee" || input == "laksa") {
    myOutputValue = "noodles";
  } else myOutputValue = "rice";
  return myOutputValue;
};

// Comfortable Exercise 4D

var randomNumber = function (input) {
  var randomNum = Math.random() * 10;
  var returnNum = Math.floor(randomNum);
  return returnNum;
};
​
var fourDSingleDigitMain = function (input) {
  // create a function that randomly generates a number between 0 and 9
  var myOutputValue = "You lose";
  var num1 = randomNumber();
  var num2 = randomNumber();
  var num3 = randomNumber();
  var num4 = randomNumber();
  var totoNumber = String(num1) + String(num2) + String(num3) + String(num4);
  if (input == num1 || input == num2 || input == num3 || input == num4) {
    myOutputValue = "You win";
  }
  //create four variables to capture four different numbers
  // Complete the Comfortable: 4D with Single-Digit Comparison exercise below with fourDSingleDigitMain as the main function.
  return `${totoNumber}  ${myOutputValue}`;
};

var hawkerFoodRandomnessMain = function (input) {
  // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var fourDWinningRangeMain = function (input) {
  // Complete the More Comfortable: 4D with Winning Range exercise below with fourDWinningRangeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var hawkerFoodOmakaseMain = function (input) {
  // Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
