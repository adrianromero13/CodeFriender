DROP DATABASE IF EXISTS developer_db;

CREATE DATABASE developer_db;


USE developer_db;

CREATE TABLE ucbx (
id INTEGER NOT NULL AUTO_INCREMENT,
first_name VARCHAR (50) NULL,
last_name VARCHAR (50) NULL,
email VARCHAR (50) NULL,
github VARCHAR (50) NULL,
strengthID INT (10) NULL,
weaknessID INT (10) NULL,
PRIMARY KEY (id)
);

CREATE TABLE ucbxStrengths (
    id INT AUTO_INCREMENENT NOT NULL,
    course VARCHAR (50) NULL,
);

Create TABLE ucbxWeakness (
    id INT AUTO_INCREMENT NOT NULL,
    course VARCHAR (50) NOT NULL,
    CREATE TABLE ucbxTables (
);