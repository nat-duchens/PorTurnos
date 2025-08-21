import React from 'react'

export default function Terminos() {
    return (
        <section className="py-4">
            <div className="container">
                {/* Contenedor con el estilo del blog */}
                <article className="blog-juegos p-3 rounded-3">
                    <h1 className="gradient-title mb-3">Términos y Condiciones</h1>

                    <p><strong>Bienvenido/a a Por Turnos.</strong></p>
                    <p>
                        Estos términos y condiciones regulan el uso del sitio web y servicios de Por Turnos,
                        una plataforma chilena de comercio electrónico tipo C2C (consumer-to-consumer)
                        enfocada en la compra, venta, arriendo y reventa de juegos de mesa nuevos y usados.
                        Al acceder y utilizar este sitio web, asumimos que aceptas estos términos en su totalidad.
                        Si no estás de acuerdo con alguno de ellos, por favor no utilices nuestra plataforma.
                    </p>

                    <ol className="mt-3">
                        <li className="mb-3">
                            <h2 className="h5 m-0">Naturaleza del servicio</h2>
                            <p className="mb-1">
                                Por Turnos es una plataforma de tecnología que conecta a personas naturales para comprar, vender o arrendar juegos de mesa.
                                Actúa como intermediario facilitando la transacción y ofreciendo herramientas tecnológicas para el pago, envío y garantía de calidad.
                            </p>
                            <p className="mb-1">
                                Cada Persona Usuaria es responsable de los datos que proporciona al registrarse y del uso de su cuenta personal.
                                En algunos casos, Por Turnos podrá cobrar tarifas por uso de servicios o funcionalidades especiales, las cuales el Usuario acepta al utilizarlas.
                            </p>
                        </li>

                        <li className="mb-3">
                            <h2 className="h5 m-0">Registro y cuentas de usuario</h2>
                            <p className="mb-1">Las Personas Usuarias deben:</p>
                            <ul className="mb-1">
                                <li>Ser mayores de edad y tener capacidad legal para contratar.</li>
                                <li>Registrarse con información veraz, completa y actualizada.</li>
                                <li>Mantener bajo confidencialidad sus credenciales de acceso.</li>
                            </ul>
                            <p className="mb-1">
                                Por Turnos se reserva el derecho a rechazar o cancelar cuentas en caso de uso indebido o actividades sospechosas,
                                sin que esto genere derecho a indemnización.
                            </p>
                        </li>

                        <li className="mb-3">
                            <h2 className="h5 m-0">Relación entre usuarios</h2>
                            <p className="mb-1">
                                Dado que Por Turnos es una plataforma C2C:
                            </p>
                            <ul className="mb-1">
                                <li>Cada Persona Usuaria es responsable del producto que publica y/o adquiere.</li>
                                <li>Por Turnos no es parte directa de la compraventa, pero podrá intervenir para resolver disputas o aplicar medidas de seguridad.</li>
                                <li>Las operaciones se rigen por la legislación chilena vigente, en especial la Ley del Consumidor.</li>
                            </ul>
                        </li>

                        <li className="mb-3">
                            <h2 className="h5 m-0">Garantía y devoluciones</h2>
                            <p className="mb-1"><strong>Venta</strong></p>
                            <ul className="mb-1">
                                <li>Juegos nuevos tienen garantía legal de 6 meses.</li>
                                <li>Juegos usados se entregan revisados y en condiciones informadas. Reclamos sólo dentro de los 3 días hábiles tras recibir el producto.</li>
                            </ul>
                            <p className="mb-1"><strong>Arriendo</strong></p>
                            <ul className="mb-1">
                                <li>El cliente debe devolver el juego completo y en buen estado en la fecha pactada.</li>
                                <li>Faltas o daños pueden generar cobros proporcionales o el valor total del juego.</li>
                                <li>En algunos casos, se podrá solicitar garantía reembolsable al momento del arriendo.</li>
                            </ul>
                        </li>

                        <li className="mb-3">
                            <h2 className="h5 m-0">Propiedad intelectual</h2>
                            <p className="mb-1">
                                Todo el contenido de la plataforma Por Turnos, incluidos diseños, logos, textos y estructura,
                                está protegido por las leyes de propiedad intelectual. Su uso sin autorización está prohibido.
                            </p>
                        </li>

                        <li className="mb-3">
                            <h2 className="h5 m-0">Privacidad de datos</h2>
                            <p className="mb-1">
                                Nos comprometemos a usar y proteger tus datos personales conforme a nuestra Política de Privacidad.
                                El usuario es responsable de la información que proporciona y puede solicitar su modificación
                                o eliminación cuando lo estime necesario.
                            </p>
                        </li>

                        <li className="mb-3">
                            <h2 className="h5 m-0">Tarifas y comisiones</h2>
                            <p className="mb-1">
                                Por Turnos podrá aplicar comisiones por:
                            </p>
                            <ul className="mb-1">
                                <li>Publicación de productos.</li>
                                <li>Uso del sistema de arriendo.</li>
                                <li>Servicios especiales de envío, garantía o promoción.</li>
                            </ul>
                            <p className="mb-1">
                                Estas tarifas serán comunicadas antes de confirmarse cada operación.
                                Nos reservamos el derecho a modificarlas previo aviso.
                            </p>
                        </li>

                        <li className="mb-3">
                            <h2 className="h5 m-0">Sanciones y responsabilidades</h2>
                            <p className="mb-1">
                                El incumplimiento de estos Términos y Condiciones puede derivar en advertencias, suspensión o eliminación de la cuenta.
                                Las Personas Usuarias mantendrán indemne a Por Turnos frente a cualquier conflicto legal derivado de sus operaciones
                                privadas dentro del sitio.
                            </p>
                        </li>

                        <li className="mb-3">
                            <h2 className="h5 m-0">Legislación aplicable</h2>
                            <p className="mb-1">
                                Estos Términos se rigen por la ley chilena. Toda controversia será resuelta por los tribunales ordinarios de Santiago,
                                salvo disposiciones legales especiales.
                            </p>
                        </li>
                    </ol>

                    <p className="mt-3 mb-0">
                        Para consultas o solicitudes, contáctanos en <a href="mailto:contacto@porturnos.cl">contacto@porturnos.cl</a>.
                    </p>
                </article>
            </div>
        </section>
    )
}
