import * as readline from 'readline';

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Define functions for each arithmetic operation
function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function divide(a: number, b: number): number {
    if(b === 0) {
        throw new Error("Cannot divide by zero!");
    }
    return a/b;
}

// Ask the user for the first number
rl.question("Enter first number: ", (answer1)=>{
    // Ask the user for the second number
    rl.question("Enter second number: ", (answer2)=>{
         // Ask the user for the operation they want to perform
        rl.question("Enter operation (add, subtract, multiply, divide): ", (operation) => {

            let number1 = parseInt(answer1);
            let number2 = parseInt(answer2);

            switch(operation) {
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
