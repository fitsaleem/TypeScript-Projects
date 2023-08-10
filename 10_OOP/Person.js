"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person() {
        this.personality = "Mystery";
    }
    Person.prototype.AskQuestion = function (answer) {
        if (answer == 1) {
            this.personality = "Extravert";
        }
        else if (answer == 2) {
            this.personality = "Introvert";
        }
        else {
            this.personality = "You are still a mystery";
        }
    };
    Person.prototype.GetPersonality = function () {
        return this.personality;
    };
    return Person;
}());
exports.default = Person;
