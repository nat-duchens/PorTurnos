import { useParams, Link } from 'react-router-dom'
import posts from '../utils/dummyData.js'

export default function Post() {
    const { slug } = useParams()
    const post = posts.find(p => p.slug === slug)

    if (!post) {
        return (
            <section className="py-5">
                <div className="container">
                    <p>Post no encontrado. <Link to="/blog">Volver al blog</Link></p>
                </div>
            </section>
        )
    }

    return (
        <div className="container my-4">
            <div className="row g-4">

                <article className="col-lg-8">
                    <h1 className="display-6 fw-bold gradient-title">{post.title}</h1>
                    <p className="text-secondary small">
                        por <strong>{post.author}</strong> · {post.date} · {post.readTime}
                    </p>

                    {post.paragraphs?.map((txt, i) => <p key={i}>{txt}</p>)}

                    {post.bullets?.length ? (
                        <ul>
                            {post.bullets.map((b, i) => <li key={i}>{b}</li>)}
                        </ul>
                    ) : null}

                    {post.image ? (
                        <div className="ratio ratio-4x3 my-3">
                            <img className="w-100 h-100 object-fit-cover rounded-3" src={post.image} alt={post.title} />
                        </div>
                    ) : null}

                    <hr className="my-4" />

                    {/* Placeholder de comentarios (deshabilitado como en tu HTML) */}
                    <section aria-labelledby="comentarios">
                        <h2 id="comentarios" className="h5 mb-3">Comentarios</h2>

                        <div className="border-start ps-3 mb-3">
                            <strong>Demo</strong>
                            <p className="mb-1">¡Tu sistema de comentarios irá aquí!</p>
                            <span className="text-secondary small">hace 1 hora</span>
                        </div>

                        <form onSubmit={(e) => e.preventDefault()}>
                            <label className="form-label" htmlFor="comentario">Escribe tu comentario:</label>
                            <textarea id="comentario" className="form-control" rows="4" placeholder="Sé amable y mantén el tema." />
                            <button type="button" className="btn btn-dark mt-2" disabled>Publicar (próximamente)</button>
                        </form>
                    </section>
                </article>

                <aside className="col-lg-4">
                    {post.aside ? (
                        <article className="juego_mesa p-0 rounded-3 overflow-hidden">
                            {post.aside.image ? (
                                <img className="w-100 ratio-16x9 rounded-3" src={post.aside.image} alt="aside" />
                            ) : null}
                            <div className="p-3">
                                {post.aside.text ? <p className="small text-secondary mb-2"><strong>{post.aside.text}</strong></p> : null}
                                {post.aside.list?.length ? (
                                    <ul className="small mb-0">
                                        {post.aside.list.map((i, idx) => <li key={idx}>{i}</li>)}
                                    </ul>
                                ) : null}
                            </div>
                        </article>
                    ) : null}

                    <Link className="btn btn-outline-dark btn-rosa w-100 mt-3" to="/blog">← Volver al Blog</Link>
                </aside>

            </div>
        </div>
    )
}
