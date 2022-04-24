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

// function to calculate hand value
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

// function to check if blackjack on hand
var checkIfBlackJack = function (cardHandArray) {
  var index = 0;
  var totalHandValue = 0;
  var aceCounter = 0;
  var isBlackjack = false;
  while (index < cardHandArray.length) {
    var currentCard = cardHandArray[index];
    if (currentCard.name == "ace") {
      totalHandValue = totalHandValue + 11;
      aceCounter += 1;
    } else {
      totalHandValue = totalHandValue + cardHandArray[index].value;
    }
    index += 1;
  }
  index = 0;
  while (index < aceCounter) {
    if (totalHandValue > 21) {
      totalHandValue = totalHandValue - 10;
    }
    index += 1;
  }
  if (totalHandValue == 21) {
    isBlackjack = true;
  }
  return isBlackjack;
};

// to help in displaying the cards on hand
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
    gameCardDeck = gameDeck();
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
    // checking for blackjack
    var doesPlayerHaveBlackJack = checkIfBlackJack(playerHand);
    var doesDealerHaveBlackJack = checkIfBlackJack(dealerHand);
    console.log("Does player have blackjack");
    console.log(doesPlayerHaveBlackJack);
    console.log(`Does dealer have blackjack`);
    console.log(doesDealerHaveBlackJack);

    // in scenario where neither bust
    // checking if either one has blackjack
    if (doesPlayerHaveBlackJack == true || doesDealerHaveBlackJack == true) {
      // player and dealer both have blackjack = tie
      if (doesPlayerHaveBlackJack == true && doesDealerHaveBlackJack == true) {
        // call displayHandsAll and the blackjack found or not results
        myOutputValue =
          displayHandsAll(playerHand, dealerHand) + "<br> Blackjack Tie!";
      }
      // dealer have blackjack + player no blackjack + player did not bust = dealer wins
      if (doesDealerHaveBlackJack && !doesPlayerHaveBlackJack) {
        myOutputValue =
          displayHandsAll(playerHand, dealerHand) +
          "<br> Blackjack! Dealer Wins!";
      }

      // player have blackjack + dealer no blackjack + dealer did not bust = player wins
      if (!doesDealerHaveBlackJack && doesPlayerHaveBlackJack) {
        myOutputValue =
          displayHandsAll(playerHand, dealerHand) + " Blackjack! Player Wins!";
      }
    }
    // both no blackjack and both players did not bust
    // to continue game by hit or stand
    if (!doesDealerHaveBlackJack && !doesPlayerHaveBlackJack) {
      gameMode = "modeHitOrStand";
      if (totalPlayerHandValue == totalDealerHandValue) {
        myOutputValue =
          displayHandsAll(playerHand, dealerHand) +
          "<br> Its a tough one! <br>Decide if you would like to continue the game by entering 'hit' or 'stand'<br>";
      } else if (totalPlayerHandValue > totalDealerHandValue) {
        myOutputValue =
          displayHandsAll(playerHand, dealerHand) +
          "<br>Do you think you have the upper hand? <br>Decide if you would like to continue the game by entering 'hit' or 'stand'<br>";
      } else {
        myOutputValue =
          displayHandsAll(playerHand, dealerHand) +
          "<br>Would you take a chance? <br>Decide if you would like to continue the game by entering 'hit' or 'stand'<br>";
      }
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
    if (input == "hit") {
      playerHand.push(gameCardDeck.pop()); // index[2] etc.
      console.log(playerHand);
      myOutputValue =
        "You have drawn another card!" +
        displayHandsAll(playerHand, dealerHand) +
        "<br> Please input hit or stand to continue the game.";
      gameMode = "modeHitOrStand";
    }
    // continue within the same mode if hit
    // what about hit then stand?
    // else if stand
    else if (input == "stand") {
      // if stand, to evaluate the total hand value and determine winner
      var totalPlayerHandValue = calculateTotalHand(playerHand); // call the hand value calculation function and pass it through the player's card array
      console.log("Total Hand Value (Player):", totalPlayerHandValue);
      var totalDealerHandValue = calculateTotalHand(dealerHand); // call the hand value calculation function and pass it through the dealer's card array
      console.log("Total Hand Value (Dealer):", totalDealerHandValue);

      // check for blackjack
      doesPlayerHaveBlackJack = checkIfBlackJack(playerHand);
      doesDealerHaveBlackJack = checkIfBlackJack(dealerHand);
      console.log("Does player have blackjack");
      console.log(doesPlayerHaveBlackJack);
      console.log(`Does dealer have blackjack`);
      console.log(doesDealerHaveBlackJack);

      // after player inputs stand, dealer gets to decide hit or stand also
      // as long as dealer hand value < 17, dealer will keep drawing cards until >= 17
      while (totalDealerHandValue < 17) {
        dealerHand.push(gameCardDeck.pop()); // index[2]
        // to get the updated sum of dealer's hand value after new card is drawn
        totalDealerHandValue = calculateTotalHand(dealerHand);
        myOutputValue = displayHandsAll(playerHand, dealerHand); // so if its above 17, the while loop ends/exits
      }

      // if both did not bust aka < 21
      if (totalPlayerHandValue < 21 && totalDealerHandValue < 21) {
        // same hand value > tie
        if (totalPlayerHandValue == totalDealerHandValue) {
          // comparison results message
          myOutputValue =
            displayHandsAll(playerHand, dealerHand) +
            "<br>" +
            displaySumHandsAll(totalPlayerHandValue, totalDealerHandValue) +
            "<br>" +
            "<br> It is a tie!";
          if (
            doesPlayerHaveBlackJack == true &&
            doesDealerHaveBlackJack == true
          ) {
            myOutputValue =
              myOutputValue +
              "<br> Both Player and Dealer have Blackjack!<br> Refresh the page to play again!";
          }
        }
        // player hand value higher
        if (totalPlayerHandValue > totalDealerHandValue) {
          // comparison results message
          myOutputValue =
            displayHandsAll(playerHand, dealerHand) +
            "<br>" +
            displaySumHandsAll(totalPlayerHandValue, totalDealerHandValue) +
            "<br>" +
            "<br> Player Wins!";
          if (doesPlayerHaveBlackJack == true) {
            myOutputValue =
              myOutputValue +
              "<br> Player has Blackjack!<br> Refresh the page to play again!";
          }
        }
        // dealer hand value higher
        if (totalPlayerHandValue < totalDealerHandValue) {
          // comparison results message
          myOutputValue =
            displayHandsAll(playerHand, dealerHand) +
            "<br>" +
            displaySumHandsAll(totalPlayerHandValue, totalDealerHandValue) +
            "<br>" +
            "<br> Dealer Wins!";
          if (doesPlayerHaveBlackJack == true) {
            myOutputValue =
              myOutputValue +
              "<br> Dealer has Blackjack!<br> Refresh the page to play again!";
          }
        }
      } // closing bracket for if didnt bust and compare hand value for winner

      // if dealer bust & player did not
      if (totalPlayerHandValue < 21 && totalDealerHandValue > 21) {
        myOutputValue =
          displayHandsAll(playerHand, dealerHand) +
          "<br>" +
          displaySumHandsAll(totalPlayerHandValue, totalDealerHandValue) +
          "<br>" +
          "<br> Dealer Busted! Player Wins!";
        if (doesPlayerHaveBlackJack == true) {
          myOutputValue =
            myOutputValue +
            "<br> Player has Blackjack!<br> Refresh the page to play again!";
        }
      }
      // if dealer did not bust & player bust
      if (totalPlayerHandValue > 21 && totalDealerHandValue < 21) {
        myOutputValue =
          displayHandsAll(playerHand, dealerHand) +
          "<br>" +
          displaySumHandsAll(totalPlayerHandValue, totalDealerHandValue) +
          "<br>" +
          "<br> Player Busted! Dealer Wins!";
        if (doesDealerHaveBlackJack == true) {
          myOutputValue =
            myOutputValue +
            "<br> Dealer has Blackjack!<br> Refresh the page to play again!";
        }
      }
      // both dealer and player busted
      if (totalPlayerHandValue > 21 && totalDealerHandValue > 21) {
        myOutputValue =
          displayHandsAll(playerHand, dealerHand) +
          "<br>" +
          displaySumHandsAll(totalPlayerHandValue, totalDealerHandValue) +
          "<br>" +
          "<br> Oops! Both Player and Dealer Busted! <br> Refresh the page to play again!";
      }
    } // closing bracket for "stand"
  } // closing bracket for whole hit-stand mode
  return myOutputValue;
};
