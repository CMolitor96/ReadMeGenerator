// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Project Title',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Project Description',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Installation Instructions',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Usage Information',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Contribution Guidlines',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Test Instructions',
        name: 'test',
    },
];

inquirer
    .prompt(questions).then((response) => {
        // console.log(response);
        let title = response.title;
        let description = response.description;
        let install = response.install;
        let usage = response.install;
        let contribution = response.contribution;
        let test = response.test;
        // console.log(title);
        // console.log(`${title}\n ${description}\n${install}\n${usage}\n${contribution}\n${test}`);
        fs.writeFile('README.md', writeToFile(title, description, install, usage, contribution, test), (err) => {
            if (err) {
                console.log(err);
            }
        })
    });

// TODO: Create a function to write README file
function writeToFile(title, description, install, usage, contribution, test) {
    return `**Test ReadMe
    Hello everyone this is my readmeFile:
    Project Title:
    ${title}
    Project Description:
    ${description}
    Project Install:
    ${install}
    Project Usage:
    ${usage}
    Project Contribution:
    ${contribution}
    Project Testing:
    ${test}`;
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
