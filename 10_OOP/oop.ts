import inquirer from "inquirer";
import chalk from "chalk";
import Person from "./Person.js";
import Student from "./Student.js";

console.clear()

console.log(chalk.bgGray(`I'm gonna tell you your personality`))

async function main() {
    let input : {response: number} = await inquirer.prompt({
        type: "number",
        name: "response",
        message: "Type 1 if you like to talk to others and 2 if you would rather keep to yourself"
    })
    
    let myPerson = new Person();
    myPerson.AskQuestion(input.response);
    console.log(`You are: ${myPerson.GetPersonality()}`);
    
    let userName: {response: string} = await inquirer.prompt({
        type: "input",
        name: "response",
        message: "What is your name?"
    })

    let myStudent = new Student();
    myStudent.Name = userName.response;
    myStudent.AskQuestion(input.response)
    console.log(`Your name is: ${myStudent.Name} and your personality is: ${myStudent.GetPersonality()}`)
}

await main();