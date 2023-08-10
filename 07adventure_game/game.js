"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
// Create readline interface for user input
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var Game = /** @class */ (function () {
    function Game() {
        this.story = [
            "You wake up in a dark forest. There are two paths ahead of you.",
            "To your left, you see a path leading deeper into the forest.",
            "To your right, you see a dim light in the distance."
        ];
        this.currentStoryIndex = 0;
        this.inventory = [];
        this.health = 100;
    }
    Game.prototype.playGame = function () {
        var _this = this;
        this.printStory();
        rl.question("What do you want to do? (1. Go left, 2. Go right): ", function (answer) {
            if (answer === "1") {
                _this.goLeft();
            }
            else if (answer === "2") {
                _this.goRight();
            }
            else {
                _this.playGame();
            }
        });
    };
    Game.prototype.printStory = function () {
        console.log(this.story[this.currentStoryIndex]);
    };
    Game.prototype.goLeft = function () {
        console.log("You decide to go left and venture deeper into the forest.");
        this.currentStoryIndex++;
        if (this.currentStoryIndex < this.story.length) {
            this.playGame();
        }
        else {
            this.endGame();
        }
    };
    Game.prototype.goRight = function () {
        var _this = this;
        console.log("You decide to go right towards the dim light.");
        // Add your logic for the right path here
        console.log("You found a key! You add it to your inventory.");
        this.inventory.push("Key");
        rl.question("What do you want to do next? (1. Go back, 2. Open the door): ", function (answer) {
            if (answer === "1") {
                _this.goBack();
            }
            else if (answer === "2") {
                _this.openDoor();
            }
            else {
                _this.goRight();
            }
        });
    };
    Game.prototype.goBack = function () {
        console.log("You decide to go back to the previous path.");
        this.playGame();
    };
    Game.prototype.openDoor = function () {
        console.log("You use the key to open the door.");
        console.log("Congratulations! You escaped the forest and completed the game.");
        this.endGame();
    };
    Game.prototype.endGame = function () {
        console.log("Game Over");
        console.log("Final Inventory: ", this.inventory);
        console.log("Final Health: ", this.health);
        rl.close();
    };
    return Game;
}());
// Start the game
var game = new Game();
game.playGame();
