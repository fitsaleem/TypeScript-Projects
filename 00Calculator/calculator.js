"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Define functions for each arithmetic operation
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero!");
    }
    return a / b;
}
// Ask the user for the first number
rl.question("Enter first number: ", function (answer1) {
    // Ask the user for the second number
    rl.question("Enter second number: ", function (answer2) {
        // Ask the user for the operation they want to perform
        rl.question("Enter operation (add, subtract, multiply, divide): ", function (operation) {
            var number1 = parseInt(answer1);
            var number2 = parseInt(answer2);
            switch (operation) {
                case "add":
                    console.log("Result: ", add(number1, number2));
                    break;
                case "subtract":
                    console.log("Result: ", subtract(number1, number2));
                    break;
                case "multiply":
                    console.log("Result: ", multiply(number1, number2));
                    break;
                case "divide":
                    console.log("Result: ", divide(number1, number2));
                    break;
                default:
                    console.log("Invalid operation");
            }
            rl.close();
        });
    });
});
