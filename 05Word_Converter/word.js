"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
// Create readline interface for user input
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter an english paragraph: ', function (paragraph) {
    // Remove spaces from paragraph
    var noSpaceString = paragraph.replace(/\s/g, '');
    var characters = noSpaceString.length;
    // Split paragraph into an array of words
    var words = paragraph.split(' ').length;
    console.log("The paragraph has ".concat(characters, " characters (excluding spaces) and ").concat(words, " words."));
    rl.close();
});
