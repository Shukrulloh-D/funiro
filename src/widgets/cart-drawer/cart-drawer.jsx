import { Button } from '@/shared/ui/button'
import { useToast } from '@/shared/ui/toast'
import { formatPrice } from '@/shared/lib/format'
import { useKey } from '@/shared/lib/use-key'
import { useScrollLock } from '@/shared/lib/use-scroll-lock'
import { useCart } from '@/entities/cart/cart-context'
import './cart-drawer.css'

// выезжающая панель корзины
export function CartDrawer() {
  const cart = useCart()
  const toast = useToast()

  useKey('Escape', () => cart.setOpen(false))
  useScrollLock(cart.open)

  function checkout() {
    toast.show('Order placed (demo)')
    cart.clear()
    cart.setOpen(false)
  }

  return (
    <div className={cart.open ? 'cart cart--open' : 'cart'}>
      <div className="cart__overlay" onClick={() => cart.setOpen(false)} />

      <aside className="cart__panel" aria-label="Shopping cart">
        <div className="cart__head">
          <h2>Shopping Cart ({cart.count})</h2>
          <button aria-label="Close cart" onClick={() => cart.setOpen(false)}>
            ✕
          </button>
        </div>

        {cart.items.length === 0 ? (
          <p className="cart__empty">Your cart is empty</p>
        ) : (
          <ul className="cart__list">
            {cart.items.map((item) => (
              <li className="cart__item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart__info">
                  <h3>{item.name}</h3>
                  <p>{formatPrice(item.price)}</p>
                  <div className="cart__qty">
                    <button aria-label="Less" onClick={() => cart.changeQty(item.id, -1)}>
                      −
                    </button>
                    <span>{item.qty}</span>
                    <button aria-label="More" onClick={() => cart.changeQty(item.id, 1)}>
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="cart__remove"
                  aria-label="Remove"
                  onClick={() => cart.remove(item.id)}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="cart__foot">
          <p>
            Subtotal <strong>{formatPrice(cart.total)}</strong>
          </p>
          <div className="cart__buttons">
            <Button color="outline" size="sm" onClick={cart.clear} disabled={!cart.count}>
              Clear
            </Button>
            <Button size="sm" onClick={checkout} disabled={!cart.count}>
              Checkout
            </Button>
          </div>
        </div>
      </aside>
    </div>
  )
}
