import { useState, useEffect } from 'react';
import { recommendedGames, carouselSettings } from '../utils/dummyData';

export default function RecommendedGamesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === recommendedGames.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? recommendedGames.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, carouselSettings.autoSlideInterval);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-5" id="recommended-games">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Juegos Recomendados</h2>
          <p className="lead text-secondary">Seleccionados especialmente para ti por nuestros expertos</p>
        </div>
        
        <div className="position-relative">
          <div className="carousel-container overflow-hidden rounded-4 shadow-lg">
            <div 
              className="carousel-inner d-flex" 
              style={{ 
                transform: `translateX(-${activeIndex * 100}%)`,
                transition: `transform ${carouselSettings.transitionDuration} ease-in-out`
              }}
            >
              {recommendedGames.map((game, index) => (
                <div 
                  key={game.id} 
                  className="carousel-item w-100 flex-shrink-0"
                >
                  <div className="position-relative">
                    <img 
                      src={game.image} 
                      className="d-block w-100" 
                      alt={game.name} 
                    />
                    <div className="position-absolute bottom-0 start-0 w-100 p-4 text-white" style={{ background: 'rgba(0,0,0,0.7)' }}>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h3 className="h4 mb-1">{game.name}</h3>
                          <p className="mb-2">{game.description}</p>
                          <div className="d-flex align-items-center gap-2">
                            <div className="d-flex">
                              {[...Array(5)].map((_, i) => (
                                <i 
                                  key={i} 
                                  className={`bi bi-star${i < Math.floor(game.rating) ? '-fill' : i < game.rating ? '-half' : ''} text-warning`}
                                ></i>
                              ))}
                            </div>
                            <span className="small text-white-50">({game.rating})</span>
                          </div>
                        </div>
                        <div className="text-end">
                          <div className="h3 mb-0 text-warning">${game.price.toFixed(2)}</div>
                          <span className="badge bg-info">Recomendado</span>
                        </div>
                      </div>
                      <button className="btn btn-warning mt-3">Añadir al carrito</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="carousel-control carousel-control-prev position-absolute top-50 start-0 translate-middle-y bg-dark bg-opacity-50 rounded-circle d-flex justify-content-center align-items-center" 
            style={{ width: '50px', height: '50px', zIndex: 10 }}
            onClick={prevSlide}
          >
            <i className="bi bi-chevron-left text-white fs-4"></i>
          </button>
          <button 
            className="carousel-control carousel-control-next position-absolute top-50 end-0 translate-middle-y bg-dark bg-opacity-50 rounded-circle d-flex justify-content-center align-items-center" 
            style={{ width: '50px', height: '50px', zIndex: 10 }}
            onClick={nextSlide}
          >
            <i className="bi bi-chevron-right text-white fs-4"></i>
          </button>
          
          <div className="carousel-indicators position-absolute bottom-0 start-50 translate-middle-x mb-2" style={{ zIndex: 10 }}>
            {recommendedGames.map((_, index) => (
              <button 
                key={index}
                className={`rounded-circle mx-1 ${index === activeIndex ? 'bg-warning' : 'bg-white bg-opacity-50'}`}
                style={{ width: '12px', height: '12px', border: 'none' }}
                onClick={() => setActiveIndex(index)}
              ></button>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-4">
          <a href="#" className="btn btn-outline-primary">Ver todas las recomendaciones</a>
        </div>
      </div>
    </section>
  )
}