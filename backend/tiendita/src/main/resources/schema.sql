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

-- TABLA VENTAS
CREATE TABLE IF NOT EXISTS ventas(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    producto_id BIGINT NOT NULL,
    cliente_comprador_id BIGINT NOT NULL,
    cliente_vendedor_id BIGINT NOT NULL,
    precio_venta DECIMAL(10,2) NOT NULL CHECK (precio_venta >= 0),
    cantidad_vendida INT NOT NULL CHECK (cantidad_vendida > 0),
    total DECIMAL(10,2) NOT NULL CHECK (total >= 0),
    metodo_pago ENUM('efectivo', 'transferencia', 'tarjeta_crédito', 'tarjeta_debito', 'paypal', 'mercadopago') NOT NULL,
    estado_venta ENUM('pendiente', 'confirmada', 'entregada', 'cancelada') NOT NULL DEFAULT 'pendiente',
    direccion_entrega VARCHAR(255) NOT NULL,
    telefono_contacto VARCHAR(20),
    observaciones TEXT,
    fecha_venta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_entrega TIMESTAMP NULL,

    -- Claves foráneas
    FOREIGN KEY (producto_id) REFERENCES productos(id),
    FOREIGN KEY (cliente_comprador_id) REFERENCES clientes(id),
    FOREIGN KEY (cliente_vendedor_id) REFERENCES clientes(id),

    -- Índices para optimizar consultas
    INDEX idx_producto_id (producto_id),
    INDEX idx_cliente_comprador (cliente_comprador_id),
    INDEX idx_cliente_vendedor (cliente_vendedor_id),
    INDEX idx_fecha_venta (fecha_venta),
    INDEX idx_estado_venta (estado_venta)
    );
















