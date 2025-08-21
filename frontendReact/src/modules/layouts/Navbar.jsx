import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
      // Barra de Bootstrap con colapso + clases personalizadas
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">

          {/* Botón hamburguesa (mobile) */}
          <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#pt-subnav"
              aria-controls="pt-subnav"
              aria-expanded="false"
              aria-label="Alternar navegación"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Contenido colapsable */}
          <div className="collapse navbar-collapse" id="pt-subnav">
            {/* Grupo izquierdo */}
            <ul className="navbar-nav gap-2 pt-subnav">
              <li className="nav-item">
                <a href="#" className="pt-navlink nav-link px-2">Categorías</a>
              </li>
              <li className="nav-item">
                <a href="#" className="pt-navlink nav-link px-2">Ofertas</a>
              </li>
              <li className="nav-item">
                <a href="#" className="pt-navlink nav-link px-2">Vender</a>
              </li>
              <li className="nav-item">
                <a href="#" className="pt-navlink nav-link px-2">Ayuda</a>
              </li>
            </ul>

            {/* Separador flexible */}
            <div className="flex-grow-1"></div>

            {/* Grupo derecho */}
            <ul className="navbar-nav gap-2 pt-subnav">
              <li className="nav-item">
                <a href="#" className="pt-navlink nav-link px-2">Ver cuenta</a>
              </li>
              <li className="nav-item">
                {/* SPA: sólo Blog usa NavLink porque ya existe esa ruta */}
                <NavLink to="/blog" className="pt-navlink nav-link px-2">Blog</NavLink>
              </li>
              <li className="nav-item">
                <a href="#" className="pt-navlink nav-link px-2">Mis compras</a>
              </li>
              <li className="nav-item">
                <a href="#" className="pt-navlink nav-link px-2" aria-label="Carrito">
                  <i className="bi bi-cart3"></i>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
  )
}
