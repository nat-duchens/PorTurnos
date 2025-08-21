# 🛒 Tiendita - API REST Spring Boot

Este directorio contiene el código fuente de la API REST de **Por Turnos**, desarrollada con **Java + Spring Boot**.

---

## 📌 Tecnologías y Herramientas

## 📌 Tecnologías y Herramientas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Java** | 24 | Lenguaje de programación principal |
| **Spring Boot** | 3.5.4 | Framework web y de aplicaciones |
| **Spring Data JPA** | Incluido | ORM y acceso a datos |
| **Spring Security** | Incluido | Autenticación y autorización |
| **JWT** | - | Tokens de seguridad |
| **MySQL** | 8.0+ | Base de datos relacional |
| **Maven** | 3.8+ | Gestión de dependencias |
| **DBeaver** | Latest | Administración de BD |
| **Bruno** | Latest | Testing de APIs |

---

## 📂 Estructura de Paquetes

Dentro de `tiendita/` la estructura es la siguiente:

```
tiendita/
├── 📄 .env                    # Variables de entorno
├── 📄 pom.xml                 # Configuración Maven
├── 📄 README.md               # Este archivo
├── 📁 src/
│   ├── 📁 main/
│   │   ├── 📁 java/com/bootcamp/
│   │   │   ├── 📄 TienditaApplication.java      # Clase principal
│   │   │   ├── 📁 config/                       # Configuraciones
│   │   │   │   ├── WebConfig.java               # CORS, interceptors
│   │   │   │   └── DatabaseConfig.java          # Configuración DB
│   │   │   ├── 📁 controller/                   # Controladores REST
│   │   │   │   ├── AuthController.java          # Autenticación
│   │   │   │   ├── ClienteController.java       # Gestión clientes
│   │   │   │   ├── ProductoController.java      # Gestión productos
│   │   │   │   ├── ComentarioController.java    # Sistema comentarios
│   │   │   │   ├── BlogController.java          # Blog comunitario
│   │   │   │   └── VentaController.java         # Transacciones
│   │   │   ├── 📁 model/                        # Entidades del dominio
│   │   │   │   ├── Cliente.java                 # Entidad Cliente
│   │   │   │   ├── Producto.java                # Entidad Producto
│   │   │   │   ├── Comentario.java              # Entidad Comentario
│   │   │   │   ├── Blog.java                    # Entidad Blog
│   │   │   │   ├── Venta.java                   # Entidad Venta
│   │   │   │   └── 📁 enums/                    # Enumeraciones
│   │   │   │       ├── EstadoProducto.java      # NUEVO|SEMI_NUEVO|USADO
│   │   │   │       ├── DisponibilidadProducto.java # DISPONIBLE|VENDIDO|PAUSADO
│   │   │   │       ├── EstadoVenta.java         # PENDIENTE|CONFIRMADA|ENTREGADA|CANCELADA
│   │   │   │       └── MetodoPago.java          # EFECTIVO|TRANSFERENCIA|etc.
│   │   │   ├── 📁 repository/                   # Acceso a datos (JPA)
│   │   │   │   ├── ClienteRepository.java
│   │   │   │   ├── ProductoRepository.java
│   │   │   │   ├── ComentarioRepository.java
│   │   │   │   ├── BlogRepository.java
│   │   │   │   └── VentaRepository.java
│   │   │   ├── 📁 security/                     # Seguridad y JWT
│   │   │   │   ├── 📁 jwt/                      # JWT Utils
│   │   │   │   ├── 📁 model/                    # Modelos de seguridad
│   │   │   │   ├── 📁 repository/               # Repos de seguridad
│   │   │   │   └── 📁 web/                      # Controllers de auth
│   │   │   └── 📁 service/                      # Lógica de negocio
│   │   │       ├── ClienteService.java
│   │   │       ├── ProductoService.java
│   │   │       ├── ComentarioService.java
│   │   │       ├── BlogService.java
│   │   │       └── VentaService.java
│   │   └── 📁 resources/                        # Configuración y recursos
│   │       ├── application.yml                  # Configuración principal
│   │       ├── application-dev.yml              # Perfil desarrollo
│   │       ├── application-prod.yml             # Perfil producción
│   │       └── schema.sql                       # Scripts SQL iniciales
│   └── 📁 test/                                 # Pruebas unitarias
│       └── 📁 java/com/bootcamp/
│           ├── TienditaApplicationTests.java
│           └── 📁 controller/                   # Tests de controladores
└── 📁 target/                                   # Archivos compilados (generado)
```

---

## ▶ Configuración y Ejecución

### Prerrequisitos del Sistema

```bash
# Verificar versiones instaladas
java --version    # Debe ser 17 o superior
mvn --version     # Maven 3.8+
mysql --version   # MySQL 8.0+
```

1. Configura las variables de conexión a MySQL en `application.yml` o `.env`.

2. Ejecuta:

```bash
mvn spring-boot:run
```

3. API disponible en:http://localhost:8080

---

## 🏗️ Arquitectura y Patrones de Diseño

### Patrones Implementados

- **🏛️ MVC (Model-View-Controller)**: Separación clara de responsabilidades
- **🔌 Repository Pattern**: Abstracción del acceso a datos
- **🎯 Service Layer**: Lógica de negocio centralizada
- **💉 Dependency Injection**: Inversión de control con Spring
- **🛡️ JWT Token Authentication**: Seguridad stateless
- **📄 DTO Pattern**: Transferencia de datos optimizada

### Flujo de una Request

```
Cliente HTTP Request
        ↓
   🔐 Security Filter (JWT)
        ↓
   🎮 Controller (REST Endpoints)
        ↓
   🎯 Service (Business Logic)
        ↓
   🔌 Repository (Data Access)
        ↓
   🗄️ Database (MySQL)
```

---

## 🔐 Reglas de Negocio y Validaciones

### Reglas Principales

| Entidad | Regla de Negocio |
|---------|------------------|
| **👤 Clientes** | Pueden ser compradores, vendedores o ambos roles |
| **🎲 Productos** | Estado y disponibilidad cambian según transacciones |
| **💰 Ventas** | Registran método de pago, estado y datos de entrega |
| **💬 Comentarios** | Siempre pertenecen a un producto y un cliente específico |
| **📝 Blogs** | Solo clientes registrados pueden publicar contenido |

---

## Esquema de Tablas

### 👤 `clientes`
- `id` BIGINT PK, AUTO_INCREMENT  
- `rut` VARCHAR(12) NOT NULL **UNIQUE**  
- `nombres` VARCHAR(100) NOT NULL  
- `apellidos` VARCHAR(100) NOT NULL  
- `email` VARCHAR(100) NOT NULL **UNIQUE**  
- `telefono` VARCHAR(20)  
- `direccion` VARCHAR(255) NOT NULL  
- `fecha_registro` TIMESTAMP DEFAULT CURRENT_TIMESTAMP  

> Un cliente puede comprar y/o vender productos.

---

### 🎲 `productos`
- `id` BIGINT PK, AUTO_INCREMENT  
- `cliente_id` BIGINT NOT NULL **FK** → `clientes(id)`  
- `nombre_producto` VARCHAR(120) NOT NULL  
- `descripcion` VARCHAR(300) NOT NULL  
- `imagen` TEXT (URL)  
- `precio` DECIMAL(10,2) NOT NULL CHECK (`precio` ≥ 0)  
- `cantidad` INT NOT NULL  
- `categoria` VARCHAR(50)  
- `estado` ENUM(`nuevo`, `semi_nuevo`, `usado`) DEFAULT `usado`  
- `disponibilidad` ENUM(`disponible`, `vendido`, `pausado`) DEFAULT `disponible`  
- `fecha_publicacion` TIMESTAMP DEFAULT CURRENT_TIMESTAMP  

---

### 💬 `comentarios`
- `id` BIGINT PK, AUTO_INCREMENT  
- `cliente_id` BIGINT NOT NULL **FK** → `clientes(id)`  
- `producto_id` BIGINT NOT NULL **FK** → `productos(id)`  
- `nombre_comentario` VARCHAR(50) NOT NULL  
- `texto` VARCHAR(300) NOT NULL  
- `fecha_comentario` TIMESTAMP DEFAULT CURRENT_TIMESTAMP  

---

### 📝 `blogs`
- `id` BIGINT PK, AUTO_INCREMENT  
- `cliente_id` BIGINT NOT NULL **FK** → `clientes(id)`  
- `categoria` VARCHAR(50) NOT NULL  
- `titulo` VARCHAR(50) NOT NULL  
- `cuerpo_blog` TEXT NOT NULL  
- `imagen` TEXT  
- `fecha_publicacion` TIMESTAMP DEFAULT CURRENT_TIMESTAMP  

---

### 💰 `ventas`
- `id` BIGINT PK, AUTO_INCREMENT  
- `producto_id` BIGINT NOT NULL **FK** → `productos(id)`  
- `cliente_comprador_id` BIGINT NOT NULL **FK** → `clientes(id)`  
- `cliente_vendedor_id` BIGINT NOT NULL **FK** → `clientes(id)`  
- `precio_venta` DECIMAL(10,2) NOT NULL CHECK (`precio_venta` ≥ 0)  
- `cantidad_vendida` INT NOT NULL CHECK (`cantidad_vendida` > 0)  
- `total` DECIMAL(10,2) NOT NULL CHECK (`total` ≥ 0)  
- `metodo_pago` ENUM(`efectivo`, `transferencia`, `tarjeta_crédito`, `tarjeta_debito`, `paypal`, `mercadopago`) NOT NULL  
- `estado_venta` ENUM(`pendiente`, `confirmada`, `entregada`, `cancelada`) DEFAULT `pendiente`  
- `direccion_entrega` VARCHAR(255) NOT NULL  
- `telefono_contacto` VARCHAR(20)  
- `observaciones` TEXT  
- `fecha_venta` TIMESTAMP DEFAULT CURRENT_TIMESTAMP  
- `fecha_entrega` TIMESTAMP NULL  
- **Índices**:  
  - `idx_producto_id (producto_id)`  
  - `idx_cliente_comprador (cliente_comprador_id)`  
  - `idx_cliente_vendedor (cliente_vendedor_id)`  
  - `idx_fecha_venta (fecha_venta)`  
  - `idx_estado_venta (estado_venta)`

---

## 🔗 Relaciones y Cardinalidades

### Diagrama ER Completo

```
erDiagram
    CLIENTES ||--o{ PRODUCTOS : "publica (1:N)"
    CLIENTES ||--o{ COMENTARIOS : "escribe (1:N)"
    PRODUCTOS ||--o{ COMENTARIOS : "recibe (1:N)"
    CLIENTES ||--o{ BLOGS : "publica (1:N)"
    PRODUCTOS ||--o{ VENTAS : "se_vende_en (1:N)"
    CLIENTES ||--o{ VENTAS : "compra (1:N)"
    CLIENTES ||--o{ VENTAS : "vende (1:N)"

    CLIENTES {
        BIGINT id PK "🔑 Clave primaria"
        VARCHAR(12) rut UK "🆔 Identificador único"
        VARCHAR(100) nombres "👤 Nombres"
        VARCHAR(100) apellidos "👤 Apellidos"
        VARCHAR(100) email UK "📧 Email único"
        VARCHAR(255) password "🔐 Password encriptado"
        VARCHAR(20) telefono "📞 Teléfono"
        VARCHAR(255) direccion "🏠 Dirección"
        BOOLEAN enabled "✅ Cuenta activa"
        TIMESTAMP fecha_registro "📅 Fecha registro"
    }

    PRODUCTOS {
        BIGINT id PK "🔑 Clave primaria"
        BIGINT cliente_id FK "👤 Vendedor"
        VARCHAR(120) nombre_producto "🎲 Nombre juego"
        VARCHAR(300) descripcion "📝 Descripción"
        TEXT imagen "🖼️ URL imagen"
        DECIMAL(10,2) precio "💰 Precio"
        INT cantidad "📦 Stock"
        VARCHAR(50) categoria "🏷️ Categoría"
        ENUM estado "🆕 NUEVO|SEMI_NUEVO|USADO"
        ENUM disponibilidad "📊 DISPONIBLE|VENDIDO|PAUSADO"
        TIMESTAMP fecha_publicacion "📅 Fecha publicación"
    }

    COMENTARIOS {
        BIGINT id PK "🔑 Clave primaria"
        BIGINT cliente_id FK "👤 Autor"
        BIGINT producto_id FK "🎲 Producto"
        VARCHAR(50) nombre_comentario "📝 Título"
        VARCHAR(300) texto "💬 Contenido"
        TINYINT calificacion "⭐ Rating 1-5"
        TIMESTAMP fecha_comentario "📅 Fecha"
    }

    BLOGS {
        BIGINT id PK "🔑 Clave primaria"
        BIGINT cliente_id FK "👤 Autor"
        VARCHAR(50) categoria "🏷️ Categoría"
        VARCHAR(50) titulo "📰 Título"
        TEXT cuerpo_blog "📝 Contenido"
        TEXT imagen "🖼️ Imagen destacada"
        BOOLEAN publicado "🚀 Publicado"
        TIMESTAMP fecha_publicacion "📅 Fecha"
    }

    VENTAS {
        BIGINT id PK "🔑 Clave primaria"
        BIGINT producto_id FK "🎲 Producto"
        BIGINT cliente_comprador_id FK "🛒 Comprador"
        BIGINT cliente_vendedor_id FK "💼 Vendedor"
        DECIMAL(10,2) precio_venta "💰 Precio final"
        INT cantidad_vendida "📦 Cantidad"
        DECIMAL(10,2) total "💵 Total"
        ENUM metodo_pago "💳 Método pago"
        ENUM estado_venta "📊 Estado"
        VARCHAR(255) direccion_entrega "🚚 Dirección"
        VARCHAR(20) telefono_contacto "📞 Contacto"
        TEXT observaciones "📝 Notas"
        TIMESTAMP fecha_venta "📅 Fecha venta"
        TIMESTAMP fecha_entrega "📅 Fecha entrega"
    }
```

### Reglas de Integridad Referencial

| Relación | Tipo | Acción DELETE | Acción UPDATE |
|----------|------|---------------|---------------|
| `productos.cliente_id → clientes.id` | 1:N | CASCADE | CASCADE |
| `comentarios.cliente_id → clientes.id` | 1:N | CASCADE | CASCADE |
| `comentarios.producto_id → productos.id` | 1:N | CASCADE | CASCADE |
| `blogs.cliente_id → clientes.id` | 1:N | CASCADE | CASCADE |
| `ventas.producto_id → productos.id` | 1:N | RESTRICT | CASCADE |
| `ventas.cliente_comprador_id → clientes.id` | 1:N | RESTRICT | CASCADE |
| `ventas.cliente_vendedor_id → clientes.id` | 1:N | RESTRICT | CASCADE |

---

## 🛠 Tecnologías Utilizadas

### Stack Backend Completo

## 🛠 Tecnologías Utilizadas

### Stack Backend Completo

| Capa / Rol           | Tecnología                              | Versión                          | Descripción |
|----------------------|------------------------------------------|----------------------------------|-------------|
| **🔧 Build Tool**    | Maven                                    | 3.8+                             | Gestión de dependencias y construcción del proyecto |
| **☕ Runtime**       | OpenJDK                                  | 21                               | Máquina virtual Java para ejecutar la aplicación |
| **🌱 Framework**     | Spring Boot                              | 3.5.4                            | Framework para desarrollo rápido de aplicaciones Java |
| **🔌 Data Access**   | Spring Data JPA                          | Gestionado por Spring Boot 3.5.4 | ORM y repositorios para acceso a datos |
| **🛡️ Security**     | Spring Security                          | Gestionado por Spring Boot 3.5.4 | Autenticación, autorización y seguridad |
| **🗄️ Database**     | MySQL (mysql-connector-j)                | Gestionado por Spring Boot 3.5.4 | Conector JDBC para MySQL |
| **🔑 Authentication**| JJWT (io.jsonwebtoken)                   | 0.11.5                           | Manejo de tokens JWT para autenticación |
| **📊 Connection Pool**| HikariCP                                | Gestionado por Spring Boot 3.5.4 | Pool de conexiones por defecto en Spring Boot |
| **🧰 Validación**    | Spring Boot Starter Validation           | Gestionado por Spring Boot 3.5.4 | Bean Validation con Jakarta |
| **⚙️ Devtools**      | Spring Boot DevTools                     | Gestionado (scope runtime)       | Hot reload y herramientas para desarrollo |
| **🧩 Config**        | spring-dotenv (me.paulschwarz)           | 3.0.0                            | Manejo de variables de entorno desde `.env` |
| **🧵 Lombok**        | Project Lombok                           | 1.18.38                          | Reducción de código repetitivo con anotaciones |
| **🛠 DB Tool**       | DBeaver                                  | Local                            | Cliente para administración y modelado de bases de datos |
| **📦 API Testing**   | Bruno                                    | Local                            | Herramienta para pruebas y documentación de endpoints |
| **🛠 Control Versiones**| Git + GitHub                          | -                                | Control de versiones y repositorio remoto |

---

## Consultas de Ejemplo

```sql
-- Últimos 10 productos disponibles
SELECT p.*
FROM productos p
WHERE p.disponibilidad = 'disponible'
ORDER BY p.fecha_publicacion DESC
LIMIT 10;

-- Comentarios de un producto
SELECT c.nombre_comentario, c.texto, c.fecha_comentario, cli.nombres, cli.apellidos
FROM comentarios c
JOIN clientes cli ON cli.id = c.cliente_id
WHERE c.producto_id = ? 
ORDER BY c.fecha_comentario DESC;

-- Ventas por estado y fecha
SELECT estado_venta, COUNT(*) AS total
FROM ventas
WHERE fecha_venta >= CURDATE() - INTERVAL 30 DAY
GROUP BY estado_venta;

-- Top vendedores por monto vendido
SELECT v.cliente_vendedor_id, cli.nombres, cli.apellidos, SUM(v.total) AS monto_total
FROM ventas v
JOIN clientes cli ON cli.id = v.cliente_vendedor_id
GROUP BY v.cliente_vendedor_id, cli.nombres, cli.apellidos
ORDER BY monto_total DESC
LIMIT 5;
```

---
