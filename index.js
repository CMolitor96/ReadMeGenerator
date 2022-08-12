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
        choices: ['MIT License', 'GNU GPLv3', 'Apache', 'Mozilla Public License 2.0'],
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
        //License badging urls from: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
        if (response.license === 'MIT License') {
            response.license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        } else if (response.license === 'GNU GPLv3') {
            response.license = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        } else if (response.license === 'Apache') {
            response.license = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        } else if (response.license === 'Mozilla Public License 2.0') {
            response.license = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
        }
        fs.writeFile('README.md', writeToFile(response), (err) => {
            if (err) {
                console.log(err);
            }
        })
    });
// TODO: Create a function to write README file
function writeToFile({title, description, install, license, usage, contribution, test, github, email},) {
return `# **${title}**

## Project Description
${description}

## Table of Contents:
[Project Install](#project-install)

[License](#license)

[Project Usage](#project-usage)

[Project Contribution](#project-contribution)

[Project Testing](#tests)

[Questions](#questions)

## Project Install:
${install}

How to run application in command line
![Image of executing application in command line](./assets/images/Execute.png)


## License:
Please click the license badge for more information on the license under which this project is covered.
${license}
## Project Usage:
${usage}

Halfway through filling out inputs:
![Halfway through filling out sections. Displays a few of the text input sections and the list choice](./assets/images/In%20Progress.png)

Finished with inputs:
![Application executed and all sections filled out. Not pictured is generated README.md file](./assets/images/Filled%20Out.png)

## Project Contribution:
${contribution}
## Tests:
${test}
## Questions:
GitHub Username: ${github}

GitHub profile: (https://github.com/${github})

Please email me at (${email}) for any further questions regarding this application.`;
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();