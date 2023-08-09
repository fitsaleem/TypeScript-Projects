import * as readline from 'readline';

// Create readline interface for user input
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter an english paragraph: ', paragraph => {
  // Remove spaces from paragraph
  const noSpaceString = paragraph.replace(/\s/g, '');
  const characters = noSpaceString.length;

  // Split paragraph into an array of words
  const words = paragraph.split(' ').length;

  console.log(`The paragraph has ${characters} characters (excluding spaces) and ${words} words.`);

  rl.close();
});
