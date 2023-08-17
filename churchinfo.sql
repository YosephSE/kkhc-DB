CREATE TABLE churchinfo(
memberid int primary key,
baptizedkkhc boolean,
baptizedwhere varchar(254),
teachername varchar(254),
dateofmembership date,
curchrelationship varchar(254),
moreonrelationship text,
foreign key(memberid) references memberinfo(id)
);