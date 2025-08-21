# 🖥 Backend - Por Turnos

Este directorio contiene toda la lógica de negocio, el modelo de datos y la API REST de **Por Turnos**. Construido con Java 21 y Spring Boot, proporciona una API robusta y escalable para la plataforma de intercambio de juegos de mesa.

## 📌 Información del Proyecto

| Aspecto | Detalle |
|---------|---------|
| **Lenguaje** | Java 21 |
| **Framework** | Spring Boot 3.5.4|
| **Base de Datos** | MySQL 8.0+ |
| **Herramientas** | DBeaver, Bruno, Maven |
| **Arquitectura** | REST API + JPA |
| **Seguridad** | JWT + Spring Security |

## 🎯 Objetivos del Backend

### Funcionalidades Principales

- ✅ **Gestión de Clientes**: Registro, autenticación y perfiles de usuario
- ✅ **Catálogo de Productos**: CRUD completo con categorización y estados
- ✅ **Sistema de Comentarios**: Reviews y feedback de la comunidad
- ✅ **Blog Comunitario**: Plataforma de contenido generado por usuarios
- ✅ **Gestión de Ventas**: Transacciones seguras con múltiples métodos de pago
- ✅ **Optimización**: Índices y consultas optimizadas para rendimiento

### Objetivos de la Base de Datos

- 🔐 **Integridad de Datos**: Constrains y validaciones estrictas
- ⚡ **Performance**: Índices optimizados en columnas críticas
- 🔄 **Escalabilidad**: Diseño preparado para crecimiento
- 📊 **Análitica**: Estructura que facilita reportes y métricas
- 🛡️ **Seguridad**: Separación de roles y permisos

## 📂 Estructura del Backend

```
backend/
├── 🗂️ ejemplosBrunos/          # Colección de pruebas API
│   ├── auth.bru               # Autenticación y JWT
│   ├── clientes.bru           # Endpoints de clientes
│   ├── productos.bru          # Gestión de productos
│   ├── comentarios.bru        # Sistema de comentarios
│   ├── blogs.bru              # Blog endpoints
│   └── ventas.bru             # Transacciones
└── 🗂️ tiendita/               # Aplicación Spring Boot
    ├── src/main/java/         # Código fuente
    ├── src/main/resources/    # Configuración
    ├── src/test/              # Pruebas unitarias
    ├── pom.xml                # Dependencias Maven
    └── .env                   # Variables de entorno
```

## 🗄️ Modelo de Base de Datos

### Diagrama Entidad-Relación

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

### Enumeraciones del Sistema

#### Estados de Producto
```java
public enum EstadoProducto {
    NUEVO,          // Producto sin usar, en empaque original
    SEMI_NUEVO,     // Usado muy pocas veces, excelente estado
    USADO           // Usado con signos normales de desgaste
}
```

#### Disponibilidad de Producto
```java
public enum DisponibilidadProducto {
    DISPONIBLE,     // Listo para la venta
    VENDIDO,        // Ya fue vendido
    PAUSADO         // Temporalmente no disponible
}
```

#### Métodos de Pago
```java
public enum MetodoPago {
    EFECTIVO,
    TRANSFERENCIA,
    TARJETA_CREDITO,
    TARJETA_DEBITO,
    PAYPAL,
    MERCADOPAGO
}
```

#### Estados de Venta
```java
public enum EstadoVenta {
    PENDIENTE,      // Venta iniciada, esperando confirmación
    CONFIRMADA,     // Venta confirmada por ambas partes
    ENTREGADA,      // Producto entregado al comprador
    CANCELADA       // Venta cancelada
}
```

## 🔧 Configuración y Instalación

### 1. Prerrequisitos

```bash
# Verificar versiones
java --version    # Debe ser 21
mvn --version     # Maven 3.9.10
mysql --version   # MySQL 8.0+
```

### 2. Configura la base de datos en application.yml o .env.

Crear archivo `.env` en el directorio `tiendita/`:

```env
# Base de Datos
DB_HOST=localhost
DB_PORT=3306
DB_NAME=por_turnos_db
DB_USER=por_turnos_user
DB_PASSWORD=tu_password_seguro

# JWT
JWT_SECRET=tu_jwt_secret_muy_seguro_y_largo
JWT_EXPIRATION=*********

# Aplicación
SERVER_PORT=8080
APP_DEBUG=true
```

### 3. Ejecución

```bash
cd backend/tiendita

# Limpiar e instalar dependencias
mvn clean install

# Ejecutar en modo desarrollo
mvn spring-boot:run
```

### 4. Verificación

```bash
# Verificar que la API está funcionando
curl http://localhost:8080/api/health

# Debería retornar algo como:
# {"status":"UP","timestamp":"2024-01-20T10:30:00.000Z"}
```

## 📡 Endpoints de la API

### Autenticación

| Método | Endpoint | Descripción | Auth | Body/Params |
|--------|----------|-------------|------|-------------|
| `POST` | `/api/auth/login` | Iniciar sesión | ❌ | `{email, password}` |
| `POST` | `/api/auth/register` | Registrar nuevo usuario | ❌ | `{rut, nombres, apellidos, email, password, telefono, direccion, enabled?}` |

**Response de Login:**
```json
{"token": "jwt_token_here"}
```

**Response de Register:**
```json
{
  "token": {"token": "jwt_token_here"},
  "cliente": {"id": 1, "email": "user@example.com", "nombres": "Juan", "apellidos": "Pérez"}
}
```

### Clientes

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| `GET` | `/api/clientes` | Listar todos los clientes | ✅ |
| `GET` | `/api/clientes/{id}` | Obtener cliente por ID | ✅ |
| `POST` | `/api/clientes` | Crear nuevo cliente | ✅ |
| `PUT` | `/api/clientes/{id}` | Actualizar cliente | ✅ |
| `DELETE` | `/api/clientes/{id}` | Eliminar cliente | ✅ |

### Productos

| Método | Endpoint | Descripción | Auth | Params |
|--------|----------|-------------|------|--------|
| `GET` | `/api/productos` | Listar todos los productos | ❌ | - |
| `GET` | `/api/productos/{id}` | Obtener producto por ID | ❌ | - |
| `POST` | `/api/productos` | Crear nuevo producto | ✅ | Body JSON |
| `PUT` | `/api/productos/{id}` | Actualizar producto | ✅ | Body JSON |
| `DELETE` | `/api/productos/{id}` | Eliminar producto | ✅ | - |

#### Endpoints de Búsqueda y Paginación

| Método | Endpoint | Descripción | Params |
|--------|----------|-------------|--------|
| `GET` | `/api/productos/buscar` | Buscar por nombre con paginación | `nombre_producto`, `page`, `size`, `sortBy`, `direction` |
| `GET` | `/api/productos/pagina` | Listar con paginación genérica | `page`, `size`, `sortBy`, `direction` |
| `GET` | `/api/productos/ordenar` | Ordenar por categoría (paginado) | `page`, `size` |

### Comentarios

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| `GET` | `/api/comentarios` | Listar todos los comentarios | ❌ |
| `GET` | `/api/comentarios/{id}` | Obtener comentario por ID | ❌ |
| `POST` | `/api/comentarios` | Crear comentario | ✅ |
| `PUT` | `/api/comentarios/{id}` | Editar comentario | ✅ |
| `DELETE` | `/api/comentarios/{id}` | Eliminar comentario | ✅ |

### Blogs

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| `GET` | `/api/blogs` | Listar todos los blogs | ❌ |
| `GET` | `/api/blogs/{id}` | Obtener blog por ID | ❌ |
| `POST` | `/api/blogs` | Crear nuevo blog | ✅ |
| `PUT` | `/api/blogs/{id}` | Actualizar blog | ✅ |
| `DELETE` | `/api/blogs/{id}` | Eliminar blog | ✅ |

### Ventas

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| `GET` | `/api/ventas` | Listar todas las ventas | ✅ |
| `GET` | `/api/ventas/{id}` | Obtener venta por ID | ✅ |
| `POST` | `/api/ventas` | Crear nueva venta | ✅ |
| `PUT` | `/api/ventas/{id}` | Actualizar venta completa | ✅ |
| `DELETE` | `/api/ventas/{id}` | Eliminar venta | ✅ |

#### Endpoints Específicos de Ventas

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| `GET` | `/api/ventas/comprador/{idComprador}` | Ventas como comprador | ✅ |
| `GET` | `/api/ventas/vendedor/{idVendedor}` | Ventas como vendedor | ✅ |
| `GET` | `/api/ventas/vendedor/{idVendedor}/total` | Total vendido por vendedor | ✅ |
| `GET` | `/api/ventas/estado/{estado}` | Filtrar por estado de venta | ✅ |

#### Endpoints de Cambio de Estado

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| `PATCH` | `/api/ventas/{id}/confirmar` | Confirmar venta | ✅ |
| `PATCH` | `/api/ventas/{id}/entregar` | Marcar como entregada | ✅ |
| `PATCH` | `/api/ventas/{id}/cancelar` | Cancelar venta | ✅ |

**Estados de Venta Disponibles:**
- `PENDIENTE` - Venta creada, esperando confirmación
- `CONFIRMADA` - Venta confirmada por ambas partes  
- `ENTREGADA` - Producto entregado al comprador
- `CANCELADA` - Venta cancelada

## 🧪 Testing con Bruno

### Configurar Bruno

(Ejemplos simples)

1. **Instalar Bruno**: https://www.usebruno.com/
2. **Importar colección**: `Archivo > Importar > ejemplosBrunos/`
3. **Configurar entorno**:

```json
{
  "baseUrl": "http://localhost:8080",
  "authToken": "Bearer {{jwt_token}}"
}
```

### Flujo de Testing Recomendado

1. **Registro**: Crear nuevo usuario
2. **Login**: Obtener JWT token
3. **Productos**: CRUD de productos
4. **Comentarios**: Agregar reviews
5. **Ventas**: Simular transacción completa

## 📊 Consultas y Reportes

### Consultas de Performance

```sql
-- Top 10 productos más vendidos
SELECT 
    p.nombre_producto,
    p.categoria,
    SUM(v.cantidad_vendida) as total_vendido,
    AVG(v.precio_venta) as precio_promedio
FROM productos p
JOIN ventas v ON p.id = v.producto_id
WHERE v.estado_venta = 'ENTREGADA'
GROUP BY p.id, p.nombre_producto, p.categoria
ORDER BY total_vendido DESC
LIMIT 10;

-- Vendedores más activos del mes
SELECT 
    c.nombres,
    c.apellidos,
    COUNT(v.id) as ventas_realizadas,
    SUM(v.total) as ingresos_totales
FROM clientes c
JOIN ventas v ON c.id = v.cliente_vendedor_id
WHERE v.fecha_venta >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
    AND v.estado_venta = 'ENTREGADA'
GROUP BY c.id, c.nombres, c.apellidos
ORDER BY ventas_realizadas DESC
LIMIT 15;

-- Productos con más comentarios
SELECT 
    p.nombre_producto,
    p.categoria,
    COUNT(co.id) as total_comentarios,
    AVG(LENGTH(co.texto)) as longitud_promedio
FROM productos p
LEFT JOIN comentarios co ON p.id = co.producto_id
GROUP BY p.id, p.nombre_producto, p.categoria
HAVING total_comentarios > 0
ORDER BY total_comentarios DESC;
```

## 🛡️ Seguridad y Mejores Prácticas

### Configuración JWT

```java
@Value("${jwt.secret}")
private String jwtSecret;

@Value("${jwt.expiration}")
private Long jwtExpiration;

// Generación de token seguro
public String generateToken(UserDetails userDetails) {
    return Jwts.builder()
        .setSubject(userDetails.getUsername())
        .setIssuedAt(new Date())
        .setExpiration(new Date(System.currentTimeMillis() + jwtExpiration))
        .signWith(Keys.hmacShaKeyFor(jwtSecret.getBytes()))
        .compact();
}
```

### Validaciones

```java
@Entity
public class Cliente {
    @NotBlank(message = "El RUT es obligatorio")
    @Pattern(regexp = "^[0-9]{7,8}-[0-9Kk]$", message = "Formato de RUT inválido")
    private String rut;
    
    @Email(message = "Email inválido")
    @NotBlank(message = "El email es obligatorio")
    private String email;
    
    @DecimalMin(value = "0.0", message = "El precio debe ser mayor a 0")
    private BigDecimal precio;
}
```
