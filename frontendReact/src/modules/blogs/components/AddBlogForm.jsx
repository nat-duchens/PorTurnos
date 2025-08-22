import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createBlog } from '../service/blogService'

export default function AddBlogForm() {
    const [formData, setFormData] = useState({
        title: '',
        excerpt: '',
        image: '',
        content: '',
        bullets: ['', '', '']
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        
        if (name.startsWith('bullet')) {
            const index = parseInt(name.replace('bullet', ''))
            const newBullets = [...formData.bullets]
            newBullets[index] = value
            setFormData({
                ...formData,
                bullets: newBullets
            })
        } else {
            setFormData({
                ...formData,
                [name]: value
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            // Generar un slug basado en el título
            const slug = formData.title
                .toLowerCase()
                .replace(/[^\w\s]/gi, '')
                .replace(/\s+/g, '-')
            
            // Formatear los datos para enviar al servicio
            const blogData = {
                ...formData,
                slug,
                author: 'Usuario', // En un caso real, esto vendría del usuario autenticado
                date: new Date().toLocaleDateString('es-ES', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                }),
                readTime: '3 min', // En un caso real, esto se calcularía
                paragraphs: formData.content.split('\n\n').filter(p => p.trim() !== '')
            }
            
            // Enviar los datos al servicio
            await createBlog(blogData)
            
            // Redirigir al blog principal
            navigate('/blog')
        } catch (err) {
            setError('Error al crear el blog. Por favor, inténtalo de nuevo.')
            console.error('Error:', err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className="py-4">
            <div className="container">
                <article className="blog-juegos p-3 rounded-3">
                    <h1 className="h3 mb-3 gradient-blog">Crear Nuevo Blog</h1>

                    <form onSubmit={handleSubmit}>
                        {error && (
                            <div className="alert alert-danger" role="alert">
                                {error}
                            </div>
                        )}

                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Título</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                                disabled={loading}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="excerpt" className="form-label">Resumen breve</label>
                            <input
                                type="text"
                                className="form-control"
                                id="excerpt"
                                name="excerpt"
                                value={formData.excerpt}
                                onChange={handleChange}
                                required
                                disabled={loading}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">URL de la imagen</label>
                            <input
                                type="url"
                                className="form-control"
                                id="image"
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                required
                                disabled={loading}
                                placeholder="https://ejemplo.com/imagen.jpg"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="content" className="form-label">Contenido</label>
                            <textarea
                                className="form-control"
                                id="content"
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                rows="6"
                                required
                                disabled={loading}
                            ></textarea>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Puntos destacados (bullets)</label>
                            {formData.bullets.map((bullet, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    className="form-control mb-2"
                                    name={`bullet${index}`}
                                    value={bullet}
                                    onChange={handleChange}
                                    placeholder={`Punto destacado ${index + 1}`}
                                    disabled={loading}
                                />
                            ))}
                        </div>

                        <div className="d-flex justify-content-between">
                            <button 
                                type="button" 
                                className="btn btn-outline-secondary"
                                onClick={() => navigate('/blog')}
                                disabled={loading}
                            >
                                Cancelar
                            </button>
                            <button 
                                type="submit" 
                                className="btn btn-outline-dark btn-rosa"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                        Creando blog...
                                    </>
                                ) : (
                                    'Publicar Blog'
                                )}
                            </button>
                        </div>
                    </form>
                </article>
            </div>
        </section>
    )
}