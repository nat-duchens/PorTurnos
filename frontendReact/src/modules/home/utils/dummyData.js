// Datos de ejemplo para los componentes de la página Home
// Ubicación: /home/utils/dummyData.js

export const featuredProducts = [
  {
    id: 1,
    name: "Catan",
    description: "El clásico juego de estrategia y comercio",
    price: 27500,
    image: "https://placehold.co/300x300/e9ecef/495057?text=Catan",
    category: "Estrategia"
  },
  {
    id: 2,
    name: "Pandemic",
    description: "Coopera para salvar al mundo de una pandemia global",
    price: 24000,
    image: "https://placehold.co/300x300/e9ecef/495057?text=Pandemic",
    category: "Cooperativo"
  },
  {
    id: 3,
    name: "Magic: The Gathering",
    description: "El juego de cartas coleccionables más popular",
    price: 18000,
    image: "https://placehold.co/300x300/e9ecef/495057?text=Magic",
    category: "Cartas"
  },
  {
    id: 4,
    name: "Gloomhaven",
    description: "Aventura épica de mazmorras y combate táctico",
    price: 78000,
    image: "https://placehold.co/300x300/e9ecef/495057?text=Gloomhaven",
    category: "Rol"
  }
];

export const recommendedGames = [
  {
    id: 1,
    name: "Catan - Edición Especial",
    description: "El juego de estrategia y comercio más vendido",
    price: 49.99,
    image: "https://placehold.co/800x400/2c3e50/ffffff?text=Catan+Edición+Especial",
    rating: 4.9,
    recommendedFor: "Estrategia y negociación"
  },
  {
    id: 2,
    name: "Pandemic Legacy",
    description: "La experiencia cooperativa definitiva",
    price: 79.99,
    image: "https://placehold.co/800x400/3498db/ffffff?text=Pandemic+Legacy",
    rating: 4.8,
    recommendedFor: "Juego cooperativo"
  },
  {
    id: 3,
    name: "Gloomhaven",
    description: "La aventura épica que arrasa en ventas",
    price: 139.99,
    image: "https://placehold.co/800x400/e74c3c/ffffff?text=Gloomhaven",
    rating: 4.9,
    recommendedFor: "Aventura y rol"
  }
];

export const featuredBlogs = [
  {
    id: 1,
    title: "Los 5 mejores juegos de estrategia para principiantes",
    excerpt: "Descubre los juegos de mesa perfectos para iniciarte en el mundo de la estrategia sin complicaciones.",
    image: "https://placehold.co/600x400/2c3e50/ffffff?text=Estrategia+Principiantes",
    date: "15 Oct 2023",
    author: "María García",
    slug: "mejores-juegos-estrategia-principiantes",
    category: "Estrategia"
  },
  {
    id: 2,
    title: "Guía completa: Cómo organizar un torneo de Magic",
    excerpt: "Todo lo que necesitas saber para organizar un torneo exitoso de Magic: The Gathering en tu comunidad local.",
    image: "https://placehold.co/600x400/8e44ad/ffffff?text=Torneo+Magic",
    date: "28 Sep 2023",
    author: "Carlos Rodríguez",
    slug: "guia-organizar-torneo-magic",
    category: "Cartas"
  },
  {
    id: 3,
    title: "Juegos cooperativos: Fortaleciendo lazos familiares",
    excerpt: "Cómo los juegos cooperativos pueden mejorar la comunicación y fortalecer las relaciones familiares.",
    image: "https://placehold.co/600x400/27ae60/ffffff?text=Juegos+Cooperativos",
    date: "05 Oct 2023",
    author: "Ana Martínez",
    slug: "juegos-cooperativos-familia",
    category: "Familia"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Laura Martínez",
    role: "Jugadora habitual",
    content: "PORTURNOS ha cambiado mi forma de comprar juegos de mesa. Su catálogo es impresionante y el servicio al cliente es excepcional. ¡Totalmente recomendado!",
    avatar: "https://placehold.co/100x100/e9ecef/495057?text=LM"
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Coleccionista",
    content: "Como coleccionista de juegos de estrategia, valoro mucho la calidad y autenticidad de los productos. PORTURNOS siempre cumple con mis expectativas.",
    avatar: "https://placehold.co/100x100/e9ecef/495057?text=CR"
  },
  {
    id: 3,
    name: "Ana Gómez",
    role: "Organizadora de eventos",
    content: "Organizo eventos de juegos de mesa y PORTURNOS es mi proveedor de confianza. Precios competitivos y envíos puntuales. ¡No puedo pedir más!",
    avatar: "https://placehold.co/100x100/e9ecef/495057?text=AG"
  }
];

export const marketplaceStats = {
  availableGames: "500+",
  activeSellers: "300+",
  successfulTransactions: "1000+"
};

export const marketplaceGames = [
  {
    id: 1,
    name: "Catan",
    price: 15000,
    originalPrice: 25000,
    condition: "Casi nuevo",
    image: "https://via.placeholder.com/120x120",
    conditionColor: "success"
  },
  {
    id: 2,
    name: "Dixit",
    price: 12000,
    originalPrice: 20000,
    condition: "Buen estado",
    image: "https://via.placeholder.com/120x120",
    conditionColor: "warning"
  },
  {
    id: 3,
    name: "Pandemic",
    price: 18000,
    originalPrice: 30000,
    condition: "Como nuevo",
    image: "https://via.placeholder.com/200x200",
    conditionColor: "info"
  }
];

export const features = [
  {
    id: 1,
    icon: "bi-collection",
    title: "Amplio Catálogo",
    description: "Más de 500 juegos de mesa por turnos, desde clásicos hasta las últimas novedades."
  },
  {
    id: 2,
    icon: "bi-shield-check",
    title: "Garantía Total",
    description: "Todos nuestros productos tienen garantía de 30 días. Tu satisfacción es nuestra prioridad."
  },
  {
    id: 3,
    icon: "bi-people",
    title: "Comunidad Activa",
    description: "Únete a nuestra comunidad de jugadores y participa en torneos y eventos exclusivos."
  }
];

export const heroContent = {
  title: "Bienvenido a PORTURNOS",
  subtitle: "Tu tienda de juegos de mesa por turnos. Encuentra los mejores juegos de estrategia, rol y cartas coleccionables.",
  slogan: "En Por Turnos, creemos que cada juego merece una segunda partida",
  emojis: "🎲 🎮 🎯"
};

export const callToActionContent = {
  title: "¿Listo para unirte a la comunidad PORTURNOS?",
  description: "Regístrate ahora y obtén un 10% de descuento en tu primera compra. Además, accede a ofertas exclusivas, eventos y mucho más."
};

// Configuraciones adicionales
export const carouselSettings = {
  autoSlideInterval: 5000, // 5 segundos
  transitionDuration: '0.5s'
};

export const newsletterContent = {
  title: "Suscríbete a nuestro newsletter",
  description: "Recibe las últimas novedades, ofertas exclusivas y consejos sobre juegos de mesa.",
  privacyText: "Acepto recibir comunicaciones comerciales y he leído la política de privacidad."
};