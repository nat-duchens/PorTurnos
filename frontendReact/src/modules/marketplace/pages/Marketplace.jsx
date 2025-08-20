import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';

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
      
      {/* Estadísticas */}
      <div className="bg-light py-3 border-bottom">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="d-flex align-items-center justify-content-center">
                <i className="bi bi-controller fs-4 text-primary me-2"></i>
                <span className="fw-bold">500+ Juegos disponibles</span>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="d-flex align-items-center justify-content-center">
                <i className="bi bi-people fs-4 text-primary me-2"></i>
                <span className="fw-bold">300+ Vendedores activos</span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-center justify-content-center">
                <i className="bi bi-shield-check fs-4 text-primary me-2"></i>
                <span className="fw-bold">Garantía de Marketplace</span>
              </div>
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