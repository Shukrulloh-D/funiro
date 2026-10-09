import { SubscribeForm } from '@/features/subscribe-form/subscribe-form'
import './footer.css'

const columns = [
  { title: 'Menu', links: ['Products', 'Rooms', 'Inspirations', 'About Us', 'Terms & Policy'] },
  { title: 'Account', links: ['My Account', 'Checkout', 'My Cart', 'My catalog'] },
  { title: 'Stay Connected', links: ['Facebook', 'Instagram', 'Twitter'] },
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img className="footer-logo" src="/images/logo.svg" alt="Funiro" />
          <p className="footer-text">
            Worldwide furniture store since 2020. We sell over 1000+ branded products on our website
          </p>
          <p className="footer-contact">
            <img src="/images/location.svg" alt="" />
            Sawojajar Malang, Indonesia
          </p>
          <p className="footer-contact">
            <img src="/images/phone.svg" alt="" />
            +6289 456 3455
          </p>
          <p className="footer-text">www.funiro.com</p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="footer-title">{column.title}</h3>
            <ul className="footer-list">
              {column.links.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="footer-title">Stay Updated</h3>
          <SubscribeForm />
        </div>
      </div>
    </footer>
  )
}
