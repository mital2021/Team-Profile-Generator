const Employee = require('../lib/Employee.js');

test ('creat employee information', () => {

    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
});

test ()


