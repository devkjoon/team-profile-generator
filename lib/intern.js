const Employee = require('./employee');

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }
    extractRole() {
        return "Intern";
    }
    extractSchool() {
        return this.github;
    }
}
module.exports = Intern;