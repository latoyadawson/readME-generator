// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name: 'title',
        message: 'What is your README title? (Required)',
        validate: nameInput => {
            if(nameInput){
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    {
        type:'input',
        name: 'description',
        message: 'What is your project description? (Required)',
        validate: nameInput => {
            if(nameInput){
                return true;
            } else {
                console.log('Please enter your project description!');
                return false;
            }
        }
    },
    {
        type:'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. (Required)',
        validate: nameInput => {
            if(nameInput){
                return true;
            } else {
                console.log('Please enter your install instructions!');
                return false;
            }
        }
    },
    {
        type:'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. (Required)',
        validate: nameInput => {
            if(nameInput){
                return true;
            } else {
                console.log('Please enter your install instructions!');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What License is this project? (Check all that apply)',
        choices: [
            'MIT License', 
            'GNU GPLv3 ', 
            'GNU AGPLv3', 
            'GNU LGPLv3', 
            'Mozilla Public License 2.0', 
            'Apache License 2.0', 
            'NoBoost Software License 1.0', 
            'The Unlicense'
        ]
    },
    {
        type:'input',
        name: 'contributing',
        message: 'Who are the contributors of this projects?',
        validate: nameInput => {
            if(nameInput){
                return true;
            } else {
                console.log('Please enter contributiros!');
                return false;
            }
        }
    },
    {
        type:'input',
        name: 'test',
        message: 'Write tests for your application. Then provide examples on how to run them.',
        validate: nameInput => {
            if(nameInput){
                return true;
            } else {
                console.log('Please enter your test and instructions!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username",
        validate: nameInput => {
            if(nameInput){
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email",
        validate: nameInput => {
            if(nameInput){
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        }
    }

];

// TODO: Create a function to write README file
function writeFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if(err) {
                reject(err);
                return;
            }
            resolve ({
                ok: true,
                message: 'Success! README.md file has been genereated!'
            });
        });
    });    
}

// TODO: Create a function to initialize app
async function init() {
    //prompt inquier question
    const userResponse =  await inquirer.prompt(questions);
    console.log("Your responses: ", userResponse);
    console.log("Thank you for your responses! Creating your readME.md now!");
    
    //sending asnwers to markdown 
    const markdownResponse = generateMarkdown(userResponse);
    console.log(markdownResponse);

    await writeFile('exampleREADME.md', markdownResponse);

};

// Function call to initialize app
init()

