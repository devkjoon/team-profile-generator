const Employee = require('./employee');

class Manager extends Employee {
    constructor (name, id, email, office) {
        super (name, id, email);
        this.office = office;
    }
    extractRole() {
        return "Manager";
    }
    extractOffice() {
        return this.office;
    }
}
module.exports = Manager;