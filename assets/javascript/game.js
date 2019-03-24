//Game words
var characters = ['mountains', 'canyon', 'rocky', 'zion', 'glacier','wind cave', 'denali','biscayne','kenai fjords','basin','isle', 'lake'];
//Word that is selected from 
var secretWord = '';
//user's array that stores "_" blanks initially
var usersArray = [];
//letters used
var wrongWordArray = [];
//puts selected word into array of strings
var logged = "";
//stores which index the userInput equals inside of the logged[]
var indx;
//key the user pressed
var userInput = "";


//Starting number of wins
var wins = 0;
//Starting number of losses
var losses = 0;
//Starting number of guesses
var guessesLeft = 0;


//vars with document id's for html printing
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var currentWord = document.getElementById("currentWord");
var guessesLeftText = document.getElementById("guessesLeft");
var lettersUsed = document.getElementById("lettersUsed");


//initializes the game and calles for a new word
function start() {
  wins = 0;
  losses = 0;
  guessesLeft = 6;
  updateData();
  getSecretWord();
}


//updates any page displayed stats
function updateData() {
  winsText.innerHTML = wins;
  lossesText.innerHTML = losses;
  currentWord.innerHTML = usersArray.join(" ");
  guessesLeftText.innerHTML = guessesLeft;
  lettersUsed.innerHTML = wrongWordArray;
}


//select new word, adds to logged, replaces letters with "_" and pushes to usersArray[]
function getSecretWord() {
  secretWord = characters[Math.floor(Math.random() * characters.length)];
  logged = secretWord.split("");
  for (var x = 0; x < logged.length; x++) {
    usersArray.push("_");
  }
  updateData();
  console.log(secretWord);
}


//records input from user
document.onkeyup = function(event) {
  userInput = event.key.toLowerCase();
  console.log(userInput);
  if (guessesLeft > 0) {
    indx = logged.indexOf(userInput);
    if (userInput == logged[indx]) {
      //if correct prints to document, update stats
      usersArray[indx] = userInput;
      updateData();
      gameWin();
    } else {
      //incorrect guess logs wrong guess, decrement guessesLeft
      guessesLeft--;
      wrongWordArray.push(userInput);
      updateData();
    }
  } else {
    //at loss, increase losses and reset game with new word
    losses++;
    guessesLeft = 6;
    usersArray = [];
    wrongWordArray = [];
    updateData();
    getSecretWord();
  }
};


//restarts game upon win/correct word guess
function gameWin() {
  if (usersArray.toString() == logged.toString()) {
    wins++;
    guessesLeft = 6
    usersArray = [];
    updateData();
    getSecretWord();
  }
}


start();









// //Starting number of Wins
// var wins = 0;

// //Starting number of losses
// var losses = 0;

// //Starting number of guesses left
// var guessesLeft = 15;

// //Creating an empty array for guesses
// var guessesMade = [];
// var guess;

// //Creating words in the game
// var currentWord = wordOptions[Math.floor(Math.random() * options.length)].split(/(?!$)/u);
// var splice = currentWord.join(' ');
// var lowerSplice = splice.toLowerCase();
// console.log(lowerSplice);

// // Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
// document.onkeyup = function (event) {
//     // Captures the key press, converts it to lowercase, and saves it to a variable.
//     var letter = event.key.toLowerCase();
//     // If the letter is equal to the computer guess, run the following functions/methods.
//     console.log(letter);

//     if (lowerSplice.includes(letter)) {
//         alert('Yes');
//         console.log(guessesMade);
//     } else {
//         // For-loop...
//         for (var i = 1; i < 2; i++) {
//             //...pushing the letter chosen to the guesses made array
//             guess = letter;
//             guessesMade.push(guess)
//         };
//         console.log(guessesMade);
//         guessesLeft--;
//         console.log(guessesLeft);
//     }
// }






