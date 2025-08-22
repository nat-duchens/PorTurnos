import { features } from '../utils/dummyData';

export default function Features() {
  return (
    <section className="py-5" id="features">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="fw-bold">¿Por qué elegir PORTURNOS?</h2>
          <p className="lead text-secondary">Descubre las ventajas de comprar en nuestra tienda especializada</p>
        </div>
        
        <div className="row g-4">
          {features.map(feature => (
            <div className="col-md-6 col-lg-4" key={feature.id}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="feature-icon bg-negro bg-gradient text-white rounded-circle mb-3">
                    <i className={`bi ${feature.icon} fs-2 p-3`}></i>
                  </div>
                  <h5 className="card-title">{feature.title}</h5>
                  <p className="card-text">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}