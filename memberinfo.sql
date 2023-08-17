CREATE TABLE memberinfo(
id int auto_increment primary key,
title varchar(254),
firstname varchar(100),
middlename varchar(100),
lastname varchar(100),
sex varchar(6),
birthdate date,
subcity varchar(10),
district int,
homeno varchar(100),
neighborhood varchar(254),
Homephone varchar(254),
personalphone varchar(20),
postal varchar(254),
email varchar(254),
handicap boolean,
handicaptype text
);