import { Link } from 'react-router-dom';
import { featuredBlogs } from '../utils/dummyData';

export default function FeaturedBlogs() {
  return (
    <section className="py-5 bg-light" id="blog-section">
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div>
            <h2 className="fw-bold mb-1">Blog PORTURNOS</h2>
            <p className="lead text-secondary">Artículos, guías y noticias del mundo de los juegos</p>
          </div>
          <Link to="/blog" className="btn btn-outline-primary">Ver todos los artículos</Link>
        </div>
        
        <div className="row g-4">
          {featuredBlogs.map(blog => (
            <div className="col-md-4" key={blog.id}>
              <div className="card h-100 border-0 shadow-sm blog-card">
                <div className="position-relative">
                  <img 
                    src={blog.image} 
                    className="card-img-top" 
                    alt={blog.title} 
                  />
                  <span className="position-absolute top-0 end-0 badge bg-primary m-2">{blog.category}</span>
                </div>
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-2 small text-secondary">
                    <span><i className="bi bi-calendar3 me-1"></i> {blog.date}</span>
                    <span><i className="bi bi-person me-1"></i> {blog.author}</span>
                  </div>
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text flex-grow-1">{blog.excerpt}</p>
                  <Link to={`/blog/${blog.slug}`} className="btn btn-sm btn-outline-primary mt-3">
                    Leer artículo <i className="bi bi-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <div className="d-inline-block bg-white p-3 rounded-3 shadow-sm">
            <p className="mb-2 fw-bold">¿Quieres estar al día con las últimas novedades?</p>
            <Link to="/blog" className="btn btn-primary">
              Suscríbete a nuestro blog <i className="bi bi-journal-text ms-1"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}