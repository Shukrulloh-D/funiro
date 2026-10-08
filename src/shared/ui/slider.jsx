import { useRef, useState } from 'react'
import './slider.css'

// Слайдер: листается пальцем, стрелками и точками.
// Каждый дочерний элемент = один слайд. Положение стрелок и точек задаём в CSS секции.
export function Slider({ children, className = '' }) {
  const track = useRef(null)
  const [index, setIndex] = useState(0)
  const slides = Array.isArray(children) ? children : [children]

  // считаем, какой слайд сейчас первый слева
  function handleScroll() {
    const el = track.current
    const items = [...el.children]
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5
    const first = items.findIndex((item) => item.offsetLeft >= el.scrollLeft - 5)
    setIndex(atEnd ? items.length - 1 : first)
  }

  function goTo(i) {
    const items = track.current.children
    const item = items[Math.min(Math.max(i, 0), items.length - 1)]
    track.current.scrollTo({ left: item.offsetLeft, behavior: 'smooth' })
  }

  return (
    <div className={`slider ${className}`}>
      <div className="slider__track" ref={track} onScroll={handleScroll}>
        {slides.map((slide, i) => (
          <div className={i === index ? 'slider__slide is-active' : 'slider__slide'} key={i}>
            {slide}
          </div>
        ))}
      </div>

      <button
        className="slider__arrow slider__arrow--prev"
        aria-label="Previous"
        onClick={() => goTo(index - 1)}
      >
        ‹
      </button>
      <button
        className="slider__arrow slider__arrow--next"
        aria-label="Next"
        onClick={() => goTo(index + 1)}
      >
        ›
      </button>

      <div className="slider__dots">
        {slides.map((slide, i) => (
          <button
            key={i}
            className={i === index ? 'slider__dot is-active' : 'slider__dot'}
            aria-label={`Slide ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  )
}
