const inquirer = require('inquirer');
const open = require('open');
const fs = require('fs');
const employee = require('./classes/Employee');
const manager = require('./classes/Manager');
const engineer = require('./classes/Engineer');
const intern = require('./classes/Intern');
const Engineer = require('./classes/Engineer');
const Manager = require('./classes/Manager');

class Team {
    constructor() {
        this.teamMembers = 0;
    }
    create() {
        this.teamMembers = 1;
        this.askToCreate();
    };
    askToCreate() {
        inquirer
            .prompt([
                {
                    type: 'confirm',
                    name: 'createYN',
                    message: 'Do you want to create a new team member?'
                }
            ])
            .then(val => {
                if (val.choice) {
                    this.createMember();
                } else {
                    this.finish();
                }
            })
    };
    createMember() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is your team member\'s name?'
                },
                {
                    type: 'list',
                    name: 'position',
                    message: 'What is your team member\'s position?',
                    choices: ['Manager', 'Engineer', 'Employee', 'Intern'],
                },
            ])
            .then((response) => {
                this.addMember(response);
                this.askToCreate();
            });
    };

    addMember(member) {
        switch (member.position) {
            case 'Manager':
                inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'InputOfficeNumber',
                        message: 'What is your manager\'s office number?'
                    }
                ])
                .then((response) => {
                    const newMember = new Manager(member.name, member.id, member.email, response.InputOfficeNumber);
                    return newMember;
                });
                break;

            case 'Engineer':
                inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'InputGitHub',
                        message: 'What is your engineer\'s GitHub username?'
                    }
                ])
                .then((response) => {
                    const newMember = new Manager(member.name, member.id, member.email, response.InputGitHub);
                    return newMember;
                });

                break;

            case 'Employee':
                const newMember = new employee(member.name, member.id, member.email);
                return newMember;
                break;

            case 'Intern':
                inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'InputSchool',
                        message: 'What school does intern attend?'
                    }
                ])
                .then((response) => {
                    const newMember = new Manager(member.name, member.id, member.email, response.school);
                    return newMember;
                });
                break;
        }
    }

    finish() {
        console.log("Your page will be created soon!");
        await open('index.html')
        process.exit(0);
    }
}

module.exports = Team;