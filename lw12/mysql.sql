/*  Server connection

\sql

\connect root@localhost:3306

*/

CREATE DATABASE Universe;

USE Universe;



CREATE TABLE Facoulty
(
    Id INT AUTO_INCREMENT PRIMARY KEY,
    FacoultyName VARCHAR(50) NOT NULL
);

CREATE TABLE Groups
(
    Id INT AUTO_INCREMENT PRIMARY KEY,
    GroupName VARCHAR(50) NOT NULL,
    GroupNumber INT NOT NULL,
    FacoultyId INT NOT NULL,
    FOREIGN KEY (FacoultyId) REFERENCES Facoulty (Id)
);

CREATE TABLE Student 
(
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Age INT NOT NULL,
    GroupId INT NOT NULL,
    FacoultyId INT NOT NULL,
    FOREIGN KEY (GroupId) REFERENCES Groups (Id)
);



INSERT INTO Facoulty (FacoultyName, Id) VALUES ('ФИиВТ', 1);
INSERT INTO Facoulty (FacoultyName, Id) VALUES ('ИСА', 2);
INSERT INTO Facoulty (FacoultyName, Id) VALUES ('РТФ', 3);

INSERT INTO Groups (GroupName, GroupNumber, FacoultyId) VALUES ('PS', 11, 1);
INSERT INTO Groups (GroupName, GroupNumber, FacoultyId) VALUES ('PS', 12, 1);
INSERT INTO Groups (GroupName, GroupNumber, FacoultyId) VALUES ('PS', 13, 1);

INSERT INTO Groups (GroupName, GroupNumber, FacoultyId) VALUES ('ИП', 11, 2);
INSERT INTO Groups (GroupName, GroupNumber, FacoultyId) VALUES ('ИП', 12, 2);
INSERT INTO Groups (GroupName, GroupNumber, FacoultyId) VALUES ('ИП', 13, 2);

INSERT INTO Groups (GroupName, GroupNumber, FacoultyId) VALUES ('РТ', 11, 3);
INSERT INTO Groups (GroupName, GroupNumber, FacoultyId) VALUES ('РТ', 12, 3);
INSERT INTO Groups (GroupName, GroupNumber, FacoultyId) VALUES ('РТ', 13, 3);

INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Дмитрий', 19, 1, 1);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Михаил', 20, 1, 1);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Павел', 20, 1, 1);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Анна', 19, 1, 1);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Дарья', 19, 1, 1);

INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Дмитрий', 19, 2, 1);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Михаил', 20, 2, 1);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Павел', 20, 2, 1);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Анна', 19, 2, 1);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Дарья', 19, 2, 1);

INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Дмитрий', 19, 3, 1);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Михаил', 20, 3, 1);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Павел', 20, 3, 1);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Анна', 19, 3, 1);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Дарья', 19, 3, 1);

INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Дмитрий', 19, 4, 2);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Михаил', 20, 4, 2);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Павел', 20, 4, 2);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Анна', 19, 4, 2);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Дарья', 19, 4, 2);

INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Дмитрий', 19, 5, 2);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Михаил', 20, 5, 2);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Павел', 20, 5, 2);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Анна', 19, 5, 2);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Дарья', 19, 5, 2);

INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Дмитрий', 19, 6, 2);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Михаил', 20, 6, 2);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Павел', 20, 6, 2);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Анна', 19, 6, 2);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Дарья', 19, 6, 2);

INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Дмитрий', 19, 7, 3);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Михаил', 20, 7, 3);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Павел', 20, 7, 3);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Анна', 19, 7, 3);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Дарья', 19, 7, 3);

INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Дмитрий', 19, 8, 3);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Михаил', 20, 8, 3);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Павел', 20, 8, 3);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Анна', 19, 8, 3);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Дарья', 19, 8, 3);

INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Дмитрий', 19, 9, 3);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Михаил', 20, 9, 3);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Павел', 20, 9, 3);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Анна', 19, 9, 3);
INSERT INTO Student (Name, Age, GroupId, FacoultyId) VALUES ('Дарья', 19, 9, 3);



SELECT * FROM Student WHERE Age = 19;



SELECT 
    Student.Id, 
    Student.Name, 
    Student.Age 
FROM 
    Student 
JOIN 
    Groups 
ON 
    Student.GroupId = Groups.Id 
WHERE 
    Student.GroupId = 1;



SELECT 
    Student.Id, 
    Student.Name, 
    Student.Age 
FROM 
    Student 
JOIN 
    Facoulty 
ON 
    Student.FacoultyId = Facoulty.Id 
WHERE 
    Student.FacoultyId = 1;



SELECT 
    Groups.GroupName, 
    Groups.GroupNumber, 
    Facoulty.FacoultyName 
FROM 
    Student 
JOIN 
    Groups 
ON 
    Student.GroupId = Groups.Id 
JOIN 
    Facoulty 
ON 
    Student.FacoultyId = Facoulty.Id 
WHERE 
    Student.Id = 1;