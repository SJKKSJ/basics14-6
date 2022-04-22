// Global Variables
// setting the initial game mode
var gameMode = "start";

// array for storing player and dealer cards
var playerHand = [];
var dealerHand = [];

// From 9.2: Card Deck Generation
var makeDeck = function () {
  // Initialise an empty deck array
  var cardDeck = [];
  // Initialise an array of the 4 suits in our deck. We will loop over this array.
  var suits = ["hearts", "diamonds", "clubs", "spades"];

  // Loop over the suits array
  for (var i = 0; i < suits.length; i += 1) {
    // Store the current suit in a variable
    var currentSuit = suits[i];

    // Loop from 1 to 13 to create all cards for a given suit
    // Notice rankCounter starts at 1 and not 0, and ends at 13 and not 12.
    // This is an example of a loop without an array.
    for (var rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
      // By default, the card name is the same as rankCounter
      var cardName = rankCounter;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName == 1) {
        cardName = "ace";
      } else if (cardName == 11) {
        cardName = "jack";
      } else if (cardName == 12) {
        cardName = "queen";
      } else if (cardName == 13) {
        cardName = "king";
      }

      // Create a new card with the current name, suit, and rank
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter
      };

      // Add the new card to the deck
      cardDeck.push(card);
    }
  }

  // Return the completed card deck
  return cardDeck;
};

// From 9.1: Card Shuffling
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

// function to shuffle new deck of cards
var gameCardDeck; // start with empty deck, and shuffled new deck is defined inside when game starts
var gameDeck = function () {
  var newDeck = makeDeck();
  var newShuffle = shuffleCards(newDeck);
  return newShuffle;
};

// main function of the game
var main = function (input) {
  var myOutputValue = ""; // default outputvalue
  // initial click to start the game
  // getting the initial 2 cards for dealer and player when game starts
  if (gameMode === "start") {
    console.log(gameMode);
    gameCardDeck = gameDeck();
    // Player's 2 cards drawn and recorded in array
    // var playerCard1 = newShuffle.pop();
    // playerHand[0] = playerCard1;
    // playerHand[1] = playerCard2; // playerHand.push(playerCard2)
    // combine the above 3 lines into 1
    // pop out card from gameCardDeck and push into playerHand
    playerHand.push(gameCardDeck.pop()); // index[0]
    playerHand.push(gameCardDeck.pop()); // index[1]
    myOutputValue = playerHand[0] + playerHand[1]; // without name and rank

    // repeat the same as above for Dealer
    // pop out card from gameCardDeck and push into dealerHand
    dealerHand.push(gameCardDeck.pop()); // index[0]
    dealerHand.push(gameCardDeck.pop()); // index[1]
    myOutputValue = dealerHand[0] + dealerHand[1]; // without name and rank
  }

  return myOutputValue;
};
