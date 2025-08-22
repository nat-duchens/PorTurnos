import { Routes, Route, Outlet } from 'react-router-dom'
import Header from './modules/layouts/Header'
import Footer from './modules/layouts/Footer'
import Home from './modules/home/pages/Home'
import Blog from './modules/blogs/components/Blog'
import Post from './modules/blogs/pages/Post'
//Al añadir nuevas páginas se deben importar
// Así como sus <Route path = .../>
import Login from './modules/auth/pages/Login'
import Register from './modules/auth/pages/Register'
import ResetPassword from './modules/auth/components/ResetPassword'
import Nosotros from "./modules/info/Nosotros"
import Contacto from "./modules/info/Contacto"
import Envios  from './modules/info/Envios'
import Terminos from './modules/info/Terminos'
import Conducta from './modules/info/Conducta'
import Privacidad from './modules/info/Privacidad'
// Importaciones del marketplace
import Marketplace from './modules/marketplace/pages/Marketplace'
import ProductDetail from './modules/product/pages/ProductDetail'
import PublishGameForm from './modules/seller/components/PublishGameForm'
import MessageSystem from './modules/marketplace/components/MessageSystem'
import SellerDashboard from './modules/seller/pages/SellerDashboards'
import NotificationsPage from './modules/layouts/notifications/pages/NotificationsPage'
import Cart from './modules/marketplace/pages/Cart'
// Importaciones de autenticación
import { AuthProvider } from './modules/auth/context/AuthContext'
import ProtectedRoute from './modules/auth/components/ProtectedRoute'

export default function App() {
    return (
        <AuthProvider>
            <div className="d-flex flex-column min-vh-100">
                <Header />

                <main className="flex-grow-1">
                    <Routes>
                        <Route element={<Layout />}>
                            <Route path="/" element={<Home />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/blog/:slug" element={<Post />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/reset-password" element={<ResetPassword />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/nosotros" element={<Nosotros />} />
                            <Route path="/contacto" element={<Contacto />} />
                            <Route path="/envios" element={<Envios />} />
                            <Route path="/terminos" element={<Terminos />} />
                            <Route path="/conducta" element={<Conducta />} />
                            <Route path="/privacidad" element={<Privacidad />} />
                            <Route path="/cart" element={<Cart />} />
                            {/* Rutas del marketplace */}
                                <Route path="/marketplace" element={<Marketplace />} />
                                <Route path="/marketplace/product/:productId" element={<ProductDetail />} />
                                {/* Rutas protegidas - solo para usuarios autenticados */}
                                <Route path="/marketplace/publish" element={
                                    <ProtectedRoute>
                                        <PublishGameForm />
                                    </ProtectedRoute>
                                } />
                                <Route path="/marketplace/messages" element={
                                    <ProtectedRoute>
                                        <MessageSystem />
                                    </ProtectedRoute>
                                } />
                                <Route path="/marketplace/seller-dashboard" element={
                                    <ProtectedRoute>
                                        <SellerDashboard />
                                    </ProtectedRoute>
                                } />
                                <Route path="/marketplace/notifications" element={
                                    <ProtectedRoute>
                                        <NotificationsPage />
                                    </ProtectedRoute>
                                } />
                        </Route>
                    </Routes>
                </main>

                <Footer />
            </div>
        </AuthProvider>
    )
}

function Layout() {
    return <Outlet />
}