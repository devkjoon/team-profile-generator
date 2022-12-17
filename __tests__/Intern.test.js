const Intern = require('../lib/Intern')

test('Allows for school to be set and returned', () => {
    const school = 'UPenn';
    const e = new Intern('Joon', 123, 'sample@test.com', school);
    expect(e.school).toBe(school);
})

test('getRole() will return "Intern"', () => {
    const role = 'Intern';
    const e = new Intern('Joon', 123, 'sample@test.com', 'UPenn');
    expect(e.getRole()).toBe(role);
})

test('getSchool() will return intern school', () => {
    const school = 'UPenn';
    const e = new Intern('Joon', 123, 'sample@test.com', school);
    expect(e.getSchool()).toBe(school);
})