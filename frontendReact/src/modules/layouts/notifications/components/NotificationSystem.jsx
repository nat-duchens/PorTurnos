import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
    mockNotifications,
    notificationIcons,
    notificationColors,
    notificationTexts,
    notificationPanelConfig,
    timeConfig
} from '../utils/dummyData'

export default function NotificationSystem() {
    const [notifications, setNotifications] = useState([])
    const [unreadCount, setUnreadCount] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    // Simular carga de notificaciones
    useEffect(() => {
        // En una aplicación real, esto vendría de una API
        setNotifications(mockNotifications)
        setUnreadCount(mockNotifications.filter(n => !n.read).length)
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
        setUnreadCount(prev => Math.max(0, prev - 1))
    }

    // Marcar todas como leídas
    const markAllAsRead = () => {
        setNotifications(prev => 
            prev.map(notification => ({ ...notification, read: true }))
        )
        setUnreadCount(0)
    }

    // Eliminar notificación
    const removeNotification = (id) => {
        setNotifications(prev => prev.filter(notification => notification.id !== id))
        // Actualizar contador de no leídas si es necesario
        const wasUnread = notifications.find(n => n.id === id)?.read === false
        if (wasUnread) {
            setUnreadCount(prev => Math.max(0, prev - 1))
        }
    }

    // Formatear tiempo relativo
    const formatRelativeTime = (date) => {
        const now = new Date()
        const diffInSeconds = Math.floor((now - date) / 1000)
        
        if (diffInSeconds < timeConfig.MINUTE) {
            return 'Ahora mismo'
        } else if (diffInSeconds < timeConfig.HOUR) {
            const minutes = Math.floor(diffInSeconds / timeConfig.MINUTE)
            return `Hace ${minutes} ${minutes === 1 ? 'minuto' : 'minutos'}`
        } else if (diffInSeconds < timeConfig.DAY) {
            const hours = Math.floor(diffInSeconds / timeConfig.HOUR)
            return `Hace ${hours} ${hours === 1 ? 'hora' : 'horas'}`
        } else {
            const days = Math.floor(diffInSeconds / timeConfig.DAY)
            return `Hace ${days} ${days === 1 ? 'día' : 'días'}`
        }
    }

    // Obtener icono según tipo de notificación
    const getNotificationIcon = (type) => {
        return notificationIcons[type] || notificationIcons.default
    }

    // Obtener color según tipo de notificación
    const getNotificationColor = (type) => {
        return notificationColors[type] || notificationColors.default
    }

    return (
        <div className="notification-system">
            {/* Botón de notificaciones */}
            <div className="dropdown">
                <button 
                    className="btn btn-link position-relative p-0 text-dark" 
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                >
                    <i className="bi bi-bell fs-5"></i>
                    {unreadCount > 0 && (
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {unreadCount}
                            <span className="visually-hidden">{notificationTexts.UNREAD_ARIA_LABEL}</span>
                        </span>
                    )}
                </button>

                {/* Panel de notificaciones */}
                <div 
                    className={`dropdown-menu dropdown-menu-end p-0 shadow-lg ${isOpen ? 'show' : ''}`} 
                    style={{ 
                        width: notificationPanelConfig.width, 
                        maxHeight: notificationPanelConfig.maxHeight, 
                        overflow: 'hidden' 
                    }}
                >
                    <div className="p-3 border-bottom d-flex justify-content-between align-items-center bg-light">
                        <h6 className="mb-0">{notificationTexts.NOTIFICATIONS_TITLE}</h6>
                        {unreadCount > 0 && (
                            <button 
                                className="btn btn-sm btn-link text-decoration-none p-0"
                                onClick={markAllAsRead}
                            >
                                {notificationTexts.MARK_ALL_READ}
                            </button>
                        )}
                    </div>

                    <div style={{ maxHeight: notificationPanelConfig.scrollAreaMaxHeight, overflowY: 'auto' }}>
                        {notifications.length > 0 ? (
                            <div className="list-group list-group-flush">
                                {notifications.map(notification => (
                                    <div 
                                        key={notification.id} 
                                        className={`list-group-item list-group-item-action ${!notification.read ? 'bg-light' : ''}`}
                                        onClick={() => markAsRead(notification.id)}
                                    >
                                        <div className="d-flex">
                                            <div className="me-3">
                                                <div className={`notification-icon bg-${getNotificationColor(notification.type)} text-white rounded-circle d-flex align-items-center justify-content-center`} style={{ width: '40px', height: '40px' }}>
                                                    <i className={`bi ${getNotificationIcon(notification.type)}`}></i>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <div className="d-flex justify-content-between align-items-center mb-1">
                                                    <h6 className="mb-0">{notification.title}</h6>
                                                    <small className="text-muted">{formatRelativeTime(notification.timestamp)}</small>
                                                </div>
                                                <p className="mb-1 small">{notification.content}</p>
                                                <Link to={notification.link} className="btn btn-sm btn-link p-0 text-decoration-none">
                                                    {notificationTexts.VIEW_DETAILS}
                                                </Link>
                                            </div>
                                            <div>
                                                <button 
                                                    className="btn btn-sm text-muted p-0 ms-2"
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        removeNotification(notification.id)
                                                    }}
                                                >
                                                    <i className="bi bi-x"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-5">
                                <i className="bi bi-bell-slash fs-1 text-muted"></i>
                                <p className="mt-3 mb-0 text-muted">{notificationTexts.NO_NOTIFICATIONS}</p>
                            </div>
                        )}
                    </div>

                    <div className="p-2 border-top text-center">
                        <Link to="/marketplace/notifications" className="btn btn-link text-decoration-none w-100">
                            {notificationTexts.VIEW_ALL}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}