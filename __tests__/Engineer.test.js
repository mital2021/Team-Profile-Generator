const Engineer= require('../lib/Engineer.js');


test ('create engineer object', () => {

const engineer = new Engineer();

expect(typeof(engineer)).toEqual('object');

});


test ('create GitHub username',() => {

    const engineer = new Engineer ('name', 100, 'email', 'github');

    expect(engineer.github).toEqual('github');

});


test ('create getGitHub',() => {

    const engineer = new Engineer ('name', 100, 'email', 'github');

    expect(engineer.getGithub()).toEqual('github');

});

test ( 'create getRole to return Engineer', () => {

    const engineer = new Engineer('name', 100, 'email', 'githubuser', 'Engineer');

    expect(engineer.getRole()).toEqual('Engineer');
});










