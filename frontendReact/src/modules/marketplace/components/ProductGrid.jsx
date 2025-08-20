import { useState, useEffect } from 'react';
import ProductCard from '../../product/components/ProductCard';
import ProductFilters from '../../product/components/ProductFilters';
import { sampleProducts, defaultFilters, loadingDelay } from '../utils/dummyData';

export default function ProductGrid({ searchQuery = '' }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilters, setActiveFilters] = useState({
    priceRange: { min: 0, max: 200 },
    condition: [],
    categories: [],
    completeness: '',
    sortBy: 'newest'
  });

  // Simular carga de datos
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Aquí iría la llamada a la API real
        // const response = await fetch('/api/products');
        // const data = await response.json();
        
        // Simulamos un delay para la carga
        await new Promise(resolve => setTimeout(resolve, 800));
        
        setProducts(sampleProducts);
        setFilteredProducts(sampleProducts);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los productos');
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);

  // Aplicar filtros cuando cambien
  useEffect(() => {
    if (products.length === 0) return;
    
    let result = [...products];
    
    // Filtrar por texto de búsqueda
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(product => 
        product.title.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
      );
    }
    
    // Filtrar por rango de precio
    result = result.filter(product => 
      product.price >= activeFilters.priceRange.min && 
      product.price <= activeFilters.priceRange.max
    );
    
    // Filtrar por condición
    if (activeFilters.condition.length > 0) {
      result = result.filter(product => 
        activeFilters.condition.includes(product.condition)
      );
    }
    
    // Filtrar por categoría
    if (activeFilters.categories.length > 0) {
      result = result.filter(product => 
        activeFilters.categories.includes(product.category)
      );
    }
    
    // Filtrar por completitud
    if (activeFilters.completeness) {
      result = result.filter(product => 
        product.completeness === activeFilters.completeness
      );
    }
    
    // Ordenar resultados
    switch (activeFilters.sortBy) {
      case 'newest':
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'popularity':
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      default:
        break;
    }
    
    setFilteredProducts(result);
  }, [products, activeFilters, searchQuery]);

  // Manejar cambios en los filtros
  const handleFilterChange = (newFilters) => {
    setActiveFilters(newFilters);
  };

  // Estado para controlar la vista (grid o lista)
  const [viewMode, setViewMode] = useState('grid');

  return (
    <div className="container py-4">
      <div className="row">
        {/* Columna de filtros */}
        <div className="col-lg-3 mb-4 mb-lg-0">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white py-3">
              <h5 className="mb-0">Filtros</h5>
            </div>
            <div className="card-body">
              <ProductFilters onFilterChange={handleFilterChange} />
            </div>
          </div>
        </div>
        
        {/* Columna de productos */}
        <div className="col-lg-9">
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
              <p className="mt-2">Cargando juegos...</p>
            </div>
          ) : error ? (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-5">
              <i className="bi bi-search display-1 text-muted"></i>
              <h4 className="mt-3">No se encontraron juegos</h4>
              <p className="text-muted">Prueba a cambiar los filtros de búsqueda</p>
            </div>
          ) : (
            <>
              {/* Barra de resultados y opciones */}
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body py-2">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p className="mb-0"><strong>{filteredProducts.length}</strong> resultados</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="me-2 d-none d-md-inline">Ordenar por:</span>
                      <select 
                        className="form-select form-select-sm me-3" 
                        value={activeFilters.sortBy}
                        onChange={(e) => handleFilterChange({...activeFilters, sortBy: e.target.value})}
                      >
                        <option value="newest">Más recientes</option>
                        <option value="price-asc">Menor precio</option>
                        <option value="price-desc">Mayor precio</option>
                        <option value="rating">Mejor valorados</option>
                        <option value="popularity">Más populares</option>
                      </select>
                      <div className="btn-group" role="group">
                        <button 
                          type="button" 
                          className={`btn btn-sm btn-outline-primary ${viewMode === 'grid' ? 'active' : ''}`}
                          onClick={() => setViewMode('grid')}
                        >
                          <i className="bi bi-grid-3x3-gap"></i>
                        </button>
                        <button 
                          type="button" 
                          className={`btn btn-sm btn-outline-primary ${viewMode === 'list' ? 'active' : ''}`}
                          onClick={() => setViewMode('list')}
                        >
                          <i className="bi bi-list"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Grid de productos */}
              {viewMode === 'grid' ? (
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                  {filteredProducts.map(product => (
                    <div className="col" key={product.id}>
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="list-view">
                  {filteredProducts.map(product => (
                    <div className="mb-3" key={product.id}>
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}