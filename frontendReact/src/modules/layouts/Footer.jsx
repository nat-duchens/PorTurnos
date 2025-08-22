import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
      <footer className="pt-footer mt-2 " role="contentinfo">
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
                    <li><a className="pt-footlink" href="#">Novedades</a></li>
                    <li><a className="pt-footlink" href="#">Promociones</a></li>
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
      </footer>
  )
}

