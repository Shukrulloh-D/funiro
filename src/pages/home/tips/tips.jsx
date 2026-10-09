import { Slider } from '@/shared/ui/slider'
import './tips.css'

// TODO: 4-я карточка временная, заменить по Figma
const tips = [
  { image: '/images/tip-1.png', title: 'How to create a living room to love', date: '20 jan 2020' },
  {
    image: '/images/tip-2.png',
    title: 'Solution for clean look working space',
    date: '10 jan 2020',
  },
  {
    image: '/images/tip-3.png',
    title: 'Make your cooking activity more fun with good setup',
    date: '20 jan 2020',
  },
  {
    image: '/images/tip-4.png',
    title: 'How to choose the right sofa for a small room',
    date: '05 jan 2020',
  },
]

export function Tips() {
  return (
    <section className="tips" id="tips">
      <div className="container">
        <h2 className="tips__title">Tips &amp; Tricks</h2>

        <Slider className="tips__slider">
          {tips.map((tip) => (
            <article className="tip-card" key={tip.title}>
              <img className="tip-card__img" src={tip.image} alt="" />
              <div className="tip-card__body">
                <h3 className="tip-card__title">{tip.title}</h3>
                <p className="tip-card__date">{tip.date}</p>
              </div>
            </article>
          ))}
        </Slider>
      </div>
    </section>
  )
}
