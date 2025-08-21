import { Link } from 'react-router-dom'
import { marketplaceStats, marketplaceGames } from '../utils/dummyData';

export default function MarketplacePromo() {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="p-4 bg-white rounded-4 shadow-sm">
                            <h2 className="display-6 fw-bold mb-3">Marketplace de Juegos Usados</h2>
                            <p className="lead mb-4">
                                Compra y vende juegos de mesa de segunda mano en nuestra comunidad. 
                                Encuentra ofertas increíbles o dale una segunda vida a tus juegos.
                            </p>
                            <div className="d-flex gap-3 flex-wrap">
                                <Link to="/marketplace" className="btn btn-primary btn-lg">
                                    Explorar Marketplace
                                </Link>
                                <Link to="/marketplace/publish" className="btn btn-outline-primary btn-lg">
                                    Vender mi Juego
                                </Link>
                            </div>
                            <div className="mt-4 d-flex gap-4">
                                <div>
                                    <span className="d-block h3 mb-0 fw-bold">{marketplaceStats.availableGames}</span>
                                    <small className="text-muted">Juegos disponibles</small>
                                </div>
                                <div>
                                    <span className="d-block h3 mb-0 fw-bold">{marketplaceStats.activeSellers}</span>
                                    <small className="text-muted">Vendedores activos</small>
                                </div>
                                <div>
                                    <span className="d-block h3 mb-0 fw-bold">{marketplaceStats.successfulTransactions}</span>
                                    <small className="text-muted">Transacciones exitosas</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="position-relative">
                            {marketplaceGames.map((game, index) => {
                                const positions = [
                                    { top: '15%', left: '10%', zIndex: 1, transform: 'rotate(-5deg)', bg: 'bg-primary' },
                                    { top: '5%', right: '15%', zIndex: 2, transform: 'rotate(3deg)', bg: 'bg-success' },
                                    { zIndex: 0, maxWidth: '80%', className: 'ms-auto bg-warning' }
                                ];
                                const position = positions[index];
                                
                                return (
                                    <div 
                                        key={game.id}
                                        className={`${position.bg || 'bg-warning'} rounded-4 p-3 ${index < 2 ? 'position-absolute' : position.className || ''}`}
                                        style={{
                                            top: position.top,
                                            left: position.left,
                                            right: position.right,
                                            zIndex: position.zIndex,
                                            transform: position.transform,
                                            maxWidth: position.maxWidth
                                        }}
                                    >
                                        <div className="bg-white rounded-3 p-2">
                                            <img src={game.image} alt={game.name} className="rounded-3" />
                                            <div className="mt-2 text-center">
                                                <span className={`badge bg-${game.conditionColor}`}>{game.condition}</span>
                                                <h6 className="mb-0 mt-1">{game.name}</h6>
                                                <p className="mb-0">
                                                    <strong>${game.price.toLocaleString('es-CL')} CLP</strong> 
                                                    <del className="text-muted"> ${game.originalPrice.toLocaleString('es-CL')} CLP</del>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}