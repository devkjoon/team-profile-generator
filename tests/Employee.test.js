const Employee = require("../lib/Employee");

test('Allows Employee existance', () => {
    const e = new Employee();
    expect(typeof(e)).toBe('object');
});

test('Allows for name to be set and returned', () => {
    const name = 'Joon';
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test('Allows for ID to be set and returned', () => {
    const id = 123;
    const e = new Employee('Joon', id);
    expect(e.id).toBe(id);
});

test('Allows for email to be set and returned', () => {
    const email = 'sample@test.com';
    const e = new Employee('Joon', 123, email);
    expect(e.email).toBe(email);
});

test('Allows for getName() to return name', () =>{
    const name = 'Joon';
    const e = new Employee(name);
    expect(e.getName()).toBe(name);
});

test('Allows for getID() to return ID', () => {
    const id = 123;
    const e = new Employee('Joon', id);
    expect(e.getID()).toBe(id);
});

test('Allows for getEmail() to return email', () => {
    const email = 'sample@test.com';
    const e = new Employee('Joon', 123, email);
    expect(e.getEmail()).toBe(email);
})

test('getRole() should be returning "Employee"', () => {
    const role = 'Employee';
    const e = new Employee('Joon', 123, 'sample@test.com');
    expect(e.getRole()).toBe(role);
});

