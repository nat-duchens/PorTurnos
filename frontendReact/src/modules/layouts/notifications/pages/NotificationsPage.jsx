import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
    generateMockNotifications, 
    notificationTypes, 
    notificationFilters 
} from '../utils/dummyData'

export default function NotificationsPage() {
    const [notifications, setNotifications] = useState([])
    const [loading, setLoading] = useState(true)
    const [filter, setFilter] = useState('all')

    // Simular carga de notificaciones
    useEffect(() => {
        // Simular tiempo de carga
        const timer = setTimeout(() => {
            const mockNotifications = generateMockNotifications()
            setNotifications(mockNotifications)
            setLoading(false)
        }, 800)

        return () => clearTimeout(timer)
    }, [])

    // Marcar notificación como leída
    const markAsRead = (id) => {
        setNotifications(prev => 
            prev.map(notification => 
                notification.id === id 
                    ? { ...notification, read: true } 
                    : notification
            )
        )
    }

    // Marcar todas como leídas
    const markAllAsRead = () => {
        setNotifications(prev => 
            prev.map(notification => ({ ...notification, read: true }))
        )
    }

    // Eliminar notificación
    const removeNotification = (id) => {
        setNotifications(prev => prev.filter(notification => notification.id !== id))
    }

    // Eliminar todas las notificaciones
    const clearAllNotifications = () => {
        setNotifications([])
    }

    // Formatear fecha
    const formatDate = (date) => {
        return new Intl.DateTimeFormat('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(date)
    }

    // Obtener configuración de notificación por tipo
    const getNotificationConfig = (type) => {
        return notificationTypes[type] || {
            icon: 'bi-bell-fill',
            color: 'dark',
            label: 'Notificación'
        }
    }

    // Filtrar notificaciones
    const filteredNotifications = notifications.filter(notification => {
        if (filter === 'all') return true
        if (filter === 'unread') return !notification.read
        return notification.type === filter
    })

    // Contar notificaciones no leídas
    const unreadCount = notifications.filter(n => !n.read).length

    return (
        <div className="container py-5">
            {/* Header con acciones */}
            <div className="row mb-4">
                <div className="col">
                    <div className="d-flex align-items-center gap-2">
                        <h1 className="h3 mb-0">Notificaciones</h1>
                        {unreadCount > 0 && (
                            <span className="badge bg-danger rounded-pill">{unreadCount}</span>
                        )}
                    </div>
                </div>
                <div className="col-auto">
                    <div className="d-flex gap-2 flex-wrap">
                        {unreadCount > 0 && (
                            <button 
                                className="btn btn-outline-primary btn-sm"
                                onClick={markAllAsRead}
                                title="Marcar todas como leídas"
                            >
                                <i className="bi bi-check-all me-1"></i>
                                <span className="d-none d-sm-inline">Marcar todas como leídas</span>
                                <span className="d-sm-none">Marcar todas</span>
                            </button>
                        )}
                        {notifications.length > 0 && (
                            <button 
                                className="btn btn-outline-danger btn-sm"
                                onClick={clearAllNotifications}
                                title="Eliminar todas las notificaciones"
                            >
                                <i className="bi bi-trash me-1"></i>
                                <span className="d-none d-sm-inline">Eliminar todas</span>
                                <span className="d-sm-none">Eliminar</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Filtros */}
            <div className="row mb-4">
                <div className="col">
                    <div className="btn-group flex-wrap" role="group" aria-label="Filtros de notificaciones">
                        {notificationFilters.map(filterOption => (
                            <button 
                                key={filterOption.key}
                                className={`btn btn-sm ${filter === filterOption.key ? 'btn-primary' : 'btn-outline-primary'}`}
                                onClick={() => setFilter(filterOption.key)}
                            >
                                {filterOption.label}
                                {filterOption.key === 'unread' && unreadCount > 0 && (
                                    <span className="badge bg-light text-dark ms-1">{unreadCount}</span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contenido principal */}
            {loading ? (
                <div className="text-center py-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                    <p className="mt-3 text-muted">Cargando notificaciones...</p>
                </div>
            ) : filteredNotifications.length > 0 ? (
                <div className="card shadow-sm">
                    <div className="list-group list-group-flush">
                        {filteredNotifications.map(notification => {
                            const config = getNotificationConfig(notification.type)
                            return (
                                <div 
                                    key={notification.id} 
                                    className={`list-group-item position-relative ${!notification.read ? 'bg-light border-start border-primary border-3' : ''}`}
                                >
                                    {/* Indicador de no leída */}
                                    {!notification.read && (
                                        <div 
                                            className="position-absolute top-0 end-0 mt-2 me-2 bg-primary rounded-circle"
                                            style={{ width: '8px', height: '8px' }}
                                            title="Notificación no leída"
                                        ></div>
                                    )}

                                    <div className="d-flex">
                                        {/* Icono */}
                                        <div className="me-3 flex-shrink-0">
                                            <div 
                                                className={`bg-${config.color} text-white rounded-circle d-flex align-items-center justify-content-center`} 
                                                style={{ width: '48px', height: '48px' }}
                                            >
                                                <i className={`bi ${config.icon}`}></i>
                                            </div>
                                        </div>

                                        {/* Contenido principal */}
                                        <div className="flex-grow-1">
                                            <div className="d-flex justify-content-between align-items-start mb-1">
                                                <h5 className={`mb-0 ${!notification.read ? 'fw-bold' : ''}`}>
                                                    {notification.title}
                                                </h5>
                                                <small className="text-muted text-nowrap ms-2">
                                                    {formatDate(notification.timestamp)}
                                                </small>
                                            </div>

                                            <p className={`mb-2 ${!notification.read ? 'text-dark' : 'text-muted'}`}>
                                                {notification.content}
                                            </p>

                                            {/* Información adicional */}
                                            {(notification.sender || notification.product) && (
                                                <div className="d-flex align-items-center gap-3 mb-2">
                                                    {notification.sender && (
                                                        <div className="d-flex align-items-center gap-2">
                                                            <img 
                                                                src={notification.sender.avatar} 
                                                                alt={notification.sender.name}
                                                                className="rounded-circle"
                                                                style={{ width: '24px', height: '24px' }}
                                                            />
                                                            <small className="text-muted">{notification.sender.name}</small>
                                                        </div>
                                                    )}
                                                    {notification.product && (
                                                        <div className="d-flex align-items-center gap-2">
                                                            <img 
                                                                src={notification.product.image} 
                                                                alt={notification.product.name}
                                                                className="rounded"
                                                                style={{ width: '24px', height: '24px', objectFit: 'cover' }}
                                                            />
                                                            <small className="text-muted">{notification.product.name}</small>
                                                        </div>
                                                    )}
                                                </div>
                                            )}

                                            {/* Acciones */}
                                            <div className="d-flex gap-2 flex-wrap">
                                                <Link 
                                                    to={notification.link} 
                                                    className="btn btn-sm btn-primary"
                                                >
                                                    <i className="bi bi-arrow-right me-1"></i>
                                                    Ver detalles
                                                </Link>
                                                {!notification.read && (
                                                    <button 
                                                        className="btn btn-sm btn-outline-secondary"
                                                        onClick={() => markAsRead(notification.id)}
                                                    >
                                                        <i className="bi bi-check me-1"></i>
                                                        Marcar como leída
                                                    </button>
                                                )}
                                            </div>
                                        </div>

                                        {/* Botón eliminar */}
                                        <div className="flex-shrink-0">
                                            <button 
                                                className="btn btn-sm btn-link text-muted p-1"
                                                onClick={() => removeNotification(notification.id)}
                                                aria-label="Eliminar notificación"
                                                title="Eliminar notificación"
                                            >
                                                <i className="bi bi-x-lg"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            ) : (
                /* Estado vacío */
                <div className="text-center py-5 card shadow-sm">
                    <div className="card-body py-5">
                        <i className="bi bi-bell-slash fs-1 text-muted mb-3"></i>
                        <h3 className="text-muted">
                            {filter === 'all' ? 'No hay notificaciones' : 'Sin resultados'}
                        </h3>
                        <p className="text-muted mb-4">
                            {filter === 'all' 
                                ? 'No tienes notificaciones en este momento.' 
                                : `No hay notificaciones de tipo "${notificationFilters.find(f => f.key === filter)?.label}".`}
                        </p>
                        {filter !== 'all' && (
                            <button 
                                className="btn btn-primary"
                                onClick={() => setFilter('all')}
                            >
                                <i className="bi bi-arrow-left me-1"></i>
                                Ver todas las notificaciones
                            </button>
                        )}
                    </div>
                </div>
            )}

            {/* Información adicional */}
            {notifications.length > 0 && (
                <div className="mt-4">
                    <small className="text-muted">
                        Total: {notifications.length} notificaciones | 
                        Mostrando: {filteredNotifications.length} | 
                        No leídas: {unreadCount}
                    </small>
                </div>
            )}
        </div>
    )
}