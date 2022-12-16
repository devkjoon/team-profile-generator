const Employee = require('./employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }
    extractRole() {
        return "Engineer";
    }
    extractGithub() {
        return this.github;
    }
}
module.exports = Engineer;