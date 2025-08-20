drop database if exists bares_musicales;
create database bares_musicales;
use bares_musicales;

drop table if exists pub;
drop table if exists localidad;
drop table if exists titular;
drop table if exists empleado;
drop table if exists stock;
drop table if exists pub_empleado;

create table pub(
cod_pub varchar(5) primary key not null,
nombre varchar(100) not null,
licencia varchar(50) not null,
domicilio varchar(100),
f_apertura date not null,
horario enum('HOR1', 'HOR2', 'HOR3') not null,
cod_prov int not null
);

create table localidad(
cod_prov int primary key,
nombre varchar(100)
);

create table titular(
dni_titular varchar(10) primary key not null,
nombre varchar(100) not null,
domicilio varchar(100),
cod_pub varchar(5) not null,
FOREIGN KEY (cod_pub) REFERENCES PUB(cod_pub)
); 

create table empleado(
dni_emp VARCHAR(10) primary key not null,
nombre varchar(100) not null,
domicilio varchar(100) 
);


create table stock(
cod_prod int primary key auto_increment not null,
nombre varchar(100) not null,
cantidad int not null,
precio int check (precio > 0) not null,
cod_pub varchar(5) not null,
FOREIGN KEY (cod_pub) REFERENCES PUB(cod_pub)
);

CREATE TABLE PUB_EMPLEADO (
cod_pub varchar(5) not null,
dni_empleado varchar(10) not null,
cargo enum('CAMARERO', 'SEGURIDAD', 'LIMPIEZA') not null,
PRIMARY KEY (cod_pub, dni_empleado, cargo),
FOREIGN KEY (cod_pub) REFERENCES PUB(cod_pub),
FOREIGN KEY (dni_empleado) REFERENCES EMPLEADO(dni_emp)
);


  # Datos del PUB
insert into pub values('01','Borges','Homologada1', 'Polvorin','2020-05-15', 'HOR1', '15002');
insert into pub values('02','Agua Mineral','Comprada', 'Orzan','1985-05-15', 'HOR1', '15001'); 
insert into pub values('03','Grietas','Robada', 'Matogrande','2002-02-10', 'HOR2', '15004'); 
insert into pub values('04','OH Coruña','Homologada', 'Orillamar','2020-05-15','HOR1', '15002');  
insert into pub values('05','Borges','Homologada1', 'Polvorin','2020-05-15', 'HOR1', '15002');
insert into pub values('06','Nueces','No  Homologada', 'Vereda','2010-05-15', 'HOR3', '15002');

# Datos de la LOCALIDAD
  insert into localidad values (15002, 'La Coruña');
  insert into localidad values (15165, 'Bergondo');
  insert into localidad values (15160, 'Sada');
  insert into localidad values (15170, 'Betanzos');
  insert into localidad values (15001, 'Ayuntamiento Coruña');
  insert into localidad values (15004, 'Centro Coruña');  

 # Datos del TITULAR
insert into titular values ('1234567X', 'Manolo','Orillamar','01');
insert into titular values ('2345678c', 'Pepe','Riobao', '02');
insert into titular values ('5649872x', 'Tomas','Cacharrete', '02');
insert into titular values ('7654321X','Antonio','Mandin','01');

 # Datos EMPLEADO
insert into empleado values ('1234567X', 'Manuel','Orillamar');
insert into empleado values ('4534567X', 'Lucas','Orzan');
insert into empleado values ('1234886X', 'Luis','Monte Alto');

# DATOS EMPLEADOS DEL PUB
insert into pub_empleado values('01','1234567X','CAMARERO');
insert into pub_empleado values('03','1234567X','SEGURIDAD');
insert into pub_empleado values('04','4534567X','CAMARERO');
insert into pub_empleado values('05','4534567X','SEGURIDAD');
