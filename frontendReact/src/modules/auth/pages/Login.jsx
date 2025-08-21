import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import logo from '../../../assets/img/LogoPorTurnos.png'

export default function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const { login } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    
    const from = location.state?.from?.pathname || '/'
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            
            if (response.ok) {
                const data = await response.json()
                // Simular datos de usuario (en una app real vendrían del backend)
                const userData = {
                    id: 1,
                    email: formData.email,
                    nombres: formData.email.split('@')[0], // Temporal
                    apellidos: 'Usuario'
                }
                login(data.token, userData)
                navigate(from, { replace: true })
            } else {
                const errorData = await response.json()
                setError(errorData.message || 'Error al iniciar sesión')
            }
        } catch (error) {
            console.error('Error:', error)
            setError('Error de conexión. Por favor, intenta de nuevo.')
        } finally {
            setLoading(false)
        }
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
                                        style={{
                                            height: '80px',
                                        }}
                                    />
                                    <h2 className="mt-2 gradient-title">Login</h2>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    {error && (
                                        <div className="alert alert-danger" role="alert">
                                            {error}
                                        </div>
                                    )}
                                    
                                    <div className="mb-3">
                                        <label htmlFor="loginEmail" className="form-label">
                                            Correo electrónico
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="loginEmail"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="nombre@ejemplo.com"
                                            required
                                            disabled={loading}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="loginPassword" className="form-label">
                                            Contraseña
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="loginPassword"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="••••••••"
                                            required
                                            disabled={loading}
                                        />
                                        <div className="mt-1 text-end">
                                            <NavLink to="/forgot-password" className="small text-muted">
                                                ¿Olvidaste tu contraseña?
                                            </NavLink>
                                        </div>
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
                                        <button 
                                            type="submit" 
                                            className="btn btn-outline-dark btn-rosa"
                                            disabled={loading}
                                        >
                                            {loading ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                    Iniciando sesión...
                                                </>
                                            ) : (
                                                'Ingresar'
                                            )}
                                        </button>
                                    </div>
                                </form>

                                <p className="text-center mt-3 mb-0 small">
                                    ¿No tienes cuenta?{' '}
                                    <NavLink to="/register" className="link-primary fw-semibold">
                                        Regístrate
                                    </NavLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}