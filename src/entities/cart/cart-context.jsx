import { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react'

const CartContext = createContext(null)


function cartReducer(items, action) {
  switch (action.type) {
    case 'add': {
      const found = items.find((item) => item.id === action.item.id)
      if (found) {
        return items.map((item) => (item.id === found.id ? { ...item, qty: item.qty + 1 } : item))
      }
      return [...items, { ...action.item, qty: 1 }]
    }
    case 'change':
      return items.map((item) =>
        item.id === action.id ? { ...item, qty: Math.max(1, item.qty + action.delta) } : item,
      )
    case 'remove':
      return items.filter((item) => item.id !== action.id)
    case 'clear':
      return []
    default:
      return items
  }
}

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem('funiro-cart')) || []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], loadCart)
  const [open, setOpen] = useState(false) // открыта ли панель корзины

  useEffect(() => {
    localStorage.setItem('funiro-cart', JSON.stringify(items))
  }, [items])

  const value = useMemo(
    () => ({
      items,
      open,
      setOpen,
      count: items.reduce((sum, item) => sum + item.qty, 0),
      total: items.reduce((sum, item) => sum + item.price * item.qty, 0),
      add: (item) => dispatch({ type: 'add', item }),
      changeQty: (id, delta) => dispatch({ type: 'change', id, delta }),
      remove: (id) => dispatch({ type: 'remove', id }),
      clear: () => dispatch({ type: 'clear' }),
    }),
    [items, open],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  return useContext(CartContext)
}
