import React from 'react'

export default function Privacidad() {
    return (
        <section className="py-4">
            <div className="container">
                <article className="blog-juegos p-3 rounded-3">
                    <header className="mb-3 text-center">
                        <h1 className="gradient-title m-0">Privacidad</h1>
                        <p className="text-muted m-0">Cómo protegemos tu información</p>
                    </header>

                    <p>
                        Usamos tus datos personales para operar la plataforma (registro, publicaciones, transacciones y soporte).
                        <strong> No vendemos tu información</strong>. Solo la compartimos cuando es necesario para prestar el servicio
                        (por ejemplo, procesadores de pago) o por requerimiento legal.
                    </p>

                    <h2 className="h5 mt-3">Principios</h2>
                    <ul>
                        <li>Minimización: pedimos solo lo necesario para operar.</li>
                        <li>Transparencia: puedes solicitar acceso, corrección o eliminación de tus datos.</li>
                        <li>Seguridad: aplicamos medidas técnicas y organizativas para proteger la información.</li>
                    </ul>

                    <p className="mb-0">
                        Consultas de privacidad: <a href="mailto:contacto@porturnos.cl">contacto@porturnos.cl</a>.
                    </p>
                </article>
            </div>
        </section>
    )
}