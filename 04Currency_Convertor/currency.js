"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
console.clear();
var convertMore = true;
console.log(chalk_1.default.blueBright("An currency converter app"));
while (convertMore) {
    var answers = await inquirer_1.default.prompt([
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
    var newAmount = void 0;
    switch (answers.from) {
        case "USD (United States Dollar)":
            switch (answers.to) {
                case "USD (United States Dollar)":
                    console.log("".concat(answers.amount, " USD will be equal to ").concat(answers.amount, " ").concat(answers.to, "."));
                    break;
                case "PKR (Pakistani Rupee)":
                    console.log("".concat(answers.amount, " PKR will be equal to ").concat(answers.amount * 288.98, " ").concat(answers.from, "."));
                    break;
                case "EUR (Euro)":
                    console.log("".concat(answers.amount, " EUR will be equal to ").concat(answers.amount * 0.91, " ").concat(answers.from, "."));
                    break;
                case "GBP (Pound Sterling)":
                    console.log("".concat(answers.amount, " GBP will be equal to ").concat(answers.amount * 0.79, " ").concat(answers.from, "."));
                    break;
                case "SAR (Saudi Riyal)":
                    console.log("".concat(answers.amount, " SAR will be equal to ").concat(answers.amount * 3.75, " ").concat(answers.from, "."));
                    break;
            }
            break;
        case "PKR (Pakistani Rupee)":
            switch (answers.to) {
                case "USD (United States Dollar)":
                    console.log("".concat(answers.amount, " USD will be equal from ").concat(answers.amount * 0.0035, " ").concat(answers.from, "."));
                    break;
                case "PKR (Pakistani Rupee)":
                    console.log("".concat(answers.amount, " PKR will be equal to ").concat(answers.amount, " ").concat(answers.from, "."));
                    break;
                case "EUR (Euro)":
                    console.log("".concat(answers.amount, " EUR will be equal to ").concat(answers.amount * 0.0032, " ").concat(answers.from, "."));
                    break;
                case "GBP (Pound Sterling)":
                    console.log("".concat(answers.amount, " GBP will be equal to ").concat(answers.amount * 0.0027, " ").concat(answers.from, "."));
                    break;
                case "SAR (Saudi Riyal)":
                    console.log("".concat(answers.amount, " SAR will be equal to ").concat(answers.amount * 0.013, " ").concat(answers.from, "."));
                    break;
            }
            break;
        case "EUR (Euro)":
            switch (answers.to) {
                case "USD (United States Dollar)":
                    console.log("".concat(answers.amount, " USD will be equal from ").concat(answers.amount * 1.09, " ").concat(answers.from, "."));
                    break;
                case "PKR (Pakistani Rupee)":
                    console.log("".concat(answers.amount, " PKR will be equal to ").concat(answers.amount * 316.31, " ").concat(answers.from, "."));
                    break;
                case "EUR (Euro)":
                    console.log("".concat(answers.amount, " EUR will be equal to ").concat(answers.amount, " ").concat(answers.from, "."));
                    break;
                case "GBP (Pound Sterling)":
                    console.log("".concat(answers.amount, " GBP will be equal to ").concat(answers.amount * 0.86, " ").concat(answers.from, "."));
                    break;
                case "SAR (Saudi Riyal)":
                    console.log("".concat(answers.amount, " SAR will be equal to ").concat(answers.amount * 4.11, " ").concat(answers.from, "."));
                    break;
            }
            break;
        case "GBP (Pound Sterling)":
            switch (answers.to) {
                case "USD (United States Dollar)":
                    console.log("".concat(answers.amount, " USD will be equal from ").concat(answers.amount * 1.27, " ").concat(answers.from, "."));
                    break;
                case "PKR (Pakistani Rupee)":
                    console.log("".concat(answers.amount, " PKR will be equal to ").concat(answers.amount * 367.09, " ").concat(answers.from, "."));
                    break;
                case "EUR (Euro)":
                    console.log("".concat(answers.amount, " EUR will be equal to ").concat(answers.amount * 1.16, " ").concat(answers.from, "."));
                    break;
                case "GBP (Pound Sterling)":
                    console.log("".concat(answers.amount, " GBP will be equal to ").concat(answers.amount, " ").concat(answers.from, "."));
                    break;
                case "SAR (Saudi Riyal)":
                    console.log("".concat(answers.amount, " SAR will be equal to ").concat(answers.amount * 4.77, " ").concat(answers.from, "."));
                    break;
            }
            break;
        case "SAR (Saudi Riyal)":
            switch (answers.to) {
                case "USD (United States Dollar)":
                    console.log("".concat(answers.amount, " USD will be equal from ").concat(answers.amount * 0.27, " ").concat(answers.from, "."));
                    break;
                case "PKR (Pakistani Rupee)":
                    console.log("".concat(answers.amount, " PKR will be equal to ").concat(answers.amount * 77.03, " ").concat(answers.from, "."));
                    break;
                case "EUR (Euro)":
                    console.log("".concat(answers.amount, " EUR will be equal to ").concat(answers.amount * 0.24, " ").concat(answers.from, "."));
                    break;
                case "GBP (Pound Sterling)":
                    console.log("".concat(answers.amount, " GBP will be equal to ").concat(answers.amount * 0.21, " ").concat(answers.from, "."));
                    break;
                case "SAR (Saudi Riyal)":
                    console.log("".concat(answers.amount, " SAR will be equal to ").concat(answers.amount, " ").concat(answers.from, "."));
                    break;
            }
            break;
    }
    var wannaConvertMore = await inquirer_1.default.prompt({
        type: 'list',
        name: "decission",
        message: "Do you want to convert more currencies?",
        choices: [
            "Yes",
            "No"
        ]
    });
    if (wannaConvertMore.decission == "No") {
        convertMore = false;
        console.log("Okay, Goodbye!");
    }
    console.clear();
}
