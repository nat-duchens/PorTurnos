import React, { useState } from 'react'

export default function ResetPassword() {
    const [status, setStatus] = useState({ ok: false, msg: '' })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')

        try {
            // TODO: reemplaza por tu llamada real (fetch/axios) a tu backend
            // Ejemplo:
            // const res = await fetch('/api/auth/forgot-password', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify({ email })
            // })
            // if (!res.ok) throw new Error('No se pudo enviar el correo')
            // const data = await res.json()

            // Demo local:
            await new Promise((r) => setTimeout(r, 800))
            setStatus({ ok: true, msg: 'Te hemos enviado un enlace para restablecer tu contraseña (si el correo está registrado).' })
        } catch (err) {
            setStatus({ ok: false, msg: 'Hubo un problema enviando el correo. Inténtalo nuevamente.' })
        }
    }

    return (
        <section className="py-4">
            <div className="container">
                <article className="blog-juegos p-3 rounded-3">
                    <div className="row justify-content-center">
                        <div className="col-md-7 col-lg-6">
                            <div className="auth-card">
                                <div className="text-center mb-3">
                                    <i className="bi bi-shield-lock fs-1 text-rosa" aria-hidden="true"></i>
                                    <h2 className="mt-2 gradient-title">Restablecer contraseña</h2>
                                    <p className="text-muted m-0 small">
                                        Ingresa tu correo y te enviaremos un enlace para restablecerla.
                                    </p>
                                </div>

                                {status.msg && (
                                    <div className={`alert ${status.ok ? 'alert-success' : 'alert-warning'}`} role="alert">
                                        {status.msg}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} noValidate>
                                    <div className="mb-3">
                                        <label htmlFor="resetEmail" className="form-label">Correo electrónico</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="resetEmail"
                                            name="email"
                                            placeholder="nombre@ejemplo.com"
                                            required
                                        />
                                    </div>

                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-outline-dark btn-rosa">
                                            Enviarme enlace
                                        </button>
                                    </div>
                                </form>

                                <p className="text-center mt-3 mb-0 small">
                                    ¿La recordaste? <a href="/login" className="link-primary fw-semibold">Volver a iniciar sesión</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}