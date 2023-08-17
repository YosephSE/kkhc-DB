CREATE TABLE serviceinfo(
memberid int primary key,
inservice boolean,
ifyesservice varchar(254),
ifnoservice varchar(254),
neigborhoodunion boolean,
ifnoreason text,
unioinid int,
foreign key(unionid) references unioninfo(id)
);