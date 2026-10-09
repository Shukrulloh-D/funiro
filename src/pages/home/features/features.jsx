import './features.css'

const features = [
  { icon: '/images/quality.png', title: 'High Quality', text: 'crafted from top materials' },
  { icon: '/images/warranty.png', title: 'Warranty Protection', text: 'Over 2 years' },
  { icon: '/images/shipping.png', title: 'Free Shipping', text: 'Order over 150 $' },
  { icon: '/images/support.png', title: '24 / 7 Support', text: 'Dedicated support' },
]

export function Features() {
  return (
    <section className="features">
      <div className="container features-list">
        {features.map((item) => (
          <div className="feature" key={item.title}>
            <img className="feature-icon" src={item.icon} alt="" />
            <div>
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
