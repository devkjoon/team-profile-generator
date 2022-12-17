const Engineer = require('../lib/Engineer');

test('Allows for github to be set and returned', () => {
    const github = 'devkjoon';
    const e = new Engineer('Joon', 123, 'sample@test.com', github);
    expect(e.github).toBe(github);
})

test('getRole() will return "Engineer"', () => {
    const role = 'Engineer';
    const e = new Engineer('Joon', 123, 'sample@test.com', 'devkjoon');
    expect(e.getRole()).toBe(role);
})

test('getGithub() will return github username', () => {
    const github = 'devkjoon';
    const e = new Engineer('Joon', 123, 'sample@test.com', github);
    expect(e.getGithub()).toBe(github);
})