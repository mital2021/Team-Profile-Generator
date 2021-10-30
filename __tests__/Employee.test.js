const Employee = require('../lib/Employee.js');

test ('create employee object', () => {

    const employee = new Employee();
    expect(typeof(employee)).toEqual('object');
});

test ('create employee name', () => {
    const employee = new Employee('Mital');

    expect(employee.name).toEqual('Mital');
});


test('create emploee id', () => {
    const employee = new Employee('Mital', 100);
    
    expect(employee.id).toEqual(100);
  });

test ('create employee email', () => {
    const employee = new Employee('Mital', 100, 'email');
    
    expect(employee.email).toEqual('email');   
 });

 test ('create employee getName', () => {
    const employee = new Employee('Mital');

     expect(employee.getName()).toEqual('Mital');
 });

 test ('creat employee getId', () => {
   
    const employee = new Employee('Mital', 100);

    expect(employee.getId()).toEqual(100);

});

