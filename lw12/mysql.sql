/*  Server connection

\sql

\connect root@localhost:3306

*/

CREATE DATABASE University;

USE University;



CREATE TABLE Faculty
(
    id INT AUTO_INCREMENT PRIMARY KEY,
    facultyName VARCHAR(255) NOT NULL
);

CREATE TABLE Groups
(
    id INT AUTO_INCREMENT PRIMARY KEY,
    groupName VARCHAR(255) NOT NULL,
    facultyId INT NOT NULL,
    FOREIGN KEY (facultyId) REFERENCES Faculty (id)
);

CREATE TABLE Student 
(
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    groupId INT NOT NULL,
    FOREIGN KEY (groupId) REFERENCES Groups (id)
);



INSERT INTO Faculty (facultyName, id) VALUES ('ФИиВТ', 1);
INSERT INTO Faculty (facultyName, id) VALUES ('ИСА', 2);
INSERT INTO Faculty (facultyName, id) VALUES ('РТФ', 3);

INSERT INTO Groups (groupName, facultyId) VALUES ('PS-11', 1);
INSERT INTO Groups (groupName, facultyId) VALUES ('PS-12', 1);
INSERT INTO Groups (groupName, facultyId) VALUES ('PS-13', 1);

INSERT INTO Groups (groupName, facultyId) VALUES ('ИП-11', 2);
INSERT INTO Groups (groupName, facultyId) VALUES ('ИП-12', 2);
INSERT INTO Groups (groupName, facultyId) VALUES ('ИП-13', 2);

INSERT INTO Groups (groupName, facultyId) VALUES ('РТ-11', 3);
INSERT INTO Groups (groupName, facultyId) VALUES ('РТ-12', 3);
INSERT INTO Groups (groupName, facultyId) VALUES ('РТ-13', 3);

INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Дмитрий', 'Македонский', 19, 1);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Михаил', 'Грачев', 20, 1);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Павел', 'Дуров', 20, 1);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Анна', 'Макаренко', 19, 1);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Дарья', 'Пирогова', 19, 1);

INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Дмитрий', 'Македонский', 19, 2);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Михаил', 'Грачев', 20, 2);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Павел', 'Дуров', 20, 2);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Анна', 'Макаренко', 19, 2);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Дарья', 'Пирогова', 19, 2);

INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Дмитрий', 'Македонский', 19, 3);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Михаил', 'Грачев', 20, 3);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Павел', 'Дуров', 20, 3);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Анна', 'Макаренко', 19, 3);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Дарья', 'Пирогова', 19, 3);

INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Дмитрий', 'Македонский', 19, 4);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Михаил', 'Грачев', 20, 4);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Павел', 'Дуров', 20, 4);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Анна', 'Макаренко', 19, 4);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Дарья', 'Пирогова', 19, 4);

INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Дмитрий', 'Македонский', 19, 5);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Михаил', 'Грачев', 20, 5);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Павел', 'Дуров', 20, 5);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Анна', 'Макаренко', 19, 5);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Дарья', 'Пирогова', 19, 5);

INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Дмитрий', 'Македонский', 19, 6);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Михаил', 'Грачев', 20, 6);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Павел', 'Дуров', 20, 6);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Анна', 'Макаренко', 19, 6);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Дарья', 'Пирогова', 19, 6);

INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Дмитрий', 'Македонский', 19, 7);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Михаил', 'Грачев', 20, 7);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Павел', 'Дуров', 20, 7);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Анна', 'Макаренко', 19, 7);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Дарья', 'Пирогова', 19, 7);

INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Дмитрий', 'Македонский', 19, 8);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Михаил', 'Грачев', 20, 8);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Павел', 'Дуров', 20, 8);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Анна', 'Макаренко', 19, 8);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Дарья', 'Пирогова', 19, 8);

INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Дмитрий', 'Македонский', 19, 9);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Михаил', 'Грачев', 20, 9);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Павел', 'Дуров', 20, 9);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Анна', 'Макаренко', 19, 9);
INSERT INTO Student (first_name, last_name, age, groupId) VALUES ('Дарья', 'Пирогова', 19, 9);



SELECT * FROM Student WHERE age = 19;



SELECT 
    Student.id AS 'Id', 
    Student.first_name AS 'Name',
    Student.last_name AS 'Surname', 
    Student.age AS 'Age'
FROM 
    Student 
JOIN 
    Groups 
ON 
    Student.groupId = Groups.id 
WHERE 
    Student.groupId = 1;



SELECT 
    Student.id AS 'Id', 
    Student.first_name AS 'Name',
    Student.last_name AS 'Surname', 
    Student.age AS 'Age' 
FROM 
    Student
JOIN
    Groups
ON
    Student.groupId = Groups.id
WHERE 
    Groups.facultyId = 1;



SELECT
    Student.id AS 'Id', 
    Student.first_name AS 'Name',
    Student.last_name AS 'Surname', 
    Student.age AS 'Age',
    Groups.groupName AS 'Group', 
    Faculty.facultyName AS 'Faculty' 
FROM 
    Student 
JOIN 
    Groups 
ON 
    Student.groupId = Groups.id 
JOIN 
    Faculty 
ON 
    Groups.facultyId = Faculty.id 
WHERE 
    Student.id = 1;