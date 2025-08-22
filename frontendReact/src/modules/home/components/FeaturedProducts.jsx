import { NavLink } from 'react-router-dom';
import { featuredProducts } from '../utils/dummyData';

export default function FeaturedProducts() {
  return (
    <section className="py-5 bg-light" id="productos">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Productos Destacados</h2>
          <p className="lead text-secondary">Los juegos más populares de nuestra tienda</p>
        </div>
        
        <div className="row g-4">
          {featuredProducts.map(product => (
            <div className="col-md-6 col-lg-3" key={product.id}>
              <div className="card h-100 border-1 shadow-sm product-card">
                <div className="position-relative">
                  <img src={product.image} className="card-img-top" alt={product.name} />
                  <span className="position-absolute top-0 end-0 badge bg-negro m-2">{product.category}</span>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text flex-grow-1">{product.description}</p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="fw-bold text-negro">${product.price.toLocaleString('es-CL')} CLP</span>
                    <NavLink to="cart" className="btn btn-sm btn-outline-dark text-white">Añadir al carrito</NavLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <NavLink to="/marketplace" className="btn btn-warning-white btn-lg">Ver todos los productos</NavLink>
        </div>
      </div>
    </section>
  )
}