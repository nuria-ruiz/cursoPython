USE ejemplo;
SHOW tables;
describe usuarios;

create table usuarios(
nombre varchar(30) primary key,
clave varchar(10)
);

insert into usuarios (nombre, clave)
 values ('Leonardo','payaso');
insert into usuarios (nombre, clave)
 values ('MarioPerez','Mario');
insert into usuarios (nombre, clave)
 values ('Marcelo','River');
insert into usuarios (nombre, clave)
 values ('Gustavo','River');
 
 select * from usuarios;
 insert into usuarios (nombre, clave)
 values ('Gustavo','Boca');
 
 create table parking(
 matricula varchar(7),
 tipo varchar(3),
 f_entrada datetime not null,
 f_salida datetime,
 primary key(matricula,f_entrada)
 );

select * from parking; 