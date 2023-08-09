let inquirer = require('inquirer');
let tasks: string[] = [];

async function main() {
    const { action } = await inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do',
        choices: [
            { name: 'Create a new task', value: 'newTask' },
            { name: 'View tasks', value: 'viewTasks' },
            { name: 'Delete a task', value: 'deleteTask' },
            { name: 'Exit', value: 'exit' }
        ]
    });

    switch (action) {
        case 'newTask':
            const { task } = await inquirer.prompt({
                name: 'task',
                type: 'input',
                message: 'What is the name of the task'
            });
            tasks.push(task);
            console.log(`Task named "${task}" was added`);
            break;
        case 'viewTasks':
            console.log(tasks);
            break;
        case 'deleteTask':
            const { taskToDelete } = await inquirer.prompt({
                name: 'taskToDelete',
                type: 'list',
                message: 'Select a task to delete',
                choices: tasks
            });
            tasks = tasks.filter(task => task !== taskToDelete );
            console.log(`Task named "${taskToDelete}" was deleted`);
            break;
        case 'exit':
            console.log('Bye bye!');
            return;
        default:
            console.log('Action not recognized');
    }

    main();
}

main();
