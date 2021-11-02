const Intern = require('../lib/Intern.js');



test ('create Intern object', () => {

    const intern = new Intern();
    
    expect(typeof(intern)).toEqual('object');
    
    });
    
    
    test ('create school',() => {
    
        const intern = new Intern ('name', 100, 'email', 'NYU');
    
        expect(intern.school).toEqual('NYU');
    
    });
    
    
    test ('create getSchool',() => {
    
        const intern = new Intern ('name', 100, 'email', 'NYU');
    
        expect(intern.getSchool()).toEqual('NYU');
    
    });
    
    test ( 'create getRole to return Intern', () => {
    
        const intern = new Intern ('name', 100, 'email', 'NYU', 'Intern');
    
        expect(intern.getRole()).toEqual('Intern');
    });
    
    