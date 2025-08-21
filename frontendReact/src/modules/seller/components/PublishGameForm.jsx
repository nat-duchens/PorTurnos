import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PublishGameForm() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    condition: '',
    completeness: 'completo',
    price: '',
    originalPrice: '',
    images: [],
    location: '',
    shippingOptions: ['envio', 'recogida']
  });
  
  const [errors, setErrors] = useState({});
  const [previewImages, setPreviewImages] = useState([]);
  
  // Opciones para los selects
  const categories = [
    { value: '', label: 'Selecciona una categoría' },
    { value: 'estrategia', label: 'Estrategia' },
    { value: 'familiar', label: 'Familiar' },
    { value: 'cooperativos', label: 'Cooperativos' },
    { value: 'cartas', label: 'Juegos de cartas' },
    { value: 'rol', label: 'Juegos de rol' },
    { value: 'miniaturas', label: 'Miniaturas' },
    { value: 'wargames', label: 'Wargames' },
    { value: 'party', label: 'Party games' },
    { value: 'abstractos', label: 'Abstractos' },
    { value: 'otros', label: 'Otros' }
  ];
  
  const conditions = [
    { value: '', label: 'Selecciona el estado' },
    { value: 'como-nuevo', label: 'Como nuevo (apenas usado)' },
    { value: 'buen-estado', label: 'Buen estado (signos mínimos de uso)' },
    { value: 'aceptable', label: 'Aceptable (signos visibles de uso)' },
    { value: 'con-defectos', label: 'Con defectos (detallar en descripción)' }
  ];
  
  const completenessOptions = [
    { value: 'completo', label: 'Completo (todos los componentes)' },
    { value: 'falta-componentes', label: 'Faltan componentes (detallar en descripción)' },
    { value: 'componentes-reemplazados', label: 'Componentes reemplazados (detallar en descripción)' }
  ];
  
  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      // Para checkboxes (opciones de envío)
      let updatedOptions = [...formData.shippingOptions];
      if (checked) {
        updatedOptions.push(value);
      } else {
        updatedOptions = updatedOptions.filter(option => option !== value);
      }
      setFormData(prev => ({ ...prev, shippingOptions: updatedOptions }));
    } else {
      // Para el resto de inputs
      setFormData(prev => ({ ...prev, [name]: value }));
      
      // Limpiar error si el campo se está completando
      if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: null }));
      }
    }
  };
  
  // Manejar carga de imágenes
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 5) {
      setErrors(prev => ({ ...prev, images: 'Máximo 5 imágenes permitidas' }));
      return;
    }
    
    // Crear previsualizaciones
    const newPreviewImages = files.map(file => URL.createObjectURL(file));
    setPreviewImages(newPreviewImages);
    
    // Guardar archivos en el estado
    setFormData(prev => ({ ...prev, images: files }));
    
    // Limpiar error si existía
    if (errors.images) {
      setErrors(prev => ({ ...prev, images: null }));
    }
  };
  
  // Validar formulario
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) newErrors.title = 'El título es obligatorio';
    if (!formData.description.trim()) newErrors.description = 'La descripción es obligatoria';
    if (!formData.category) newErrors.category = 'Selecciona una categoría';
    if (!formData.condition) newErrors.condition = 'Selecciona el estado del juego';
    if (!formData.price) newErrors.price = 'El precio es obligatorio';
    if (formData.images.length === 0) newErrors.images = 'Añade al menos una imagen';
    if (!formData.location.trim()) newErrors.location = 'La ubicación es obligatoria';
    if (formData.shippingOptions.length === 0) newErrors.shippingOptions = 'Selecciona al menos una opción de envío';
    
    // Validar que el precio sea un número válido
    if (formData.price && (isNaN(formData.price) || Number(formData.price) <= 0)) {
      newErrors.price = 'Introduce un precio válido';
    }
    
    // Validar que el precio original sea un número válido si se proporciona
    if (formData.originalPrice && (isNaN(formData.originalPrice) || Number(formData.originalPrice) <= 0)) {
      newErrors.originalPrice = 'Introduce un precio original válido';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Enviar formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Aquí iría la lógica para enviar los datos al servidor
      // Simulamos una petición
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Redirigir a la página de éxito o al detalle del juego publicado
      alert('¡Juego publicado con éxito!');
      navigate('/marketplace');
    } catch (error) {
      console.error('Error al publicar el juego:', error);
      setErrors(prev => ({ ...prev, submit: 'Error al publicar el juego. Inténtalo de nuevo.' }));
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">Publicar juego usado</h3>
            </div>
            <div className="card-body">
              {errors.submit && (
                <div className="alert alert-danger">{errors.submit}</div>
              )}
              
              <form onSubmit={handleSubmit}>
                {/* Información básica */}
                <h5 className="mb-3">Información básica</h5>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Título del juego *</label>
                  <input
                    type="text"
                    className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Ej. Catan - Edición Básica"
                  />
                  {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                </div>
                
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Descripción *</label>
                  <textarea
                    className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                    id="description"
                    name="description"
                    rows="4"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe el estado del juego, componentes, edición, etc."
                  ></textarea>
                  {errors.description && <div className="invalid-feedback">{errors.description}</div>}
                  <div className="form-text">Incluye detalles sobre el estado, si falta algún componente, etc.</div>
                </div>
                
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="category" className="form-label">Categoría *</label>
                    <select
                      className={`form-select ${errors.category ? 'is-invalid' : ''}`}
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                    >
                      {categories.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                    {errors.category && <div className="invalid-feedback">{errors.category}</div>}
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <label htmlFor="condition" className="form-label">Estado *</label>
                    <select
                      className={`form-select ${errors.condition ? 'is-invalid' : ''}`}
                      id="condition"
                      name="condition"
                      value={formData.condition}
                      onChange={handleChange}
                    >
                      {conditions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                    {errors.condition && <div className="invalid-feedback">{errors.condition}</div>}
                  </div>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="completeness" className="form-label">Completitud del juego *</label>
                  <select
                    className="form-select"
                    id="completeness"
                    name="completeness"
                    value={formData.completeness}
                    onChange={handleChange}
                  >
                    {completenessOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
                
                {/* Precios */}
                <h5 className="mb-3 mt-4">Precios</h5>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="price" className="form-label">Precio (CLP) *</label>
                    <input
                      type="number"
                      step="1"
                      min="0"
                      className={`form-control ${errors.price ? 'is-invalid' : ''}`}
                      id="price"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="15000"
                    />
                    {errors.price && <div className="invalid-feedback">{errors.price}</div>}
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <label htmlFor="originalPrice" className="form-label">Precio original (CLP)</label>
                    <input
                      type="number"
                      step="1"
                      min="0"
                      className={`form-control ${errors.originalPrice ? 'is-invalid' : ''}`}
                      id="originalPrice"
                      name="originalPrice"
                      value={formData.originalPrice}
                      onChange={handleChange}
                      placeholder="25000"
                    />
                    {errors.originalPrice && <div className="invalid-feedback">{errors.originalPrice}</div>}
                    <div className="form-text">Opcional. Ayuda a mostrar el descuento.</div>
                  </div>
                </div>
                
                {/* Imágenes */}
                <h5 className="mb-3 mt-4">Imágenes</h5>
                <div className="mb-3">
                  <label htmlFor="images" className="form-label">Fotos del juego *</label>
                  <input
                    type="file"
                    className={`form-control ${errors.images ? 'is-invalid' : ''}`}
                    id="images"
                    name="images"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                  />
                  {errors.images && <div className="invalid-feedback">{errors.images}</div>}
                  <div className="form-text">Puedes subir hasta 5 imágenes. La primera será la principal.</div>
                </div>
                
                {previewImages.length > 0 && (
                  <div className="mb-4">
                    <p className="mb-2">Vista previa:</p>
                    <div className="d-flex flex-wrap gap-2">
                      {previewImages.map((src, index) => (
                        <div key={index} className="position-relative">
                          <img 
                            src={src} 
                            alt={`Preview ${index + 1}`} 
                            className="img-thumbnail" 
                            style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
                          />
                          {index === 0 && (
                            <span className="position-absolute top-0 start-0 badge bg-primary">Principal</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Ubicación y envío */}
                <h5 className="mb-3 mt-4">Ubicación y envío</h5>
                <div className="mb-3">
                  <label htmlFor="location" className="form-label">Ubicación *</label>
                  <input
                    type="text"
                    className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Ej. Madrid, Barcelona, etc."
                  />
                  {errors.location && <div className="invalid-feedback">{errors.location}</div>}
                </div>
                
                <div className="mb-4">
                  <label className="form-label">Opciones de entrega *</label>
                  <div className={`${errors.shippingOptions ? 'is-invalid' : ''}`}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="shipping-option-1"
                        name="shippingOptions"
                        value="envio"
                        checked={formData.shippingOptions.includes('envio')}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="shipping-option-1">
                        Envío (el comprador paga los gastos)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="shipping-option-2"
                        name="shippingOptions"
                        value="recogida"
                        checked={formData.shippingOptions.includes('recogida')}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="shipping-option-2">
                        Recogida en persona
                      </label>
                    </div>
                  </div>
                  {errors.shippingOptions && <div className="invalid-feedback d-block">{errors.shippingOptions}</div>}
                </div>
                
                {/* Términos y condiciones */}
                <div className="mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="terms"
                      required
                    />
                    <label className="form-check-label" htmlFor="terms">
                      Acepto los <a href="#">términos y condiciones</a> de Por Turnos
                    </label>
                  </div>
                </div>
                
                {/* Botones */}
                <div className="d-flex justify-content-between">
                  <button 
                    type="button" 
                    className="btn btn-outline-secondary" 
                    onClick={() => navigate('/marketplace')}
                  >
                    Cancelar
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Publicando...
                      </>
                    ) : 'Publicar juego'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}