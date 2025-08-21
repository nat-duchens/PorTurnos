# Arquitectura del Marketplace de Juegos de Mesa Usados - PORTURNOS

## Estructura General

```
frontendReact/
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   ├── landing.css
│   │   │   ├── marketplace.css
│   │   │   └── seller-dashboard.css
│   │   └── img/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── Pagination.jsx
│   │   │   ├── Rating.jsx
│   │   │   └── Notification.jsx
│   │   ├── marketplace/
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ProductFilters.jsx
│   │   │   ├── ProductGrid.jsx
│   │   │   ├── ProductDetail.jsx
│   │   │   ├── SellerInfo.jsx
│   │   │   ├── GameCondition.jsx
│   │   │   ├── PriceRange.jsx
│   │   │   └── CategoryFilter.jsx
│   │   ├── seller/
│   │   │   ├── SellerDashboard.jsx
│   │   │   ├── ProductForm.jsx
│   │   │   ├── ProductList.jsx
│   │   │   ├── OrderManagement.jsx
│   │   │   └── SellerStats.jsx
│   │   ├── buyer/
│   │   │   ├── BuyerDashboard.jsx
│   │   │   ├── WishList.jsx
│   │   │   ├── PurchaseHistory.jsx
│   │   │   └── Reviews.jsx
│   │   ├── messaging/
│   │   │   ├── MessageList.jsx
│   │   │   ├── Conversation.jsx
│   │   │   └── MessageForm.jsx
│   │   └── checkout/
│   │       ├── Cart.jsx
│   │       ├── CheckoutForm.jsx
│   │       ├── PaymentOptions.jsx
│   │       └── OrderConfirmation.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Marketplace.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── SellerDashboard.jsx
│   │   ├── BuyerDashboard.jsx
│   │   ├── Messages.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── UserProfile.jsx
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── CartContext.jsx
│   │   ├── NotificationContext.jsx
│   │   └── FilterContext.jsx
│   ├── services/
│   │   ├── api.js
│   │   ├── auth.js
│   │   ├── products.js
│   │   ├── users.js
│   │   ├── messages.js
│   │   ├── orders.js
│   │   └── notifications.js
│   ├── utils/
│   │   ├── formatters.js
│   │   ├── validators.js
│   │   └── helpers.js
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useCart.js
│   │   ├── useProducts.js
│   │   └── useNotifications.js
│   ├── App.jsx
│   └── main.jsx
```

## Modelos de Datos

### Usuario
```javascript
{
  id: String,
  username: String,
  email: String,
  password: String (hashed),
  role: ['buyer', 'seller', 'admin'],
  profilePicture: String (URL),
  location: String,
  bio: String,
  rating: Number,
  reviewCount: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### Producto (Juego Usado)
```javascript
{
  id: String,
  title: String,
  description: String,
  price: Number,
  originalPrice: Number,
  discount: Number,
  category: String,
  condition: ['como nuevo', 'buen estado', 'aceptable', 'con defectos'],
  conditionDescription: String,
  completeness: ['completo', 'falta componentes'],
  missingPieces: String,
  images: [String] (URLs),
  sellerId: String (ref: Usuario),
  status: ['disponible', 'reservado', 'vendido'],
  views: Number,
  favorites: Number,
  rating: Number,
  reviewCount: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### Valoración
```javascript
{
  id: String,
  productId: String (ref: Producto),
  sellerId: String (ref: Usuario),
  buyerId: String (ref: Usuario),
  rating: Number,
  comment: String,
  createdAt: Date
}
```

### Mensaje
```javascript
{
  id: String,
  conversationId: String,
  senderId: String (ref: Usuario),
  receiverId: String (ref: Usuario),
  content: String,
  read: Boolean,
  createdAt: Date
}
```

### Conversación
```javascript
{
  id: String,
  participants: [String] (ref: Usuario),
  productId: String (ref: Producto),
  lastMessageAt: Date,
  createdAt: Date
}
```

### Orden
```javascript
{
  id: String,
  buyerId: String (ref: Usuario),
  sellerId: String (ref: Usuario),
  productId: String (ref: Producto),
  status: ['pendiente', 'pagado', 'enviado', 'entregado', 'cancelado'],
  price: Number,
  commission: Number,
  paymentMethod: String,
  shippingAddress: Object,
  trackingNumber: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Notificación
```javascript
{
  id: String,
  userId: String (ref: Usuario),
  type: ['mensaje', 'venta', 'compra', 'valoración', 'sistema'],
  content: String,
  read: Boolean,
  relatedId: String,
  createdAt: Date
}
```

## Flujos Principales

### Publicación de un Juego Usado
1. Usuario se registra/inicia sesión
2. Accede a su panel de vendedor
3. Completa formulario de publicación con detalles del juego
4. Sube fotos del estado del juego
5. Establece precio y condiciones de venta
6. El sistema verifica la información
7. El juego se publica en el marketplace

### Compra de un Juego Usado
1. Usuario navega por el marketplace
2. Filtra por categoría, estado, precio, etc.
3. Selecciona un juego
4. Revisa detalles, fotos y valoraciones
5. Puede contactar al vendedor para preguntas
6. Añade al carrito
7. Procede al checkout
8. Selecciona método de pago
9. Confirma la compra
10. Sistema notifica al vendedor

### Sistema de Valoraciones
1. Después de una compra completada
2. Comprador puede valorar al vendedor y al producto
3. Vendedor puede valorar al comprador
4. Las valoraciones afectan al ranking y visibilidad

### Mensajería
1. Usuario interesado contacta al vendedor
2. Sistema crea una conversación vinculada al producto
3. Ambas partes pueden intercambiar mensajes
4. Sistema notifica nuevos mensajes

## Características Especiales para Marketplace de Juegos Usados

### Verificación de Estado
- Sistema de categorización detallada del estado del juego
- Requisito de múltiples fotos mostrando componentes
- Descripción obligatoria de piezas faltantes o defectos

### Garantía de Marketplace
- Retención del pago hasta confirmación de recepción
- Proceso de disputa si el estado no coincide con lo descrito
- Posibilidad de devolución en casos específicos

### Comunidad
- Foros por categorías de juegos
- Eventos de intercambio virtuales
- Sistema de reputación de usuarios

### Monetización
- Comisión por venta (5-10%)
- Anuncios destacados para vendedores
- Membresías premium con beneficios

## Consideraciones Técnicas

### Frontend
- React para la interfaz de usuario
- Context API para gestión de estado
- React Router para navegación
- Formularios con validación
- Diseño responsive

### Backend
- API RESTful
- Autenticación JWT
- Almacenamiento de imágenes en servicio cloud
- Notificaciones en tiempo real
- Sistema de pagos integrado

### Seguridad
- Protección contra fraudes
- Verificación de usuarios
- Encriptación de datos sensibles
- Políticas de privacidad claras