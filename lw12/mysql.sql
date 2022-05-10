/*  Server connection

\sql

\connect root@localhost:3306

*/

CREATE DATABASE Universe;

USE Universe;



CREATE TABLE Facoulty
(
    Id INT AUTO_INCREMENT PRIMARY KEY,
    FacoultyName VARCHAR(255) NOT NULL
);

CREATE TABLE Groups
(
    Id INT AUTO_INCREMENT PRIMARY KEY,
    GroupName VARCHAR(255) NOT NULL,
    GroupNumber INT NOT NULL,
    FacoultyId INT NOT NULL,
    FOREIGN KEY (FacoultyId) REFERENCES Facoulty (Id)
);

CREATE TABLE Student 
(
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    FamilyName VARCHAR(255) NOT NULL,
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

INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Дмитрий', 'Македонский', 19, 1, 1);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Михаил', 'Грачев', 20, 1, 1);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Павел', 'Дуров', 20, 1, 1);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Анна', 'Макаренко', 19, 1, 1);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Дарья', 'Пирогова', 19, 1, 1);

INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Дмитрий', 'Македонский', 19, 2, 1);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Михаил', 'Грачев', 20, 2, 1);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Павел', 'Дуров', 20, 2, 1);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Анна', 'Макаренко', 19, 2, 1);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Дарья', 'Пирогова', 19, 2, 1);

INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Дмитрий', 'Македонский', 19, 3, 1);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Михаил', 'Грачев', 20, 3, 1);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Павел', 'Дуров', 20, 3, 1);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Анна', 'Макаренко', 19, 3, 1);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Дарья', 'Пирогова', 19, 3, 1);

INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Дмитрий', 'Македонский', 19, 4, 2);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Михаил', 'Грачев', 20, 4, 2);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Павел', 'Дуров', 20, 4, 2);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Анна', 'Макаренко', 19, 4, 2);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Дарья', 'Пирогова', 19, 4, 2);

INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Дмитрий', 'Македонский', 19, 5, 2);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Михаил', 'Грачев', 20, 5, 2);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Павел', 'Дуров', 20, 5, 2);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Анна', 'Макаренко', 19, 5, 2);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Дарья', 'Пирогова', 19, 5, 2);

INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Дмитрий', 'Македонский', 19, 6, 2);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Михаил', 'Грачев', 20, 6, 2);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Павел', 'Дуров', 20, 6, 2);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Анна', 'Макаренко', 19, 6, 2);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Дарья', 'Пирогова', 19, 6, 2);

INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Дмитрий', 'Македонский', 19, 7, 3);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Михаил', 'Грачев', 20, 7, 3);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Павел', 'Дуров', 20, 7, 3);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Анна', 'Макаренко', 19, 7, 3);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Дарья', 'Пирогова', 19, 7, 3);

INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Дмитрий', 'Македонский', 19, 8, 3);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Михаил', 'Грачев', 20, 8, 3);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Павел', 'Дуров', 20, 8, 3);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Анна', 'Макаренко', 19, 8, 3);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Дарья', 'Пирогова', 19, 8, 3);

INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Дмитрий', 'Македонский', 19, 9, 3);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Михаил', 'Грачев', 20, 9, 3);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Павел', 'Дуров', 20, 9, 3);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Анна', 'Макаренко', 19, 9, 3);
INSERT INTO Student (Name, FamilyName, Age, GroupId, FacoultyId) VALUES ('Дарья', 'Пирогова', 19, 9, 3);



SELECT * FROM Student WHERE Age = 19;



SELECT 
    Student.Id, 
    Student.Name,
    Student.FamilyName, 
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
    Student.FamilyName, 
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