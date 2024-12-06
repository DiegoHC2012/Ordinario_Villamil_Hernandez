DROP DATABASE IF EXISTS ordinario_modelo_admin;
CREATE DATABASE ordinario_modelo_admin;
USE ordinario_modelo_admin;

CREATE TABLE estudiantes(
id INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(150) NOT NULL,
apellidos VARCHAR(200) NOT NULL,
email VARCHAR(100) NOT NULL,
matricula VARCHAR(100) NOT NULL,
edad INT NOT NULL,
semestre VARCHAR(10) NOT NULL,
usuario_creacio VARCHAR(100) NOT NULL,
fecha_creacion DATETIME NOT NULL DEFAULT NOW()
);

CREATE TABLE maestros(
id INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(150) NOT NULL,
edad INT NOT NULL,
telefono BIGINT NOT NULL,
correo VARCHAR(100) NOT NULL,
usuario_creacio VARCHAR(100) NOT NULL,
fecha_creacion DATETIME NOT NULL DEFAULT NOW()
);

CREATE TABLE materias(
id INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(150) NOT NULL,
profesor_id INT NOT NULL,
create_user VARCHAR(100) NOT NULL,
create_date DATETIME NOT NULL DEFAULT NOW(),
FOREIGN KEY(profesor_id) REFERENCES maestros(id)
);

CREATE TABLE calificaciones(
id INT PRIMARY KEY AUTO_INCREMENT,
estudiante_id INT NOT NULL,
maestro_id INT NOT NULL,
materia_id INT NOT NULL,
create_user VARCHAR(100) NOT NULL,
create_date DATETIME NOT NULL DEFAULT NOW(),
FOREIGN KEY (estudiante_id) REFERENCES estudiantes(id),
FOREIGN KEY (maestro_id) REFERENCES maestros(id),
FOREIGN KEY (materia_id) REFERENCES materias(id)
);

INSERT INTO estudiantes(nombre, apellidos, email, matricula, edad, semestre, usuario_creacio, fecha_creacion)
VALUES('QUE?????????', 'POO', 'pee@poo.com', '15222100', 21, '425', 'Diosito', NOW());

INSERT INTO maestros(nombre, edad, telefono, correo, usuario_creacio, fecha_creacion)
VALUES('Profesor', 30, 1234567, 'profe@gmail.com','Diosito', NOW());