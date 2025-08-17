import Hero from '@/components/Hero'
import Advantages from '@/components/Advantages'
import ProductCards from '@/components/ProductCards'
import Promo from '@/components/Promo'
import Delivery from '@/components/Delivery'
import Pricing from '@/components/Pricing'
import HeatingTypes from '@/components/HeatingTypes'
import Gallery from '@/components/Gallery'
import Features from '@/components/Features'
import Benefits from '@/components/Benefits'
import FAQ from '@/components/FAQ'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Advantages />
        <ProductCards />
        <Promo />
        <Delivery />
        <Pricing />
        <HeatingTypes />
        <Gallery />
        <Features />
        <Benefits />
        <FAQ />
        <About />
      </main>
      <Footer />
    </>
  )
}