import React from 'react'
import angeloImg from '../../assets/img/AngeloGrigoletti.jpg'
import natalieImg from '../../assets/img/NatalieDuchens.jpg'
import robinsonImg from '../../assets/img/RobinsonRojas.jpg'
import kiaraImg from '../../assets/img/KiaraIza.jpg'

export default function Nosotros() {
    return (
        <section className="py-4">
            <div className="container">
                <article className="blog-juegos p-3 rounded-3">
                    <header className="mb-3 text-center">
                        <h1 className="gradient-title m-0">Nosotros</h1>
                        <p className="text-muted m-0">Conoce el equipo y lo que hacemos en Por Turnos</p>
                    </header>

                    {/* Qué es Por Turnos */}
                    <section className="mb-4">
                        <h2 className="h5">Qué es Por Turnos</h2>
                        <p>
                            Por Turnos es una plataforma chilena C2C enfocada en la compra, venta y arriendo
                            de juegos de mesa nuevos y usados. Conectamos personas y facilitamos las transacciones con herramientas de
                            pago, envío y garantías.
                        </p>
                        <ul>
                            <li>Intermediamos de forma segura entre quienes publican y quienes compran o arriendan.</li>
                            <li>Cada usuario es responsable de su cuenta y publicaciones.</li>
                            <li>Operamos bajo la legislación chilena vigente y promovemos prácticas justas.</li>
                        </ul>
                    </section>

                    {/* Compromisos */}
                    <section className="mb-4">
                        <h2 className="h5">Nuestros compromisos</h2>
                        <ul>
                            <li><strong>Calidad y respaldo:</strong> garantía para nuevos y revisión informada para usados.</li>
                            <li><strong>Privacidad:</strong> protegemos tus datos según nuestra política de privacidad.</li>
                            <li><strong>Confianza:</strong> mediamos en disputas y aplicamos medidas de seguridad.</li>
                        </ul>
                    </section>

                    {/* Equipo */}
                    <section className="py-4">
                        <h3 className="mb-3 text-center">El equipo</h3>
                        <div className="equipo-container">
                            <div className="equipo-item">
                                <img src={angeloImg} alt="Angelo Grigoletti" className="equipo-img" />
                                <div className="equipo-card azul"><strong>Angelo Grigoletti</strong></div>
                            </div>
                            <div className="equipo-item">
                                <img src={natalieImg} alt="Natalie Duchens" className="equipo-img" />
                                <div className="equipo-card rosa"><strong>Natalie Duchens</strong></div>
                            </div>
                            <div className="equipo-item">
                                <img src={robinsonImg} alt="Robinson Rojas" className="equipo-img" />
                                <div className="equipo-card verde"><strong>Robinson Rojas</strong></div>
                            </div>
                            <div className="equipo-item">
                                <img src={kiaraImg} alt="Kiara Iza" className="equipo-img" />
                                <div className="equipo-card amarillo"><strong>Kiara Iza</strong></div>
                            </div>
                        </div>
                    </section>

                    {/* Contacto */}
                    <section>
                        <h2 className="h5">Contacto</h2>
                        <p>
                            ¿Dudas o sugerencias? Escríbenos a{' '}
                            <a href="mailto:contacto@porturnos.cl">contacto@porturnos.cl</a>.
                        </p>
                    </section>

                    {/* Agradecimientos */}
                    <section>
                        <h2 className="h5">Agradecimientos</h2>
                        <ul>
                            <li>Gracias Guido por tu guía y paciencia.</li>
                            <li>Gracias Belén por tu apoyo constante.</li>
                            <li>Gracias Carmen Gloria por tus consejos y motivación.</li>
                            <li>Gracias Generation por esta gran oportunidad de aprendizaje.</li>
                        </ul>
                    </section>
                </article>
            </div>
        </section>
    )
}