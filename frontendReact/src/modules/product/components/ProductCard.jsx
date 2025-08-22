import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  // Función para mostrar el estado del juego con un color asociado
  const getConditionBadge = (condition) => {
    const badges = {
      'como-nuevo': { text: 'Como nuevo', color: 'success' },
      'buen-estado': { text: 'Buen estado', color: 'info' },
      'aceptable': { text: 'Aceptable', color: 'warning' },
      'con-defectos': { text: 'Con defectos', color: 'danger' }
    };
    
    return badges[condition] || { text: condition, color: 'secondary' };
  };
  
  // Función para renderizar las estrellas de valoración
  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<i key={i} className="bi bi-star-half text-warning"></i>);
      } else {
        stars.push(<i key={i} className="bi bi-star text-warning"></i>);
      }
    }
    
    return stars;
  };
  
  // Calcular el porcentaje de descuento
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;
  
  const conditionBadge = getConditionBadge(product.condition);
  
  return (
    <div className="card product-card border shadow-sm h-100">
      {/* Imagen del producto con badges */}
      <div className="card-img-container position-relative">
        <Link to={`/marketplace/product/${product.id}`}>
          <img 
            src={product.images[0]} 
            className="card-img-top" 
            alt={product.title} 
          />
        </Link>
        
        {/* Badge de estado */}
        <div className="condition-badge">
          <span className={`badge bg-${conditionBadge.color}`}>
            {conditionBadge.text}
          </span>
        </div>
        
        {/* Badge de descuento si existe */}
        {discountPercentage > 0 && (
          <div className="discount-badge">
            <span className="badge bg-amarillo text-black">
              -{discountPercentage}%
            </span>
          </div>
        )}
        
        {/* Envío gratis - estilo Mercado Libre */}
        <div className="position-absolute bottom-0 start-0 m-2">
          <span className="badge bg-amarillo text-black">
            <i className="bi bi-truck me-1"></i>
            Envío gratis
          </span>
        </div>
      </div>
      
      {/* Cuerpo de la tarjeta */}
      <div className="card-body d-flex flex-column">
        {/* Categoría como texto pequeño */}
        <small className="text-muted text-uppercase mb-1">{product.category}</small>
        
        {/* Título del producto */}
        <h5 className="card-title mb-1">
          <Link to={`/marketplace/product/${product.id}`} className="text-decoration-none text-dark product-title">
            {product.title}
          </Link>
        </h5>
        
        {/* Precio con descuento */}
        <div className="mb-1">
          <span className="h5 text-black mb-0">${product.price.toLocaleString('es-CL')}</span>
          {product.originalPrice && (
            <>
              <span className="text-muted text-decoration-line-through ms-2 small">
                ${product.originalPrice.toLocaleString('es-CL')}
              </span>
              <span className="ms-1 small text-success">
                {discountPercentage}% OFF
              </span>
            </>
          )}
        </div>
        
        {/* Completitud como texto */}
        <div className="mb-2">
          <small className={`${product.completeness === 'completo' ? 'text-success' : 'text-warning'}`}>
            <i className={`bi ${product.completeness === 'completo' ? 'bi-check-circle' : 'bi-exclamation-triangle'} me-1`}></i>
            {product.completeness === 'completo' ? 'Juego completo' : 'Faltan componentes'}
          </small>
        </div>
        
        {/* Descripción corta */}
        <p className="card-text small text-muted mb-2 text-truncate">{product.description}</p>
        
        {/* Valoración */}
        <div className="d-flex align-items-center mb-3">
          <div className="me-2">
            {renderRatingStars(product.rating)}
          </div>
          <span className="small text-muted">({product.reviewCount})</span>
        </div>
        
        {/* Vendedor */}
        <div className="d-flex align-items-center mb-3">
          <img 
            src={product.sellerAvatar} 
            alt={product.sellerName}
            className="rounded-circle me-2"
            width="24"
            height="24"
          />
          <small>Vendido por <span className="text-primary">{product.sellerName}</span></small>
        </div>
        
        {/* Botones de acción */}
        <div className="d-flex mt-auto gap-2">
          <Link to={`/marketplace/product/${product.id}`} className="btn btn-sm btn-warning-white flex-grow-1">
            Ver detalles
          </Link>
          <Link to="/cart" className="btn btn-sm btn-outline-dark text-white">
            <i className="bi bi-cart-plus"></i>
          </Link>
          <button className="btn btn-sm btn-outline-danger">
            <i className="bi bi-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
}