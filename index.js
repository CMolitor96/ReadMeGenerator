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
        type: 'list',
        message: 'Type of License',
        choices: ['a', 'b', 'c', 'd'],
        name: 'license'
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
    {
        type: 'input',
        message: 'GitHub Username',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Email',
        name: 'email',
    },
];

inquirer
    .prompt(questions).then((response) => {
        // console.log(response);
        let title = response.title;
        let description = response.description;
        let install = response.install;
        let license = response.license;
        let usage = response.install;
        let contribution = response.contribution;
        let test = response.test;
        let github = response.github;
        let email = response.email;
        // console.log(title);
        // console.log(`${title}\n ${description}\n${install}\n${usage}\n${contribution}\n${test}`);
        fs.writeFile('README.md', writeToFile(title, description, install, license, usage, contribution, test, github, email), (err) => {
            if (err) {
                console.log(err);
            }
        })
    });

// TODO: Create a function to write README file
function writeToFile(title, description, install, license, usage, contribution, test, github, email) {
    return `#${title}
    ##Project Description:
    ${description}
    ##Table of Contents:
    [Project Title](#${title})
    [Project Description](#${description})
    [Project Install](#${install})
    [License]
    [Project Usage]
    [Project Contribution]
    [Project Testing]
    [Questions](###Questions)
    ###Project Install:
    ${install}
    ###License:
    ${license}
    ###Project Usage:
    ${usage}
    ###Project Contribution:
    ${contribution}
    ###Project Testing:
    ${test}
    ###Questions:
    Link to Personal Github: https://github.com/${github} 
    Please email me at ${email} for any questions regarding this application.`;
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();