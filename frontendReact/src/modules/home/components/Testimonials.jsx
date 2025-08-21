import { testimonials } from '../utils/dummyData';

export default function Testimonials() {
  return (
    <section className="py-5" id="testimonios">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Lo que dicen nuestros clientes</h2>
          <p className="lead text-secondary">Experiencias reales de la comunidad PORTURNOS</p>
        </div>
        
        <div className="row g-4">
          {testimonials.map(testimonial => (
            <div className="col-md-4" key={testimonial.id}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill text-warning me-1"></i>
                    ))}
                  </div>
                  <p className="card-text mb-4">"{testimonial.content}"</p>
                  <div className="d-flex align-items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="rounded-circle me-3" 
                      width="50" 
                      height="50" 
                    />
                    <div>
                      <h6 className="mb-0">{testimonial.name}</h6>
                      <small className="text-secondary">{testimonial.role}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
