import { Routes, Route, Outlet } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Blog from './pages/Blog.jsx'
import Post from './pages/Post.jsx'
//Al añadir nuevas páginas se deben importar
// Así como sus <Route path = .../>
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Terminos from './pages/Terminos.jsx'
import Nosotros from "./pages/Nosotros.jsx";
// Importaciones del marketplace
import Marketplace from './pages/Marketplace.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import PublishGameForm from './components/marketplace/PublishGameForm.jsx'
import MessageSystem from './components/marketplace/MessageSystem.jsx'
import SellerDashboard from './pages/SellerDashboard.jsx'
import NotificationsPage from './pages/NotificationsPage.jsx'

export default function App() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />

            <main className="flex-grow-1">
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:slug" element={<Post />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/terminos" element={<Terminos />} />
                        <Route path="/nosotros" element={<Nosotros />} />
                        {/* Rutas del marketplace */}
                        <Route path="/marketplace" element={<Marketplace />} />
                        <Route path="/marketplace/product/:productId" element={<ProductDetail />} />
                        <Route path="/marketplace/publish" element={<PublishGameForm />} />
                        <Route path="/marketplace/messages" element={<MessageSystem />} />
                        <Route path="/marketplace/seller-dashboard" element={<SellerDashboard />} />
                        <Route path="/marketplace/notifications" element={<NotificationsPage />} />
                      
                    </Route>
                </Routes>
            </main>

            <Footer />
        </div>
    )

}

function Layout() {
    return <Outlet />
}