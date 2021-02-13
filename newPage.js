const inquirer = require('inquirer');
const open = require('open');
const fs = require('fs');
const employee = require('./classes/Employee');
const manager = require('./classes/Manager');
const engineer = require('./classes/Engineer');
const intern = require('./classes/Intern');

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

    };
    
    finish() {
        console.log("Your page will be created soon!");
        await open('index.html')
        process.exit(0);
    }
}

module.exports = Team;