"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
// Create readline interface for user input
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Define the quiz questions and answers
var quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["A. London", "B. Paris", "C. Rome", "D. Berlin"],
        answer: "B"
    },
    {
        question: "What is the largest continent?",
        options: ["A. Africa", "B. Europe", "C. Asia", "D. Australia"],
        answer: "C"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["A. Pablo Picasso", "B. Leonardo da Vinci", "C. Vincent van Gogh", "D. Claude Monet"],
        answer: "B"
    }
];
var Quiz = /** @class */ (function () {
    function Quiz() {
        this.score = 0;
        this.currentQuestionIndex = 0;
    }
    Quiz.prototype.startQuiz = function () {
        var _this = this;
        this.displayQuestion();
        rl.on('line', function (answer) {
            _this.checkAnswer(answer.toUpperCase());
        });
    };
    Quiz.prototype.displayQuestion = function () {
        var currentQuestion = quizQuestions[this.currentQuestionIndex];
        console.log("".concat(this.currentQuestionIndex + 1, ". ").concat(currentQuestion.question));
        currentQuestion.options.forEach(function (option) { return console.log(option); });
    };
    Quiz.prototype.checkAnswer = function (answer) {
        var currentQuestion = quizQuestions[this.currentQuestionIndex];
        if (answer === currentQuestion.answer) {
            this.score++;
            console.log("Correct!");
        }
        else {
            console.log("Incorrect!");
        }
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex < quizQuestions.length) {
            this.displayQuestion();
        }
        else {
            this.endQuiz();
        }
    };
    Quiz.prototype.endQuiz = function () {
        console.log("Quiz Finished! Your Score: ".concat(this.score, "/").concat(quizQuestions.length));
        rl.close();
    };
    return Quiz;
}());
// Start the quiz
var quiz = new Quiz();
quiz.startQuiz();
