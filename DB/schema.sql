CREATE DATABASE covid_db;
USE covid_db;

CREATE TABLE `Stats` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `State` VARCHAR( 255) NOT NULL,
  `number of cases` Int( 55 ) NOT NULL,
  `created_at` DATETIME NOT NULL,

  PRIMARY KEY ( `id` ) 
);