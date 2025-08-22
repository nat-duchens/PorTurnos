import { newsletterContent } from '../utils/dummyData';

export default function Newsletter() {
  return (
    <section className="py-5 bg-light" id="newsletter">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-lg">
              <div className="card-body bg-negro p-5 rounded-4">
                <div className="text-center mb-4">
                  <i className="bi bi-envelope-paper fs-1 text-warning mb-3"></i>
                  <h3 className="fw-bold text-white">{newsletterContent.title}</h3>
                  <p className="text-white">{newsletterContent.description}</p>
                </div>
                
                <form className="row g-3" onSubmit={(e) => e.preventDefault()}>
                  <div className="col-md-8">
                    <input 
                      type="email" 
                      className="form-control form-control-lg" 
                      placeholder="Tu correo electrónico" 
                      aria-label="Email address" 
                      required 
                    />
                  </div>
                  <div className="col-md-4">
                    <button type="submit" className="btn btn-warning btn-lg w-100">Suscribirse</button>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="privacyCheck" required />
                      <label className="form-check-label small text-white" htmlFor="privacyCheck">
                        {newsletterContent.privacyText}
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}