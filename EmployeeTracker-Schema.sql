CREATE DATABASE employeetracker_db;

CREATE TABLE department (
ID INT NOT NULL,
DepartmentName VARCHAR(30),
PRIMARY KEY (ID)
);

CREATE TABLE role (
ID INT NOT NULL,
EmployeeTitle VARCHAR(30),
EmployeeSalary DECIMAL(30),
EmployeeDeparment_id INT,
PRIMARY KEY (ID)
);

CREATE TABLE employee (
ID INT NOT NULL,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT,
PRIMARY KEY (ID)
);

INSERT INTO employee (firstName, lastName) values ('Jane', 'Austen');
INSERT INTO employee (firstName, lastName) values ('Mark', 'Twain');
INSERT INTO employee (firstName, lastName) values ('Lewis', 'Carroll');
INSERT INTO employee (firstName, lastName) values ('Andre', 'Asselin');