const Employee = require('../lib/Employee.js');

test ('create employee object', () => {

    const employee = new Employee();
    expect(typeof(employee)).toEqual('object');
});

test ('create employee name', () => {
    const employee = new Employee('name');

    expect(employee.name).toEqual('name');
});


test('create emploee id', () => {
    const employee = new Employee('name', 100);
    
    expect(employee.id).toEqual(100);
  });

test ('create employee email', () => {
    const employee = new Employee('name', 100, 'email');
    
    expect(employee.email).toEqual('email');   
 });

 test ('create employee getName', () => {
    const employee = new Employee('name');

     expect(employee.getName()).toEqual('name');
 });

 test ('creat employee getId', () => {
   
    const employee = new Employee('name', 100);

    expect(employee.getId()).toEqual(100);

});

