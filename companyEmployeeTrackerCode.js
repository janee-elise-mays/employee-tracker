const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: 'Puppydoggies',
  database: 'employeetracker',
});
const runSearch = () => {
    inquirer
    .prompt({
      name: 'action',
      type: 'rawlist',
      message: 'What would you like to do?',
      choices: [
        'View all employees',
        'View all employees By Department',
        'View all employees By Manager',
        'Add Employee',
        'Update Employee Role',
        'Update Employee Manager',
        'View all Roles',
      ],
      })
      .then((answer) => {
        switch (answer.action) {
          case 'View all employees':
            employeeSearch();
            break;
  
          case 'View all employees By Department':
            departmentSearch();
            break;
  
          case 'View all employees By Manager':
            managerSearch();
            break;
  
          case 'Add Employee':
            addEmployee();
            break;
  
          case 'Update Employee Role':
            updateEmployeeRole();
            break;

          case 'Update Employee Manager':
            updateEmployeeManager();
            break;

          case 'View all Roles':
            viewAllRoles();
            break;
  
          default:
            console.log(`Invalid action: ${answer.action}`);
            break;
        }
      });
  };