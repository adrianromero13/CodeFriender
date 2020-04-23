DROP DATABASE IF EXISTS developer_db;

CREATE DATABASE developer_db;


USE developer_db;

CREATE TABLE ucbxUsers (
id INTEGER NOT NULL AUTO_INCREMENT,
first_name VARCHAR (50) NOT NULL,
last_name VARCHAR (50) NOT NULL,
email VARCHAR (50) NOT NULL,
github VARCHAR (50) NOT NULL,
strengthID INT (10) NOT NULL,
weaknessID INT (10) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE ucbxStrengths (
    id INT AUTO_INCREMENT NOT NULL,
    subjects VARCHAR (50) NOT NULL,
    PRIMARY KEY (id)
);

Create TABLE ucbxWeakness (
    id INT AUTO_INCREMENT NOT NULL,
    subjects VARCHAR (50) NOT NULL,
    PRIMARY KEY (id)
);