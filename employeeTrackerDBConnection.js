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
        'View all employees by Role',
        'View all employees By Department',
        'Add Department',
        'Add employee Role',
        'Add employee',
        'Update Employee Role',]
  }
      ])

      .then((answer) => {
      // based on their answer, either call functions
      if (answer.action === 'View all employees') {
        viewAll();
      } else if (answer.action === 'View all employees By Department') {
        viewRole();
      } else if (answer.action === 'View all employees By Manager') {
        viewDepartment();
      } else if (answer.action === 'Add Employee') {
        addDepartment();
      } else if (answer.action === 'Update Employee Manager') {
        addRole();
      } else if (answer.action === 'View all Roles') {
        addEmployee();
      } else if (answer.action === 'View all Roles') {
        updateRole();
      } else {
        connection.end();
      }
    });

// function to view all employees
const viewAll = () => {
    connection.query(query, 'SELECT * FROM employee',
    )};

// function to search employees by their department
const viewRole = () => {
  inquirer
  .prompt({
    name: 'viewRole',
    type: 'list',
    message: 'Which employee role would you like to search?',
    choices: [
      'Sales Lead',
      'Salesperson',
      'Lead Engineer',
      'Software Engineer',
      'Accountant',
      'Legal Team Lead',
      'Lawyer',]
  })
  .then((answer) => {
    const query = 'SELECT DepartmentName FROM employee WHERE ?';
    connection.query(query, { department: answer.department }, (err, res) => {
      runSearch();
    });
  });
};

// function to search employees by manager
const viewDepartment = () => {
  inquirer
  .prompt({
    name: 'department',
    type: 'list',
    message: 'Which department would you like to search?',
    choices: [
      'Sales',
      'Engineering',
      'Finance',
      'Legal',]
  })
  .then((answer) => {
    const query = 'SELECT DepartmentName FROM employee WHERE ?';
    connection.query(query, { department: answer.department }, (err, res) => {
      runSearch();
    });
  });
};

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
          'Mo Ager',
          'Janee Mays',
          'null',
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
          runSearch();
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

