import React from 'react'

export default function Envios() {
    return (
        <section className="py-4">
            <div className="container">
                <article className="blog-juegos p-3 rounded-3">
                    <header className="mb-3 text-center">
                        <h1 className="gradient-title m-0">Envíos</h1>
                        <p className="text-muted m-0">Acuerdos entre comprador y vendedor</p>
                    </header>

                    <p>
                        Por Turnos es una plataforma C2C. <strong>El envío siempre debe ser acordado entre comprador y vendedor</strong>
                        , incluyendo costo, empresa y modalidad (envío a domicilio, retiro en sucursal o entrega en persona).
                    </p>

                    <div className="alert alert-warning mt-3" role="alert">
                        <strong>Importante:</strong> Por Turnos no es responsable por pérdidas, daños o retrasos del servicio de envío.
                    </div>

                    <h2 className="h5 mt-3">Recomendaciones</h2>
                    <ul>
                        <li>Dejar el acuerdo escrito en el chat de la transacción.</li>
                        <li>Usar servicios con seguimiento y guardar comprobantes.</li>
                        <li>Empaquetar bien el juego (caja protegida y componentes asegurados).</li>
                        <li>Para entrega en persona, elegir un lugar público y seguro.</li>
                    </ul>
                </article>
            </div>
        </section>
    )
}