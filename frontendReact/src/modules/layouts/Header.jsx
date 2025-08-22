// src/components/Header.jsx
import { useState } from 'react'
import { useAuth } from '../auth/context/AuthContext'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/img/LogoPorTurnos.png'
import NotificationSystem from '../layouts/notifications/components/NotificationSystem'

export default function Header() {
    // Estado para controlar si el usuario ha iniciado sesión
    const { isAuthenticated, user, logout } = useAuth()
    
    const handleLogout = () => {
        logout()
    }
    const [searchQuery, setSearchQuery] = useState('')
    const navigate = useNavigate()
    
    
    return (
        <header className="pt-header shadow-sm">
            {/* Banner promocional */}
        <div className="bg-dark py-2">
            <div className="container">
            <div className="d-flex align-items-center justify-content-center">
                <i className="bi bi-megaphone text-white me-2"></i>
                <p className="mb-0 fw-bold text-white">¡Oferta especial de lanzamiento! Publica tu primer juego sin comisiones hasta fin de mes.</p>
            </div>
        </div>
        </div>
            <div className="container py-2">
                {/* Fila 1: Logo + Buscador + Usuario */}
                <div className="row align-items-center">
                    <div className="col-auto">
                        <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none">
                            <img src={logo} alt="Logo Por Turnos" height="80" />
                        </Link>
                    </div>

                    <div className="col">
                        <form role="search" onSubmit={(e) => {
                            e.preventDefault();
                            if (searchQuery.trim()) {
                                navigate(`/marketplace?search=${encodeURIComponent(searchQuery)}`);
                            }
                        }}>
                            <div className="input-group pt-search">
                              <input
                                id='busqueda-header'
                                className="form-control"
                                type="search"
                                placeholder="Buscar juegos o artículos…"
                                aria-label="Buscar"
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                                onKeyPress={e => {
                                    if (e.key === 'Enter' && searchQuery.trim()) {
                                        e.preventDefault();
                                        navigate(`/marketplace?search=${encodeURIComponent(searchQuery)}`);
                                    }
                                }}
                            />
                            <button 
                                className="btn btn-outline-dark text-white" 
                                type="submit"
                                onClick={() => {
                                    if (searchQuery.trim()) {
                                        navigate(`/marketplace?search=${encodeURIComponent(searchQuery)}`);
                                    }
                                }}
                            >
                                <i className="bi bi-search"></i>
                            </button>
                            </div>
                        </form>
                    </div>

                    <div className="col-auto d-none d-md-block">
                        {isAuthenticated ? (
                            <div className="dropdown">
                                <button className="btn btn-outline-dark text-white rounded-3 px-3 dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                    {user?.nombres} {user?.apellidos}
                                </button>
                                <ul className="dropdown-menu">
                                    <li><span className="dropdown-item-text">{user?.email}</span></li>
                                 <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/profile">Mi Perfil</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={handleLogout}>Cerrar Sesión</a></li>
                                </ul>
                            </div>
                        ) : (
                            <NavLink to="/login" className="btn btn-outline-dark text-white rounded-3 px-3">Iniciar sesión</NavLink>
                        )}
                    </div>
                </div>

                {/* Fila 2: Subnavbar */}
                <div className="row mt-2">
                    <div className="col">
                        <nav className="pt-subnav d-flex flex-wrap gap-3">
                            <NavLink className="pt-navlink" to="/marketplace">Tiendita</NavLink>
                            <div className="dropdown">
                                <button className="pt-navlink dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{background: 'none', border: 'none'}}>
                                    Categorías
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Eurogames</a></li>
                                    <li><a className="dropdown-item" href="#">Ameritrash</a></li>
                                    <li><a className="dropdown-item" href="#">Fillers</a></li>
                                    <li><a className="dropdown-item" href="#">Cooperativos</a></li>
                                    <li><a className="dropdown-item" href="#">Miniaturas</a></li>
                                    <li><a className="dropdown-item" href="#">Roles ocultos</a></li>
                                    <li><a className="dropdown-item" href="#">Para dos</a></li>
                                    <li><a className="dropdown-item" href="#">Solitario</a></li>
                                    <li><a className="dropdown-item" href="#">WarGames</a></li>
                                    <li><a className="dropdown-item" href="#">Legacy</a></li>
                                    <li><a className="dropdown-item" href="#">Abstractos</a></li>
                                    <li><a className="dropdown-item" href="#">Party Games</a></li>
                                    <li><a className="dropdown-item" href="#">Juegos de Rol o JDR</a></li>
                                    <li><a className="dropdown-item" href="#">Construcción de Mazos</a></li>
                                    <li><a className="dropdown-item" href="#">CCG (Collective Card Game)</a></li>
                                    <li><a className="dropdown-item" href="#">LCG (Living Card Game)</a></li>
                                </ul>
                            </div>
                            <NavLink className="pt-navlink" to="/marketplace/publish">Vender juego</NavLink>
                            <NavLink to="/Contacto" className="pt-navlink">Ayuda</NavLink>

                            <span className="flex-grow-1"></span>

                            <NavLink className="pt-navlink" to="/marketplace/seller-dashboard">Panel Vendedor</NavLink>
                            <NavLink className="pt-navlink" to="/blog">Blog</NavLink>
                            <NavLink className="pt-navlink" to="/marketplace/messages">Mensajes</NavLink>

                            {/* Mostrar Login solo si no ha iniciado sesión */}
                            {!isAuthenticated && (
                                <NavLink className="pt-navlink" to="/login">Login</NavLink>
                            )}

                            <div className="d-flex align-items-center">
                                <NotificationSystem />
                                <NavLink to="/cart" className="pt-navlink ms-3 btn btn-link" aria-label="Carrito">
                                    <i className="bi bi-cart3"></i>
                                </NavLink>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}