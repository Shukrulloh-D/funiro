import { useState } from 'react'
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
      <div className="header-bar">
        <a href="#top">
          <img className="header-logo" src="/images/logo.svg" alt="Funiro" />
        </a>

        <nav className={open ? 'nav nav--open' : 'nav'}>
          <ul className="nav-list" onClick={() => setOpen(false)}>
            {menu.map((item) => (
              <li className="nav-item" key={item.name}>
                <a href={item.href}>
                  {item.name}
                  {item.sub && ' ⌵'}
                </a>
                {item.sub && (
                  <ul className="nav-sub">
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
          {/* поиск: обычная форма, логики пока нет */}
          <form className="search">
            <img src="/images/search.svg" alt="" />
            <input type="search" name="q" placeholder="Search for minimalist chair" />
          </form>
        </nav>

        <div className="header-icons">
          <img src="/images/heart.svg" alt="Wishlist" />
          <img src="/images/cart.svg" alt="Cart" />
          <img className="header-avatar" src="/images/avatar.png" alt="Profile" />
        </div>

        <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
      </div>
    </header>
  )
}
