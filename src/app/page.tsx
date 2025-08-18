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
import ScrollQuizModal from '@/components/ScrollQuizModal'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Advantages />
        <section id="catalog">
          <ProductCards />
        </section>
        <Promo />
        <section id="delivery">
          <Delivery />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="heating">
          <HeatingTypes />
        </section>
        <Gallery />
        <Features />
        <Benefits />
        <FAQ />
        <section id="about">
          <About />
        </section>
      </main>
      <section id="contacts">
        <Footer />
      </section>
      <ScrollQuizModal />
    </>
  )
}