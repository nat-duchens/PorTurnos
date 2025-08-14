import { NavLink } from 'react-router-dom'
import React from 'react'
import logo from '../assets/img/LogoPorTurnos.png'

export default function Login() {
    const handleSubmit = (e) => {
        e.preventDefault()
        // TODO: llamada a tu API de auth
    }

    return (
        <section className="py-4">
            <div className="container">
                {/* contenedor estilo blog */}
                <article className="blog-juegos p-3 rounded-3">
                    <div className="row justify-content-center">
                        <div className="col-md-7 col-lg-6">
                            {/* tarjeta uniforme */}
                            <div className="auth-card">
                                <div className="text-center mb-3">
                                    <img
                                        src={logo}
                                        alt="Logo Por Turnos"
                                        style={{ height: '80px' }}
                                    />
                                    <h2 className="mt-2 gradient-title">Login</h2>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="loginEmail" className="form-label">Correo electrónico</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="loginEmail"
                                            name="email"
                                            placeholder="nombre@ejemplo.com"
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="loginPassword" className="form-label">Contraseña</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="loginPassword"
                                            name="password"
                                            placeholder="••••••••"
                                            required
                                        />
                                    </div>

                                    <div className="form-check mb-3">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="rememberMe"
                                            name="remember"
                                        />
                                        <label className="form-check-label" htmlFor="rememberMe">
                                            Recordarme
                                        </label>
                                    </div>

                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-outline-dark btn-rosa">
                                            Ingresar
                                        </button>
                                    </div>
                                </form>

                                <div className="d-flex justify-content-between mt-3">
                                    <NavLink to="/reset-password" className="small link-secondary">
                                        ¿Olvidaste tu contraseña?
                                    </NavLink>
                                    <span className="small">
                    ¿No tienes cuenta?{' '}
                                        <NavLink to="/register" className="link-primary fw-semibold">Regístrate</NavLink>
                  </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}