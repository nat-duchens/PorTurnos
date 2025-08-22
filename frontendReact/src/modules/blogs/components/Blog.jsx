import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useAuth } from '../../auth/context/AuthContext'
import { getAllBlogs } from '../service/blogService'

export default function Blog() {
    const { isAuthenticated } = useAuth()
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const blogsData = await getAllBlogs()
                setPosts(blogsData)
            } catch (err) {
                setError('Error al cargar los blogs')
                console.error('Error:', err)
            } finally {
                setLoading(false)
            }
        }
        
        fetchBlogs()
    }, [])
    return (
        <section className="py-4">
            <div className="container">
                <article className="blog-juegos p-3 rounded-3">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h1 className="h3 mb-0 gradient-blog">Blogs: Comunidad de Juegos de Mesa</h1>
                        {isAuthenticated && (
                            <Link to="/blog/new" className="btn btn-outline-dark text-white">
                                <i className="bi bi-plus-circle me-1"></i> Nuevo Blog
                            </Link>
                        )}
                    </div>


                    {loading ? (
                        <div className="text-center py-5">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Cargando...</span>
                            </div>
                        </div>
                    ) : error ? (
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    ) : (
                        <div className="row g-4">
                        {posts.map(p => (
                            <div className="col-md-6" key={p.slug}>
                                <article className="juego_mesa p-0 rounded-3 overflow-hidden h-100">
                                    <div className="juego_mesa-inner position-relative">
                                        <Link to={`/blog/${p.slug}`} className="d-block">
                                            <img className="w-100 ratio-16x9 rounded-3" src={p.image} alt={p.title} />
                                        </Link>
                                        <div className="p-3">
                                            <h2 className="h5 mb-1">
                                                <Link className="stretched-link text-decoration-none text-dark" to={`/blog/${p.slug}`}>
                                                    {p.title}
                                                </Link>
                                            </h2>
                                            <p className="mb-2 small text-secondary">{p.excerpt}</p>
                                            {p.bullets?.length ? (
                                                <ul className="mb-0 small">
                                                    {p.bullets.slice(0, 3).map((b, i) => <li key={i}>{b}</li>)}
                                                </ul>
                                            ) : null}
                                        </div>
                                    </div>
                                </article>
                            </div>
                        ))}
                        </div>
                    )}
                </article>
            </div>
        </section>
    )
}
