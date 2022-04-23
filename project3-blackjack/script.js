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

// [A1] function to shuffle new deck of cards
var gameCardDeck; // start with empty deck, and shuffled new deck is defined inside when game starts
var gameDeck = function () {
  var newDeck = makeDeck();
  var newShuffle = shuffleCards(newDeck);
  return newShuffle;
};

// [A2] function to check if blackjack on hand
var checkIfBlackJack = function (cardHandArray) {
  // player hand
  var playerCard1 = cardHandArray[0];
  var playerCard2 = cardHandArray[1];
  var isBlackjack = false; // by default

  // to return true if blackjack found,
  // Example 1 - 1st Card: ace (11), 2nd Card: 10 or Picture Cards
  // Example 2 - 1st Card: 10 or Picture Cards, 2nd Card: ace (11)
  if (
    (playerCard1.name == "ace" && playerCard2.rank >= 10) ||
    (playerCard2.name == "ace" && playerCard1.rank >= 10)
  ) {
    isBlackjack = true;
  }
  return isBlackjack;
};

// [A3] function to calculate hand value
var calculateTotalHand = function (cardHandArray) {
  var totalHandValue = 0; // starting value, for reset
  var aceCounter = 0; // not too sure about acecounter
  // adding up the card values in the player and dealer hand
  var index = 0;
  while (index < cardHandArray.length) {
    var currentCard = cardHandArray[index];
    // increase hand value by 10 for jack, queen, king cards
    if (
      currentCard.name == "jack" ||
      currentCard.name == "queen" ||
      currentCard.name == "king"
    ) {
      totalHandValue = totalHandValue + 10;
    }
    // if the card is an ace, to determine if value = 1 or 11
    else if (currentCard.name == "ace") {
      // calculate total hand value
      totalHandValue = totalHandValue + 11;
      aceCounter += 1;
    }
    // for cards 2 to 9, face value added
    else {
      totalHandValue = totalHandValue + currentCard.rank;
    }
    // move to the next card in the array
    index += 1;
  }
  index = 0;
  while (index < aceCounter) {
    // if hand value is more than 21 incld an ace, the ace should be = 1
    if (totalHandValue > 21) {
      totalHandValue = totalHandValue - 10; // the difference btwn the 2 extreme value of ace
    } // move to the next card in the array
    index += 1;
  }

  // once covered all, exits the while loop and return the total hand value
  return totalHandValue;
};

// [A4] to help in displaying the cards on hand
var displayHandsAll = function (playerHandArray, dealerHandArray) {
  // showing Player's Hand
  var playerHandMsg = "<br> Player Hand: ";
  var index = 0;
  while (index < playerHandArray.length) {
    playerHandMsg =
      "\n" +
      playerHandMsg +
      playerHandArray[index].name +
      " of " +
      playerHandArray[index].suit +
      ", ";
    // move to the next card in the array
    index += 1;
  }
  // showing Dealer's Hand
  var dealerHandMsg = "<br> Dealer Hand: ";
  index = 0;
  while (index < dealerHandArray.length) {
    dealerHandMsg =
      "\n" +
      dealerHandMsg +
      dealerHandArray[index].name +
      " of " +
      dealerHandArray[index].suit +
      ", ";
    // move to the next card in the array
    index += 1;
  }
  // return a message that shows both player's and dealer's hand
  return playerHandMsg + dealerHandMsg;
};

// [A5] to help in displaying the sum of on hand
var displaySumHandsAll = function (playerHandSum, dealerHandSum) {
  // Sum of Hand Value Message
  var sumHandValue =
    "<br> Player's Total Hand Value: " +
    playerHandSum +
    "<br> Dealer's Total Hand Value: " +
    dealerHandSum;
  return sumHandValue;
};

// main function of the game
var main = function (input) {
  var myOutputValue = ""; // default outputvalue
  // initial click to start the game
  // getting the initial 2 cards for dealer and player when game starts
  if (gameMode === "start") {
    console.log(gameMode);
    gameCardDeck = gameDeck(); // ref [A1]
    // Player's 2 cards drawn and recorded in array
    // var playerCard1 = newShuffle.pop();
    // playerHand[0] = playerCard1;
    // playerHand[1] = playerCard2; // playerHand.push(playerCard2)
    // combine the above 3 lines into 1
    // pop out card from gameCardDeck and push into playerHand
    playerHand.push(gameCardDeck.pop()); // index[0]
    playerHand.push(gameCardDeck.pop()); // index[1]
    // myOutputValue = playerHand[0] + playerHand[1]; // shows up without name and rank
    console.log("Player's Hand: ");
    console.log(playerHand);

    // repeat the same as above for Dealer
    // pop out card from gameCardDeck and push into dealerHand
    dealerHand.push(gameCardDeck.pop()); // index[0]
    dealerHand.push(gameCardDeck.pop()); // index[1]
    console.log("Dealer's Hand: ");
    console.log(dealerHand);
    // myOutputValue = dealerHand[0] + dealerHand[1]; // shows up without name and rank

    // change to the next game mode to evaluate the cards for blackjack
    gameMode = "modeEvaluate";
    // return myOutputValue - doesnt appear??
    myOutputValue =
      "Everyone at the table has received their cards. Click on submit to evaluate the cards.";
    return myOutputValue;
  }

  // evaluating the cards for blackjack after 2nd submit
  if (gameMode === "modeEvaluate") {
    console.log(gameMode);
    // for testing if the blackjack function works?
    // playerHand = [
    //   { name: "queen", suit: "clubs", rank: 12 },
    //   { name: "ace", suit: "diamonds", rank: 1 }
    // ]; // player hand = 21 (true)
    // dealerHand = [
    //   { name: "ace", suit: "clubs", rank: 1 },
    //   { name: "jack", suit: "spades", rank: 10 }
    // ]; // dealer hand = 21 (true)
    // checking for blackjack, ref [A2]
    var doesPlayerHaveBlackJack = checkIfBlackJack(playerHand);
    var doesDealerHaveBlackJack = checkIfBlackJack(dealerHand);
    console.log("Does player have blackjack");
    console.log(doesPlayerHaveBlackJack);
    console.log(`Does dealer have blackjack`);
    console.log(doesDealerHaveBlackJack);

    // checking if either one has blackjack
    if (doesPlayerHaveBlackJack == true || doesDealerHaveBlackJack == true) {
      // player and dealer both have blackjack = tie
      if (doesPlayerHaveBlackJack == true && doesDealerHaveBlackJack == true) {
        // call [A4] and the blackjack found or not results
        myOutputValue =
          displayHandsAll(playerHand, dealerHand) + "<br> Blackjack Tie!";
      }
      // player have blackjack = player wins
      else if (
        doesPlayerHaveBlackJack == true &&
        doesDealerHaveBlackJack == false
      ) {
        myOutputValue =
          displayHandsAll(playerHand, dealerHand) +
          "<br> Blackjack! Player Wins!";
      }

      // dealer have blackjack = dealer wins
      else if (
        doesPlayerHaveBlackJack == false &&
        doesDealerHaveBlackJack == true
      ) {
        myOutputValue =
          displayHandsAll(playerHand, dealerHand) + " Blackjack! Dealer Wins!";
      }
    }
    // both no blackjack
    // to continue game by hit or stand
    else {
      myOutputValue =
        displayHandsAll(playerHand, dealerHand) +
        "<br> There is no Blackjack! Please enter hit or stand to continue the game.";
      console.log(myOutputValue);
      // change to the next game mode for hit or stand decision since no blackjack
      gameMode = "modeHitOrStand";
    }
    return myOutputValue;
  } // closing bracket for whole evaluate mode

  // hit or stand game mode
  if (gameMode === "modeHitOrStand") {
    console.log(gameMode);
    // input validation: "Please input "hit" or "stand" as your next move to continue the game."
    if (input != "hit" && input != "stand") {
      myOutputValue =
        "Invalid Input! <br> Please input hit or stand as your next move to continue the game.<br>" +
        displayHandsAll(playerHand, dealerHand);
    }
    // if player enters hit, issue another card // but how to make it continue? if they choose hit again?
    else if (input == "hit") {
      playerHand.push(gameCardDeck.pop()); // index[2] etc.
      console.log(playerHand);
      myOutputValue =
        "You have drawn another card!" +
        displayHandsAll(playerHand, dealerHand) +
        "<br> Please input hit or stand to continue the game.";
    }
    // continue within the same mode if hit
    else if (input == "stand") {
      // if stand, to evaluate the total hand value and determine winner
      var totalPlayerHandValue = calculateTotalHand(playerHand); // call the hand value calculation function and pass it through the player's card array
      console.log("Total Hand Value (Player):", totalPlayerHandValue);
      var totalDealerHandValue = calculateTotalHand(dealerHand); // call the hand value calculation function and pass it through the dealer's card array
      console.log("Total Hand Value (Dealer):", totalDealerHandValue);

      // after player inputs stand, dealer gets to decide hit or stand also
      // as long as dealer hand value < 17, dealer will keep drawing cards until >= 17
      while (totalDealerHandValue < 17) {
        dealerHand.push(gameCardDeck.pop()); // index[2]
        // to get the updated sum of dealer's hand value after new card is drawn
        totalDealerHandValue = calculateTotalHand(dealerHand);
        myOutputValue = displayHandsAll(playerHand, dealerHand); // so if its above 17, the while loop ends/exits
      }

      // compare the total hand value when there is no blackjack
      // same hand value > tie
      if (totalPlayerHandValue == totalDealerHandValue) {
        // comparison results message
        myOutputValue =
          displayHandsAll(playerHand, dealerHand) +
          "<br>" +
          displaySumHandsAll(totalPlayerHandValue, totalDealerHandValue) +
          "<br>" +
          "<br> It is a tie!";
      }
      // player higher hand value >> player win
      else if (totalPlayerHandValue > totalDealerHandValue) {
        myOutputValue =
          displayHandsAll(playerHand, dealerHand) +
          "<br>" +
          displaySumHandsAll(totalPlayerHandValue, totalDealerHandValue) +
          "<br>" +
          "<br> Player Wins!";
      }
      // dealer higher hand value >> dealer win
      else {
        myOutputValue =
          displayHandsAll(playerHand, dealerHand) +
          "<br>" +
          displaySumHandsAll(totalPlayerHandValue, totalDealerHandValue) +
          "<br>" +
          "<br> Dealer Wins!";
      }
    } // closing bracket for "stand"
  } // closing bracket for whole hit-stand mode
  return myOutputValue;
};
