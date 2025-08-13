DROP database if exists empresa;
CREATE DATABASE empresa;
USE empresa;
drop table if exists empleados;
create table empleados(
 id_empleado int auto_increment primary key,
 nombre varchar(100) not null,
 apellido varchar(100) not null,
 fecha_contratacion date not null,
 salario decimal(10,2) not null DEFAULT 0.0,
 departamento varchar(100)
);

INSERT INTO empleados (nombre, apellido, fecha_contratacion, salario, departamento) VALUES
('Laura', 'Gómez', '2020-05-12', 2500.00, 'Ventas'),
('Carlos', 'Martínez', '2019-11-03', 3200.50, 'TI'),
('Ana', 'Rodríguez', '2021-02-28', 1800.75, 'Recursos Humanos'),
('Pedro', 'Sánchez', '2022-07-15', 2100.00, 'Marketing'),
('Marta', 'López', '2018-09-22', 2900.00, 'Finanzas'),
('Javier', 'Fernández', '2023-01-10', 0.00, 'Practicante'),
('Sofía', 'Díaz', '2020-08-17', 2650.25, 'Ventas'),
('Ricardo', 'Pérez', '2017-04-05', 4100.00, 'TI'),
('Elena', 'Ruiz', '2022-03-30', 1950.00, 'Atención al Cliente'),
('Diego', 'Hernández', '2023-06-18', DEFAULT, 'Logística');

SELECT * from empleados;