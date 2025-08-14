import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'

export default function Footer() {
  const [mostrarNovedades, setMostrarNovedades] = useState(false)

  // URLs proporcionadas
  const novedadesImgUrl =
      'https://preview.redd.it/i-wish-upon-you-chill-capybara-vibes-v0-rtkufy90782d1.png?auto=webp&s=1a6b4dec8cfc8bd129a6af01d1ff4f899e19f51f'
  const promoUrl = 'https://youtu.be/AH4Vx5zz7Go'

  const abrirNovedades = (e) => {
    e.preventDefault()
    setMostrarNovedades(true)
  }

  const cerrarNovedades = () => setMostrarNovedades(false)

  const abrirPromocion = (e) => {
    e.preventDefault()
    window.open(promoUrl, '_blank') // Abre en una nueva pestaña
  }

  return (
      <footer className="pt-footer mt-5" role="contentinfo">
        <div className="container py-3">
          <div className="row g-4 align-items-start">

            {/* Izquierda */}
            <div className="col-12 col-lg-4">
              <small className="d-block mb-2">© {new Date().getFullYear()} Por Turnos. Todos los derechos reservados.</small>
              <div className="d-flex gap-3 fs-5">
                <a className="pt-social" href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                <a className="pt-social" href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                <a className="pt-social" href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              </div>
            </div>

            {/* Derecha */}
            <div className="col-12 col-lg-8">
              <div className="footer-menus d-flex justify-content-center gap-5 flex-wrap text-center text-lg-start">

                <nav aria-labelledby="footer-menu">
                  <div id="footer-menu" className="fw-semibold mb-2">Menú Principal</div>
                  <ul className="list-unstyled small m-0">
                    <li>
                      {/* Novedades */}
                      <button
                          type="button"
                          className="pt-footlink btn btn-link p-0"
                          onClick={abrirNovedades}
                      >
                        Novedades
                      </button>
                    </li>
                    <li>
                      {/* Promociones */}
                      <button
                          type="button"
                          className="pt-footlink btn btn-link p-0"
                          onClick={abrirPromocion}
                      >
                        Promociones
                      </button>
                    </li>
                  </ul>
                </nav>

                <nav aria-labelledby="footer-shop">
                  <div id="footer-shop" className="fw-semibold mb-2">Sobre la Tienda</div>
                  <ul className="list-unstyled small m-0">
                    <li><NavLink className="pt-footlink" to="/nosotros">Nosotros</NavLink></li>
                    <li><NavLink className="pt-footlink" to="/contacto">Contacto</NavLink></li>
                    <li><NavLink className="pt-footlink" to="/envios">Envíos</NavLink></li>
                  </ul>
                </nav>

                <nav aria-labelledby="footer-policy">
                  <div id="footer-policy" className="fw-semibold mb-2">Políticas e Información</div>
                  <ul className="list-unstyled small m-0">
                    <li><NavLink className="pt-footlink" to="/terminos">Términos y Condiciones</NavLink></li>
                    <li><NavLink className="pt-footlink" to="/conducta">Conducta y Seguridad</NavLink></li>
                    <li><NavLink className="pt-footlink" to="/privacidad">Privacidad</NavLink></li>
                  </ul>
                </nav>

              </div>
            </div>
          </div>
        </div>

        {/* Modal Novedades */}
        {mostrarNovedades && (
            <div
                className="position-fixed top-0 start-0 w-100 h-100"
                style={{ background: 'rgba(0,0,0,0.6)', zIndex: 1050 }}
                onClick={cerrarNovedades}
                role="dialog"
                aria-modal="true"
                aria-label="Novedades"
            >
              <div
                  className="d-flex justify-content-center align-items-center w-100 h-100 p-3"
                  onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-white rounded-3 shadow p-2" style={{ maxWidth: 700, width: '100%' }}>
                  <div className="d-flex justify-content-end">
                    <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={cerrarNovedades}
                        aria-label="Cerrar"
                    >
                      ×
                    </button>
                  </div>
                  <img
                      src={novedadesImgUrl}
                      alt="Novedades"
                      className="img-fluid rounded-2"
                      style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            </div>
        )}
      </footer>
  )
}