const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: 'localhost',

  
  port: 3306,

  
  user: 'root@localhost',

  
  password: 'Puppydoggies2',
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
        }
      });
  };

  const employeeSearch = () => {
    inquirer
      .prompt({
        name: 'all employees',
        type: 'input',
        message: 'What artist would you like to search for?',
      })
      .then((answer) => {
        const query = 'SELECT position, song, year FROM top5000 WHERE ?';
        connection.query(query, { artist: answer.artist }, (err, res) => {
          res.forEach(({ position, song, year }) => {
            console.log(
              `Position: ${position} || Song: ${song} || Year: ${year}`
            );
          });
          runSearch();
        });
      });
  };