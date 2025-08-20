// =============================
// DATOS PARA ADVANCED SEARCH
// =============================

export const searchConditions = [
  { id: 'new', label: 'Como nuevo' },
  { id: 'good', label: 'Buen estado' },
  { id: 'used', label: 'Usado' },
  { id: 'damaged', label: 'Con desperfectos' }
];

export const searchCategories = [
  { id: 'strategy', label: 'Estrategia' },
  { id: 'family', label: 'Familiar' },
  { id: 'card', label: 'Cartas' },
  { id: 'cooperative', label: 'Cooperativo' },
  { id: 'wargame', label: 'Wargame' },
  { id: 'roleplay', label: 'Rol' },
  { id: 'miniatures', label: 'Miniaturas' },
  { id: 'party', label: 'Party' }
];

export const searchCompleteness = [
  { id: 'complete', label: 'Completo' },
  { id: 'missing_minor', label: 'Faltan componentes menores' },
  { id: 'missing_major', label: 'Faltan componentes importantes' },
  { id: 'replacement', label: 'Con componentes reemplazados' }
];

export const searchSortOptions = [
  { id: 'relevance', label: 'Relevancia' },
  { id: 'price_asc', label: 'Precio: menor a mayor' },
  { id: 'price_desc', label: 'Precio: mayor a menor' },
  { id: 'newest', label: 'Más recientes' },
  { id: 'rating', label: 'Mejor valorados' }
];

export const defaultSearchParams = {
  query: '',
  minPrice: '',
  maxPrice: '',
  condition: [],
  category: [],
  completeness: [],
  location: '',
  sellerRating: 0,
  sortBy: 'relevance'
};

// =============================
// DATOS PARA MESSAGE SYSTEM
// =============================

export const sampleConversations = [
  {
    id: '1',
    with: {
      id: 'user123',
      name: 'Carlos Rodríguez',
      avatar: 'https://placehold.co/100/3498db/ffffff?text=CR'
    },
    product: {
      id: 'prod456',
      title: 'Catan - Edición Básica',
      image: 'https://placehold.co/600x400/2c3e50/ffffff?text=Catan'
    },
    lastMessage: {
      text: '¿Sigue disponible el juego?',
      timestamp: new Date('2023-10-20T14:30:00'),
      isRead: true,
      sender: 'user123'
    },
    messages: [
      {
        id: 'msg1',
        text: 'Hola, me interesa tu juego de Catan',
        timestamp: new Date('2023-10-20T14:25:00'),
        sender: 'user123'
      },
      {
        id: 'msg2',
        text: '¿Sigue disponible el juego?',
        timestamp: new Date('2023-10-20T14:30:00'),
        sender: 'user123'
      }
    ]
  },
  {
    id: '2',
    with: {
      id: 'user456',
      name: 'Laura Benítez',
      avatar: 'https://placehold.co/100/e74c3c/ffffff?text=LB'
    },
    product: {
      id: 'prod789',
      title: 'Pandemic Legacy',
      image: 'https://placehold.co/600x400/3498db/ffffff?text=Pandemic'
    },
    lastMessage: {
      text: 'Perfecto, ¿podríamos quedar mañana para la entrega?',
      timestamp: new Date('2023-10-19T18:45:00'),
      isRead: false,
      sender: 'user456'
    },
    messages: [
      {
        id: 'msg3',
        text: 'Hola, ¿el juego está completo?',
        timestamp: new Date('2023-10-19T17:30:00'),
        sender: 'user456'
      },
      {
        id: 'msg4',
        text: 'Sí, está completo y en muy buen estado',
        timestamp: new Date('2023-10-19T17:45:00'),
        sender: 'currentUser'
      },
      {
        id: 'msg5',
        text: 'Genial, me lo quedo. ¿Cuánto sería con el envío?',
        timestamp: new Date('2023-10-19T18:00:00'),
        sender: 'user456'
      },
      {
        id: 'msg6',
        text: 'El envío son 5€ adicionales',
        timestamp: new Date('2023-10-19T18:15:00'),
        sender: 'currentUser'
      },
      {
        id: 'msg7',
        text: 'Perfecto, ¿podríamos quedar mañana para la entrega?',
        timestamp: new Date('2023-10-19T18:45:00'),
        sender: 'user456'
      }
    ]
  },
  {
    id: '3',
    with: {
      id: 'user789',
      name: 'Miguel Álvarez',
      avatar: 'https://placehold.co/100/27ae60/ffffff?text=MA'
    },
    product: {
      id: 'prod101',
      title: 'Gloomhaven',
      image: 'https://placehold.co/600x400/34495e/ffffff?text=Gloomhaven'
    },
    lastMessage: {
      text: 'Gracias por la información. Lo pensaré.',
      timestamp: new Date('2023-10-18T10:20:00'),
      isRead: true,
      sender: 'user789'
    },
    messages: [
      {
        id: 'msg8',
        text: 'Hola, ¿el Gloomhaven tiene todas las miniaturas?',
        timestamp: new Date('2023-10-18T09:30:00'),
        sender: 'user789'
      },
      {
        id: 'msg9',
        text: 'Sí, tiene todas las miniaturas originales. Algunas están pintadas.',
        timestamp: new Date('2023-10-18T09:45:00'),
        sender: 'currentUser'
      },
      {
        id: 'msg10',
        text: '¿Podrías enviarme fotos de las miniaturas pintadas?',
        timestamp: new Date('2023-10-18T10:00:00'),
        sender: 'user789'
      },
      {
        id: 'msg11',
        text: 'Claro, aquí tienes: [Foto]',
        timestamp: new Date('2023-10-18T10:15:00'),
        sender: 'currentUser'
      },
      {
        id: 'msg12',
        text: 'Gracias por la información. Lo pensaré.',
        timestamp: new Date('2023-10-18T10:20:00'),
        sender: 'user789'
      }
    ]
  }
];

export const defaultFilters = {
  priceRange: { min: 0, max: 200 },
  condition: [],
  categories: [],
  completeness: '',
  sortBy: 'newest'
};

// =============================
// DATOS PARA RATING SYSTEM
// =============================

export const sampleReviews = [
  {
    id: '1',
    rating: 5,
    comment: 'Excelente vendedor. El juego estaba en perfecto estado y el envío fue muy rápido.',
    author: {
      name: 'Carlos Rodríguez',
      avatar: 'https://placehold.co/100/3498db/ffffff?text=CR'
    },
    date: new Date('2023-10-15')
  },
  {
    id: '2',
    rating: 4,
    comment: 'Todo correcto. El juego está en buen estado aunque la caja tiene algún roce.',
    author: {
      name: 'Laura Benítez',
      avatar: 'https://placehold.co/100/e74c3c/ffffff?text=LB'
    },
    date: new Date('2023-10-10')
  },
  {
    id: '3',
    rating: 5,
    comment: 'Vendedor muy atento y comunicativo. El juego está como nuevo.',
    author: {
      name: 'Miguel Álvarez',
      avatar: 'https://placehold.co/100/27ae60/ffffff?text=MA'
    },
    date: new Date('2023-10-05')
  }
];

export const ratingLabels = {
  1: 'Malo',
  2: 'Regular',
  3: 'Bueno',
  4: 'Muy bueno',
  5: 'Excelente'
};

export const ratingDistribution = {
  5: 70,
  4: 20,
  3: 5,
  2: 3,
  1: 2
};

export const ratingSummary = {
  average: 4.7,
  totalReviews: 28
};

// =============================
// CONFIGURACIONES GENERALES
// =============================

export const currencySymbol = '€';

export const placeholderImages = {
  avatar: (initials, color = '3498db') => `https://placehold.co/100/${color}/ffffff?text=${initials}`,
  product: (text, color = '2c3e50') => `https://placehold.co/600x400/${color}/ffffff?text=${text}`
};

export const apiEndpoints = {
  search: '/api/search',
  products: '/api/products',
  messages: '/api/messages',
  ratings: '/api/ratings',
  conversations: '/api/messages/conversations'
};

export const loadingDelay = 800; // milliseconds

// =============================
// FUNCIONES HELPER
// =============================

export const createTimestamp = (minutesAgo) => {
  return new Date(Date.now() - 1000 * 60 * minutesAgo);
};

export const generatePlaceholderImage = (text, bgColor = '2c3e50', textColor = 'ffffff') => {
  return `https://placehold.co/600x400/${bgColor}/${textColor}?text=${encodeURIComponent(text)}`;
};

export const formatPrice = (price) => {
  return `${price.toFixed(2)}${currencySymbol}`;
};

// =============================
// DATOS PARA PRODUCT GRID
// =============================

export const sampleProducts = [
  {
    id: '1',
    title: 'Catan - Edición Básica',
    description: 'Juego de mesa de estrategia y comercio. Apenas usado, en perfecto estado.',
    price: 35.99,
    originalPrice: 49.99,
    category: 'estrategia',
    condition: 'como-nuevo',
    completeness: 'completo',
    images: ['https://placehold.co/600x400/2c3e50/ffffff?text=Catan'],
    sellerName: 'María G.',
    sellerAvatar: 'https://placehold.co/100/9b59b6/ffffff?text=MG',
    rating: 4.8,
    reviewCount: 24,
    createdAt: new Date('2023-10-15')
  },
  {
    id: '2',
    title: 'Pandemic Legacy - Temporada 1',
    description: 'Juego cooperativo. Usado para una campaña completa, algunas cartas con marcas.',
    price: 45.50,
    originalPrice: 79.99,
    category: 'cooperativos',
    condition: 'buen-estado',
    completeness: 'completo',
    images: ['https://placehold.co/600x400/3498db/ffffff?text=Pandemic'],
    sellerName: 'Carlos R.',
    sellerAvatar: 'https://placehold.co/100/e74c3c/ffffff?text=CR',
    rating: 4.5,
    reviewCount: 18,
    createdAt: new Date('2023-10-10')
  },
  {
    id: '3',
    title: 'Dixit',
    description: 'Juego de cartas e imaginación. Faltan 2 cartas, pero no afecta al juego.',
    price: 19.99,
    originalPrice: 29.99,
    category: 'familiar',
    condition: 'aceptable',
    completeness: 'falta-componentes',
    images: ['https://placehold.co/600x400/e67e22/ffffff?text=Dixit'],
    sellerName: 'Ana M.',
    sellerAvatar: 'https://placehold.co/100/27ae60/ffffff?text=AM',
    rating: 4.2,
    reviewCount: 7,
    createdAt: new Date('2023-10-05')
  },
  {
    id: '4',
    title: 'Magic: The Gathering - Lote de cartas',
    description: 'Colección de 200+ cartas de diferentes ediciones. Algunas con desgaste.',
    price: 89.99,
    originalPrice: null,
    category: 'cartas',
    condition: 'con-defectos',
    completeness: 'completo',
    images: ['https://placehold.co/600x400/8e44ad/ffffff?text=Magic'],
    sellerName: 'Pedro S.',
    sellerAvatar: 'https://placehold.co/100/f1c40f/ffffff?text=PS',
    rating: 4.9,
    reviewCount: 32,
    createdAt: new Date('2023-10-18')
  },
  {
    id: '5',
    title: 'Ticket to Ride - Europa',
    description: 'Juego de trenes. En muy buen estado, apenas usado.',
    price: 32.50,
    originalPrice: 44.99,
    category: 'estrategia',
    condition: 'como-nuevo',
    completeness: 'completo',
    images: ['https://placehold.co/600x400/c0392b/ffffff?text=Ticket+to+Ride'],
    sellerName: 'Laura B.',
    sellerAvatar: 'https://placehold.co/100/3498db/ffffff?text=LB',
    rating: 4.6,
    reviewCount: 15,
    createdAt: new Date('2023-09-30')
  },
  {
    id: '6',
    title: 'Gloomhaven',
    description: 'Juego de aventuras. Usado para media campaña, algunas miniaturas pintadas.',
    price: 95.00,
    originalPrice: 140.00,
    category: 'rol',
    condition: 'buen-estado',
    completeness: 'completo',
    images: ['https://placehold.co/600x400/34495e/ffffff?text=Gloomhaven'],
    sellerName: 'Miguel A.',
    sellerAvatar: 'https://placehold.co/100/e74c3c/ffffff?text=MA',
    rating: 4.7,
    reviewCount: 9,
    createdAt: new Date('2023-10-12')
  }
];

// ================================
// DATOS DEL CARRITO DE COMPRAS
// ================================

// Productos de ejemplo para el carrito
export const sampleCartItems = [
  {
    id: '1',
    nombre_producto: 'Catan - Edición Básica',
    precio: 10.990,
    cantidad: 1,
    imagen: 'https://placehold.co/600x400/2c3e50/ffffff?text=Catan',
    vendedor: 'María G.'
  },
  {
    id: '4',
    nombre_producto: 'Magic: The Gathering - Lote de cartas',
    precio: 89.99,
    cantidad: 1,
    imagen: 'https://placehold.co/600x400/8e44ad/ffffff?text=Magic',
    vendedor: 'Pedro S.'
  }
];

// Configuración del carrito
export const cartConfig = {
  loadingTimeout: 800, // milisegundos para simular carga
  envioGratuito: true,
  costoEnvio: 0
};

// Métodos de pago disponibles
export const metodsPago = [
  {
    id: 'credit-card',
    nombre: 'Tarjeta de Crédito',
    icono: 'bi-credit-card',
    disponible: true
  },
  {
    id: 'paypal',
    nombre: 'PayPal',
    icono: 'bi-paypal',
    disponible: true
  },
  {
    id: 'bank',
    nombre: 'Transferencia Bancaria',
    icono: 'bi-bank',
    disponible: true
  }
];

// Mensajes de la interfaz
export const cartMessages = {
  loading: 'Cargando tu carrito...',
  emptyCart: {
    title: 'Tu carrito está vacío',
    description: 'Parece que aún no has añadido ningún producto a tu carrito.',
    buttonText: 'Explorar productos'
  },
  buttons: {
    continueShopping: 'Seguir comprando',
    proceedPayment: 'Proceder al pago',
    remove: 'Eliminar'
  },
  summary: {
    title: 'Resumen de compra',
    subtotal: 'Subtotal',
    shipping: 'Envío',
    total: 'Total',
    freeShipping: 'Gratis'
  }
};

// Productos adicionales para expandir el carrito (opcional)
export const additionalCartItems = [
  {
    id: '2',
    nombre_producto: 'Monopoly Clásico',
    precio: 25.99,
    cantidad: 1,
    imagen: 'https://placehold.co/600x400/e74c3c/ffffff?text=Monopoly',
    vendedor: 'Juan C.'
  },
  {
    id: '3',
    nombre_producto: 'Risk - Conquista Mundial',
    precio: 35.50,
    cantidad: 2,
    imagen: 'https://placehold.co/600x400/f39c12/ffffff?text=Risk',
    vendedor: 'Ana L.'
  },
  {
    id: '5',
    nombre_producto: 'Ticket to Ride',
    precio: 42.99,
    cantidad: 1,
    imagen: 'https://placehold.co/600x400/3498db/ffffff?text=Ticket+to+Ride',
    vendedor: 'Carlos M.'
  }
];

// Función utilitaria para obtener carrito vacío
export const getEmptyCart = () => [];

// Función utilitaria para obtener carrito con datos de ejemplo
export const getSampleCart = () => [...sampleCartItems];

// Función utilitaria para obtener carrito completo (con productos adicionales)
export const getFullSampleCart = () => [...sampleCartItems, ...additionalCartItems];

// Exportación por defecto con todos los datos
export default {
  sampleCartItems,
  additionalCartItems,
  cartConfig,
  metodsPago,
  cartMessages,
  // Funciones utilitarias
  getEmptyCart,
  getSampleCart,
  getFullSampleCart
};