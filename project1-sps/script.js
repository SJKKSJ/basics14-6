// system random generate scissors/paper/stone
var systemSPS = function (input) {
  // set an array that the system should generate only
  var arraySPS = ["scissors", "paper", "stone"];
  // Math.random() = 0 to 0.999999...; arraySPS.length = 3
  // Math.floor(Math.random() * 3) = 0, 1 or 2;
  var randomSPS = arraySPS[Math.floor(Math.random() * arraySPS.length)];
  return randomSPS;
};

// input scissors, paper or stone
var main = function (input) {
  var computerSPS = systemSPS();
  // input validation
  var myOutputValue =
    "Please enter a valid game input - scissors, paper, stone";
  if (input == "scissors" || input == "paper" || input == "stone") {
  }
  // find out if win / lose / draw - condition stmts
  // Scissors - Stone: Stone Win ; Scissors - Paper: Scissors Win ; Stone - Paper : Paper Win
  // Scissors - Scissors or Stone - Stone or Paper - Paper: Draw
  if (input == computerSPS) {
    myOutputValue = "It's a draw";
  } else if (input == "scissors" && computerSPS == "stone") {
    myOutputValue = "stone wins";
  } else if (input == "scissors" && computerSPS == "paper") {
    myOutputValue = "scissor wins";
  } else myOutputValue = "paper wins";
  // return output results
  return myOutputValue;
};
