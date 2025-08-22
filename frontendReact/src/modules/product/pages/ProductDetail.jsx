import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import RatingSystem from '../../marketplace/components/RatingSystem';
import { 
  sampleProduct,
  generateRelatedProducts,
  conditionTranslations,
  completenessTranslations,
  conditionBadgeStyles,
  completenessBadgeStyles,
  productDetailSettings,
  sellerBadges,
  sectionIcons,
  defaultMessages
} from '../utils/dummyData';

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [message, setMessage] = useState('');
  
  // Simular carga de datos del producto
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        // Aquí iría la llamada a la API real
        // const response = await fetch(`/api/products/${productId}`);
        // const data = await response.json();
        
        // Simulamos un delay para la carga
        await new Promise(resolve => setTimeout(resolve, productDetailSettings.loadingDelay));
        
        setProduct(sampleProduct);
        setLoading(false);
      } catch (err) {
        setError(defaultMessages.error);
        setLoading(false);
      }
    };
    
    fetchProduct();
  }, [productId]);
  
  // Manejar envío de mensaje al vendedor
  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Aquí iría la lógica para enviar el mensaje
    alert(defaultMessages.messageSuccess);
    setMessage('');
    setShowContactForm(false);
  };
  
  // Calcular descuento
  const calculateDiscount = () => {
    if (!product.originalPrice) return null;
    const discount = ((product.originalPrice - product.price) / product.originalPrice) * 100;
    return Math.round(discount);
  };
  
  // Formatear fecha
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  // Traducir estado del producto
  const translateCondition = (condition) => {
    return conditionTranslations[condition] || condition;
  };
  
  // Traducir completitud
  const translateCompleteness = (completeness) => {
    const translations = {
      'completo': 'Completo',
      'falta-componentes': 'Faltan componentes',
      'componentes-reemplazados': 'Componentes reemplazados'
    };
    return completenessTranslations[completeness] || completeness;
  };

  // Obtener estilo de badge para condición
  const getConditionBadgeClass = (condition) => {
    return conditionBadgeStyles[condition] || 'bg-secondary';
  };

  // Obtener estilo de badge para completitud
  const getCompletenessBadgeClass = (completeness) => {
    return completenessBadgeStyles[completeness] || 'bg-secondary';
  };
  
  // Generar productos relacionados dinámicamente
  const relatedProductsList = generateRelatedProducts(4);
  
  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-3">{defaultMessages.loading}</p>
      </div>
    );
  }
  
  if (error || !product) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger">
          {error || defaultMessages.notFound}
        </div>
        <Link to="/marketplace" className="btn btn-primary">
          Volver al marketplace
        </Link>
      </div>
    );
  }
  
  return (
    <div className="product-detail-page py-4">
      <div className="container">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
            <li className="breadcrumb-item"><Link to="/marketplace">Marketplace</Link></li>
            <li className="breadcrumb-item active" aria-current="page">{product.title}</li>
          </ol>
        </nav>
        
        <div className="row">
          {/* Columna de imágenes */}
          <div className="col-lg-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-body p-0">
                <div className="main-image position-relative">
                  <img 
                    src={product.images[activeImage]} 
                    alt={`${product.title} - Imagen ${activeImage + 1}`} 
                    className="img-fluid w-100 rounded" 
                    style={{ height: productDetailSettings.imageHeight, objectFit: 'cover' }}
                  />
                  
                  {/* Badges */}
                  <div className="position-absolute top-0 start-0 p-3 d-flex flex-column gap-2">
                    <span className={`badge ${getConditionBadgeClass(product.condition)}`}>
                      {translateCondition(product.condition)}
                    </span>
                    
                    {calculateDiscount() && (
                      <span className="badge bg-negro">
                        {calculateDiscount()}% DESCUENTO
                      </span>
                    )}
                    
                    <span className={`badge ${getCompletenessBadgeClass(product.completeness)}`}>
                      {translateCompleteness(product.completeness)}
                    </span>
                  </div>
                </div>
                
                {/* Miniaturas */}
                <div className="thumbnails d-flex justify-content-center gap-2 mt-3 px-3 pb-3">
                  {product.images.map((image, index) => (
                    <div 
                      key={index} 
                      className={`thumbnail ${activeImage === index ? 'active' : ''}`}
                      onClick={() => setActiveImage(index)}
                      style={{ 
                        cursor: 'pointer', 
                        border: activeImage === index ? '2px solid #007bff' : '1px solid #dee2e6',
                        borderRadius: '4px',
                        padding: '2px',
                        width: productDetailSettings.thumbnailSize,
                        height: productDetailSettings.thumbnailSize
                      }}
                    >
                      <img 
                        src={image} 
                        alt={`Miniatura ${index + 1}`} 
                        className="img-fluid" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '2px' }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Columna de información */}
          <div className="col-lg-6">
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h1 className="h3 mb-2">{product.title}</h1>
                
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3">
                    <i className="bi bi-star-fill text-warning"></i>
                    <span className="ms-1">{product.rating}</span>
                    <span className="text-muted ms-1">({product.reviewCount} valoraciones)</span>
                  </div>
                  <div className="me-3">
                    <i className="bi bi-eye text-muted"></i>
                    <span className="ms-1">{product.views} visitas</span>
                  </div>
                  <div>
                    <i className="bi bi-heart text-danger"></i>
                    <span className="ms-1">{product.favorites} favoritos</span>
                  </div>
                </div>
                
                <div className="price-container mb-3">
                  <div className="d-flex align-items-center">
                    <h2 className="mb-0 me-2">${product.price.toLocaleString('es-CL')} CLP</h2>
                    {product.originalPrice && (
                      <span className="text-decoration-line-through text-muted">
                        ${product.originalPrice.toLocaleString('es-CL')} CLP
                      </span>
                    )}
                  </div>
                  {calculateDiscount() && (
                    <div className="text-verde">
                      Ahorras: ${(product.originalPrice - product.price).toLocaleString('es-CL')} CLP ({calculateDiscount()}%)
                    </div>
                  )}
                </div>
                
                <div className="mb-4">
                  <h5>Descripción</h5>
                  <p>{product.description}</p>
                </div>
                
                <div className="row mb-4">
                  <div className="col-md-6">
                    <h5>Detalles</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <i className={`bi ${sectionIcons.players} me-2 text-amarillo`}></i>
                        <strong>Jugadores:</strong> {product.details.players}
                      </li>
                      <li className="mb-2">
                        <i className={`bi ${sectionIcons.playTime} me-2 text-amarillo`}></i>
                        <strong>Duración:</strong> {product.details.playTime}
                      </li>
                      <li className="mb-2">
                        <i className={`bi ${sectionIcons.age} me-2 text-amarillo`}></i>
                        <strong>Edad:</strong> {product.details.age}
                      </li>
                      <li className="mb-2">
                        <i className={`bi ${sectionIcons.language} me-2 text-amarillo`}></i>
                        <strong>Idioma:</strong> {product.details.language}
                      </li>
                      <li className="mb-2">
                        <i className={`bi ${sectionIcons.publisher} me-2 text-amarillo`}></i>
                        <strong>Editorial:</strong> {product.details.publisher}
                      </li>
                      <li>
                        <i className={`bi ${sectionIcons.releaseYear} me-2 text-amarillo`}></i>
                        <strong>Año:</strong> {product.details.releaseYear}
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5>Envío</h5>
                    <ul className="list-unstyled">
                      {product.shipping.methods.includes('envio') && (
                        <li className="mb-2">
                          <i className={`bi ${sectionIcons.shipping} me-2 text-amarillo`}></i>
                          <strong>Envío:</strong> ${product.shipping.cost.toLocaleString('es-CL')} CLP
                        </li>
                      )}
                      {product.shipping.methods.includes('recogida') && (
                        <li className="mb-2">
                          <i className={`bi ${sectionIcons.pickup} me-2 text-amarillo`}></i>
                          <strong>Recogida en persona:</strong> {product.seller.location}
                        </li>
                      )}
                      <li>
                        <i className={`bi ${sectionIcons.delivery} me-2 text-amarillo`}></i>
                        <strong>Entrega estimada:</strong> {product.shipping.estimatedDelivery}
                      </li>
                    </ul>
                    
                    <h5 className="mt-3">Publicado</h5>
                    <p>
                      <i className={`bi ${sectionIcons.published} me-2 text-amarillo`}></i>
                      {formatDate(product.createdAt)}
                    </p>
                  </div>
                </div>
                
                <div className="d-grid gap-2">
                  <Link to="/cart" className="btn btn-warning btn-lg">
                    <i className="bi bi-cart-plus me-2"></i>
                    Comprar ahora
                  </Link>
                  <button 
                    className="btn btn-outline-dark text-white" 
                    onClick={() => setShowContactForm(!showContactForm)}
                  >
                    <i className="bi bi-chat-dots me-2"></i>
                    {defaultMessages.contactSeller}
                  </button>
                  <button className="btn btn-outline-danger">
                    <i className="bi bi-heart me-2"></i>
                    {defaultMessages.addToFavorites}
                  </button>
                </div>
                
                {/* Formulario de contacto */}
                {showContactForm && (
                  <div className="mt-4 p-3 border rounded">
                    <h5>Mensaje para el vendedor</h5>
                    <form onSubmit={handleSendMessage}>
                      <div className="mb-3">
                        <textarea 
                          className="form-control" 
                          rows="3"
                          placeholder={defaultMessages.messagePlaceholder}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        ></textarea>
                      </div>
                      <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary">
                          <i className="bi bi-send me-2"></i>
                          {defaultMessages.sendMessage}
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
            
            {/* Información del vendedor */}
            <div className="card shadow-sm mb-4">
              <div className="card-header bg-light">
                <h5 className="mb-0">Información del vendedor</h5>
              </div>
              <div className="card-body">
                <div className="d-flex">
                  <img 
                    src={product.seller.avatar} 
                    alt={product.seller.name} 
                    className="rounded-circle" 
                    width={productDetailSettings.sellerAvatarSize} 
                    height={productDetailSettings.sellerAvatarSize} 
                  />
                  <div className="ms-3">
                    <h5 className="mb-1">{product.seller.name}</h5>
                    <div className="d-flex align-items-center mb-2">
                      <div className="me-3">
                        <i className="bi bi-star-fill text-warning"></i>
                        <span className="ms-1">{product.seller.rating}</span>
                        <span className="text-muted ms-1">({product.seller.reviewCount} valoraciones)</span>
                      </div>
                      {sellerBadges.map((badge, index) => (
                        <span key={index} className={badge.class}>{badge.text}</span>
                      ))}
                    </div>
                    <p className="mb-0">
                      <i className={`bi ${sectionIcons.memberSince} me-2 text-muted`}></i>
                      Miembro desde {formatDate(product.seller.memberSince)}
                    </p>
                  </div>
                </div>
                
                <hr />
                
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-2">
                      <i className={`bi ${sectionIcons.location} me-2 text-amarillo`}></i>
                      <strong>Ubicación:</strong> {product.seller.location}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-2">
                      <i className={`bi ${sectionIcons.responseRate} me-2 text-amarillo`}></i>
                      <strong>Tasa de respuesta:</strong> {product.seller.responseRate}%
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div>
                      <i className={`bi ${sectionIcons.responseTime} me-2 text-amarillo`}></i>
                      <strong>Tiempo de respuesta:</strong> {product.seller.responseTime}
                    </div>
                  </div>
                </div>
                
                <div className="mt-3 text-center">
                  <Link to={`/seller/${product.seller.id}`} className="btn btn-outline-dark text-white">
                    <i className="bi bi-shop me-2"></i>
                    Ver perfil del vendedor
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Valoraciones */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-header bg-negro text-white">
                <h4 className="mb-0">Valoraciones y opiniones</h4>
              </div>
              <div className="card-body">
                <RatingSystem type="product" itemId={product.id} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Productos relacionados */}
        <div className="related-products mt-5">
          <h3 className="mb-4">Productos relacionados</h3>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {relatedProductsList.map(relatedProduct => (
              <div className="col" key={relatedProduct.id}>
                <div className="card h-100 shadow-sm">
                  <img 
                    src={relatedProduct.image} 
                    className="card-img-top" 
                    alt={relatedProduct.title} 
                    style={{ height: productDetailSettings.relatedProductImageHeight, objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{relatedProduct.title}</h5>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fw-bold">${relatedProduct.price.toLocaleString('es-CL')} CLP</span>
                      <div>
                        <i className="bi bi-star-fill text-warning"></i>
                        <span className="ms-1">{relatedProduct.rating.toFixed(1)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer bg-white">
                    <Link to="#" className="btn btn-outline-dark text-white w-100">Ver detalles</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}