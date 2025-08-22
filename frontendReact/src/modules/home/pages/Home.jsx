import Hero from '../components/Hero'
import Features from '../components/Features'
import FeaturedProducts from '../components/FeaturedProducts'
import FeaturedBlogs from '../components/FeaturedBlogs'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import CallToAction from '../components/CallToAction'
import MarketplacePromo from '../components/MarketplacePromo'

export default function Home() {
    return (
        <>
            <Hero />
            <Features />
            <MarketplacePromo />
            <FeaturedProducts />
            <FeaturedBlogs />
            <Testimonials />
            <Newsletter />
            <CallToAction />
        </>
    )
}
