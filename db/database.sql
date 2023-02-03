DROP DATABASE IF EXISTS company;
CREATE DATABASE companydb CHARSET utf8mb4;
USE companydb;

CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) DEFAULT NULL,
    salary INT DEFAULT NULL,
    PRIMARY KEY(id)
);

INSERT INTO employee VALUES
    (1, 'Andres',100000000),
    (2, 'Juan',10),
    (3, 'Pedro',1000),
    (4, 'Alejandro',150),
    (5, 'Joan',5)