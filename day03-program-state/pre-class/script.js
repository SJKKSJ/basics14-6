// 4.1 Intro to Scope
// global scope
var globalVariable = 0;

// also global scope
var introScopeMain = function (input) {
  // function scope
  console.log(`globalVariable has a value of ${globalVariable}`);
  // we can manipulate the value of a global varaible
  // without having to re-declare using the var keyword:
  globalVariable += 1;
  console.log(`globalVariable now has a value of ${globalVariable}`);
  var myOutputValue;
  if (globalVariable % 2 == 0) {
    // block scope
    // we can access both myOutputValue and globalVariable within block scope
    myOutputValue = `Global variable is even, with a value of ${globalVariable}`;
  } else {
    myOutputValue = `Global variable is odd, with a value of ${globalVariable}`;
  }
  return myOutputValue;
};

//var introScopeMain = function (input) {
// Attempt the Follow Along exercise from the Intro to Scope module below with introScopeMain as the main function.
//var myOutputValue = 'hello world';
//return myOutputValue;
//};

// 4.2 Base Exercise App Setup

var rollDice = function () {
  // produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's a number from 0 - 5 ... add 1
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var appSetupMain = function (input) {
  // Attempt the Base: App Setup exercise from the Program Lifecycle and State module below with appSetupMain as the main function.
  var randomDiceNumber = rollDice();

  var myOutputValue = "you lose";

  if (randomDiceNumber == input) {
    myOutputValue = "you win";
  }

  return myOutputValue;
};

// 4.2 Base Exercise Last Roll
// previous Dice Roll
var prevRollDice = 0;

var lastRollMain = function (input) {
  // Attempt the Base: Last Roll exercise from the Program Lifecycle and State module below with lastRollMain as the main function.
  var randomDiceNumber = rollDice();
  var myOutputValue = `your last roll was ${prevRollDice} you just rolled a ${randomDiceNumber} you guessed ${input}`"you lose";

  if (randomDiceNumber == input) {
    myOutputValue = "you win";
  }
  
  return myOutputValue;
};

// 4.2 Base Exercise Win/Loss

var winLossMain = function (input) {
  // Attempt the Base: Win / Loss exercise from the Program Lifecycle and State module below with winLossMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var mostRolledMain = function (input) {
  // Attempt the More Comfortable: Most Rolled exercise from the Program Lifecycle and State module below with mostRolledMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var guessingMain = function (input) {
  // Attempt the More Comfortable: Guessing exercise from the Program Lifecycle and State module below with guessingMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var advancedGuessingMain = function (input) {
  // Attempt the More Comfortable: Advanced Guessing exercise from the Program Lifecycle and State module below with advancedGuessingMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

// 4.3 Exercises

// we set the initial state of mode
var mode = 'green';

// depending on the input, we will toggle mode states between green/blue
var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Program State for Game Modes module below with followAlongMain as the main function.
  if (input == 'greenmode') {
    mode = 'green';
  } else if (input == 'bluemode') {
    mode = 'blue';
  }
  var myOutputValue =
    'A fool sees not the same tree that a wise man sees. -William Blake';
  
    // reassign the value of myOutputValue is mode is at state 'blue'
  if (mode == 'blue') {
    myOutputValue =
      'The sea, once it casts its spell, holds one in its net of wonder forever. -Jacques Cousteau';
  }

  return myOutputValue;
};

//
// initial state of mode
var mode = 'green';

var redModeMain = function (input) {
  // Attempt the Red Mode exercise from the Program State for Game Modes module below with redModeMain as the main function.
  if (input == 'greenmode') {
    mode = 'green';
  } else if (input == 'bluemode') {
    mode = 'blue';
  }
  var myOutputValue =
    'A fool sees not the same tree that a wise man sees. -William Blake';
  
    // reassign the value of myOutputValue is mode is at state 'blue'
  if (mode == 'blue') {
    myOutputValue =
      'The sea, once it casts its spell, holds one in its net of wonder forever. -Jacques Cousteau';
  }

  // additional red mode
  if (mode == 'red') {
    myOutputValue =
      'RED - trial exercise';
  }

  return myOutputValue;
};
