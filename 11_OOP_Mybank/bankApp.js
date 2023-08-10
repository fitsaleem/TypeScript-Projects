"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function askQuestion(query) {
    return new Promise(function (resolve) { return rl.question(query, resolve); });
}
var Customer = /** @class */ (function () {
    function Customer(name, address) {
        this.name = name;
        this.address = address;
        this.accounts = [];
    }
    Customer.prototype.openAccount = function (account) {
        this.accounts.push(account);
    };
    return Customer;
}());
var SavingsAccount = /** @class */ (function () {
    function SavingsAccount(accountNumber, owner, interestRate) {
        this.accountNumber = accountNumber;
        this.balance = 0;
        this.owner = owner;
        this.interestRate = interestRate;
    }
    SavingsAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    SavingsAccount.prototype.withdraw = function (amount) {
        if (amount > this.balance) {
            console.log('Insufficient balance');
            return;
        }
        this.balance -= amount;
    };
    SavingsAccount.prototype.getBalance = function () {
        return this.balance;
    };
    SavingsAccount.prototype.calculateInterest = function () {
        return this.balance * this.interestRate;
    };
    SavingsAccount.prototype.transfer = function (amount, toAccount) {
        if (amount > this.balance) {
            console.log('Insufficient balance');
            return;
        }
        this.withdraw(amount);
        toAccount.deposit(amount);
    };
    return SavingsAccount;
}());
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var name, address, accountNumber, interestRate, _a, customer, account, operation, depositAmount, _b, withdrawAmount, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, askQuestion("Enter your name: ")];
                case 1:
                    name = _d.sent();
                    return [4 /*yield*/, askQuestion("Enter your address: ")];
                case 2:
                    address = _d.sent();
                    return [4 /*yield*/, askQuestion("Enter your account number: ")];
                case 3:
                    accountNumber = _d.sent();
                    _a = parseFloat;
                    return [4 /*yield*/, askQuestion("Enter your interest rate: ")];
                case 4:
                    interestRate = _a.apply(void 0, [_d.sent()]);
                    customer = new Customer(name, address);
                    account = new SavingsAccount(accountNumber, customer, interestRate);
                    customer.openAccount(account);
                    return [4 /*yield*/, askQuestion("Do you want to deposit or withdraw money? (deposit/withdraw): ")];
                case 5:
                    operation = _d.sent();
                    if (!(operation.toLowerCase() === 'deposit')) return [3 /*break*/, 7];
                    _b = parseFloat;
                    return [4 /*yield*/, askQuestion("Enter deposit amount: ")];
                case 6:
                    depositAmount = _b.apply(void 0, [_d.sent()]);
                    account.deposit(depositAmount);
                    console.log("Balance after deposit: ".concat(account.getBalance()));
                    return [3 /*break*/, 10];
                case 7:
                    if (!(operation.toLowerCase() === 'withdraw')) return [3 /*break*/, 9];
                    _c = parseFloat;
                    return [4 /*yield*/, askQuestion("Enter withdrawal amount: ")];
                case 8:
                    withdrawAmount = _c.apply(void 0, [_d.sent()]);
                    account.withdraw(withdrawAmount);
                    console.log("Balance after withdrawal: ".concat(account.getBalance()));
                    return [3 /*break*/, 10];
                case 9:
                    console.log("Invalid operation. Please enter either 'deposit' or 'withdraw'.");
                    _d.label = 10;
                case 10:
                    console.log("Interest: ".concat(account.calculateInterest()));
                    rl.close();
                    return [2 /*return*/];
            }
        });
    });
}
main();
