const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generate = require('./src/pagetemplate.js');

const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is managers name? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
      },

      {
        type: 'input',
        name: 'role',
        message: 'What is managers job title? (Required)',
        validate: roleInput => {
          if (roleInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
      },

      {
        type: 'input',
        name: 'id',
        message: 'What is employee ID of manager?(Required)',
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter employee ID!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is email address of manager?(Required)',
        validate: emailInput=> {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter email address!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is managers office number?(Required)',
        validate: officeNumberInput => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log('Please enter office number!');
            return false;
          }
        }
      },

      {
        type: 'list',
        name: 'about',
        message: 'Select employee from the list below:',
        choices: ['Engineer', 'Intern']
      },

    {
      type: 'input',
      name: 'engName',
      message: 'What is Engineers name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter engineers name!');
          return false;
        }
      }
    },
    {
        type: 'input',
        name: 'engRole',
        message: 'What is Engineers job title? (Required)',
        validate: roleInput => {
          if (roleInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
      },

    {
      type: 'input',
      name: 'engId',
      message: 'What is Engineers employee ID (Required)',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter employee ID!');
          return false;
        }
      }
    },

    {
        type: 'input',
        name: 'engEmail',
        message: 'What is Engineers email address (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter email address!');
            return false;
          }
        }
      },

      {
        type: 'input',
        name: 'github',
        message: 'What is Engineers Github username (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter github username!');
            return false;
          }
        }
      },

      {
        type: 'list',
        name: 'abouts',
        message: 'Select employee from the list below:',
        choices: ['Engineer', 'Intern']
      },

  {
    type: 'input',
    name: 'intName',
    message: 'What is Intern name? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter engineers name!');
        return false;
      }
    }
  },
  {
      type: 'input',
      name: 'intRole',
      message: 'What is Intern job title? (Required)',
      validate: roleInput => {
        if (roleInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },

  {
    type: 'input',
    name: 'intId',
    message: 'What is Intern employee ID (Required)',
    validate: idInput => {
      if (idInput) {
        return true;
      } else {
        console.log('Please enter employee ID!');
        return false;
      }
    }
  },

  {
      type: 'input',
      name: 'intEmail',
      message: 'What is Intern email address (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter email address!');
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'school',
      message: 'What is Interns school name (Required)',
      validate: schoolInput => {
        if (schoolInput) {
          return true;
        } else {
          console.log('Please enter github username!');
          return false;
        }
      }
    },
    {
        type: 'list',
        name: 'about',
        message: 'Select employee from the list below:',
        choices: ['Engineer', 'Intern']
      }
  ]);
};

function writeToFile(data){
  
    fs.writeFile("./dist/index.html", (generate,(data)), err =>  {
        if (err) throw err;

            console.log('File created')

    }
    
    )};

 
// TODO: Create a function to initialize app
function init() {
    questions()
        .then(input => {
            const portfolioData = generate.pagetemplate(input);
            writeToFile(portfolioData);
        })
 }

// Function call to initialize app
init();


  