const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(officeNumber)
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    };
    getRole() {
        console.log('Manager');
        return 'Manager';
    }
};

module.exports = Manager;