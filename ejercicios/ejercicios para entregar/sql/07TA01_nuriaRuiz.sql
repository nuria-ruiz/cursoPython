DROP database if exists empleados;
Create database empleados;
use empleados;

drop table if exists asistencia;
create table asistencia(
empleado_id int primary key auto_increment not null,
fecha_asistencia date not null,
estado_asistencia enum('presente', 'ausente', 'vacaciones','enfermedad') not null,
HoraEntrada time not null,
HoraSalida time,
TrabajoRemoto boolean not null,
comentarios varchar(500),
DocumentoAdjunto blob,
ModoTransporte enum ('coche', 'transporte publico', 'bicicleta', 'a pie') not null,
TareasCompletadas set ('emails', 'reuniones', 'desarrollo', 'diseño') not null
);