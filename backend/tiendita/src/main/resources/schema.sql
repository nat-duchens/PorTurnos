-- TABLA CLIENTES
CREATE TABLE IF NOT EXISTS clientes(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    rut VARCHAR(12) NOT NULL UNIQUE,
    nombres VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefono VARCHAR(20),
    direccion VARCHAR(255) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- TABLA PRODUCTOS
CREATE TABLE IF NOT EXISTS productos(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    cliente_id BIGINT NOT NULL,
    nombre_producto VARCHAR(120) NOT NULL,
    descripcion VARCHAR(300) NOT NULL,
    imagen TEXT, -- Aquí va la URL de la imagen
    precio DECIMAL(10,2) NOT NULL CHECK (precio >= 0),
    cantidad INT NOT NULL,
    categoria VARCHAR(50),
    estado ENUM('nuevo', 'semi_nuevo', 'usado') NOT NULL DEFAULT 'usado',
    disponibilidad ENUM('disponible', 'vendido', 'pausado') NOT NULL DEFAULT 'disponible',
    fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

-- TABLA COMENTARIOS
CREATE TABLE IF NOT EXISTS comentarios (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    cliente_id BIGINT NOT NULL,
    producto_id BIGINT NOT NULL,
    nombre_comentario VARCHAR(50) NOT NULL,
    texto VARCHAR(300) NOT NULL,
    fecha_comentario TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    FOREIGN KEY (producto_id) REFERENCES productos(id)

);

-- TABLA BLOGS
CREATE TABLE IF NOT EXISTS blogs (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    cliente_id BIGINT NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    titulo VARCHAR(50) NOT NULL,
    cuerpo_blog TEXT NOT NULL,
    imagen TEXT,
    fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
    );
