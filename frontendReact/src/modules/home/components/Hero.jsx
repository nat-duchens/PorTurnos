import { NavLink } from 'react-router-dom';
import { heroContent } from '../utils/dummyData';

export default function Hero() {
  return (
      <section className="bg-primary text-white py-5 border-bottom">
        <div className="container py-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <h1 className="display-4 fw-bold">Bienvenido a <span className="text-warning">PORTURNOS</span></h1>
              <p className="lead mb-4">{heroContent.subtitle}</p>
              <div className="d-flex gap-3">
                <NavLink to="/marketplace" className="btn btn-warning btn-lg">Explorar productos</NavLink>
                <NavLink to="/nosotros" className="btn btn-outline-light btn-lg">Conoce más</NavLink>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="rounded-4 bg-white p-4 text-center shadow-lg">
                <div className="display-3 mb-3">{heroContent.emojis}</div>
                <p className="text-dark fw-bold mb-0">{heroContent.slogan}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}