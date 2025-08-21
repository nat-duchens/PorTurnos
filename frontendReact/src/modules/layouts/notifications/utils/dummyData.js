
// Mock de notificaciones para desarrollo y testing
export const mockNotifications = [
  {
    id: 1,
    type: 'message',
    title: 'Nuevo mensaje',
    content: 'Ana García te ha enviado un mensaje sobre Catan',
    timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 minutos atrás
    read: false,
    link: '/marketplace/messages',
    sender: {
      id: 101,
      name: 'Ana García',
      avatar: 'https://via.placeholder.com/40'
    }
  },
  {
    id: 2,
    type: 'offer',
    title: 'Nueva oferta',
    content: 'Has recibido una oferta de 22€ por Dixit',
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutos atrás
    read: false,
    link: '/marketplace/seller-dashboard',
    product: {
      id: 201,
      name: 'Dixit',
      image: 'https://via.placeholder.com/40'
    }
  },
  {
    id: 3,
    type: 'sale',
    title: '¡Venta completada!',
    content: 'Tu venta de Monopoly ha sido completada',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 horas atrás
    read: true,
    link: '/marketplace/seller-dashboard',
    product: {
      id: 202,
      name: 'Monopoly',
      image: 'https://via.placeholder.com/40'
    }
  },
  {
    id: 4,
    type: 'system',
    title: 'Verificación completada',
    content: 'Tu cuenta ha sido verificada correctamente',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 día atrás
    read: true,
    link: '/marketplace/seller-dashboard'
  },
  {
    id: 5,
    type: 'rating',
    title: 'Nueva valoración',
    content: 'Carlos Ruiz te ha dejado una valoración de 5 estrellas',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 36), // 1.5 días atrás
    read: true,
    link: '/marketplace/seller-dashboard',
    sender: {
      id: 102,
      name: 'Carlos Ruiz',
      avatar: 'https://via.placeholder.com/40'
    }
  }
];

// Tipos de notificaciones disponibles
export const notificationTypes = {
  MESSAGE: 'message',
  OFFER: 'offer',
  SALE: 'sale',
  SYSTEM: 'system',
  RATING: 'rating'
};

// Configuración de iconos para cada tipo de notificación
export const notificationIcons = {
  [notificationTypes.MESSAGE]: 'bi-chat-dots-fill',
  [notificationTypes.OFFER]: 'bi-tag-fill',
  [notificationTypes.SALE]: 'bi-bag-check-fill',
  [notificationTypes.SYSTEM]: 'bi-info-circle-fill',
  [notificationTypes.RATING]: 'bi-star-fill',
  default: 'bi-bell-fill'
};

// Configuración de colores para cada tipo de notificación
export const notificationColors = {
  [notificationTypes.MESSAGE]: 'primary',
  [notificationTypes.OFFER]: 'success',
  [notificationTypes.SALE]: 'info',
  [notificationTypes.SYSTEM]: 'secondary',
  [notificationTypes.RATING]: 'warning',
  default: 'dark'
};

// Configuración de enlaces comunes
export const notificationLinks = {
  MESSAGES: '/marketplace/messages',
  SELLER_DASHBOARD: '/marketplace/seller-dashboard',
  ALL_NOTIFICATIONS: '/marketplace/notifications'
};

// Configuración de tiempo para formateo relativo
export const timeConfig = {
  MINUTE: 60,
  HOUR: 3600,
  DAY: 86400
};

// Mensajes de texto reutilizables
export const notificationTexts = {
  NO_NOTIFICATIONS: 'No tienes notificaciones',
  MARK_ALL_READ: 'Marcar todas como leídas',
  VIEW_ALL: 'Ver todas las notificaciones',
  VIEW_DETAILS: 'Ver detalles',
  NOTIFICATIONS_TITLE: 'Notificaciones',
  UNREAD_ARIA_LABEL: 'notificaciones sin leer'
};

// Configuración del panel de notificaciones
export const notificationPanelConfig = {
  width: '350px',
  maxHeight: '500px',
  scrollAreaMaxHeight: '400px'
};

// Función helper para crear timestamps relativos (útil para testing)
export const createTimestamp = (minutesAgo) => {
  return new Date(Date.now() - 1000 * 60 * minutesAgo);
};



// Datos mock para usuarios
export const users = [
    {
        id: 101,
        name: 'Ana García',
        avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
        id: 102,
        name: 'Carlos Ruiz',
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
        id: 103,
        name: 'María López',
        avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
    },
    {
        id: 104,
        name: 'Pedro Martín',
        avatar: 'https://randomuser.me/api/portraits/men/4.jpg'
    }
];

// Datos mock para productos
export const products = [
    {
        id: 201,
        name: 'Dixit',
        image: 'https://cdn.svc.asmodee.net/production-rprod/storage/games/dixit/dixit_box_3d-600x600-1592407421KWEks.png'
    },
    {
        id: 202,
        name: 'Monopoly',
        image: 'https://m.media-amazon.com/images/I/81YjU8eJMbL._AC_UF894,1000_QL80_.jpg'
    },
    {
        id: 203,
        name: 'Carcassonne',
        image: 'https://cdn.svc.asmodee.net/production-zman/uploads/2021/01/carcassonne-box-right.png'
    },
    {
        id: 204,
        name: 'Ticket to Ride',
        image: 'https://cdn.svc.asmodee.net/production-asmodeeca/uploads/image-converter/2022/01/EN-TICKET_TO_RIDE-L-1024x1024.webp'
    },
    {
        id: 205,
        name: 'Azul',
        image: 'https://www.monodejuegos.shop/wp-content/uploads/2018/10/azul-600x600.png'
    }
];

// Plantillas de notificaciones
export const notificationTemplates = [
    {
        type: 'message',
        title: 'Nuevo mensaje',
        contentTemplate: '{sender} te ha enviado un mensaje sobre {product}',
        link: '/marketplace/messages'
    },
    {
        type: 'offer',
        title: 'Nueva oferta',
        contentTemplate: 'Has recibido una oferta de {amount}€ por {product}',
        link: '/marketplace/seller-dashboard'
    },
    {
        type: 'sale',
        title: '¡Venta completada!',
        contentTemplate: 'Tu venta de {product} ha sido completada',
        link: '/marketplace/seller-dashboard'
    },
    {
        type: 'purchase',
        title: 'Compra realizada',
        contentTemplate: 'Has comprado {product} por {amount}€',
        link: '/marketplace/orders'
    },
    {
        type: 'rating',
        title: 'Nueva valoración',
        contentTemplate: '{sender} te ha dejado una valoración de {rating} estrellas',
        link: '/marketplace/seller-dashboard'
    },
    {
        type: 'system',
        title: 'Verificación completada',
        contentTemplate: 'Tu cuenta ha sido verificada correctamente',
        link: '/marketplace/seller-dashboard'
    },
    {
        type: 'system',
        title: 'Bienvenido al Marketplace',
        contentTemplate: 'Gracias por unirte a nuestra comunidad de juegos de mesa usados',
        link: '/marketplace'
    }
];

// Generar notificaciones mock
export const generateMockNotifications = () => {
    const notifications = [
        {
            id: 1,
            type: 'message',
            title: 'Nuevo mensaje',
            content: 'Ana García te ha enviado un mensaje sobre Catan',
            timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 minutos atrás
            read: false,
            link: '/marketplace/messages',
            sender: users[0]
        },
        {
            id: 2,
            type: 'offer',
            title: 'Nueva oferta',
            content: 'Has recibido una oferta de 22€ por Dixit',
            timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutos atrás
            read: false,
            link: '/marketplace/seller-dashboard',
            product: products[0],
            amount: 22
        },
        {
            id: 3,
            type: 'sale',
            title: '¡Venta completada!',
            content: 'Tu venta de Monopoly ha sido completada',
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 horas atrás
            read: true,
            link: '/marketplace/seller-dashboard',
            product: products[1]
        },
        {
            id: 4,
            type: 'system',
            title: 'Verificación completada',
            content: 'Tu cuenta ha sido verificada correctamente',
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 día atrás
            read: true,
            link: '/marketplace/seller-dashboard'
        },
        {
            id: 5,
            type: 'rating',
            title: 'Nueva valoración',
            content: 'Carlos Ruiz te ha dejado una valoración de 5 estrellas',
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 36), // 1.5 días atrás
            read: true,
            link: '/marketplace/seller-dashboard',
            sender: users[1],
            rating: 5
        },
        {
            id: 6,
            type: 'purchase',
            title: 'Compra realizada',
            content: 'Has comprado Carcassonne por 25€',
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48), // 2 días atrás
            read: true,
            link: '/marketplace/orders',
            product: products[2],
            amount: 25
        },
        {
            id: 7,
            type: 'system',
            title: 'Bienvenido al Marketplace',
            content: 'Gracias por unirte a nuestra comunidad de juegos de mesa usados',
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 72), // 3 días atrás
            read: true,
            link: '/marketplace'
        }
    ];

    return notifications;
};

// Filtros disponibles
export const notificationFilters = [
    { key: 'all', label: 'Todas' },
    { key: 'unread', label: 'No leídas' },
    { key: 'message', label: 'Mensajes' },
    { key: 'offer', label: 'Ofertas' },
    { key: 'sale', label: 'Ventas' },
    { key: 'purchase', label: 'Compras' },
    { key: 'system', label: 'Sistema' }
];

export default {
    users,
    products,
    notificationTypes,
    notificationTemplates,
    generateMockNotifications,
    notificationFilters
};