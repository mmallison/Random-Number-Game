// Require the prompt-sync module to allow user input
const prompt = require('prompt-sync')({sigint: true});

function playGame() {

// Generate a random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;

// Set the number of guesses allowed
const maxGuesses = 3;
let numGuesses = 0;

// Loop through the guesses
while (numGuesses < maxGuesses) {
  // Ask the user to guess a number and convert it to an integer
  const guess = parseInt(prompt('Guess a number between 1 and 10: '));

    // Check if the guess is an integer and within range
    if (isNaN(guess) || guess < 1 || guess > 10) {
    console.log("Invalid input. Please enter an integer between 1 and 10.");
    continue;
}

// Check if the guess is too high, too low, or correct
  if (guess === randomNumber) {
    console.log("Correct! You guessed the number.");
    //Restarts the game after correct guess
    playGame();
  } else if (guess > randomNumber) {
    console.log("Too high. Guess again.");
  } else {
    console.log("Too low. Guess again.");
  }

 // Add 1 to number of guesses
  numGuesses++;
}

// After 3 guesses show the correct answer
if (numGuesses === maxGuesses) {
  console.log("Sorry, you're out of guesses. The correct number was " + randomNumber + ".");
  // Restart the game
  playGame();
  
} 

}

//Start the game
playGame();

