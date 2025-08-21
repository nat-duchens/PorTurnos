// src/components/Header.jsx
import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/img/LogoPorTurnos.png'
import NotificationSystem from './notifications/components/NotificationSystem'

export default function Header() {
    // Estado para controlar si el usuario ha iniciado sesión
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userName, setUserName] = useState('')
    
    // Simular verificación de inicio de sesión
    useEffect(() => {
        // En una aplicación real, esto vendría de un contexto de autenticación
        // o de una llamada a la API para verificar el token
        const checkLoginStatus = () => {
            const userToken = localStorage.getItem('userToken')
            const storedUserName = localStorage.getItem('userName')
            
            if (userToken) {
                setIsLoggedIn(true)
                setUserName(storedUserName || 'Usuario')
            } else {
                setIsLoggedIn(false)
                setUserName('')
            }
        }
        
        checkLoginStatus()
        
        // Para propósitos de demostración, podemos simular un inicio de sesión
        // Comenta estas líneas en producción
        // localStorage.setItem('userToken', 'demo-token')
        // localStorage.setItem('userName', 'Juan Pérez')
        // setIsLoggedIn(true)
        // setUserName('Juan Pérez')
    }, [])
    return (
        <header className="pt-header shadow-sm">
            <div className="container py-2">
                {/* Fila 1: Logo + Buscador + Usuario */}
                <div className="row align-items-center">
                    <div className="col-auto">
                        <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none">
                            <img src={logo} alt="Logo Por Turnos" height="80" />
                        </Link>
                    </div>

                    <div className="col">
                        <form role="search" onSubmit={(e) => e.preventDefault()}>
                            <div className="input-group pt-search">
                                <input className="form-control" type="search" placeholder="Buscar juegos o artículos…" aria-label="Buscar" />
                                <button className="btn btn-outline-dark" type="submit">
                                    <i className="bi bi-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="col-auto d-none d-md-block">
                        {isLoggedIn ? (
                            <a href="#" className="btn btn-usuario rounded-3 px-3">{userName}</a>
                        ) : (
                            <NavLink to="/login" className="btn btn-outline-primary rounded-3 px-3">Iniciar sesión</NavLink>
                        )}
                    </div>
                </div>

                {/* Fila 2: Subnavbar */}
                <div className="row mt-2">
                    <div className="col">
                        <nav className="pt-subnav d-flex flex-wrap gap-3">
                            <NavLink className="pt-navlink" to="/marketplace">Tienda</NavLink>
                            <NavLink className="pt-navlink" to="/marketplace/publish">Vender juego</NavLink>
                            <NavLink to="/Contacto" className="pt-navlink">Ayuda</NavLink>

                            <span className="flex-grow-1"></span>

                            <NavLink className="pt-navlink" to="/marketplace/seller-dashboard">Panel Vendedor</NavLink>
                            <NavLink className="pt-navlink" to="/blog">Blogs</NavLink>
                            <NavLink className="pt-navlink" to="/marketplace/messages">Mensajes</NavLink>

                            {/* Mostrar Login solo si no ha iniciado sesión */}
                            {!isLoggedIn && (
                                <NavLink className="pt-navlink" to="/login">Login</NavLink>
                            )}

                            <div className="d-flex align-items-center">
                                <NotificationSystem />
                                <a href="#" className="pt-navlink ms-3" aria-label="Carrito">
                                    <i className="bi bi-cart3"></i>
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
