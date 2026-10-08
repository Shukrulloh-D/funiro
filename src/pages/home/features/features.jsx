import './features.css'

const features = [
  { icon: '/images/quality.svg', title: 'High Quality', text: 'crafted from top materials' },
  { icon: '/images/warranty.svg', title: 'Warranty Protection', text: 'Over 2 years' },
  { icon: '/images/shipping.svg', title: 'Free Shipping', text: 'Order over 150 $' },
  { icon: '/images/support.svg', title: '24 / 7 Support', text: 'Dedicated support' },
]

export function Features() {
  return (
    <section className="features">
      <div className="container features__list">
        {features.map((item) => (
          <div className="feature" key={item.title}>
            <img className="feature__icon" src={item.icon} alt="" />
            <div>
              <h3 className="feature__title">{item.title}</h3>
              <p className="feature__text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
