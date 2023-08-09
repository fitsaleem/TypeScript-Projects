import * as readline from './node_modules/readline';
import { v4 as uuidv4 } from 'uuid';

// Create interface for user accounts
interface Account {
    id: string;
    pin: string;
    balance: number;
}

// Generate some random accounts
let accounts: Account[] = Array.from({length: 5}, () => {
    return {
        id: uuidv4(),
        pin: Math.floor(Math.random() * 8999 + 1000).toString(),
        balance: Math.floor(Math.random()*1000),
    };
});

// Print out generated accounts
accounts.forEach(account => {
    console.log(account);
});

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Log into an account
function login() {
    rl.question("Enter your account ID: ", id => {
        rl.question("Enter your PIN: ", pin => {
            let account = accounts.find(account => account.id === id && account.pin === pin);

            if (account) {
                console.log("Login successful!");
                atmMenu(account);
            } else {
                console.log("Invalid account ID or PIN.");
                login();
            }
        });
    });
}

// ATM menu 
function atmMenu(account: Account) {
    rl.question("Enter a command (balance, deposit, withdraw, logout): ", command => {
        switch (command) {
            case "balance":
                console.log(`Your balance is $${account.balance}`);
                atmMenu(account);
                break;
            case "deposit":
                rl.question("Enter the amount to deposit: ", amountStr => {
                    let amount = parseInt(amountStr);

                    if (isNaN(amount)) {
                        console.error("Invalid amount!");
                        atmMenu(account);
                    } else {
                        account.balance += amount;
                        console.log(`Successfully deposited $${amount}. New balance is $${account.balance}`);
                        atmMenu(account);
                    }
                });
                break;
            case "withdraw":
                rl.question("Enter the amount to withdraw: ", amountStr => {
                    let amount = parseInt(amountStr);

                    if (isNaN(amount)) {
                        console.error("Invalid amount!");
                        atmMenu(account);
                    } else if (amount > account.balance) {
                        console.error("Insufficient balance!");
                        atmMenu(account);
                    } else {
                        account.balance -= amount;
                        console.log(`Successfully withdrew $${amount}. New balance is $${account.balance}`);
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
