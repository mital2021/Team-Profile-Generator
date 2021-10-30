const Manager = require('../lib/Manager.js');
const Employee = require('../lib/Employee.js');



test ('create Manager object', () => {

    const manager = new Manager();
    
    expect(typeof(manager)).toEqual('object');
    
    });
    
    
    test ('create officeNumber ',() => {
    
        const manager = new Manager ('Mital', 100, 'email', 123);
    
        expect(manager.officeNumber).toEqual(123);
    
    });
    
      
    test ( 'create getRole to return Manager', () => {
    
        const manager = new Manager('Mital', 100, 'email', 123, 'Manager');
    
        expect(manager.getRole()).toEqual('Manager');
    });
    