var game = require("./lib/game.js");
var wordCons = require("./lib/word.js");
var letterCons = require("./lib/letter.js");
var inquirer = require("inquirer");

// Game header
console.log('**************************************************************************');
console.log('                     Welcome to FullStack Hangman                         ')
console.log('**************************************************************************');
console.log('                 Guess on of the languages you know                            ');

console.log('');
console.log('');

var randoWord = game.randoWord;
var letterGuessed;
exports.letter;

var myWord = new wordCons.wordCons(game.randoWord);
var maxGuesses = 10;

function takeAGuess() {
    console.log(myWord.toString());
    if (myWord.guessesMade.length >= maxGuesses) {
        console.log('You have no more guesses dude. I am sorry try to play a different game that you can win.');
        return; //Game over
    }
    inquirer.prompt([{
        name: 'letter',
        type: 'text',
        message: 'Enter a letter:(i wont accept anything but letter, try and see)',
        validate: function (str) {
            //			if (str.length != 1) return false;
            var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
            return regEx.test(str);
        }
    }]).then(function (letterInput) { //Game control
        var letter = letterInput.letter;
        myWord.findLetter(letter); //Check
        if (myWord.isComplete()) {
            console.log('Yes! It was ' + myWord.toString() + '. You have guessed right!');
            return; //Winner
        }
        console.log('-------------------\n'); //If we are here the game did not end. Next guess.
        console.log('You have ' + (maxGuesses - myWord.guessesMade.length) + ' guesses left brah')
        takeAGuess(); //Recursive call
    }
        );
}

takeAGuess(); //Start Game