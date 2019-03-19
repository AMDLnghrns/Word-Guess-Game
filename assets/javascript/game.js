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
console.log(currentWord)

// Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
document.onkeyup = function (event) {
    // Captures the key press, converts it to lowercase, and saves it to a variable.
    var letter = event.key.toLowerCase();
    // If the letter is equal to the computer guess, run the following functions/methods.
    console.log(letter)


    if (currentWord.includes(letter)) {
        wins++;
        console.log(guessesMade);
        guessesLeft = 15;
        guessesMade = [];
        currentWord = options[Math.floor(Math.random() * options.length)];
    } else {
        if (guessesLeft > 1) {
            //For-loop...
            for (var i = 1; i < 2; i++) {
                //...pushing the letter chosen to the guesses made array
                guess = letter;
                guessesMade.push(guess)
            };
            console.log(guessesMade);
            guessesLeft--;
        } else {
            losses++;
            guessesLeft = 15;
            guessesMade = [];
            console.log(guessesMade);
            currentWord = options[Math.floor(Math.random() * options.length)];
        }
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