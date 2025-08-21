import React from 'react'

export default function Conducta() {
    return (
        <section className="py-4">
            <div className="container">
                <article className="blog-juegos p-3 rounded-3">
                    <header className="mb-3 text-center">
                        <h1 className="gradient-title m-0">Conducta, Seguridad y Calidad</h1>
                        <p className="text-muted m-0">Cuidemos la comunidad y la confianza</p>
                    </header>

                    <p>
                        Por Turnos promueve darle una <strong>segunda oportunidad</strong> a los juegos de mesa usados. Para mantener
                        una comunidad sana, segura y de confianza, estas son nuestras políticas y lineamientos.
                    </p>

                    <p>
                        Actualmente nos enfocamos en la compra y venta directa, pero <strong>estamos trabajando para
                        implementar un sistema de arriendos</strong> que incluirá garantías, control de calidad y
                        beneficios para miembros. Esta función estará disponible próximamente, y se regirá bajo
                        las políticas de seguridad descritas a continuación.
                    </p>

                    {/* Reglas básicas */}
                    <h2 className="h5 mt-3">Reglas de conducta</h2>
                    <ul>
                        <li>Respeto siempre: nada de insultos, acoso o discriminación.</li>
                        <li>Publicaciones honestas: describe el estado real del juego e incluye fotos claras.</li>
                        <li>Prohibido publicar artículos ilegales o que infrinjan derechos de autor.</li>
                        <li>Completa transacciones dentro de la plataforma y no compartas datos sensibles públicamente.</li>
                    </ul>

                    {/* Políticas de seguridad */}
                    <h2 className="h5 mt-4">Políticas de seguridad</h2>
                    <ul>
                        <li>
                            <strong>Contrato de arriendo simple:</strong> incluir datos de la persona, datos del juego, condiciones de devolución,
                            responsabilidad en caso de pérdida/daño/no devolución, y consentimiento informado sobre la garantía.
                        </li>
                        <li>
                            <strong>Garantía o depósito reembolsable:</strong> en caso de robo o daño, el cliente debe dejar un porcentaje del valor
                            del juego o datos de una tarjeta para respaldo.
                        </li>
                        <li>
                            <strong>Daños o piezas faltantes:</strong> cargos proporcionales según la gravedad.
                        </li>
                        <li>
                            <strong>No devolución:</strong> si no se devuelve un juego arrendado en el plazo acordado, se cobra el valor completo y
                            se elimina al cliente de la membresía.
                        </li>
                        <li>
                            <strong>Identificación del cliente:</strong> validación de datos, verificación por fotografía y dirección.
                        </li>
                        <li>
                            <strong>Membresía para arriendo:</strong> el acceso a arriendos requiere suscripción mensual, para prevenir fraudes.
                        </li>
                        <li>
                            <strong>Comisión:</strong> se aplicará comisión por exponer juegos de terceros en la plataforma.
                        </li>
                    </ul>

                    {/* Control de calidad */}
                    <h2 className="h5 mt-4">Control de calidad</h2>
                    <p>Basamos nuestra calidad en tres pilares fundamentales:</p>
                    <ol>
                        <li>
                            <strong>Construir confianza:</strong> verificación de usuario, reputación del vendedor y transparencia en la información.
                        </li>
                        <li>
                            <strong>Control de calidad del producto:</strong> definición de estándares, revisión previa de productos y sistema de denuncias.
                        </li>
                        <li>
                            <strong>Comunicación y atención al cliente:</strong> canales claros de comunicación y soporte rápido para resolver problemas.
                        </li>
                    </ol>

                    <p className="mb-0">
                        Incumplimientos pueden derivar en advertencias, suspensión o cierre de cuenta, siempre priorizando la seguridad y confianza de la comunidad.
                    </p>
                </article>
            </div>
        </section>
    )
}