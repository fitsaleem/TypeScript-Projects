"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var uuid_1 = require("uuid");
// Generate some random accounts
var accounts = Array.from({ length: 5 }, function () {
    return {
        id: (0, uuid_1.v4)(),
        pin: Math.floor(Math.random() * 8999 + 1000).toString(),
        balance: Math.floor(Math.random() * 1000),
    };
});
// Print out generated accounts
accounts.forEach(function (account) {
    console.log(account);
});
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Log into an account
function login() {
    rl.question("Enter your account ID: ", function (id) {
        rl.question("Enter your PIN: ", function (pin) {
            var account = accounts.find(function (account) { return account.id === id && account.pin === pin; });
            if (account) {
                console.log("Login successful!");
                atmMenu(account);
            }
            else {
                console.log("Invalid account ID or PIN.");
                login();
            }
        });
    });
}
// ATM menu 
function atmMenu(account) {
    rl.question("Enter a command (balance, deposit, withdraw, logout): ", function (command) {
        switch (command) {
            case "balance":
                console.log("Your balance is $".concat(account.balance));
                atmMenu(account);
                break;
            case "deposit":
                rl.question("Enter the amount to deposit: ", function (amountStr) {
                    var amount = parseInt(amountStr);
                    if (isNaN(amount)) {
                        console.error("Invalid amount!");
                        atmMenu(account);
                    }
                    else {
                        account.balance += amount;
                        console.log("Successfully deposited $".concat(amount, ". New balance is $").concat(account.balance));
                        atmMenu(account);
                    }
                });
                break;
            case "withdraw":
                rl.question("Enter the amount to withdraw: ", function (amountStr) {
                    var amount = parseInt(amountStr);
                    if (isNaN(amount)) {
                        console.error("Invalid amount!");
                        atmMenu(account);
                    }
                    else if (amount > account.balance) {
                        console.error("Insufficient balance!");
                        atmMenu(account);
                    }
                    else {
                        account.balance -= amount;
                        console.log("Successfully withdrew $".concat(amount, ". New balance is $").concat(account.balance));
                        atmMenu(account);
                    }
                });
                break;
            case "logout":
                console.log("Logged out successfully!");
                rl.close();
                break;
            default:
                console.error("Invalid command");
                atmMenu(account);
        }
    });
}
login();
