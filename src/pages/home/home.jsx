import { Header } from '@/widgets/header/header'
import { Footer } from '@/widgets/footer/footer'
import { Hero } from './hero/hero'
import { Features } from './features/features'
import { Products } from './products/products'
import { Rooms } from './rooms/rooms'
import { Tips } from './tips/tips'
import { Setup } from './setup/setup'

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Products />
        <Rooms />
        <Tips />
        <Setup />
      </main>
      <Footer />
    </>
  )
}
