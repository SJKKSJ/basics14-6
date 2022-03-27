// Video Examples - Tested on Chrome Dev Tools
// compute area of triangle
var computeAreaOfTriangle = function (base, height) {
  // take the inputs and compute area of triangle
  var area = (base * height) / 2;
  // output the area
  return area;
};

// jobApplication

var generatePushyJobApplication = function (
  jobTitle,
  companyName,
  desiredAnnualSalary
) {
  // construct the message
  var message = `To whom it may concern at ${companyName}, I want a job right now. Please hire me for the position of ${jobTitle}. I want to be paid ${desiredAnnualSalary}. This comes out to ${
    desiredAnnualSalary / 12
  } a month.`;
  // output the message
  return message;
};

// Pre Class 2 Exercises

// 4 oranges = 1 Glass of Orange Juice
// Each guest drinks 2 Glasses
// helper functions
var calculateNoOfGlasses = function (expectedguests) {
  var avgGlassesofOrangeJuice = 2;
  var noOfGlasses = expectedguests * avgGlassesofOrangeJuice;
  return noOfGlasses;
};

var calculateOrangesRequired = function (noOfGlasses) {
  var noOfOrangesRequired = noOfGlasses * 4;
  return noOfOrangesRequired;
};

// 1 input (using helper function)
var orangeJuiceMain = function (input) {
  // Attempt the Orange Juice Calculator exercise from the Functions II module below with orangeJuiceMain as the main function.
  var noOfGlasses = calculateNoOfGlasses(input);
  var noOfOrangesRequired = calculateOrangesRequired(noOfGlasses);
  var myOutputValue = `${noOfOrangesRequired} oranges is required`;
  return myOutputValue;
};

// 2 inputs (orange)
// having NaN error when I input 2 figures e.g. 1,2

// House Paint Exercise

// calculating the total square meters of the house as per no. of rooms input
var totalInteriorSize = function (rooms) {
  var squareMetersPerRoom = 3 * 3;
  var totalSquareMeters = rooms * squareMetersPerRoom;
  return totalSquareMeters;
};

// amount in litres of paint required for 1 coat of painting in the house
var calculatePaintRequiredPerCoat = function (totalSquareMeters) {
  var amountOfPaintInLitres = totalSquareMeters / 300;
  return amountOfPaintInLitres;
};

// using 1 input with helper functions
var paintMain = function (input) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.
  var coatsOfPaint = 2;
  var totalAreaToPaint = totalInteriorSize(input);
  var totalLitresOfPaintPerCoat = calculatePaintRequiredPerCoat(
    totalAreaToPaint
  );
  var myOutputValue = totalLitresOfPaintPerCoat * coatsOfPaint;
  return myOutputValue;
};

// 3.1 Intro to Logic and Control Flow
// Random Number Generator
var myRandomValue = Math.random(); // Math.random returns random decimal number between 0 (inclusive) and 1 (exclusive)
// Math.random does not take in any input
// Math.floor() : convert decimals to integers

// getting a random integer from 0 to the provided number input
var getRandomInteger = function (max) {
  // Generate a decimal from 0 through max + 1.
  // This decimal will be inclusive of 0 and exclusive of max + 1.
  var randomDecimal = Math.random() * (max + 1);
  // Remove the decimal with the floor operation.
  // The resulting integer will be from 0 through max, inclusive of 0 and max.
  var resultInteger = Math.floor(randomDecimal);
  return resultInteger;
};

// Dice Roll Program Logic
var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  // because Math.random does not take any input, hence x 6, to get random no. from 0 to 6
  var randomDecimal = Math.random() * 6;
  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);
  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

// to test out in html, dont need to input number
var randomDiceMain = function (input) {
  // Attempt the Random Dice Rolls exercise from the Intro to Logic and Control Flow module below with randomDiceMain as the main function.
  // generate a random dice number
  var randomDiceNumber = rollDice();
  // personalise output
  var myOutputValue = "You just rolled a " + randomDiceNumber + "!";
  // return and print output
  return myOutputValue;
};

// 3.2 Conditionals (If, Else, Else If Statements)

var secretPhraseMain = function (input) {
  // Attempt the Secret Phrase exercise from the If, Else, Else If module below with secretPhraseMain as the main function.
  // default value for output
  var myOutputValue = "hello world";
  // var myOutputValue = "the door shall not open!";

  // If input is our secret phrase, change the value of myOutputValue
  //if (input == "palatable papaya") {
  //myOutputValue = "you wrote the secret phrase!";
  //}
  // if input is not 'palatable papaya', the phrase below will output
  //else {
  //myOutputValue = "the door shall not open!";
  //}
  //else if (input == "not so palatable papaya") {
  //myOutputValue += " but you are nearly there."; // output value here adds on to the default value +=
  //} else {
  //myOutputValue += " nope, this is far from the right phrase."; // output value here adds on to the default value +=
  //}

  // if input is not our secret phrase
  // testing if the phrase is not equal to palatable papaya
  if (input != "palatable papaya") {
    myOutputValue = "the door shall not open!";
  } else {
    myOutputValue = "you wrote the secret phrase!";
  }

  // return output
  return myOutputValue;
};

// Dice Game Logic - user entering the same number as the dice rolls  = win!

var diceGameMain = function (input) {
  // Attempt the Dice Game exercise from the If, Else, Else If module below with diceGameMain as the main function.
  // generate a random dice number
  var randomDiceNumber = rollDice();
  // Default output value is 'you lose'
  var myOutputValue = "you lose";
  // If input matches randomDiceNumber, update output.
  // If: The guess equals the dice roll, OR The guess plus one equals the dice roll, OR The guess minus one equals the dice roll, the user wins.
  if (
    randomDiceNumber == input ||
    randomDiceNumber + 1 == input ||
    randomDiceNumber - 1 == input
  ) {
    myOutputValue = "you win";
  }
  // Return output
  return myOutputValue;
};

// 3.2.1 Exercise

var twiceGuessMain = function (input) {
  // Attempt the Twice the Guess exercise from the If, Else, Else If module below with twiceGuessMain as the main function.
  // generate a random dice number
  var randomDiceNumber = rollDice();
  // default output value
  var myOutputValue = "you lose";
  // if input * 2 = randomDiceNumber, update output.
  if (input * 2 == randomDiceNumber) {
    myOutputValue = "you win";
  }
  // return output
  return myOutputValue;
};

// 3.2.2 Inequality and Equality
// inequality operator (!=) checks for when the left and right operands are not equal
// returns true if they are unequal and false if they are equal
// console.log('1' != 1); >> true as '1' is a string and 1 is a number so not equal
// console.log('papaya' != 'papaya'); >> false as papaya (string) = papaya (string)

// Equality == , checks if the two operands left and right are equal, returning a true or false value.
// Strict Equality ===, erforms like equality with the exception that is considers operands of different types to be different.
// console.log('papaya' == 'papaya'); >> true as contents are the same
// console.log('papaya' === 'papaya'); >> true as contents are the same and both left and right operands are strings

// 3.3 Boolean Operators
// Equality ==
// Inequality !=
// Or  ||
// And &&
// Not !
// Greater than or Less Than > or <
// Greater or Equals to >=
// Less or Equals to <=
