-- usuario admin (contraseña: Admin123!)
INSERT OR IGNORE INTO users(email,password_hash,role)
VALUES (
 'admin@nexa.org',
 '$2a$10$7Y9uMyM9Y/EJnpvTrk6gxOt9yDsXLyA0b4PR0HJ0dPPbQw8qGrw2G',
 'ADMIN'
);

INSERT INTO beneficiaries(full_name,dni,disability_pct,city) VALUES
('María López','12345678A',65,'Barcelona'),
('Jordi Pons','Y1234567B',45,'Badalona');

INSERT INTO requests(beneficiary_id,type,status,notes) VALUES
(1,'transporte','completado','Traslado a rehabilitación'),
(2,'orientacion','en_curso','Revisión de CV');
