import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const location = useLocation();

  // Obtener los parámetros de búsqueda y categoría de la URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const search = searchParams.get('search');
    const category = searchParams.get('category');
    
    if (search) {
      setSearchQuery(search);
    } else {
      setSearchQuery(''); // Limpiar búsqueda si no hay parámetro
    }
    
    if (category) {
      setCategoryFilter(category);
    } else {
      setCategoryFilter(''); // Limpiar categoría si no hay parámetro
    }
  }, [location.search]);
  
  return (
    <div className="marketplace-page">
      
      {/* Estadísticas */}
      <div className="bg-light py-4 border-bottom">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="d-flex align-items-center justify-content-center">
                <i className="bi bi-controller fs-4 text-black me-2"></i>
                <span className="fw-bold">500+ Juegos disponibles</span>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="d-flex align-items-center justify-content-center">
                <i className="bi bi-people fs-4 text-black me-2"></i>
                <span className="fw-bold">300+ Vendedores activos</span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-center justify-content-center">
                <i className="bi bi-shield-check fs-4 text-black me-2"></i>
                <span className="fw-bold">Garantía de Marketplace</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mostrar indicador de filtro activo */}
      {(searchQuery || categoryFilter) && (
        <div className="container py-3">
          <div className="alert alert-info d-flex align-items-center justify-content-between">
            <div>
              {searchQuery && (
                <span className="me-3">
                  <i className="bi bi-search me-1"></i>
                  Buscando: <strong>{searchQuery}</strong>
                </span>
              )}
              {categoryFilter && (
                <span>
                  <i className="bi bi-tag me-1"></i>
                  Categoría: <strong>{categoryFilter}</strong>
                </span>
              )}
            </div>
            <Link to="/marketplace" className="btn btn-sm btn-outline-secondary">
              <i className="bi bi-x-circle me-1"></i>
              Limpiar filtros
            </Link>
          </div>
        </div>
      )}
      
      {/* Contenido principal - Grid de productos */}
      <ProductGrid 
        key={`${searchQuery}-${categoryFilter}`} // Forzar re-renderizado cuando cambian los filtros
        searchQuery={searchQuery} 
        categoryFilter={categoryFilter}
      />
      
      {/* Sección de información */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm bg-negro border-4">
                <div className="card-body text-center">
                  <i className="bi bi-shield-check text-warning fs-1 mb-3"></i>
                  <h4 className='text-white'>Compra Segura</h4>
                  <p className="text-white">
                    Todos los vendedores están verificados y las transacciones están protegidas por
                    nuestra garantía de devolución.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm bg-negro border-4">
                <div className="card-body text-center">
                  <i className="bi bi-cash-coin text-warning fs-1 mb-3"></i>
                  <h4 className='text-white'>Precios Increíbles</h4>
                  <p className="text-white">
                    Encuentra juegos de mesa usados con descuentos de hasta el 70% respecto a su
                    precio original.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm bg-negro border-4">
                <div className="card-body text-center">
                  <i className="bi bi-chat-dots text-warning fs-1 mb-3"></i>
                  <h4 className='text-white'>Comunidad Activa</h4>
                  <p className="text-white">
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
      <section className="py-3 text-white">
        <div className="container py-5 text-center rounded-4 bg-negro">
          <h2 className="mb-4">¿Tienes juegos que ya no usas?</h2>
          <p className="lead mb-4">
            Véndelos en nuestro marketplace y gana dinero mientras das una segunda vida a tus juegos.
          </p>
          <a href="/marketplace/publish" className="btn btn-warning btn-lg">
            Publicar un juego
          </a>
        </div>
      </section>
    </div>
  );
}