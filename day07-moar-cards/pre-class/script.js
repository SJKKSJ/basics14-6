// Card Deck array
var cardDeck = ["nine of hearts", "ten of hearts", "jack of hearts"];

// Objects Store Compound Data
// Objects are defined with curly-brace syntax and can be stored in variables.
var playingCard = {
  // Each attribute is defined with a key and a value.
  // The key is before the colon (:), and the value is after the colon.
  // Attributes are separated by a comma and newline.
  // Use a number to represent rank for easy comparison with other cards
  rank: 11,
  suit: "heart",
  // Store an additional "name" attribute to correctly name face cards and aces.
  name: "jack"
};

// Object Attributes
// Access the rank attribute
playingCard.rank;
// Access the suit attribute
playingCard.suit;
// Access the name attribute
playingCard.name;

//
var cardDeck = [
  {
    rank: 1,
    suit: "heart",
    name: "one"
  },
  {
    rank: 2,
    suit: "heart",
    name: "two"
  }
  // ...
];

//
// Initialise index to 0 to start from the beginning of the array
var index = 0;
// Define loop condition to loop until index is the length of cardDeck
for (var index = 0; index < cardDeck.length; index += 1) {
  // Access attributes of each card with dot notation.
  console.log(cardDeck[index].name);
  // Construct a string using attributes of each card object
  var cardTitle = cardDeck[index].name + " of " + cardDeck[index].suit;
  // Log the string
  console.log(cardTitle);
  // Increment the card index
}

// Get the name of the 1st card
cardDeck[0].name;

// Card Shuffling
// Get a random index ranging from 0 (inclusive) to max (exclusive).
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};

// Shuffle the elements in the cardDeck array
var shuffleCards = function (cardDeck) {
  // Loop over the card deck array once
  var currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    // Select a random index in the deck
    var randomIndex = getRandomIndex(cardDeck.length);
    // Select the card that corresponds to randomIndex
    var randomCard = cardDeck[randomIndex];
    // Select the card that corresponds to currentIndex
    var currentCard = cardDeck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
    // Increment currentIndex
    currentIndex = currentIndex + 1;
  }
  // Return the shuffled deck
  return cardDeck;
};

// High Card
// Initialise the card deck representation as an array of objects
var deck = [
  // card1,
  // card2,
  // ...
];

// Shuffle the deck and save it in a new variable shuffledDeck
// to communicate that we have shuffled the deck.
var shuffledDeck = shuffleCards(deck);

var main = function (input) {
  // Draw 2 cards from the top of the deck
  var computerCard = shuffledDeck.pop();
  var playerCard = shuffledDeck.pop();

  // Construct an output string to communicate which cards were drawn
  var myOutputValue =
    "Computer had " +
    computerCard.name +
    " of " +
    computerCard.suit +
    ". Player had " +
    playerCard.name +
    " of " +
    playerCard.suit +
    ". ";

  // Compare computer and player cards by rank attribute
  // If computer card rank is greater than player card rank, computer wins
  if (computerCard.rank > playerCard.rank) {
    // Add conditional-dependent text to the output string
    myOutputValue = myOutputValue + "Computer wins.";
    // Else if computer card rank is less than player card rank, player wins
  } else if (computerCard.rank < playerCard.rank) {
    myOutputValue = myOutputValue + "Player wins!";
    // Otherwise (i.e. ranks are equal), it's a tie
  } else {
    myOutputValue = myOutputValue + "It's a tie.";
  }

  // Return the fully-constructed output string
  return myOutputValue;
};

var followObjectsMain = function (input) {
  // Attempt the Follow Along exercise from the Objects module below with followObjectsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var highestCardsMain = function (input) {
  // Attempt the Highest of 2 Cards exercise from the Objects module below with highestCardsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var followCreatingMain = function (input) {
  // Attempt the Follow Along exercise from the Creating Objects with Loops module below with followCreatingMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
