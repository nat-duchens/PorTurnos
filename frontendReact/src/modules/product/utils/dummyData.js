// Datos de ejemplo para ProductDetail
// Ubicación: /utils/dummyData.js

export const sampleProduct = {
  id: '1',
  title: 'Catan - Edición Básica',
  description: 'Juego de mesa de estrategia y comercio. Apenas usado, en perfecto estado. Incluye todas las piezas originales y las reglas. La caja presenta algunos signos mínimos de desgaste en las esquinas, pero el contenido está como nuevo. Ideal para quienes quieren iniciarse en los juegos de mesa modernos.',
  price: 35.99,
  originalPrice: 49.99,
  category: 'estrategia',
  condition: 'como-nuevo',
  completeness: 'completo',
  images: [
    'https://placehold.co/600x400/2c3e50/ffffff?text=Catan+1',
    'https://placehold.co/600x400/34495e/ffffff?text=Catan+2',
    'https://placehold.co/600x400/2980b9/ffffff?text=Catan+3',
    'https://placehold.co/600x400/3498db/ffffff?text=Catan+4'
  ],
  seller: {
    id: 'seller123',
    name: 'María García',
    avatar: 'https://placehold.co/100/9b59b6/ffffff?text=MG',
    rating: 4.8,
    reviewCount: 24,
    memberSince: new Date('2022-05-15'),
    location: 'Madrid',
    responseRate: 98,
    responseTime: '2 horas'
  },
  details: {
    players: '3-4',
    playTime: '60-120 min',
    age: '10+',
    language: 'Español',
    publisher: 'Devir',
    releaseYear: 2015
  },
  shipping: {
    methods: ['envio', 'recogida'],
    cost: 4.99,
    estimatedDelivery: '3-5 días'
  },
  createdAt: new Date('2023-10-15'),
  views: 156,
  favorites: 12,
  rating: 4.7,
  reviewCount: 8
};

export const relatedProducts = [
  {
    id: 1,
    title: 'Juego relacionado 1',
    price: 25.00,
    rating: 4.2,
    image: 'https://placehold.co/600x400/3498db/ffffff?text=Juego+1'
  },
  {
    id: 2,
    title: 'Juego relacionado 2',
    price: 30.00,
    rating: 4.4,
    image: 'https://placehold.co/600x400/2c3e50/ffffff?text=Juego+2'
  },
  {
    id: 3,
    title: 'Juego relacionado 3',
    price: 35.00,
    rating: 4.6,
    image: 'https://placehold.co/600x400/3498db/ffffff?text=Juego+3'
  },
  {
    id: 4,
    title: 'Juego relacionado 4',
    price: 40.00,
    rating: 4.8,
    image: 'https://placehold.co/600x400/2c3e50/ffffff?text=Juego+4'
  }
];

// Traducciones para estados y completitud
export const conditionTranslations = {
  'como-nuevo': 'Como nuevo',
  'buen-estado': 'Buen estado',
  'aceptable': 'Aceptable',
  'con-defectos': 'Con defectos'
};

export const completenessTranslations = {
  'completo': 'Completo',
  'falta-componentes': 'Faltan componentes',
  'componentes-reemplazados': 'Componentes reemplazados'
};

// Configuraciones de estilos para badges de condición
export const conditionBadgeStyles = {
  'como-nuevo': 'bg-success',
  'buen-estado': 'bg-info',
  'aceptable': 'bg-warning',
  'con-defectos': 'bg-danger'
};

export const completenessBadgeStyles = {
  'completo': 'bg-success',
  'falta-componentes': 'bg-warning',
  'componentes-reemplazados': 'bg-warning'
};

// Configuraciones adicionales
export const productDetailSettings = {
  loadingDelay: 800, // milisegundos
  imageHeight: '400px',
  thumbnailSize: '70px',
  sellerAvatarSize: 60,
  relatedProductImageHeight: '200px'
};

// Función auxiliar para generar productos relacionados dinámicamente
export const generateRelatedProducts = (count = 4) => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    title: `Juego relacionado ${index + 1}`,
    price: 20 + (index * 5),
    rating: 4 + (index * 0.2),
    image: `https://placehold.co/600x400/${index % 2 === 0 ? '3498db' : '2c3e50'}/ffffff?text=Juego+${index + 1}`
  }));
};

// Datos adicionales del vendedor
export const sellerBadges = [
  {
    type: 'verified',
    text: 'Vendedor verificado',
    class: 'badge bg-success'
  }
];

// Iconos para diferentes secciones
export const sectionIcons = {
  players: 'bi-people',
  playTime: 'bi-clock',
  age: 'bi-person',
  language: 'bi-translate',
  publisher: 'bi-building',
  releaseYear: 'bi-calendar',
  shipping: 'bi-truck',
  pickup: 'bi-geo-alt',
  delivery: 'bi-calendar-check',
  memberSince: 'bi-calendar3',
  location: 'bi-geo-alt',
  responseRate: 'bi-reply',
  responseTime: 'bi-clock',
  published: 'bi-calendar2'
};

// Mensajes predeterminados
export const defaultMessages = {
  loading: 'Cargando detalles del producto...',
  error: 'Error al cargar el producto',
  notFound: 'No se encontró el producto',
  messagePlaceholder: 'Escribe tu mensaje aquí...',
  messageSuccess: 'Mensaje enviado al vendedor',
  addToFavorites: 'Añadir a favoritos',
  contactSeller: 'Contactar con el vendedor',
  buyNow: 'Comprar ahora',
  sendMessage: 'Enviar mensaje'
};

// /products/utils/dummyData.js

// Opciones para filtros de estado de productos
export const conditionOptions = [
  { id: 'como-nuevo', label: 'Como nuevo' },
  { id: 'buen-estado', label: 'Buen estado' },
  { id: 'aceptable', label: 'Aceptable' },
  { id: 'con-defectos', label: 'Con defectos' }
];

// Opciones para filtros de categorías
export const categoryOptions = [
  { id: 'estrategia', label: 'Estrategia' },
  { id: 'familiar', label: 'Familiar' },
  { id: 'cartas', label: 'Cartas' },
  { id: 'rol', label: 'Rol' },
  { id: 'wargames', label: 'Wargames' },
  { id: 'eurogames', label: 'Eurogames' },
  { id: 'party', label: 'Party' },
  { id: 'cooperativos', label: 'Cooperativos' }
];

// Opciones para filtros de completitud
export const completenessOptions = [
  { id: 'all', label: 'Todos' },
  { id: 'completo', label: 'Completo' },
  { id: 'falta-componentes', label: 'Falta componentes' }
];

// Opciones para ordenamiento
export const sortOptions = [
  { id: 'newest', label: 'Más recientes' },
  { id: 'price-asc', label: 'Precio: menor a mayor' },
  { id: 'price-desc', label: 'Precio: mayor a menor' },
  { id: 'rating', label: 'Mejor valorados' },
  { id: 'popularity', label: 'Más populares' }
];

// Configuración por defecto para filtros
export const defaultFilters = {
  priceRange: { min: 0, max: 200 },
  condition: [],
  categories: [],
  completeness: '',
  sortBy: 'newest'
};

// Configuración de rango de precio
export const priceRangeConfig = {
  min: 0,
  max: 200,
  step: 1
};

// Objeto con todas las opciones de filtros para fácil acceso
export const filterOptions = {
  conditions: conditionOptions,
  categories: categoryOptions,
  completeness: completenessOptions,
  sorting: sortOptions
};