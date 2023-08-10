import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query: string): Promise<string> {
    return new Promise((resolve) => rl.question(query, resolve));
}

class Customer {
    name: string;
    address: string;
    accounts: BankAccount[];

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
        this.accounts = [];
    }

    openAccount(account: BankAccount) {
        this.accounts.push(account);
    }
}

interface BankAccount {
    accountNumber: string;
    balance: number;

    deposit(amount: number): void;
    withdraw(amount: number): void;
    getBalance(): number;
    calculateInterest(): number;
    transfer(amount: number, toAccount: BankAccount): void;
}

class SavingsAccount implements BankAccount {
    accountNumber: string;
    balance: number;
    owner: Customer;
    interestRate: number;

    constructor(accountNumber: string, owner: Customer, interestRate: number) {
        this.accountNumber = accountNumber;
        this.balance = 0;
        this.owner = owner;
        this.interestRate = interestRate;
    }

    deposit(amount: number) {
        this.balance += amount;
    }

    withdraw(amount: number) {
        if (amount > this.balance) {
            console.log('Insufficient balance');
            return;
        }
        this.balance -= amount;
    }

    getBalance() {
        return this.balance;
    }

    calculateInterest() {
        return this.balance * this.interestRate;
    }

    transfer(amount: number, toAccount: BankAccount) {
        if (amount > this.balance) {
            console.log('Insufficient balance');
            return;
        }
        this.withdraw(amount);
        toAccount.deposit(amount);
    }
}

async function main() {
    let name = await askQuestion("Enter your name: ");
    let address = await askQuestion("Enter your address: ");
    let accountNumber = await askQuestion("Enter your account number: ");
    let interestRate = parseFloat(await askQuestion("Enter your interest rate: "));

    let customer = new Customer(name, address);
    let account = new SavingsAccount(accountNumber, customer, interestRate);
    customer.openAccount(account);

    let operation = await askQuestion("Do you want to deposit or withdraw money? (deposit/withdraw): ");
    if (operation.toLowerCase() === 'deposit') {
        let depositAmount = parseFloat(await askQuestion("Enter deposit amount: "));
        account.deposit(depositAmount);
        console.log(`Balance after deposit: ${account.getBalance()}`);
    } else if (operation.toLowerCase() === 'withdraw') {
        let withdrawAmount = parseFloat(await askQuestion("Enter withdrawal amount: "));
        account.withdraw(withdrawAmount);
        console.log(`Balance after withdrawal: ${account.getBalance()}`);
    } else {
        console.log("Invalid operation. Please enter either 'deposit' or 'withdraw'.");
    }

    console.log(`Interest: ${account.calculateInterest()}`);

    rl.close();
}

main();
