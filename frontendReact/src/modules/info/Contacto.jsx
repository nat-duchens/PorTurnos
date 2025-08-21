import React from 'react'

export default function Contacto() {
    return (
        <section className="py-4">
            <div className="container">
                <article className="blog-juegos p-3 rounded-3">
                    <header className="mb-3 text-center">
                        <h1 className="gradient-title m-0">Contacto</h1>
                        <p className="text-muted m-0">Estamos para ayudarte</p>
                    </header>

                    <p>
                        Si tienes dudas, sugerencias o quieres reportar un problema, escríbenos a{' '}
                        <a href="mailto:contacto@porturnos.cl">contacto@porturnos.cl</a>.
                    </p>

                    <h2 className="h5 mt-4">Antes de escribir</h2>
                    <ul>
                        <li>Revisa la publicación y conversa con la otra parte dentro de la plataforma.</li>
                        <li>Incluye ID de la publicación/operación si aplica.</li>
                        <li>Adjunta capturas de pantalla solo si ayudan a entender el caso.</li>
                    </ul>

                    <p className="mb-0"><em>Tiempo de respuesta:</em> dentro de 24–48 horas hábiles.</p>
                </article>
            </div>
        </section>
    )
}