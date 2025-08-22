// Datos de ejemplo para los componentes de la página Home

export const featuredProducts = [
  {
    id: 1,
    name: "Catan",
    description: "El clásico juego de estrategia y comercio",
    price: 27500,
    image: "https://http2.mlstatic.com/D_Q_NP_2X_765178-MLB46093485949_052021-E.webp",
    category: "Estrategia"
  },
  {
    id: 2,
    name: "Pandemic",
    description: "Coopera para salvar al mundo de una pandemia global",
    price: 24000,
    image: "https://http2.mlstatic.com/D_Q_NP_2X_723741-MLA74780218229_022024-E.webp",
    category: "Cooperativo"
  },
  {
    id: 3,
    name: "Magic: The Gathering",
    description: "El juego de cartas coleccionables más popular",
    price: 18000,
    image: "https://http2.mlstatic.com/D_Q_NP_2X_956712-MLA83863312407_042025-E.webp",
    category: "Cartas"
  },
  {
    id: 4,
    name: "Gloomhaven",
    description: "Aventura épica de mazmorras y combate táctico",
    price: 78000,
    image: "https://http2.mlstatic.com/D_Q_NP_2X_960050-MLC32170308209_092019-E-juego-gloomhaven-en-espanol-oficial-diverti.webp",
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
    image: "https://konexionalzheimer.com/wp-content/uploads/2022/09/juegos-mesa-600x400.jpg",
    date: "15 Oct 2023",
    author: "María García",
    slug: "mejores-juegos-estrategia-principiantes",
    category: "Estrategia"
  },
  {
    id: 2,
    title: "Guía completa: Cómo organizar un torneo de Magic",
    excerpt: "Todo lo que necesitas saber para organizar un torneo exitoso de Magic: The Gathering en tu comunidad local.",
    image: "https://st4.depositphotos.com/20453466/27122/i/450/depositphotos_271229178-stock-photo-two-guys-are-playing-on.jpg",
    date: "28 Sep 2023",
    author: "Carlos Rodríguez",
    slug: "guia-organizar-torneo-magic",
    category: "Cartas"
  },
  {
    id: 3,
    title: "Juegos cooperativos: Fortaleciendo lazos familiares",
    excerpt: "Cómo los juegos cooperativos pueden mejorar la comunicación y fortalecer las relaciones familiares.",
    image: "https://static.fnac-static.com/multimedia/Images/ES/Comete/1695/CCP_IMG_ORIGINAL/23700.jpg",
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
    image: "https://imagenes.espaciologopedico.com/tienda/59/8436589624559med.jpg",
    conditionColor: "success"
  },
  {
    id: 2,
    name: "Dixit",
    price: 12000,
    originalPrice: 20000,
    condition: "Buen estado",
    image: "https://static.alipson.fr/asmodee.978/asmodee-puzzle-de-500-piezas-dixit-detours.458978-1.120.jpg",
    conditionColor: "warning"
  },
  {
    id: 3,
    name: "Pandemic",
    price: 18000,
    originalPrice: 30000,
    condition: "Como nuevo",
    image: "https://shop.imboardgames.com/cdn/shop/products/zm7101_box-left500_200x200.png?v=1601077039",
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