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
        console.log('');
        console.log('You have no more guesses dude. I am sorry try to play a different game that you can win.');
        console.log('');
        console.log('XXXXXXXXXX                                                                     XX');
        console.log('XXX                                                                             XXX');
        console.log('XX                                                                               XX  X');
        console.log('XX                                                                               XX   X');
        console.log('X                                                                               XX    X');
        console.log('XX                                                                XXXXXX         X     X');
        console.log('X     XXXXXXXXXXXX      XXXXXXXX X    XXXXX          XXX        XX     X         X     X XX     X   XXXXXX    XXXXXX');
        console.log('X             XXX     XX       XXX    XX   XX     XXXX XX      X      XX        X      X  X    XX   X   XX    X    X');
        console.log('XX              XX    X          X    X      X XXX      X     XX     XX         X     XX  X   XX    X XXX     X');
        console.log('X                X    X          XX   X       XX        X     X    XXX         X      X    X  X     XXX       X');
        console.log('X                X    X          XX   X       XX        X    XXXXXX            X      X    X XX     X         X');
        console.log('XXX             XX    X          XX   X        X        X     XX       X       X     X     XXX      X        XX');
        console.log('   XXXX         XX     XXX    XXXXX    XX       X        X      X      XX       X   XX       XX      X   XX   XX');
        console.log('      XXXXXXXXXXX        XXXXXX   X     X       X        X       XXXXXXX        XXXXX        X       XXXXX    X');
        console.log('');
        console.log('');



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