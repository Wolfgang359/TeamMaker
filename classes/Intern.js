const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email) {
        const school = InputSchool;
        super(school);
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    };
    getSchool() {
        console.log(this.school);
        return this.school;
    }
    getRole() {
        console.log('Intern');
        return 'Intern';
    }
};

module.exports = Intern;