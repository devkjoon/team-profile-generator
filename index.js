const inquirer = require('inquirer');
const fs = require('fs');

let teamMembers = [];
let teamIDs = [];

inquirer
    .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the your name?',
            validate: (input) => {
                if (input) {
                    return true;
                } else { 
                    console.log("Please enter your name to continue!");
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'What is your employee ID?',
            validate: (input) => {
                if (input) {
                    return true;
                } else {
                    console.log("Please enter your employee ID to continue!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is your email address?',
            validate: (input) => {
                if (input) {
                    return true;
                } else {
                    console.log("Please enter your email address to continue!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerGithub',
            message: 'What is your GitHub username?',
            validate: (input) => {
                if (input) {
                    return true;
                } else {
                    console.log("Please enter your GitHub username to continue!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: 'What is your office number?',
            validate: (input) => {
                if (input) {
                    return true;
                } else {
                    console.log("Please enter your office number to continue!");
                    return false;
                }
            }
        }
    ])
    .then((answers) => {
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerGithub, answers.managerOffice)
        teamMembers.push(manager)
        addTeamMember()
    })

function addTeamMember() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'member',
            message: `Select which team member you'd like to add to your team!`,
            choices: [
                'Engineer',
                'Intern',
                'No team members to add'
            ]
        }
    ])
    .then(answers => {
        switch(answers.type) {
            case 'Engineer':
                generateEng()
                break
            case 'Intern':
                generateInt()
                break
            default:
                makeTeam()
        }
    })
}

function generateEng() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engName',
            message: `What is the engineer's name?`,
            validate: (input) => {
                if (input) {
                    return true;
                } else {
                    console.log("Please enter the engineer's name to continue!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engID',
            message: `What is the engineer's employee ID?`,
            validate: (input) => {
                if (input) {
                    return true;
                } else {
                    console.log("Please enter the engineer's employee ID to continue!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engEmail',
            message: `What is the engineer's email address?`,
            validate: (input) => {
                if (input) {
                    return true;
                } else {
                    console.log("Please enter the engineer's email address to continue!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engGithub',
            message: `What is the engineer's GitHub username?`,
            validate: (input) => {
                if (input) {
                    return true;
                } else {
                    console.log("Please enter the engineer's GitHub username to continue!");
                    return false;
                }
            }
        },
    ])
    .then((answers) => {
        const engineer = new Engineer(answers.managerName, answers.managerID, answers.managerEmail, answers.managerGithub, answers.managerOffice)
        teamMembers.push(engineer)
        addTeamMember()
    })
}