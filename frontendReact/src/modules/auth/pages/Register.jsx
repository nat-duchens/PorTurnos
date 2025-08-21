import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Register() {
    const [formData, setFormData] = useState({
        rut: '',
        nombres: '',
        apellidos: '',
        email: '',
        password: '',
        confirmPassword: '',
        telefono: '',
        direccion: ''
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const { login } = useAuth()
    const navigate = useNavigate()
    
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
        setSuccess('')
        
        // Validar que las contraseñas coincidan
        if (formData.password !== formData.confirmPassword) {
            setError('Las contraseñas no coinciden')
            setLoading(false)
            return
        }
        
        // Armamos el payload con los NOMBRES que tu backend espera
        const payload = {
            rut: formData.rut,
            nombres: formData.nombres,
            apellidos: formData.apellidos,
            email: formData.email,
            password: formData.password,
            telefono: formData.telefono || null,
            direccion: formData.direccion
        }
        
        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            })
            
            if (response.ok) {
                const data = await response.json()
                setSuccess('Registro exitoso. Redirigiendo...')
                
                // Auto-login después del registro
                const userData = {
                    id: data.id || 1,
                    email: formData.email,
                    nombres: formData.nombres,
                    apellidos: formData.apellidos
                }
                
                login(data.token, userData)
                
                setTimeout(() => {
                    navigate('/')
                }, 1500)
            } else {
                const errorData = await response.json()
                setError(errorData.message || 'Error al registrar usuario')
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
                {/* mismo “marco” que el blog */}
                <article className="blog-juegos p-3 rounded-3">
                    <div className="row justify-content-center">
                        <div className="col-md-7 col-lg-6">
                            <div className="auth-card">
                                <div className="text-center mb-3">
                                    <i className="bi bi-person-plus-fill fs-1 text-rosa"></i>
                                    <h2 className="mt-2 gradient-title">Regístrate</h2>
                                </div>

                                <form onSubmit={handleSubmit} noValidate>
                                    {error && (
                                        <div className="alert alert-danger" role="alert">
                                            {error}
                                        </div>
                                    )}
                                    
                                    {success && (
                                        <div className="alert alert-success" role="alert">
                                            {success}
                                        </div>
                                    )}
                                    
                                    {/* RUT */}
                                    <div className="mb-3">
                                        <label htmlFor="rut" className="form-label">RUT</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="rut"
                                            name="rut"
                                            value={formData.rut}
                                            onChange={handleChange}
                                            placeholder="12.345.678-9"
                                            maxLength={12}
                                            pattern="^[0-9kK.\-]+$"
                                            required
                                            disabled={loading}
                                        />
                                        <div className="form-text">Formato aceptado: 12.345.678-9 (puede incluir puntos y guion)</div>
                                    </div>

                                    {/* Nombres */}
                                    <div className="mb-3">
                                        <label htmlFor="nombres" className="form-label">Nombres</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="nombres"
                                            name="nombres"
                                            value={formData.nombres}
                                            onChange={handleChange}
                                            maxLength={100}
                                            required
                                            disabled={loading}
                                        />
                                    </div>

                                    {/* Apellidos */}
                                    <div className="mb-3">
                                        <label htmlFor="apellidos" className="form-label">Apellidos</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="apellidos"
                                            name="apellidos"
                                            value={formData.apellidos}
                                            onChange={handleChange}
                                            maxLength={100}
                                            required
                                            disabled={loading}
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Correo electrónico</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            maxLength={100}
                                            placeholder="nombre@ejemplo.com"
                                            required
                                            disabled={loading}
                                        />
                                    </div>

                                    {/* Teléfono (opcional) */}
                                    <div className="mb-3">
                                        <label htmlFor="telefono" className="form-label">Teléfono (opcional)</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="telefono"
                                            name="telefono"
                                            value={formData.telefono}
                                            onChange={handleChange}
                                            maxLength={20}
                                            placeholder="+56 9 1234 5678"
                                            disabled={loading}
                                        />
                                    </div>

                                    {/* Dirección */}
                                    <div className="mb-3">
                                        <label htmlFor="direccion" className="form-label">Dirección</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="direccion"
                                            name="direccion"
                                            value={formData.direccion}
                                            onChange={handleChange}
                                            maxLength={255}
                                            required
                                            disabled={loading}
                                        />
                                    </div>

                                    {/* Password + Confirmación */}
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Contraseña</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            minLength={8}
                                            required
                                            disabled={loading}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="confirmPassword" className="form-label">Repite la contraseña</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            minLength={8}
                                            required
                                            disabled={loading}
                                        />
                                    </div>

                                    {/* Términos */}
                                    <div className="form-check mb-3">
                                        <input type="checkbox" className="form-check-input" id="terms" required />
                                        <label className="form-check-label" htmlFor="terms">
                                            Acepto los términos y condiciones
                                        </label>
                                    </div>

                                    {/* Botón (usa tu estilo rosa) */}
                                    <div className="d-grid">
                                        <button 
                                            type="submit" 
                                            className="btn btn-outline-dark btn-rosa"
                                            disabled={loading}
                                        >
                                            {loading ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                    Registrando...
                                                </>
                                            ) : (
                                                'Registrarme'
                                            )}
                                        </button>
                                    </div>
                                </form>

                                <p className="text-center mt-3 mb-0 small">
                                    ¿Ya tienes cuenta?{' '}
                                    <NavLink to="/login" className="link-primary fw-semibold">Inicia sesión</NavLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}
