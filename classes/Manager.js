const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email) {
        const officeNumber = InputOfficeNumber;
        super(officeNumber)
        this.name = name;
        this.id = id;
        this.email = email;
    };
    getRole() {
        console.log('Manager');
        return 'Manager';
    }
};

module.exports = Manager;