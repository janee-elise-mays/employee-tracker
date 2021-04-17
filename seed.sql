INSERT INTO employee ( id, first_name, last_name, role_id, manager_id)
VALUES ( 1, "Rebecca", "Diroll", 1, 1);

INSERT INTO employee ( id, first_name, last_name, role_id, manager_id)
VALUES (2, "Kristen", "Picard", 1, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (3, "Heather", "Rushmore Koren", 2, 1);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (4, "Cristina", "Maze", 2, 2);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (5, "Reagan", "Rogers", 3, 1);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (6, "Corrinne", "Worden", 4, 2);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (7, "Esar", "Behlum", 4, null);

INSERT INTO department (id, Departmentname)
VALUES (1, "Sales");

INSERT INTO department (id, Departmentname)
VALUES (2, "Engineering");

INSERT INTO department (id, Departmentname)
VALUES (3, "Finance");

INSERT INTO department (id, Departmentname)
VALUES (4, "Legal");

INSERT INTO role (id, EmployeeTitle, EmployeeSalary, EmployeeDeparment_id)
VALUES (1, "Sales Lead", 100000, 1);

INSERT INTO role (id, EmployeeTitle, EmployeeSalary, EmployeeDeparment_id)
VALUES (2, "Salesperson", 80000, 1);

INSERT INTO role (id, EmployeeTitle, EmployeeSalary, EmployeeDeparment_id)
VALUES (3, "Lead Engineer", 150000, 2);

INSERT INTO role (id, EmployeeTitle, EmployeeSalary, EmployeeDeparment_id)
VALUES (4, "Software Engineer", 120000, 2);

INSERT INTO role (id, EmployeeTitle, EmployeeSalary, EmployeeDeparment_id)
VALUES (5, "Accountant", 125000, 3);

INSERT INTO role (id, EmployeeTitle, EmployeeSalary, EmployeeDeparment_id)
VALUES (6, "Legal Team Lead", 250000, 4);

INSERT INTO role (id, EmployeeTitle, EmployeeSalary, EmployeeDeparment_id)
VALUES (7, "Lawyer", 190000, 4);



[
    {
      "first": "Rebecca",
      "last": "Diroll",
      "title": "Sales Lead",
      "department": "Sales",
      "salary": 100000,
      "manager": "Mo Ager"
    },
    {
      "first": "Kristen",
      "last": "Picard",
      "title": "Salesperson",
      "department": "Sales",
      "salary": 80000,
      "manager": "null"
    },
    {
        "first": "Heather",
        "last": "Rushmore Koren",
        "title": "Lead Engineer",
        "department": "Engineering",
        "salary": 150000,
        "manager": "Mo Ager"
    },
    {
        "first": "Cristina",
        "last": "Maze",
        "title": "Software Engineer",
        "department": "Engineering",
        "salary": 120000,
        "manager": "Janee' Mays"
    },
    {
        "first": "Reagan",
        "last": "Rogers",
        "title": "Accountant",
        "department": "Finance",
        "salary": 125000,
        "manager": "Mo Ager"
    },
    {
        "first": "Corrinne",
        "last": "Worden",
        "title": "Legal Team Lead",
        "department": "Legal",
        "salary": 250000,
        "manager": "Janee' Mays"
    },
    {
        "first": "Esar",
        "last": "Behlum",
        "title": "Lawyer",
        "department": "Legal",
        "salary": 190000,
        "manager": "null"
    }
  ]