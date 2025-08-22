import { useState } from 'react';
import { 
  sampleReviews, 
  ratingLabels, 
  ratingDistribution, 
  ratingSummary,
  loadingDelay 
} from '../utils/dummyData';

export default function RatingSystem({ type = 'product', itemId, initialRating = 0, readOnly = false }) {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Manejar el hover sobre las estrellas
  const handleMouseOver = (starIndex) => {
    if (readOnly) return;
    setHoverRating(starIndex);
  };
  
  // Manejar el click en las estrellas
  const handleClick = (starIndex) => {
    if (readOnly) return;
    setRating(starIndex);
  };
  
  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (rating === 0) return;
    
    setLoading(true);
    
    try {
      // Aquí iría la llamada a la API para enviar la valoración
      // const response = await fetch('/api/ratings', {
      //   method: 'POST',
      //   body: JSON.stringify({ type, itemId, rating, comment })
      // });
      
      // Simulamos un delay para la carga
      await new Promise(resolve => setTimeout(resolve, loadingDelay));
      
      setSubmitted(true);
      setLoading(false);
    } catch (error) {
      console.error('Error al enviar valoración:', error);
      setLoading(false);
    }
  };
  
  // Formatear fecha
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  return (
    <div className="rating-system">
      {/* Sección para dejar una valoración */}
      {!readOnly && !submitted && (
        <div className="card shadow-sm mb-4">
          <div className="card-header bg-amarillo">
            <h5 className="mb-0">
              {type === 'product' ? 'Valorar este producto' : 'Valorar a este vendedor'}
            </h5>
          </div>
          <div className="card-body bg-negro">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 text-center text-white">
                <p className="mb-2">¿Cómo valorarías {type === 'product' ? 'este producto' : 'a este vendedor'}?</p>
                <div className="stars d-flex justify-content-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((starIndex) => (
                    <i 
                      key={starIndex}
                      className={`bi ${(hoverRating || rating) >= starIndex ? 'bi-star-fill' : 'bi-star'} fs-3`}
                      style={{ 
                        cursor: readOnly ? 'default' : 'pointer',
                        color: (hoverRating || rating) >= starIndex ? 'var(--color-amarillo)' : 'var(--color-blanco)'
                      }}
                      onMouseOver={() => handleMouseOver(starIndex)}
                      onMouseOut={() => setHoverRating(0)}
                      onClick={() => handleClick(starIndex)}
                    />
                  ))}
                </div>
                <div className="rating-text mb-3">
                  {rating > 0 && (
                    <span className={`
                      ${rating === 1 ? 'text-danger' : ''}
                      ${rating === 2 ? 'text-warning' : ''}
                      ${rating === 3 ? 'text-info' : ''}
                      ${rating === 4 ? 'text-primary' : ''}
                      ${rating === 5 ? 'text-success' : ''}
                    `}>
                      {ratingLabels[rating]}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="mb-3">
                <label htmlFor="comment" className="form-label text-white">Tu comentario (opcional)</label>
                <textarea 
                  className="form-control" 
                  id="comment" 
                  rows="3"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>
              
              <div className="text-end">
                <button 
                  type="submit" 
                  className="btn btn-warning" 
                  disabled={rating === 0 || loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Enviando...
                    </>
                  ) : 'Enviar valoración'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      {/* Mensaje de agradecimiento después de enviar */}
      {!readOnly && submitted && (
        <div className="alert alert-success mb-4">
          <i className="bi bi-check-circle-fill me-2"></i>
          ¡Gracias por tu valoración! Tu opinión ayuda a otros usuarios.
        </div>
      )}
      
      {/* Resumen de valoraciones */}
      <div className="rating-summary card shadow-sm mb-4">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-md-4 text-center">
              <h2 className="display-4 fw-bold mb-0">{ratingSummary.average}</h2>
              <div className="stars mb-2">
                {[1, 2, 3, 4, 5].map(star => (
                  <i 
                    key={star}
                    className={`bi ${ratingSummary.average >= star ? 'bi-star-fill' : ratingSummary.average >= star - 0.5 ? 'bi-star-half' : 'bi-star'} text-warning`}
                  />
                ))}
              </div>
              <p className="text-muted mb-0">Basado en {ratingSummary.totalReviews} valoraciones</p>
            </div>
            <div className="col-md-8">
              <div className="rating-bars">
                {[5, 4, 3, 2, 1].map(star => (
                  <div key={star} className="d-flex align-items-center mb-2">
                    <div className="me-2" style={{ width: '10%' }}>
                      {star} <i className="bi bi-star-fill text-warning"></i>
                    </div>
                    <div className="progress flex-grow-1" style={{ height: '10px' }}>
                      <div 
                        className="progress-bar bg-warning" 
                        role="progressbar" 
                        style={{ width: `${ratingDistribution[star]}%` }}
                        aria-valuenow={ratingDistribution[star]} 
                        aria-valuemin="0" 
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="ms-2" style={{ width: '10%' }}>
                      {ratingDistribution[star]}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Lista de valoraciones */}
      <div className="reviews-list">
        <h5 className="mb-3">Valoraciones recientes</h5>
        
        {sampleReviews.map(review => (
          <div key={review.id} className="card shadow-sm mb-3">
            <div className="card-body">
              <div className="d-flex">
                <img 
                  src={review.author.avatar} 
                  alt={review.author.name} 
                  className="rounded-circle" 
                  width="50" 
                  height="50" 
                />
                <div className="ms-3">
                  <div className="d-flex align-items-center">
                    <h6 className="mb-0">{review.author.name}</h6>
                    <span className="badge bg-light text-dark ms-2">
                      {type === 'product' ? 'Comprador verificado' : 'Usuario verificado'}
                    </span>
                  </div>
                  <div className="stars my-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i 
                        key={star}
                        className={`bi ${review.rating >= star ? 'bi-star-fill' : 'bi-star'} text-warning`}
                      />
                    ))}
                    <small className="text-muted ms-2">{formatDate(review.date)}</small>
                  </div>
                  <p className="mb-0">{review.comment}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <div className="text-center mt-4">
          <button className="btn btn-outline-dark text-white">
            Ver todas las valoraciones
          </button>
        </div>
      </div>
    </div>
  );
}