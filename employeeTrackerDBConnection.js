const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

const connection = mysql.createConnection({
  host: 'localhost',


  port: 3306,


  user: 'root',
  password: 'Puppydoggies2',
  database: 'employeetracker_db',
});

connection.connect((err) => {
  if (err) throw err;
  runSearch();
  // console.log(`connected as id ${connection.threadId}`);
});

const runSearch = () => {
  inquirer.prompt([
  {
    name: 'action',
    type: 'list',
    message: 'What would you like to do?',
    choices: [
      'View all employees',
      'View all Roles',
      'View all Departments',
      'Add Department',
      'Add employee Role',
      'Add employee',
      'Update Employee Role',
      'I am done',]
  }
])

  .then((answer) => {
    // based on their answer, either call functions
    if (answer.action === 'View all employees') {
      viewAll();
    } else if (answer.action === 'View all Roles') {
      viewRole();
    } else if (answer.action === 'View all Departments') {
      viewDepartment();
    } else if (answer.action === 'Add Department') {
      addDepartment();
    } else if (answer.action === 'Add employee Role') {
      addRole();
    } else if (answer.action === 'Add employee') {
      addEmployee();
    } else if (answer.action === 'Update Employee Role') {
      updateRole();
    } else {
      connection.end();
    }
  });
}

// function to view all employees
const viewAll = () => {
  connection.query('SELECT * FROM employee', (err, results) => {
    // if(err) throw err;
    console.table(results);
  }
  )
  runSearch()
};

// function to view employees in a certain role
const viewRole = () => {
  connection.query('SELECT * FROM role', (err, results) => {
    // if(err) throw err;
    console.table(results);
  }
  )
  runSearch()
};

// function to view employees by department
const viewDepartment = () => {
  connection.query('SELECT * FROM department', (err, results) => {
    // if(err) throw err;
    console.table(results);
  }
  )
};

// function to add an employee department
const addDepartment = () => {
  inquirer
    .prompt([
      {
        name: 'addDeparment',
        type: 'input',
        message: 'What department would you like to add?',
      },
    ])
    .then((answer) => {
      // when finished prompting, insert a new department into the db with that info
      connection.query(
        'INSERT INTO department SET ?',
        {
          DepartmentName: answer.addDepartment,
        },
        (err) => {
          if (err) throw err;
          console.log('Your department was added successfully!');
          // re-prompt the user to begin again
          runSearch();
        });
    });
};

// function to add an employee role
const addRole = () => {
  connection.query('SELECT * FROM department', (err, departments) => {
    if (err) console.log(err);
    departments = departments.map(department => {
      return {
        name: department.DepartmentName,
        value: department.ID
      }
    },

  inquirer
    .prompt([
      {
        name: 'addRole',
        type: 'input',
        message: 'What is the title of the new Role?',
      },
      {
        name: 'addSalary',
        type: 'input',
        message: 'What is the salary of the new Role?',
      },
      {
        name: 'addDepartmentRole',
        type: 'list',
        message: 'Which department is this role apart of?',
        choices: departments,
      },
    ])
    .then((answer) => {
      // when finished prompting, insert a new role into the db with that info
      connection.query(
        'INSERT INTO role SET ?',
        {
          EmployeeTitle: answer.addrole,
          EmployeeSalary: answer.addSalary,
          EmployeeDeparment_id: answer.addDepartmentRole,
        },
        (err) => {
          if (err) throw err;
          console.log('You added a Role successfully!');
          // re-prompt the user to begin again
          runSearch();
        },
      );
    }));
});
};

// function to add an employee
const addEmployee = () => {
  connection.query('SELECT * FROM role', (err, roles) => {
    if (err) console.log(err);
    roles = roles.map(role => {
      return {
        name: role.EmployeeTitle,
        value: role.ID
      }
    })

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
          choices: roles
        },
      ])

      .then((answer) => {
        console.log(answer.role)
        // when finished prompting, insert a new employee into the db with that info
        connection.query(
          'INSERT INTO employee SET ?',
          {
            first_name: answer.first,
            last_name: answer.last,
            role_id: answer.role,
          },
          (err) => {
            if (err) throw err;
            console.log('Your employee was added successfully!');
            // re-prompt the user to begin again
            runSearch();
          });
      })
  },)

  runSearch();
}
