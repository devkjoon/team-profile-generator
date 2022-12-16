const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'manager',
            message: `What is the team manager's name?`,
            validate: (managerInput) => {
                if (managerInput) {
                    return true;
                } else { 
                    console.log("Please enter your name to continue!");
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'What is your employee ID?',
            validate: (idInput) => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter your employee ID to continue!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
            validate: (emailInput) => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter your email to continue!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: (githubInput) => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter your GitHub username to continue!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is your office number?',
            validate: (officeInput) => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("Please enter your office number to continue!");
                    return false;
                }
            }
        }
    ])