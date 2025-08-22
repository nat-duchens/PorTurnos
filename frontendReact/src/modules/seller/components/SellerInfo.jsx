// Componente con la lógica de datos del vendedor

import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  sellerProfile,
  products as initialProducts,
  orders as initialOrders,
  messages as initialMessages,
  earnings,
  productStatusConfig,
  orderStatusConfig,
  tabsConfig,
  tabTitles,
  tableHeaders,
  chartConfig,
  uiMessages,
  statsLabels,
  getUnreadMessagesCount,
  getMaxEarnings
} from '../utils/dummyData';

export default function SellerData() {
  // Estados para los diferentes datos del panel
  const [activeTab, setActiveTab] = useState('products');
  const [products, setProducts] = useState(initialProducts);
  const [orders, setOrders] = useState(initialOrders);
  const [messages, setMessages] = useState(initialMessages);

  // Renderizar perfil del vendedor
  const renderSellerProfile = () => (
    <div className="card mb-4">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <div className="flex-shrink-0">
            <img 
              src={sellerProfile.avatar} 
              alt="Foto de perfil" 
              className="rounded-circle" 
              width="80" 
              height="80" 
            />
          </div>
          <div className="flex-grow-1 ms-3">
            <h4 className="mb-1">{sellerProfile.name}</h4>
            <p className="text-muted mb-2">{uiMessages.memberSince} {sellerProfile.memberSince}</p>
            <div className="d-flex align-items-center">
              <div className="me-3">
                <i className="bi bi-star-fill text-warning me-1"></i>
                <span>{sellerProfile.rating}</span>
                <small className="text-muted">({sellerProfile.reviewCount} valoraciones)</small>
              </div>
              <div>
                <i className="bi bi-geo-alt me-1"></i>
                <span>{sellerProfile.location}</span>
              </div>
            </div>
          </div>
          <div className="ms-auto">
            <button className="btn btn-outline-dark text-white">
              <i className="bi bi-pencil me-2"></i>{uiMessages.editProfile}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Renderizar pestañas de navegación
  const renderTabs = () => (
    <ul className="nav nav-tabs mb-4">
      {tabsConfig.map(tab => (
        <li className="nav-item" key={tab.key}>
          <button 
            className={`nav-link ${activeTab === tab.key ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            <span className="text-black">
            <i className={`bi text-black ${tab.icon} me-2`}></i>{tab.label}</span>
            {tab.badge && (
              <span className={`badge ${tab.badge.class} ms-2`}>
                {tab.badge.count}
              </span>
            )}
          </button>
        </li>
      ))}
    </ul>
  );

  // Renderizar tabla de productos
  const renderProductsTable = () => (
    <div className="tab-pane fade show active">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>{tabTitles.products}</h3>
        <Link to="/marketplace/publish" className="btn btn-warning">
          <i className="bi bi-plus-lg me-2"></i>{uiMessages.publishNewGame}
        </Link>
      </div>
      
      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              {tableHeaders.products.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>
                  <div className="d-flex align-items-center">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="rounded me-3" 
                      width="50" 
                      height="50" 
                    />
                    <div>
                      <h6 className="mb-0">{product.title}</h6>
                      <small className="text-muted">{product.condition}</small>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="fw-bold">${product.price.toLocaleString('es-CL')} CLP</span>
                </td>
                <td>
                  <div className="d-flex gap-2">
                    <div>
                      <small className="d-block text-muted">{statsLabels.views}</small>
                      <span>{product.views}</span>
                    </div>
                    <div>
                      <small className="d-block text-muted">{statsLabels.favorites}</small>
                      <span>{product.favorites}</span>
                    </div>
                    <div>
                      <small className="d-block text-muted">{statsLabels.messages}</small>
                      <span>{product.messages}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className={`badge ${productStatusConfig[product.status]?.class || 'bg-secondary'}`}>
                    {productStatusConfig[product.status]?.label || product.status}
                  </span>
                </td>
                <td>
                  <div className="btn-group">
                    <button className="btn btn-sm btn-outline-dark text-white">
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button className="btn btn-sm btn-outline-danger">
                      <i className="bi bi-trash"></i>
                    </button>
                    <Link to={`/marketplace/product/${product.id}`} className="btn btn-sm btn-warning">
                      <i className="bi bi-eye"></i>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  // Renderizar tabla de órdenes
  const renderOrdersTable = () => (
    <div className="tab-pane fade show active">
      <h3 className="mb-4">{tabTitles.orders}</h3>
      
      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              {tableHeaders.orders.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>#{order.id}</td>
                <td>{order.product}</td>
                <td>{order.buyer}</td>
                <td>{order.date}</td>
                <td>${order.price.toLocaleString('es-CL')} CLP</td>
                <td>
                  <span className={`badge ${orderStatusConfig[order.status]?.class || 'bg-secondary'}`}>
                    {orderStatusConfig[order.status]?.label || order.status}
                  </span>
                </td>
                <td>
                  <button className="btn btn-sm btn-outline-dark text-white">
                    <i className="bi bi-info-circle me-1"></i>{uiMessages.details}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  // Renderizar lista de mensajes
  const renderMessages = () => (
    <div className="tab-pane fade show active">
      <h3 className="mb-4">{tabTitles.messages}</h3>
      
      <div className="list-group">
        {messages.map(message => (
          <div key={message.id} className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${!message.read ? 'bg-light' : ''}`}>
            <div>
              <div className="d-flex align-items-center">
                <h6 className="mb-0">{message.from}</h6>
                {!message.read && <span className="badge bg-warning text-black ms-2">{uiMessages.newMessage}</span>}
              </div>
              <p className="mb-1">{message.subject}</p>
              <small className="text-muted">{message.date}</small>
            </div>
            <div>
              <Link to="/marketplace/messages" className="btn btn-sm btn-warning text-black">
                <i className="bi bi-chat-dots me-1"></i>{uiMessages.respond}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Renderizar estadísticas de ganancias
  const renderEarningsStats = () => (
    <div className="row mb-4">
      <div className="col-md-6 col-lg-3 mb-3">
        <div className="card h-100">
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">{uiMessages.totalEarnings}</h6>
            <h3 className="card-title">${earnings.total.toLocaleString('es-CL')} CLP</h3>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 mb-3">
        <div className="card h-100">
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">{uiMessages.pendingEarnings}</h6>
            <h3 className="card-title">${earnings.pending.toLocaleString('es-CL')} CLP</h3>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 mb-3">
        <div className="card h-100">
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">{uiMessages.gamesSold}</h6>
            <h3 className="card-title">{earnings.gamesSold}</h3>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 mb-3">
        <div className="card h-100">
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">{uiMessages.averageRating}</h6>
            <h3 className="card-title">{earnings.averageRating} <small className="text-muted">/ 5</small></h3>
          </div>
        </div>
      </div>
    </div>
  );

  // Renderizar gráfico de ganancias mensuales
  const renderEarningsChart = () => (
    <div className="card">
      <div className="card-header bg-negro text-white">
        <h5 className="mb-0">{uiMessages.monthlyEarnings}</h5>
      </div>
      <div className="card-body">
        <div className="chart-container" style={{ height: chartConfig.height }}>
          <div className="d-flex justify-content-between h-100 align-items-end">
            {earnings.monthly.map((month, index) => (
              <div key={index} className="d-flex flex-column align-items-center" style={{ width: `${100 / earnings.monthly.length}%` }}>
                <div 
                  className="bg-amarillo rounded-top" 
                  style={{ 
                    width: chartConfig.barWidthPercentage, 
                    height: `${(month.amount / getMaxEarnings()) * 200}px`,
                    minHeight: chartConfig.barMinHeight
                  }}
                ></div>
                <div className="mt-2 text-center">
                  <small>{month.month}</small>
                  <div><small className="text-muted">{month.amount > 0 ? `$${month.amount.toLocaleString('es-CL')} CLP` : '-'}</small></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Renderizar sección de ganancias completa
  const renderEarnings = () => (
    <div className="tab-pane fade show active">
      <h3 className="mb-4">{tabTitles.earnings}</h3>
      {renderEarningsStats()}
      {renderEarningsChart()}
    </div>
  );

  // Renderizar contenido de pestaña activa
  const renderTabContent = () => {
    switch(activeTab) {
      case 'products':
        return renderProductsTable();
      case 'orders':
        return renderOrdersTable();
      case 'messages':
        return renderMessages();
      case 'earnings':
        return renderEarnings();
      default:
        return null;
    }
  };

  return {
    sellerProfile,
    activeTab,
    setActiveTab,
    renderSellerProfile,
    renderTabs,
    renderTabContent
  };
}