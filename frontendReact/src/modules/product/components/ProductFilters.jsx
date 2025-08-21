import { useState } from 'react';
import { 
  conditionOptions, 
  categoryOptions, 
  completenessOptions, 
  sortOptions,
  defaultFilters,
  priceRangeConfig
} from '../utils/dummyData';

export default function ProductFilters({ onFilterChange }) {
  // Estados para los diferentes filtros
  const [priceRange, setPriceRange] = useState(defaultFilters.priceRange);
  const [condition, setCondition] = useState(defaultFilters.condition);
  const [categories, setCategories] = useState(defaultFilters.categories);
  const [completeness, setCompleteness] = useState('all'); // Por defecto 'all' para el select
  const [sortBy, setSortBy] = useState(defaultFilters.sortBy);

  // Manejadores de cambios en los filtros
  const handlePriceChange = (e, type) => {
    const value = parseInt(e.target.value) || 0;
    setPriceRange(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const handleConditionChange = (conditionId) => {
    setCondition(prev => {
      if (prev.includes(conditionId)) {
        return prev.filter(id => id !== conditionId);
      } else {
        return [...prev, conditionId];
      }
    });
  };

  const handleCategoryChange = (categoryId) => {
    setCategories(prev => {
      if (prev.includes(categoryId)) {
        return prev.filter(id => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };

  const handleCompletenessChange = (e) => {
    setCompleteness(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Aplicar filtros
  const applyFilters = () => {
    const filters = {
      priceRange,
      condition,
      categories,
      completeness: completeness === 'all' ? '' : completeness,
      sortBy
    };
    onFilterChange(filters);
  };

  // Resetear filtros
  const resetFilters = () => {
    setPriceRange(defaultFilters.priceRange);
    setCondition(defaultFilters.condition);
    setCategories(defaultFilters.categories);
    setCompleteness('all');
    setSortBy(defaultFilters.sortBy);
    
    onFilterChange({
      ...defaultFilters,
      completeness: '' // Para mantener la lógica original
    });
  };

  return (
    <div className="product-filters bg-light p-4 rounded-3 shadow-sm mb-4">
      <h5 className="mb-3 border-bottom pb-2">Filtros</h5>
      
      {/* Filtro de precio */}
      <div className="mb-4">
        <h6 className="mb-3">Rango de precio</h6>
        <div className="d-flex align-items-center gap-2">
          <div className="input-group input-group-sm">
            <span className="input-group-text">€</span>
            <input 
              type="number" 
              className="form-control" 
              placeholder="Min" 
              value={priceRange.min}
              onChange={(e) => handlePriceChange(e, 'min')}
              min={priceRangeConfig.min}
            />
          </div>
          <span>-</span>
          <div className="input-group input-group-sm">
            <span className="input-group-text">€</span>
            <input 
              type="number" 
              className="form-control" 
              placeholder="Max" 
              value={priceRange.max}
              onChange={(e) => handlePriceChange(e, 'max')}
              min={priceRange.min}
            />
          </div>
        </div>
        <input 
          type="range" 
          className="form-range mt-2" 
          min={priceRangeConfig.min} 
          max={priceRangeConfig.max} 
          value={priceRange.max}
          onChange={(e) => handlePriceChange(e, 'max')}
        />
      </div>
      
      {/* Filtro de estado */}
      <div className="mb-4">
        <h6 className="mb-2">Estado</h6>
        {conditionOptions.map(option => (
          <div className="form-check" key={option.id}>
            <input 
              className="form-check-input" 
              type="checkbox" 
              id={`condition-${option.id}`}
              checked={condition.includes(option.id)}
              onChange={() => handleConditionChange(option.id)}
            />
            <label className="form-check-label" htmlFor={`condition-${option.id}`}>
              {option.label}
            </label>
          </div>
        ))}
      </div>
      
      {/* Filtro de categoría */}
      <div className="mb-4">
        <h6 className="mb-2">Categoría</h6>
        <div className="row">
          {categoryOptions.map(option => (
            <div className="col-6" key={option.id}>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id={`category-${option.id}`}
                  checked={categories.includes(option.id)}
                  onChange={() => handleCategoryChange(option.id)}
                />
                <label className="form-check-label" htmlFor={`category-${option.id}`}>
                  {option.label}
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Filtro de completitud */}
      <div className="mb-4">
        <h6 className="mb-2">Completitud</h6>
        <select 
          className="form-select form-select-sm" 
          value={completeness}
          onChange={handleCompletenessChange}
        >
          {completenessOptions.map(option => (
            <option key={option.id} value={option.id}>{option.label}</option>
          ))}
        </select>
      </div>
      
      {/* Ordenar por */}
      <div className="mb-4">
        <h6 className="mb-2">Ordenar por</h6>
        <select 
          className="form-select form-select-sm" 
          value={sortBy}
          onChange={handleSortChange}
        >
          {sortOptions.map(option => (
            <option key={option.id} value={option.id}>{option.label}</option>
          ))}
        </select>
      </div>
      
      {/* Botones de acción */}
      <div className="d-grid gap-2">
        <button 
          className="btn btn-primary" 
          onClick={applyFilters}
        >
          Aplicar filtros
        </button>
        <button 
          className="btn btn-outline-secondary" 
          onClick={resetFilters}
        >
          Resetear filtros
        </button>
      </div>
    </div>
  );
}