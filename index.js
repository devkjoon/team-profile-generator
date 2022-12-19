const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "team.html");

const render = require("./src/renderHTML");

let teamMembers = [];
let teamIDs = [];

function startApp() {
  function addManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the manager's name?",
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
          type: "input",
          name: "managerID",
          message: "What is the manager's employee ID?",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              console.log("Please enter your employee ID to continue!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is the manager's email address?",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              console.log("Please enter your email address to continue!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "managerOffice",
          message: "What is the manager's office number?",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              console.log("Please enter your office number to continue!");
              return false;
            }
          },
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerID,
          answers.managerEmail,
          answers.managerOffice
        );
        teamMembers.push(manager);
        teamIDs.push(answers.managerID);
        addTeamMember();
      });
  }

  function addTeamMember() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "member",
          message: `Select which team member you'd like to add to your team!`,
          choices: ["Engineer", "Intern", "No team members to add"],
        },
      ])
      .then((answers) => {
        switch (answers.member) {
          case "Engineer":
            generateEng();
            break;
          case "Intern":
            generateInt();
            break;
          default:
            makeTeam();
        }
      });
  }

  function generateEng() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engName",
          message: `What is the engineer's name?`,
          validate: (input) => {
            if (input) {
              return true;
            } else {
              console.log("Please enter the engineer's name to continue!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "engID",
          message: `What is the engineer's employee ID?`,
          validate: (input) => {
            if (input) {
              return true;
            } else {
              console.log(
                "Please enter the engineer's employee ID to continue!"
              );
              return false;
            }
          },
        },
        {
          type: "input",
          name: "engEmail",
          message: `What is the engineer's email address?`,
          validate: (input) => {
            if (input) {
              return true;
            } else {
              console.log(
                "Please enter the engineer's email address to continue!"
              );
              return false;
            }
          },
        },
        {
          type: "input",
          name: "engGithub",
          message: `What is the engineer's GitHub username?`,
          validate: (input) => {
            if (input) {
              return true;
            } else {
              console.log(
                "Please enter the engineer's GitHub username to continue!"
              );
              return false;
            }
          },
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engName,
          answers.engID,
          answers.engEmail,
          answers.engGithub
        );
        teamMembers.push(engineer);
        teamIDs.push(answers.engID);
        addTeamMember();
      });
  }

  function generateInt() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "intName",
          message: `What is the intern's name?`,
          validate: (input) => {
            if (input) {
              return true;
            } else {
              console.log("Please enter the intern's name to continue!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "intID",
          message: `What is the intern's employee ID?`,
          validate: (input) => {
            if (input) {
              return true;
            } else {
              console.log("Please enter the intern's employee ID to continue!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "intEmail",
          message: `What is the intern's email address?`,
          validate: (input) => {
            if (input) {
              return true;
            } else {
              console.log(
                "Please enter the intern's email address to continue!"
              );
              return false;
            }
          },
        },
        {
          type: "input",
          name: "intSchool",
          message: `What is the intern's school?`,
          validate: (input) => {
            if (input) {
              return true;
            } else {
              console.log("Please enter the intern's school to continue!");
              return false;
            }
          },
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.intName,
          answers.intID,
          answers.intEmail,
          answers.intSchool
        );
        teamMembers.push(intern);
        teamIDs.push(answers.intID);
        addTeamMember();
      });
  }

  function makeTeam() {
    fs.writeFileSync(distPath, render(teamMembers), "utf-8");
  }

  addManager();
}

startApp();
