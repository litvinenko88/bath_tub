import Hero from '@/components/Hero'
import Advantages from '@/components/Advantages'
import ProductCards from '@/components/ProductCards'
import Promo from '@/components/Promo'
import Delivery from '@/components/Delivery'

export default function Home() {
  return (
    <main>
      <Hero />
      <Advantages />
      <ProductCards />
      <Promo />
      <Delivery />
    </main>
  )
}