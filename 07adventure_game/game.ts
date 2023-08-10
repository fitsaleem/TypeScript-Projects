import * as readline from 'readline';

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  private story: string[];
  private currentStoryIndex: number;
  private inventory: string[];
  private health: number;

  constructor() {
    this.story = [
      "You wake up in a dark forest. There are two paths ahead of you.",
      "To your left, you see a path leading deeper into the forest.",
      "To your right, you see a dim light in the distance."
    ];
    this.currentStoryIndex = 0;
    this.inventory = [];
    this.health = 100;
  }

  playGame(): void {
    this.printStory();

    rl.question("What do you want to do? (1. Go left, 2. Go right): ", (answer) => {
      if (answer === "1") {
        this.goLeft();
      } else if (answer === "2") {
        this.goRight();
      } else {
        this.playGame();
      }
    });
  }

  printStory(): void {
    console.log(this.story[this.currentStoryIndex]);
  }

  goLeft(): void {
    console.log("You decide to go left and venture deeper into the forest.");
    this.currentStoryIndex++;

    if (this.currentStoryIndex < this.story.length) {
      this.playGame();
    } else {
      this.endGame();
    }
  }

  goRight(): void {
    console.log("You decide to go right towards the dim light.");

    // Add your logic for the right path here
    console.log("You found a key! You add it to your inventory.");
    this.inventory.push("Key");

    rl.question("What do you want to do next? (1. Go back, 2. Open the door): ", (answer) => {
      if (answer === "1") {
        this.goBack();
      } else if (answer === "2") {
        this.openDoor();
      } else {
        this.goRight();
      }
    });
  }

  goBack(): void {
    console.log("You decide to go back to the previous path.");
    this.playGame();
  }

  openDoor(): void {
    console.log("You use the key to open the door.");
    console.log("Congratulations! You escaped the forest and completed the game.");
    this.endGame();
  }

  endGame(): void {
    console.log("Game Over");
    console.log("Final Inventory: ", this.inventory);
    console.log("Final Health: ", this.health);
    rl.close();
  }
}

// Start the game
const game = new Game();
game.playGame();
