import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  searchConditions,
  searchCategories,
  searchCompleteness,
  searchSortOptions,
  defaultSearchParams,
  currencySymbol
} from '../utils/dummyData'

export default function AdvancedSearch() {
    const navigate = useNavigate()
    const [isExpanded, setIsExpanded] = useState(false)
    const [searchParams, setSearchParams] = useState(defaultSearchParams)

    // Manejadores de eventos
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setSearchParams(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleCheckboxChange = (e, group) => {
        const { value, checked } = e.target
        setSearchParams(prev => {
            if (checked) {
                return {
                    ...prev,
                    [group]: [...prev[group], value]
                }
            } else {
                return {
                    ...prev,
                    [group]: prev[group].filter(item => item !== value)
                }
            }
        })
    }

    const handleRatingChange = (rating) => {
        setSearchParams(prev => ({
            ...prev,
            sellerRating: rating
        }))
    }

    const handleSearch = (e) => {
        e.preventDefault()
        // Construir query string para la búsqueda
        const queryParams = new URLSearchParams()
        
        // Añadir parámetros no vacíos
        Object.entries(searchParams).forEach(([key, value]) => {
            if (Array.isArray(value)) {
                if (value.length > 0) {
                    queryParams.append(key, value.join(','))
                }
            } else if (value !== '' && value !== 0) {
                queryParams.append(key, value)
            }
        })
        
        // Navegar a la página de resultados con los parámetros
        navigate(`/marketplace?${queryParams.toString()}`)
    }

    const handleReset = () => {
        setSearchParams(defaultSearchParams)
    }

    return (
        <div className="advanced-search mb-4">
            <div className="card">
                <div className="card-header bg-white py-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Búsqueda de Juegos</h5>
                        <button 
                            className="btn btn-link text-decoration-none p-0"
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            {isExpanded ? 'Búsqueda Simple' : 'Búsqueda Avanzada'}
                            <i className={`bi bi-chevron-${isExpanded ? 'up' : 'down'} ms-1`}></i>
                        </button>
                    </div>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSearch}>
                        <div className="row g-3 align-items-end">
                            <div className="col-md-8">
                                <div className="input-group">
                                    <span className="input-group-text bg-white">
                                        <i className="bi bi-search"></i>
                                    </span>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Buscar juegos de mesa..." 
                                        name="query"
                                        value={searchParams.query}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <button type="submit" className="btn btn-primary w-100">
                                    <i className="bi bi-search me-2"></i>Buscar
                                </button>
                            </div>
                        </div>

                        {isExpanded && (
                            <div className="advanced-filters mt-4">
                                <div className="row g-3">
                                    <div className="col-md-6 col-lg-3">
                                        <label className="form-label">Rango de precio</label>
                                        <div className="d-flex gap-2">
                                            <div className="input-group">
                                                <span className="input-group-text">{currencySymbol}</span>
                                                <input 
                                                    type="number" 
                                                    className="form-control" 
                                                    placeholder="Min" 
                                                    name="minPrice"
                                                    value={searchParams.minPrice}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="input-group">
                                                <span className="input-group-text">{currencySymbol}</span>
                                                <input 
                                                    type="number" 
                                                    className="form-control" 
                                                    placeholder="Max" 
                                                    name="maxPrice"
                                                    value={searchParams.maxPrice}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-lg-3">
                                        <label className="form-label">Estado</label>
                                        <div className="d-flex flex-wrap gap-2">
                                            {searchConditions.map(condition => (
                                                <div key={condition.id} className="form-check">
                                                    <input 
                                                        className="form-check-input" 
                                                        type="checkbox" 
                                                        id={`condition-${condition.id}`} 
                                                        value={condition.id}
                                                        checked={searchParams.condition.includes(condition.id)}
                                                        onChange={(e) => handleCheckboxChange(e, 'condition')}
                                                    />
                                                    <label className="form-check-label" htmlFor={`condition-${condition.id}`}>
                                                        {condition.label}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-lg-3">
                                        <label className="form-label">Integridad</label>
                                        <div className="d-flex flex-wrap gap-2">
                                            {searchCompleteness.map(item => (
                                                <div key={item.id} className="form-check">
                                                    <input 
                                                        className="form-check-input" 
                                                        type="checkbox" 
                                                        id={`completeness-${item.id}`} 
                                                        value={item.id}
                                                        checked={searchParams.completeness.includes(item.id)}
                                                        onChange={(e) => handleCheckboxChange(e, 'completeness')}
                                                    />
                                                    <label className="form-check-label" htmlFor={`completeness-${item.id}`}>
                                                        {item.label}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-lg-3">
                                        <label className="form-label">Ubicación</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Ciudad o provincia" 
                                            name="location"
                                            value={searchParams.location}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Categorías</label>
                                        <div className="d-flex flex-wrap gap-2">
                                            {searchCategories.map(category => (
                                                <div key={category.id} className="form-check">
                                                    <input 
                                                        className="form-check-input" 
                                                        type="checkbox" 
                                                        id={`category-${category.id}`} 
                                                        value={category.id}
                                                        checked={searchParams.category.includes(category.id)}
                                                        onChange={(e) => handleCheckboxChange(e, 'category')}
                                                    />
                                                    <label className="form-check-label" htmlFor={`category-${category.id}`}>
                                                        {category.label}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Valoración mínima del vendedor</label>
                                        <div className="rating-selector d-flex align-items-center gap-2">
                                            {[1, 2, 3, 4, 5].map(star => (
                                                <button 
                                                    key={star}
                                                    type="button"
                                                    className="btn btn-link p-0 text-warning"
                                                    onClick={() => handleRatingChange(star)}
                                                >
                                                    <i className={`bi bi-star${searchParams.sellerRating >= star ? '-fill' : ''}`}></i>
                                                </button>
                                            ))}
                                            <span className="ms-2">{searchParams.sellerRating > 0 ? `${searchParams.sellerRating} o más` : 'Cualquiera'}</span>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Ordenar por</label>
                                        <select 
                                            className="form-select" 
                                            name="sortBy"
                                            value={searchParams.sortBy}
                                            onChange={handleInputChange}
                                        >
                                            {searchSortOptions.map(option => (
                                                <option key={option.id} value={option.id}>{option.label}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="col-md-6 d-flex align-items-end">
                                        <button 
                                            type="button" 
                                            className="btn btn-outline-secondary"
                                            onClick={handleReset}
                                        >
                                            <i className="bi bi-x-circle me-2"></i>Limpiar filtros
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}