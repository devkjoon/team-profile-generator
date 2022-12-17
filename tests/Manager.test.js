const Manager = require('../lib/Manager')

test('Allows for manager office number to be set and returned', () => {
    const office = 1;
    const e = new Manager('Joon', 123, 'sample@test.com', office);
    expect(e.office).toBe(office);
})

test('getRole() will return "Manager"', () => {
    const role = 'Manager';
    const e = new Manager('Joon', 123, 'sample@test.com', role);
    expect(e.getRole()).toBe(role);
})

test('getOffice() will return office number', () => {
    const office = 1;
    const e = new Manager('Joon', 123, 'sample@test.com', office);
    expect(e.getOffice()).toBe(office);
})