import { NavLink } from 'react-router-dom';
import { callToActionContent } from '../utils/dummyData';

export default function CallToAction() {
  return (
    <section className="py-3 text-white" id="cta">
      <div className="container py-5 rounded-4 bg-negro">
        <div className="row align-items-center g-4">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="fw-bold mb-4">{callToActionContent.title}</h2>
            <p className="lead mb-4">{callToActionContent.description}</p>
            <div className="d-flex justify-content-center gap-3">
              <NavLink to="/register" className="btn btn-warning btn-lg">Registrarse</NavLink>
              <NavLink to="/login" className="btn btn-outline-light text-black btn-lg">Iniciar sesión</NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}