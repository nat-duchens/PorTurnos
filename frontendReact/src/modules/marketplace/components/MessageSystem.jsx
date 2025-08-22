import { useState, useEffect } from 'react';
import { sampleConversations, loadingDelay } from '../utils/dummyData';

export default function MessageSystem() {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  
  // Simular carga de conversaciones
  useEffect(() => {
    const fetchConversations = async () => {
      try {
        setLoading(true);
        // Aquí iría la llamada a la API real
        // const response = await fetch('/api/messages/conversations');
        // const data = await response.json();
        
        // Simulamos un delay para la carga
        await new Promise(resolve => setTimeout(resolve, loadingDelay));
        
        setConversations(sampleConversations);
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar conversaciones:', error);
        setLoading(false);
      }
    };
    
    fetchConversations();
  }, []);
  
  // Seleccionar una conversación
  const handleSelectConversation = (conversation) => {
    setSelectedConversation(conversation);
    
    // Marcar como leído (en una aplicación real, esto se enviaría al servidor)
    if (conversation.lastMessage && !conversation.lastMessage.isRead && conversation.lastMessage.sender !== 'currentUser') {
      const updatedConversations = conversations.map(conv => {
        if (conv.id === conversation.id) {
          return {
            ...conv,
            lastMessage: {
              ...conv.lastMessage,
              isRead: true
            }
          };
        }
        return conv;
      });
      
      setConversations(updatedConversations);
    }
  };
  
  // Enviar un mensaje
  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (!message.trim() || !selectedConversation) return;
    
    const newMessage = {
      id: `msg${Date.now()}`,
      text: message,
      timestamp: new Date(),
      sender: 'currentUser'
    };
    
    // Actualizar la conversación seleccionada con el nuevo mensaje
    const updatedConversation = {
      ...selectedConversation,
      messages: [...selectedConversation.messages, newMessage],
      lastMessage: {
        text: message,
        timestamp: new Date(),
        isRead: true,
        sender: 'currentUser'
      }
    };
    
    // Actualizar la lista de conversaciones
    const updatedConversations = conversations.map(conv => 
      conv.id === selectedConversation.id ? updatedConversation : conv
    );
    
    setSelectedConversation(updatedConversation);
    setConversations(updatedConversations);
    setMessage('');
    
    // Aquí iría la llamada a la API para enviar el mensaje
    // await fetch('/api/messages/send', { method: 'POST', body: JSON.stringify({ conversationId, message }) });
  };
  
  // Formatear fecha
  const formatDate = (date) => {
    const now = new Date();
    const messageDate = new Date(date);
    
    // Si es hoy, mostrar la hora
    if (messageDate.toDateString() === now.toDateString()) {
      return messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    
    // Si es ayer
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    if (messageDate.toDateString() === yesterday.toDateString()) {
      return 'Ayer';
    }
    
    // Si es esta semana
    const daysDiff = Math.floor((now - messageDate) / (1000 * 60 * 60 * 24));
    if (daysDiff < 7) {
      return messageDate.toLocaleDateString([], { weekday: 'long' });
    }
    
    // Para fechas más antiguas
    return messageDate.toLocaleDateString();
  };
  
  return (
    <div className="container py-4">
      <div className="card shadow-sm">
        <div className="card-header bg-negro text-white">
          <h4 className="mb-0">Mensajes</h4>
        </div>
        <div className="card-body p-0">
          <div className="row g-0" style={{ height: '600px' }}>
            {/* Lista de conversaciones */}
            <div className="col-md-4 border-end">
              <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Conversaciones</h5>
                <span className="badge bg-amarillo rounded-pill">
                  {conversations.filter(c => !c.lastMessage.isRead && c.lastMessage.sender !== 'currentUser').length}
                </span>
              </div>
              
              {loading ? (
                <div className="text-center py-5">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Cargando...</span>
                  </div>
                </div>
              ) : conversations.length === 0 ? (
                <div className="text-center py-5">
                  <i className="bi bi-chat-left text-muted display-4"></i>
                  <p className="mt-3">No tienes conversaciones</p>
                </div>
              ) : (
                <div className="conversation-list" style={{ height: 'calc(600px - 60px)', overflowY: 'auto' }}>
                  {conversations.map(conversation => (
                    <div 
                      key={conversation.id} 
                      className={`conversation-item p-3 border-bottom ${selectedConversation?.id === conversation.id ? 'bg-light' : ''} ${!conversation.lastMessage.isRead && conversation.lastMessage.sender !== 'currentUser' ? 'unread' : ''}`}
                      onClick={() => handleSelectConversation(conversation)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="d-flex">
                        <div className="position-relative">
                          <img 
                            src={conversation.with.avatar} 
                            alt={conversation.with.name} 
                            className="rounded-circle" 
                            width="50" 
                            height="50" 
                          />
                          {!conversation.lastMessage.isRead && conversation.lastMessage.sender !== 'currentUser' && (
                            <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                              <span className="visually-hidden">Mensaje no leído</span>
                            </span>
                          )}
                        </div>
                        <div className="ms-3 flex-grow-1">
                          <div className="d-flex justify-content-between align-items-center">
                            <h6 className="mb-0">{conversation.with.name}</h6>
                            <small className="text-muted">{formatDate(conversation.lastMessage.timestamp)}</small>
                          </div>
                          <div className="d-flex align-items-center mt-1">
                            <img 
                              src={conversation.product.image} 
                              alt={conversation.product.title} 
                              className="rounded" 
                              width="30" 
                              height="30" 
                              style={{ objectFit: 'cover' }}
                            />
                            <small className="text-truncate ms-2" style={{ maxWidth: '120px' }}>
                              {conversation.product.title}
                            </small>
                          </div>
                          <p className="text-truncate mb-0 mt-1" style={{ maxWidth: '200px' }}>
                            {conversation.lastMessage.sender === 'currentUser' && 'Tú: '}
                            {conversation.lastMessage.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Área de mensajes */}
            <div className="col-md-8">
              {!selectedConversation ? (
                <div className="text-center py-5">
                  <i className="bi bi-chat-dots text-muted display-1"></i>
                  <h5 className="mt-3">Selecciona una conversación</h5>
                  <p className="text-muted">Elige una conversación para ver los mensajes</p>
                </div>
              ) : (
                <>
                  {/* Cabecera de la conversación */}
                  <div className="p-3 border-bottom d-flex align-items-center">
                    <img 
                      src={selectedConversation.with.avatar} 
                      alt={selectedConversation.with.name} 
                      className="rounded-circle" 
                      width="40" 
                      height="40" 
                    />
                    <div className="ms-3">
                      <h6 className="mb-0">{selectedConversation.with.name}</h6>
                      <div className="d-flex align-items-center">
                        <img 
                          src={selectedConversation.product.image} 
                          alt={selectedConversation.product.title} 
                          className="rounded" 
                          width="25" 
                          height="25" 
                          style={{ objectFit: 'cover' }}
                        />
                        <small className="text-muted ms-2">
                          {selectedConversation.product.title}
                        </small>
                      </div>
                    </div>
                    <div className="ms-auto">
                      <button className="btn btn-outline-dark text-white btn-sm">
                        <i className="bi bi-info-circle me-1"></i>
                        Ver perfil
                      </button>
                    </div>
                  </div>
                  
                  {/* Mensajes */}
                  <div 
                    className="messages-container p-3" 
                    style={{ 
                      height: 'calc(600px - 60px - 70px)', 
                      overflowY: 'auto',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    {selectedConversation.messages.map(msg => (
                      <div 
                        key={msg.id} 
                        className={`message mb-3 ${msg.sender === 'currentUser' ? 'ms-auto' : 'me-auto'}`}
                        style={{ maxWidth: '75%' }}
                      >
                        <div 
                          className={`p-3 rounded ${msg.sender === 'currentUser' ? 'bg-amarillo text-negro' : 'bg-negro text-white'}`}
                        >
                          {msg.text}
                        </div>
                        <small className="text-muted d-block mt-1">
                          {formatDate(msg.timestamp)}
                        </small>
                      </div>
                    ))}
                  </div>
                  
                  {/* Formulario para enviar mensaje */}
                  <div className="p-2 border-top">
                    <form onSubmit={handleSendMessage} className="d-flex">
                      <input 
                        id='mensajeria'
                        type="text" 
                        className="form-control me-2" 
                        placeholder="Escribe un mensaje..." 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                      <button 
                        type="submit" 
                        className="btn btn-warning" 
                        disabled={!message.trim()}
                      >
                        <i className="bi bi-send"></i>
                      </button>
                    </form>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}