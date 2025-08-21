import { useState, useEffect } from 'react';
import ProductCard from '../../product/components/ProductCard';
import ProductFilters from '../../product/components/ProductFilters';
import { sampleProducts, defaultFilters, loadingDelay } from '../utils/dummyData';

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilters, setActiveFilters] = useState(defaultFilters);

  // Simular carga de datos
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Aquí iría la llamada a la API real
        // const response = await fetch('/api/products');
        // const data = await response.json();
        
        // Simulamos un delay para la carga
        await new Promise(resolve => setTimeout(resolve, loadingDelay));
        
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
  }, [products, activeFilters]);

  // Manejar cambios en los filtros
  const handleFilterChange = (newFilters) => {
    setActiveFilters(newFilters);
  };

  return (
    <div className="container py-4">
      <div className="row">
        {/* Columna de filtros */}
        <div className="col-lg-3 mb-4 mb-lg-0">
          <ProductFilters onFilterChange={handleFilterChange} />
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
              <div className="d-flex justify-content-between align-items-center mb-4">
                <p className="mb-0">Mostrando {filteredProducts.length} juegos</p>
                <div className="d-flex align-items-center">
                  <span className="me-2">Vista:</span>
                  <div className="btn-group" role="group">
                    <button type="button" className="btn btn-outline-primary active">
                      <i className="bi bi-grid-3x3-gap"></i>
                    </button>
                    <button type="button" className="btn btn-outline-primary">
                      <i className="bi bi-list"></i>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {filteredProducts.map(product => (
                  <div className="col" key={product.id}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}