import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Cart() {
  // Estado para los productos en el carrito
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Simular carga de datos del carrito
  useEffect(() => {
    const timer = setTimeout(() => {
      // Datos de ejemplo para el carrito
      const sampleCartItems = [
        {
          id: '1',
          nombre_producto: 'Catan - Edición Básica',
          precio: 10.990,
          cantidad: 1,
          imagen: 'https://placehold.co/600x400/2c3e50/ffffff?text=Catan',
          vendedor: 'María G.'
        },
        {
          id: '4',
          nombre_producto: 'Magic: The Gathering - Lote de cartas',
          precio: 89.99,
          cantidad: 1,
          imagen: 'https://placehold.co/600x400/8e44ad/ffffff?text=Magic',
          vendedor: 'Pedro S.'
        }
      ];
      
      setCartItems(sampleCartItems);
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Calcular el total del carrito
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  };
  
  // Función para actualizar la cantidad de un producto
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? {...item, cantidad: newQuantity} : item
    ));
  };
  
  // Función para eliminar un producto del carrito
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  
  return (
    <div className="container py-5">
      <h1 className="mb-4">Carrito de Compras</h1>
      
      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-3">Cargando tu carrito...</p>
        </div>
      ) : error ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : cartItems.length === 0 ? (
        <div className="text-center py-5">
          <i className="bi bi-cart3 display-1 text-muted mb-4"></i>
          <h3>Tu carrito está vacío</h3>
          <p className="text-muted mb-4">Parece que aún no has añadido ningún producto a tu carrito.</p>
          <Link to="/marketplace" className="btn btn-primary">
            Explorar productos
          </Link>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-8">
            <div className="card shadow-sm mb-4">
              <div className="card-header bg-white py-3">
                <h5 className="mb-0">Productos ({cartItems.length})</h5>
              </div>
              <div className="card-body">
                {cartItems.map(item => (
                  <div key={item.id} className="row mb-4 border-bottom pb-4">
                    <div className="col-md-2">
                      <img 
                        src={item.imagen} 
                        alt={item.nombre_producto} 
                        className="img-fluid rounded"
                      />
                    </div>
                    <div className="col-md-4">
                      <h5 className="mb-1">{item.nombre_producto}</h5>
                      <p className="mb-1 text-muted small">Vendido por: {item.vendedor}</p>
                      <button 
                        className="btn btn-sm text-danger p-0" 
                        onClick={() => removeItem(item.id)}
                      >
                        <i className="bi bi-trash me-1"></i>
                        Eliminar
                      </button>
                    </div>
                    <div className="col-md-2 text-center">
                      <div className="d-flex align-items-center justify-content-center">
                        <button 
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => updateQuantity(item.id, item.cantidad - 1)}
                        >
                          <i className="bi bi-dash"></i>
                        </button>
                        <span className="mx-2">{item.cantidad}</span>
                        <button 
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => updateQuantity(item.id, item.cantidad + 1)}
                        >
                          <i className="bi bi-plus"></i>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-4 text-end">
                      <p className="h5 mb-0">${(item.precio * item.cantidad).toFixed(2)}</p>
                      <p className="text-muted small">${item.precio.toFixed(2)} por unidad</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="d-flex justify-content-between">
              <Link to="/marketplace" className="btn btn-outline-primary">
                <i className="bi bi-arrow-left me-2"></i>
                Seguir comprando
              </Link>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="card shadow-sm mb-4">
              <div className="card-header bg-white py-3">
                <h5 className="mb-0">Resumen de compra</h5>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Envío</span>
                  <span className="text-success">Gratis</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-4">
                  <span className="fw-bold">Total</span>
                  <span className="fw-bold h5 mb-0">${calculateTotal().toFixed(2)}</span>
                </div>
                
                <div className="d-grid gap-2">
                  <button className="btn btn-primary btn-lg">
                    Proceder al pago
                  </button>
                </div>
              </div>
            </div>
            
            <div className="card shadow-sm">
              <div className="card-body">
                <h6 className="mb-3">Métodos de pago aceptados</h6>
                <div className="d-flex gap-3">
                  <i className="bi bi-credit-card fs-2"></i>
                  <i className="bi bi-paypal fs-2"></i>
                  <i className="bi bi-bank fs-2"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}