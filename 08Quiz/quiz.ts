import * as readline from 'readline';

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define the quiz questions and answers
const quizQuestions = [
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

class Quiz {
  private score: number;
  private currentQuestionIndex: number;

  constructor() {
    this.score = 0;
    this.currentQuestionIndex = 0;
  }

  startQuiz(): void {
    this.displayQuestion();

    rl.on('line', (answer) => {
      this.checkAnswer(answer.toUpperCase());
    });
  }

  displayQuestion(): void {
    const currentQuestion = quizQuestions[this.currentQuestionIndex];
    console.log(`${this.currentQuestionIndex + 1}. ${currentQuestion.question}`);
    currentQuestion.options.forEach(option => console.log(option));
  }

  checkAnswer(answer: string): void {
    const currentQuestion = quizQuestions[this.currentQuestionIndex];

    if (answer === currentQuestion.answer) {
      this.score++;
      console.log("Correct!");
    } else {
      console.log("Incorrect!");
    }

    this.currentQuestionIndex++;

    if (this.currentQuestionIndex < quizQuestions.length) {
      this.displayQuestion();
    } else {
      this.endQuiz();
    }
  }

  endQuiz(): void {
    console.log(`Quiz Finished! Your Score: ${this.score}/${quizQuestions.length}`);
    rl.close();
  }
}

// Start the quiz
const quiz = new Quiz();
quiz.startQuiz();
