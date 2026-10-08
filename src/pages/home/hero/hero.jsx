import { Button } from '@/shared/ui/button'
import { Slider } from '@/shared/ui/slider'
import './hero.css'

// TODO: взять настоящие названия и цены из Figma для 2-4 слайдов
const slides = [
  {
    image: '/images/hero-1.png',
    name: 'Bohauss',
    text: 'Luxury big sofa 2-seat',
    price: 'Rp 17.000.000',
  },
  { image: '/images/hero-2.png', name: 'Lolito', text: 'Luxury big sofa', price: 'Rp 7.000.000' },
  { image: '/images/hero-3.png', name: 'Respira', text: 'Minimalist fan', price: 'Rp 500.000' },
  { image: '/images/hero-4.png', name: 'Grifo', text: 'Night lamp', price: 'Rp 1.500.000' },
]

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <div className="hero__card">
          <h1 className="hero__title">High-Quality Furniture Just For You</h1>
          <p className="hero__text">
            Our furniture is made from selected and best quality materials that are suitable for
            your dream home
          </p>
          <Button size="lg">Shop Now</Button>
        </div>

        <Slider className="hero__slider">
          {slides.map((slide) => (
            <div className="hero-slide" key={slide.name}>
              <img className="hero-slide__img" src={slide.image} alt={slide.name} />
              <div className="hero-slide__caption">
                <div>
                  <h2>{slide.name}</h2>
                  <p>{slide.text}</p>
                  <strong>{slide.price}</strong>
                </div>
                <span>→</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
