import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ProductGrid from '../components/marketplace/ProductGrid';

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  
  // Obtener el parámetro de búsqueda de la URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const search = searchParams.get('search');
    if (search) {
      setSearchQuery(search);
    }
  }, [location.search]);
  
  return (
    <div className="marketplace-page">
      {/* Banner delgado del marketplace */}
      <div className="bg-primary text-white py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-2">Marketplace de Juegos Usados</h2>
              <p className="mb-0">
                Encuentra juegos de mesa de segunda mano a precios increíbles
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link to="/marketplace/publish" className="btn btn-light">
                <i className="bi bi-plus-circle me-2"></i>Vender juego
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Banner promocional */}
      <div className="bg-warning py-2">
        <div className="container">
          <div className="d-flex align-items-center justify-content-center">
            <i className="bi bi-megaphone me-2"></i>
            <p className="mb-0 fw-bold">¡Oferta especial de lanzamiento! Publica tu primer juego sin comisiones hasta fin de mes.</p>
          </div>
        </div>
      </div>
      
      {/* Categorías destacadas - Estilo Mercado Libre */}
      <div className="bg-white py-4 border-bottom">
        <div className="container">
          <h5 className="mb-3">Categorías destacadas</h5>
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3 text-center">
            <div className="col">
              <Link to="/marketplace?category=estrategia" className="text-decoration-none">
                <div className="card h-100 border-0 shadow-sm hover-scale">
                  <div className="card-body py-3">
                    <i className="bi bi-puzzle fs-1 text-primary mb-2"></i>
                    <h6 className="card-title mb-0">Estrategia</h6>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link to="/marketplace?category=familiar" className="text-decoration-none">
                <div className="card h-100 border-0 shadow-sm hover-scale">
                  <div className="card-body py-3">
                    <i className="bi bi-people fs-1 text-success mb-2"></i>
                    <h6 className="card-title mb-0">Familiar</h6>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link to="/marketplace?category=cartas" className="text-decoration-none">
                <div className="card h-100 border-0 shadow-sm hover-scale">
                  <div className="card-body py-3">
                    <i className="bi bi-suit-spade fs-1 text-danger mb-2"></i>
                    <h6 className="card-title mb-0">Cartas</h6>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link to="/marketplace?category=rol" className="text-decoration-none">
                <div className="card h-100 border-0 shadow-sm hover-scale">
                  <div className="card-body py-3">
                    <i className="bi bi-dice-6 fs-1 text-info mb-2"></i>
                    <h6 className="card-title mb-0">Rol</h6>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link to="/marketplace?category=eurogames" className="text-decoration-none">
                <div className="card h-100 border-0 shadow-sm hover-scale">
                  <div className="card-body py-3">
                    <i className="bi bi-building fs-1 text-warning mb-2"></i>
                    <h6 className="card-title mb-0">Eurogames</h6>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link to="/marketplace/categories" className="text-decoration-none">
                <div className="card h-100 border-0 shadow-sm hover-scale">
                  <div className="card-body py-3">
                    <i className="bi bi-grid-3x3-gap fs-1 text-secondary mb-2"></i>
                    <h6 className="card-title mb-0">Ver todas</h6>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contenido principal - Grid de productos */}
      <ProductGrid searchQuery={searchQuery} />
      
      {/* Sección de información */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="bi bi-shield-check text-primary fs-1 mb-3"></i>
                  <h4>Compra Segura</h4>
                  <p className="text-muted">
                    Todos los vendedores están verificados y las transacciones están protegidas por
                    nuestra garantía de devolución.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="bi bi-cash-coin text-primary fs-1 mb-3"></i>
                  <h4>Precios Increíbles</h4>
                  <p className="text-muted">
                    Encuentra juegos de mesa usados con descuentos de hasta el 70% respecto a su
                    precio original.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="bi bi-chat-dots text-primary fs-1 mb-3"></i>
                  <h4>Comunidad Activa</h4>
                  <p className="text-muted">
                    Conecta con otros jugadores, intercambia opiniones y encuentra los mejores
                    juegos para tu colección.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="mb-4">¿Tienes juegos que ya no usas?</h2>
          <p className="lead mb-4">
            Véndelos en nuestro marketplace y gana dinero mientras das una segunda vida a tus juegos.
          </p>
          <a href="/marketplace/publish" className="btn btn-light btn-lg">
            Publicar un juego
          </a>
        </div>
      </section>
    </div>
  );
}