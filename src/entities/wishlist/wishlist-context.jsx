import { createContext, useContext, useMemo } from 'react'
import { useLocalStorage } from '@/shared/lib/use-local-storage'

const WishlistContext = createContext(null)

// избранное: хранит id товаров, сохраняется в localStorage
export function WishlistProvider({ children }) {
  const [ids, setIds] = useLocalStorage('funiro-wishlist', [])

  const value = useMemo(
    () => ({
      ids,
      count: ids.length,
      has: (id) => ids.includes(id),
      toggle: (id) =>
        setIds((list) => (list.includes(id) ? list.filter((x) => x !== id) : [...list, id])),
    }),
    [ids, setIds],
  )

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
}

export function useWishlist() {
  return useContext(WishlistContext)
}
