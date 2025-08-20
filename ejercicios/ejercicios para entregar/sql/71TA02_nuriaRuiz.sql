DROP database if exists ecommerce;
CREATE database ecommerce;
USE ecommerce;
SHOW tables;

DROP table if exists usuarios;
CREATE table usuarios(
usuario_id int primary key auto_increment not null,
nombre varchar(50) not null,
email varchar(100) unique not null,
clave varchar(255) not null,
fecha_registro datetime not null
);

DROP table if exists productos;
CREATE table productos(
producto_id int primary key auto_increment not null,
titulo varchar(100) not null,
descripcion varchar(500),
precio decimal(7,2) not null,
stock int not null,
fecha_lanzamiento datetime not null
);

DROP table if exists categorias;
CREATE table categorias(
categoria_id int primary key auto_increment not null,
nombre varchar(50) not null,
descripción varchar(200)
);

DROP table if exists pedidos;
CREATE table pedidos(
    pedido_id int primary key auto_increment not null,
    fecha_pedido datetime not null,
    estado enum('pendiente', 'enviado', 'entregado') not null,
    total decimal(10,2) not null
);

DROP table if exists detalle_pedido;
CREATE table detalle_pedido(
detalle_id int primary key auto_increment not null,
cantidad int not null,
precio_unitario decimal (50,2) not null
);

