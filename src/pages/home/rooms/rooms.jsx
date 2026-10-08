import { Button } from '@/shared/ui/button'
import { Slider } from '@/shared/ui/slider'
import './rooms.css'

// TODO: проверить названия комнат по Figma (там видны только первые два слайда)
const rooms = [
  { image: '/images/room-1.png', number: '01', room: 'Bed Room', title: 'Inner Peace' },
  { image: '/images/room-2.png', number: '02', room: 'Dining Room', title: 'Family Table' },
  { image: '/images/room-3.png', number: '03', room: 'Living Room', title: 'Bright Space' },
  { image: '/images/room-4.png', number: '04', room: 'Kitchen', title: 'Fresh Start' },
]

export function Rooms() {
  return (
    <section className="rooms" id="rooms">
      <div className="rooms__inner">
        <div className="rooms__text">
          <h2 className="rooms__title">50+ Beautiful rooms inspiration</h2>
          <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
          <Button>Explore More</Button>
        </div>

        <Slider className="rooms__slider">
          {rooms.map((item) => (
            <div className="room" key={item.title}>
              <img className="room__img" src={item.image} alt={item.title} />
              <div className="room__caption">
                <div className="room__box">
                  <p>
                    {item.number} — {item.room}
                  </p>
                  <h3>{item.title}</h3>
                </div>
                <span className="room__arrow">→</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
