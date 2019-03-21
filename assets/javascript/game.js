// VARIABLES 
// ======================================================================================================

//Choices for the game
var options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Starting number of Wins
var wins = 0;

//Starting number of losses
var losses = 0;

//Starting number of guesses left
var guessesLeft = 15;

//Creating an empty array for guesses
var guessesMade = [];
var guess;

//Creating words in the game
var wordOptions = ['Great Smoky Mountains', 'Grand Canyon', 'Yosemite Valley', 'Rocky Mountains', 'Zion', 'Yellowstone', 'Grand Teton', 'Glacier', 'Joshua Tree', 'Cuyahoga Valley', 'Bryce Canyon', 'Hawaii Volcanoes', 'Hot Springs', 'Shenandoah', 'Mount Rainier', 'Death Valley', 'Halekala', 'Sequoia', 'Capitol Reef', 'Badlands', 'Everglades', 'Saguaro', 'Canyonlands', 'Crater Lake', 'Theodore Roosevelt', 'Petrified Forest', 'Wind Cave', 'Kings Canyon', 'Denali', 'Mammoth Cave', 'Mesa Verde', 'Redwood', 'Lassen Volcanic', 'Glacier Bay', 'Biscayne', 'Carlsbad Caverns', 'Virgin Islands', 'Great Sand Dunes', 'Big Bend', 'Channel Islands', 'Kenai Fjords', 'Voyageurs', 'Black Canyon of the Gunnison', 'Pinnacles', 'Guadalupe', 'Great Basin', 'Congaree', 'Wrangell St', 'Dry Tortugas', 'Katmai', 'American Samoa', 'North Cascades', 'Isle Royale', 'Lake Clarke', 'Kobuk Valley', 'Gates of the Arctic'];
var currentWord = wordOptions[Math.floor(Math.random() * options.length)].split(/(?!$)/u);
var splice = currentWord.join(' ');
var lowerSplice = splice.toLowerCase();
console.log(lowerSplice);

// Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
document.onkeyup = function (event) {
    // Captures the key press, converts it to lowercase, and saves it to a variable.
    var letter = event.key.toLowerCase();
    // If the letter is equal to the computer guess, run the following functions/methods.
    console.log(letter);

    if (lowerSplice.includes(letter)) {
        alert('Yes');
        console.log(guessesMade);
    } else {
        // For-loop...
        for (var i = 1; i < 2; i++) {
            //...pushing the letter chosen to the guesses made array
            guess = letter;
            guessesMade.push(guess)
        };
        console.log(guessesMade);
        guessesLeft--;
        console.log(guessesLeft);
    }
}

var html = "<p>Press any key to get started!</p>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Current word: </p>" +
    "<p>Current losses: " + losses + "</p>"+
    currentWord +
    "<p>--------------------------------</p>" +
    "<p>Number of guesses remaining: " + guessesLeft + "</p>" +
    "<p>Guessed letters: " + guessesMade + "</p>";

document.querySelector('#Stats').innerHTML = html;


// need to find a way to hide the letters
// need to find 


// loop to replace the letters
// indexOf to find if value is in the array (if -1, not in the list)

// Notes:
// if user guesses a correct letter, they still have more guesses and they still haven't solved the word
//     push letter to guesses array: 
//         // For-loop...
//             for (var i = 1; i < 2; i++) {
//             //...pushing the letter chosen to the guesses made array
//             guess = letter;
//             guessesMade.push(guess)
//         };
//     lower guesses left by one: guessesLeft--;

// if the user solves the word:
//     add one to wins: wins++;
//     reset guessesleft: guessesLeft = 15;
//     reset word: currentWord = options[Math.floor(Math.random() * options.length)];
//     set guesses made to blank: guessesMade = [];

// if the user fails to solve the word:
//     add one to losses: losses++;
//     reset guessesleft: guessesLeft = 15;
//     reset word: currentWord = options[Math.floor(Math.random() * options.length)];
//     set guesses made to blank: guessesMade = [];    







