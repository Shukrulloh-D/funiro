import { useState } from 'react'
import { SearchForm } from '@/features/search-form/search-form'
import './header.css'

// sub = выпадающий список на компьютере
const menu = [
  { name: 'Products', href: '#products', sub: ['Chairs', 'Sofas', 'Tables', 'Lamps'] },
  { name: 'Rooms', href: '#rooms', sub: ['Bed Room', 'Living Room', 'Dining Room', 'Kitchen'] },
  { name: 'Inspirations', href: '#tips' },
]

export function Header() {
  // открыто ли меню на телефоне
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__bar">
        <a href="#top">
          <img className="header__logo" src="/images/logo.svg" alt="Funiro" />
        </a>

        <nav className={open ? 'nav nav--open' : 'nav'} onClick={() => setOpen(false)}>
          <ul className="nav__list">
            {menu.map((item) => (
              <li className="nav__item" key={item.name}>
                <a href={item.href}>
                  {item.name}
                  {item.sub && ' ⌵'}
                </a>
                {item.sub && (
                  <ul className="nav__sub">
                    {item.sub.map((name) => (
                      <li key={name}>
                        <a href={item.href}>{name}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          {/* клик по поиску не закрывает меню */}
          <div onClick={(e) => e.stopPropagation()}>
            <SearchForm />
          </div>
        </nav>

        <div className="header__icons">
          <img src="/images/heart.svg" alt="Wishlist" />
          <img src="/images/cart.svg" alt="Cart" />
          <img className="header__avatar" src="/images/avatar.png" alt="Profile" />
        </div>

        <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
      </div>
    </header>
  )
}
