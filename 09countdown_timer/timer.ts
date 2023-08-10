import chalk from "chalk";

console.clear()
console.log(chalk.bgGray(`Welcome to the countdown Timer`))

interface Time {
    hours: number,
    minutes: number,
    seconds: number
}

let validInput: boolean = false;

let setTime: Time = {hours: 0, minutes: 0, seconds: 0};

async function getInput() {
    const inquirer = await import("inquirer");

    while (!validInput) {
        let targetTime: Time = await inquirer.prompt([
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
        ])
        
        if (targetTime.seconds < 60 || targetTime.minutes < 60) {
            validInput = true;
            setTime = targetTime;
        } else {
            console.log(chalk.red(`Please set seconds/minutes between 0 and 59 inclusive`))
        }
    }
}

console.clear()

function startCountdown(duration: number) {
    let remainingTime = duration;

    const interval = setInterval(() => {
        const hours = Math.floor(remainingTime / 60 / 60)
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;

        if (hours == 0 && minutes == 0 && seconds < 60) {
            process.stdout.write(chalk.red(`Time remaining: ${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}\r`));
        } else {
            process.stdout.write(chalk.green(`Time remaining: ${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}\r`));
        }

        if (remainingTime <= 0) {
            clearInterval(interval);
            console.log(chalk.bgGreen('\nCountdown finished!'));
        }

        remainingTime--;
    }, 1000);
}

async function main() {
    await getInput();

    const countdownDuration = (setTime.hours * 60 * 60) + (setTime.minutes * 60) + setTime.seconds; 
    startCountdown(countdownDuration);
}

main();
