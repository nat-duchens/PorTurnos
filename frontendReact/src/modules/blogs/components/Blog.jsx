import { Link } from 'react-router-dom'
import posts from '../utils/dummyData.js'

export default function Blog() {
    return (
        <section className="py-5" id="features">
            <div className="container py-4">
                <div className="text-center mb-5">
                    <h1 className="fw-bold">Blogs: Comunidad de Juegos de Mesa</h1>

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
                </div>
            </div>
        </section>
    )
}
