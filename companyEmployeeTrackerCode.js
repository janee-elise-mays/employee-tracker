const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: 'localhost',

  
  port: 3306,

  
  user: 'root',

  
  password: 'Puppydoggies2',
  database: 'employeetracker_db',
});

const runSearch = () => {
    inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View all employees',
        'View all employees By Department',
        'View all employees By Manager',
        'Add Employee',
        'Update Employee Role',
        'Update Employee Manager',
        'View all Roles',
      ],})

      .then((answer) => {
      // based on their answer, either call functions
      if (answer.action === 'View all employees') {
        viewAll();
      } else if (answer.postOrBid === 'View all employees By Department') {
        departmentSearch();
      } else if (answer.postOrBid === 'View all employees By Manager') {
        managerSearch();
      } else if (answer.postOrBid === 'Add Employee') {
        addEmployee();
      } else if (answer.postOrBid === 'Update Employee Manager') {
        updateEmployee();
      } else if (answer.postOrBid === 'View all Roles') {
        viewRole();
      } else {
        connection.end();
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