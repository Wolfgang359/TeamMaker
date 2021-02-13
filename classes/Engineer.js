const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(gitHub);
        this.name = name;
        this.id = id;
        this.email = email;
        this.gitHub = gitHub;
    };
    getGitHub() {
        console.log(this.gitHub);
        return this.gitHub;
    }
    getRole() {
        console.log('Engineer');
        return 'Engineer';
    }
};

module.exports = Engineer;