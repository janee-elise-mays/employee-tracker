const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: 'localhost',

  
  port: 3306,

  
  user: 'root',

  
  password: 'Puppydoggies2',
  database: 'employeetracker_db',
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  connection.end();
});

const runSearch = inquirer.prompt([
  {
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
        'View all Roles',]
  }
      ])

      .then((answer) => {
      // based on their answer, either call functions
      if (answer.action === 'View all employees') {
        viewAll();
      } else if (answer.action === 'View all employees By Department') {
        departmentSearch();
      } else if (answer.action === 'View all employees By Manager') {
        managerSearch();
      } else if (answer.action === 'Add Employee') {
        addEmployee();
      } else if (answer.action === 'Update Employee Manager') {
        updateEmployee();
      } else if (answer.action === 'View all Roles') {
        viewRole();
      } else {
        connection.end();
      }
    });

// function to view all employees
const viewAll = () => {
  ('SELECT * FROM employee')
}

// function to search employees by their department
const departmentSearch = () => {
  ('SELECT * FROM department')
}

// function to search employees by manager
const managerSearch = () => {
  ('SELECT * FROM department')
}

// function to add an employee
  const addEmployee = () => {
    inquirer
      .prompt([
      {
        name: 'first',
        type: 'input',
        message: 'What is the employees first name?',
      },
      {
        name: 'last',
        type: 'input',
        message: 'What is the employees last name?',
      },
      {
        name: 'role',
        type: 'list',
        message: 'What is the employees role?',
        choices: [
          'Sales Lead',
          'Salesperson',
          'Lead Engineer',
          'Software Engineer',
          'Accountant',
          'Legal Team Lead',
          'Lawyer',
        ],
      },
      {
        name: 'manager',
        type: 'list',
        message: "Who's the employee's manager?",
        choices: [
          'Sales Lead',
          'Salesperson',
          'Lead Engineer',
          'Software Engineer',
          'Accountant',
          'Legal Team Lead',
          'Lawyer',
        ],
      },
    ])
    .then((answer) => {
      // when finished prompting, insert a new employee into the db with that info
      connection.query(
        'INSERT INTO employee SET ?',
        {
          first_name: answer.first,
          last_name: answer.last,
          role: answer.role,
          manager: answer.manager,
        },
        (err) => {
          if (err) throw err;
          console.log('Your employee was added successfully!');
          // re-prompt the user for if they want to bid or post
          start();
        }
      );
    });
  };


// function to update the employee manager
const updateEmployee = () => {
  ('SELECT * FROM department')
}

// function to view all roles
const viewRole = () => {
  ('SELECT * FROM department')
}


// function to handle posting new employee
