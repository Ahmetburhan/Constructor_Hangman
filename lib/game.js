
//Random word is selected and exported
var wordsToGuess = [
    'Express JS',
    'Mongo DB',
    'Angular JS',
    'Node JS',
    'html',
    'css',
    'javascript',
    'jquery',
    'ajax',
    'node',
    'ruby',
    'c',
    'php',
    'python',
    'java',
    'sql',
    'mysql',
    'mongo',
    'matlab',
    'firebase',
    'mongoose',
    'express',
    'react',
    'meteor',
    'handlebars'
];;
var randoIndex = Math.floor(Math.random() * wordsToGuess.length);
var randoWord = wordsToGuess[randoIndex];
exports.randoWord = randoWord;

var hangmanGraphics = ["\n\n\n\n\n\n\n-------------", "\n |\n |\n |\n |\n |\n |\n |\n-------------", "____________\n |         |\n |\n |\n |\n |\n |\n-------------", "____________\n |         |\n |         O\n |\n |\n |\n |\n |\n-------------", "____________\n |         |\n |         O\n |         |\n |         |\n |\n |\n |\n-------------", "____________\n |         |\n |         O\n |         |\n |         |\n |        ---\n |\n |\n-------------", "____________\n |         |\n |         O\n |       __|\n |         |\n |        ---\n |\n |\n-------------", "____________\n |         |\n |         O\n |       __|__\n |         |\n |        ---\n |\n |\n-------------", "____________\n |         |\n |         O\n |       __|__\n |         |\n |        ---\n |        |\n |\n-------------", "____________\n |         |\n |         O\n |       __|__\n |         |\n |        ---\n |        | |\n |\n-------------"];

// Export the list of words to other hangman script(s)
exports.hangmanGraphics = hangmanGraphics;

