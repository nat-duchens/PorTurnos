// Datos de ejemplo para el Panel de Vendedor
// Ubicación: /seller/utils/dummyData.js

export const sellerProfile = {
  name: "Juan Pérez",
  memberSince: "Junio 2023",
  rating: 4.8,
  reviewCount: 12,
  location: "Madrid, España",
  avatar: "https://via.placeholder.com/100x100"
};

export const products = [
  { 
    id: 1, 
    title: 'Catan', 
    price: 25, 
    condition: 'Casi nuevo', 
    status: 'active',
    views: 45,
    favorites: 12,
    messages: 3,
    image: 'https://via.placeholder.com/80x80'
  },
  { 
    id: 2, 
    title: 'Pandemic', 
    price: 32, 
    condition: 'Como nuevo', 
    status: 'active',
    views: 38,
    favorites: 8,
    messages: 5,
    image: 'https://via.placeholder.com/80x80'
  },
  { 
    id: 3, 
    title: 'Dixit', 
    price: 18, 
    condition: 'Buen estado', 
    status: 'sold',
    views: 62,
    favorites: 15,
    messages: 7,
    image: 'https://via.placeholder.com/80x80'
  },
  { 
    id: 4, 
    title: 'Ticket to Ride', 
    price: 28, 
    condition: 'Usado', 
    status: 'inactive',
    views: 12,
    favorites: 2,
    messages: 0,
    image: 'https://via.placeholder.com/80x80'
  }
];

export const orders = [
  { id: 101, product: 'Dixit', buyer: 'Ana García', date: '15/06/2023', price: 18, status: 'completed' },
  { id: 102, product: 'Monopoly', buyer: 'Carlos Ruiz', date: '02/07/2023', price: 15, status: 'shipped' },
  { id: 103, product: 'Risk', buyer: 'Elena Martín', date: '10/07/2023', price: 22, status: 'pending' }
];

export const messages = [
  { id: 201, from: 'Ana García', subject: 'Consulta sobre Dixit', date: '14/06/2023', read: true },
  { id: 202, from: 'Carlos Ruiz', subject: 'Pregunta sobre envío', date: '01/07/2023', read: true },
  { id: 203, from: 'Elena Martín', subject: 'Disponibilidad de Risk', date: '09/07/2023', read: false },
  { id: 204, from: 'Juan Pérez', subject: 'Interesado en Catan', date: '12/07/2023', read: false }
];

export const earnings = {
  total: 55,
  pending: 22,
  gamesSold: 3,
  averageRating: 4.8,
  monthly: [
    { month: 'Ene', amount: 0 },
    { month: 'Feb', amount: 0 },
    { month: 'Mar', amount: 0 },
    { month: 'Abr', amount: 0 },
    { month: 'May', amount: 15 },
    { month: 'Jun', amount: 18 },
    { month: 'Jul', amount: 22 }
  ]
};

// Estados de productos
export const productStatusConfig = {
  active: { label: 'Activo', class: 'bg-success' },
  sold: { label: 'Vendido', class: 'bg-primary' },
  inactive: { label: 'Inactivo', class: 'bg-secondary' }
};

// Estados de órdenes
export const orderStatusConfig = {
  completed: { label: 'Completado', class: 'bg-success' },
  shipped: { label: 'Enviado', class: 'bg-info' },
  pending: { label: 'Pendiente', class: 'bg-warning' }
};

// Configuración de pestañas
export const tabsConfig = [
  {
    key: 'products',
    label: 'Mis Juegos',
    icon: 'bi-grid',
    badge: null
  },
  {
    key: 'orders',
    label: 'Ventas',
    icon: 'bi-bag',
    badge: { count: 3, class: 'bg-primary' }
  },
  {
    key: 'messages',
    label: 'Mensajes',
    icon: 'bi-chat',
    badge: { count: 2, class: 'bg-danger' }
  },
  {
    key: 'earnings',
    label: 'Ganancias',
    icon: 'bi-cash-coin',
    badge: null
  }
];

// Títulos de las pestañas
export const tabTitles = {
  products: 'Mis Juegos Publicados',
  orders: 'Mis Ventas',
  messages: 'Mensajes',
  earnings: 'Mis Ganancias'
};

// Encabezados de tablas
export const tableHeaders = {
  products: [
    'Juego',
    'Precio',
    'Estado',
    'Estadísticas',
    'Estado',
    'Acciones'
  ],
  orders: [
    'ID',
    'Producto',
    'Comprador',
    'Fecha',
    'Precio',
    'Estado',
    'Acciones'
  ]
};

// Configuración de gráfico
export const chartConfig = {
  height: '300px',
  barMinHeight: '5px',
  barWidthPercentage: '80%'
};

// Mensajes de la interfaz
export const uiMessages = {
  publishNewGame: 'Publicar Nuevo Juego',
  editProfile: 'Editar Perfil',
  memberSince: 'Vendedor desde',
  details: 'Detalles',
  respond: 'Responder',
  newMessage: 'Nuevo',
  totalEarnings: 'Ganancias Totales',
  pendingEarnings: 'Pendiente de Cobro',
  gamesSold: 'Juegos Vendidos',
  averageRating: 'Valoración Media',
  monthlyEarnings: 'Ganancias Mensuales'
};

// Configuración de estadísticas
export const statsLabels = {
  views: 'Vistas',
  favorites: 'Favoritos',
  messages: 'Mensajes'
};

// Función auxiliar para obtener mensajes no leídos
export const getUnreadMessagesCount = () => {
  return messages.filter(message => !message.read).length;
};

// Función auxiliar para obtener el máximo valor del gráfico
export const getMaxEarnings = () => {
  return Math.max(...earnings.monthly.map(m => m.amount));
};