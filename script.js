var addExclamationMark = function (input) {
  var newSentence = input + "!";
  return newSentence; // impt to return the output
};

var main = function (input) {
  var myOutputValue = addExclamationMark(input); // calling the function above
  return myOutputValue;
};
// in the index.html file - main function is called, so only the main function will run
