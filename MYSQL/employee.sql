create database college;
use college;

create table info(
name varchar(100),
marks int,
id int primary key,
age int);

insert into info
values("Sahil",75,5,23),
("Shaikh",85,35,24);

select*from info;

alter table info
change name st_name varchar(100);

alter table info
add column marks int ;

insert into info(st_name,marks,id,age)
values
("Moses",80,30,24),
("Eve",95,25,24),
("Adam",65,20,24),
("Lucas",60,15,24);

update info
set marks = 78 
where st_name="Sahil";

update info
set marks = 75 
where st_name="Shaikh";

select*from info;

delete from info
where marks<80;

alter table info
drop column marks;

create table employee(
id int primary key,
name varchar(50),
manager_id int);

insert into employee(id,name,manager_id)
values
(101,"Adam",103),
(102,"Bob",104),
(103,"Casey",null),
(104,"Donald", 103);

select*from employee;

select a.name as manager_name, b.name as employee_name
from employee as a
join employee as b
on a.id=b.manager_id;

select name from employee
union
select name from employee;


create view view1 as
select st_name,age from info;


select*from view1;


