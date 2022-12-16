class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    extractName() {
        return this.name;
    }
    extractID() {
        return this.id;
    }
    extractEmail() {
        return this.email;
    }
    extractRole() {
        return "Employee";
    }
}
module.exports = Employee;