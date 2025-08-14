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
import Conducta from "./pages/Conducta.jsx";
import Envios from "./pages/Envios.jsx";
import Privacidad from "./pages/Privacidad.jsx";
import Contacto from "./pages/Contacto.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";

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
                        <Route path="/conducta" element={<Conducta />} />
                        <Route path="/envios" element={<Envios />} />
                        <Route path="/privacidad" element={<Privacidad />} />
                        <Route path="/contacto" element={<Contacto />} />
                        <Route path="/reset-password" element={<ResetPassword />} />

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