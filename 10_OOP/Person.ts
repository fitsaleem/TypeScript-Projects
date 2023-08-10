export default class Person {
    private personality : string;

    constructor() {
        this.personality = "Mystery";
    }

    AskQuestion(answer: number) {
        if (answer == 1) {
            this.personality = "Extravert";
        }
        else if (answer == 2) {
            this.personality = "Introvert";
        } else {
            this.personality = "You are still a mystery";
        }
    }

    GetPersonality() : string {
        return this.personality
    }
}