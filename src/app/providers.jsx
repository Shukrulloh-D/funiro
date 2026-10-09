import { ToastProvider } from '@/shared/ui/toast'
import { CartProvider } from '@/entities/cart/cart-context'
import { WishlistProvider } from '@/entities/wishlist/wishlist-context'
import { SearchProvider } from '@/features/search-form/search-context'

// все контексты приложения в одном месте
export function Providers({ children }) {
  return (
    <ToastProvider>
      <CartProvider>
        <WishlistProvider>
          <SearchProvider>{children}</SearchProvider>
        </WishlistProvider>
      </CartProvider>
    </ToastProvider>
  )
}
