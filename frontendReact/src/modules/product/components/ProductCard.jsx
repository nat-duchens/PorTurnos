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
    <div className="card h-100 product-card border-0 shadow-sm">
      {/* Imagen del producto con badges */}
      <div className="position-relative">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.images[0]} 
            className="card-img-top" 
            alt={product.title} 
            style={{ height: '200px', objectFit: 'cover' }} 
          />
        </Link>
        
        {/* Badge de estado */}
        <span className={`position-absolute top-0 start-0 badge bg-${conditionBadge.color} m-2`}>
          {conditionBadge.text}
        </span>
        
        {/* Badge de descuento si existe */}
        {discountPercentage > 0 && (
          <span className="position-absolute top-0 end-0 badge bg-danger m-2">
            -{discountPercentage}%
          </span>
        )}
        
        {/* Badge de completitud */}
        <span className={`position-absolute bottom-0 start-0 badge ${product.completeness === 'completo' ? 'bg-success' : 'bg-warning'} m-2`}>
          {product.completeness === 'completo' ? 'Completo' : 'Falta componentes'}
        </span>
      </div>
      
      {/* Cuerpo de la tarjeta */}
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-1">
          <span className="badge bg-secondary">{product.category}</span>
          <div className="d-flex">
            {renderRatingStars(product.rating)}
            <span className="ms-1 small text-muted">({product.reviewCount})</span>
          </div>
        </div>
        
        <h5 className="card-title mb-1">
          <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
            {product.title}
          </Link>
        </h5>
        
        <p className="card-text small text-truncate mb-2">{product.description}</p>
        
        <div className="mt-auto">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <span className="h5 text-primary mb-0">${product.price.toLocaleString('es-CL')} CLP</span>
              {product.originalPrice && (
                <span className="text-muted text-decoration-line-through ms-2 small">
                  ${product.originalPrice.toLocaleString('es-CL')} CLP
                </span>
              )}
            </div>
            
            <div className="d-flex align-items-center">
              <img 
                src={product.sellerAvatar} 
                alt={product.sellerName}
                className="rounded-circle me-1"
                width="20"
                height="20"
              />
              <small className="text-muted">{product.sellerName}</small>
            </div>
          </div>
          
          <div className="d-flex mt-3 gap-2">
            <Link to={`/product/${product.id}`} className="btn btn-sm btn-outline-primary flex-grow-1">
              Ver detalles
            </Link>
            <button className="btn btn-sm btn-primary">
              <i className="bi bi-cart-plus"></i>
            </button>
            <button className="btn btn-sm btn-outline-danger">
              <i className="bi bi-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}