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
var chalk_1 = require("chalk");
console.clear();
console.log(chalk_1.default.bgGray("Welcome to the countdown Timer"));
var validInput = false;
var setTime = { hours: 0, minutes: 0, seconds: 0 };
function getInput() {
    return __awaiter(this, void 0, void 0, function () {
        var inquirer, targetTime;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.resolve().then(function () { return require("inquirer"); })];
                case 1:
                    inquirer = _a.sent();
                    _a.label = 2;
                case 2:
                    if (!!validInput) return [3 /*break*/, 4];
                    return [4 /*yield*/, inquirer.prompt([
                            {
                                type: "number",
                                name: "hours",
                                message: "Enter hours: "
                            },
                            {
                                type: "number",
                                name: "minutes",
                                message: "Enter minutes: "
                            },
                            {
                                type: "number",
                                name: "seconds",
                                message: "Enter seconds: "
                            }
                        ])];
                case 3:
                    targetTime = _a.sent();
                    if (targetTime.seconds < 60 || targetTime.minutes < 60) {
                        validInput = true;
                        setTime = targetTime;
                    }
                    else {
                        console.log(chalk_1.default.red("Please set seconds/minutes between 0 and 59 inclusive"));
                    }
                    return [3 /*break*/, 2];
                case 4: return [2 /*return*/];
            }
        });
    });
}
console.clear();
function startCountdown(duration) {
    var remainingTime = duration;
    var interval = setInterval(function () {
        var hours = Math.floor(remainingTime / 60 / 60);
        var minutes = Math.floor(remainingTime / 60);
        var seconds = remainingTime % 60;
        if (hours == 0 && minutes == 0 && seconds < 60) {
            process.stdout.write(chalk_1.default.red("Time remaining: ".concat(hours < 10 ? '0' : '').concat(hours, ":").concat(minutes < 10 ? '0' : '').concat(minutes, ":").concat(seconds < 10 ? '0' : '').concat(seconds, "\r")));
        }
        else {
            process.stdout.write(chalk_1.default.green("Time remaining: ".concat(hours < 10 ? '0' : '').concat(hours, ":").concat(minutes < 10 ? '0' : '').concat(minutes, ":").concat(seconds < 10 ? '0' : '').concat(seconds, "\r")));
        }
        if (remainingTime <= 0) {
            clearInterval(interval);
            console.log(chalk_1.default.bgGreen('\nCountdown finished!'));
        }
        remainingTime--;
    }, 1000);
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var countdownDuration;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getInput()];
                case 1:
                    _a.sent();
                    countdownDuration = (setTime.hours * 60 * 60) + (setTime.minutes * 60) + setTime.seconds;
                    startCountdown(countdownDuration);
                    return [2 /*return*/];
            }
        });
    });
}
main();
