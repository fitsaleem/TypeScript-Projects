import  inquirer from "inquirer";
import chalk from "chalk";

console.clear();

let convertMore : boolean = true;

console.log(chalk.blueBright("An currency converter app"))

while (convertMore) {
    const answers : { from: string, to: string, amount: number } = await inquirer.prompt(
    [
        {
            type: "list",
            name: "from",
            message: "Select currency to convert from: ",
            choices: [
                "USD (United States Dollar)",
                "PKR (Pakistani Rupee)",
                "EUR (Euro)",
                "GBP (Pound Sterling)",
                "SAR (Saudi Riyal)"
            ]
        },
        {
            type: "list",
            name: "to",
            message: "Select currency to convert into: ",
            choices: [
                "USD (United States Dollar)",
                "PKR (Pakistani Rupee)",
                "EUR (Euro)",
                "GBP (Pound Sterling)",
                "SAR (Saudi Riyal)"
            ]
        },
        {
            type: "number",
            name: "amount",
            message: "Enter amount to convert: ",
        }
    ]);        
    
    console.clear();

    let newAmount : number;
    switch (answers.from) {
        case "USD (United States Dollar)":
            switch (answers.to) {
                case "USD (United States Dollar)":
                    console.log(`${answers.amount} USD will be equal to ${answers.amount} ${answers.to}.`)
                    break;
                case "PKR (Pakistani Rupee)":
                    console.log(`${answers.amount} PKR will be equal to ${answers.amount * 288.98} ${answers.from}.`)
                    break;
                case "EUR (Euro)":
                    console.log(`${answers.amount} EUR will be equal to ${answers.amount * 0.91} ${answers.from}.`)
                    break;
                case "GBP (Pound Sterling)":
                    console.log(`${answers.amount} GBP will be equal to ${answers.amount * 0.79} ${answers.from}.`)
                    break;
                case "SAR (Saudi Riyal)":
                    console.log(`${answers.amount} SAR will be equal to ${answers.amount * 3.75} ${answers.from}.`)
                    break;
            }
            break;
        case "PKR (Pakistani Rupee)":
            switch (answers.to) {
                case "USD (United States Dollar)":        
                    console.log(`${answers.amount} USD will be equal from ${answers.amount * 0.0035} ${answers.from}.`)
                    break;
                case "PKR (Pakistani Rupee)":
                    console.log(`${answers.amount} PKR will be equal to ${answers.amount} ${answers.from}.`)
                    break;
                case "EUR (Euro)":
                    console.log(`${answers.amount} EUR will be equal to ${answers.amount * 0.0032} ${answers.from}.`)
                    break;
                case "GBP (Pound Sterling)":
                    console.log(`${answers.amount} GBP will be equal to ${answers.amount * 0.0027} ${answers.from}.`)
                    break;
                case "SAR (Saudi Riyal)":
                    console.log(`${answers.amount} SAR will be equal to ${answers.amount * 0.013} ${answers.from}.`)
                    break;        
            }
            break;
        case "EUR (Euro)":
            switch (answers.to) {
                case "USD (United States Dollar)":        
                    console.log(`${answers.amount} USD will be equal from ${answers.amount * 1.09} ${answers.from}.`)
                    break;
                case "PKR (Pakistani Rupee)":
                    console.log(`${answers.amount} PKR will be equal to ${answers.amount * 316.31} ${answers.from}.`)
                    break;
                case "EUR (Euro)":
                    console.log(`${answers.amount} EUR will be equal to ${answers.amount} ${answers.from}.`)
                    break;
                case "GBP (Pound Sterling)":
                    console.log(`${answers.amount} GBP will be equal to ${answers.amount * 0.86} ${answers.from}.`)
                    break;
                case "SAR (Saudi Riyal)":
                    console.log(`${answers.amount} SAR will be equal to ${answers.amount * 4.11} ${answers.from}.`)
                    break;
            }
            break;
        case "GBP (Pound Sterling)":
            switch (answers.to) {
                case "USD (United States Dollar)":        
                    console.log(`${answers.amount} USD will be equal from ${answers.amount * 1.27} ${answers.from}.`)
                    break;
                case "PKR (Pakistani Rupee)":
                    console.log(`${answers.amount} PKR will be equal to ${answers.amount * 367.09} ${answers.from}.`)
                    break;
                case "EUR (Euro)":
                    console.log(`${answers.amount} EUR will be equal to ${answers.amount * 1.16} ${answers.from}.`)
                    break;
                case "GBP (Pound Sterling)":
                    console.log(`${answers.amount} GBP will be equal to ${answers.amount} ${answers.from}.`)
                    break;
                case "SAR (Saudi Riyal)":
                    console.log(`${answers.amount} SAR will be equal to ${answers.amount * 4.77} ${answers.from}.`)
                    break;
            }
            break;
        case "SAR (Saudi Riyal)":
            switch (answers.to) {
                case "USD (United States Dollar)":        
                    console.log(`${answers.amount} USD will be equal from ${answers.amount * 0.27} ${answers.from}.`)
                    break;
                case "PKR (Pakistani Rupee)":
                    console.log(`${answers.amount} PKR will be equal to ${answers.amount * 77.03} ${answers.from}.`)
                    break;
                case "EUR (Euro)":
                    console.log(`${answers.amount} EUR will be equal to ${answers.amount * 0.24} ${answers.from}.`)
                    break;
                case "GBP (Pound Sterling)":
                    console.log(`${answers.amount} GBP will be equal to ${answers.amount * 0.21} ${answers.from}.`)
                    break;
                case "SAR (Saudi Riyal)":
                    console.log(`${answers.amount} SAR will be equal to ${answers.amount} ${answers.from}.`)
                    break;
            }
            break;

    }

    let wannaConvertMore : { decission : string } = await inquirer.prompt({
        type: 'list',
        name: "decission",
        message: "Do you want to convert more currencies?",
        choices: [
            "Yes",
            "No"
        ]
    })
        
    if (wannaConvertMore.decission == "No") {
        convertMore = false;
        console.log("Okay, Goodbye!");
    }
    
    console.clear()
}