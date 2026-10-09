import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import './toast.css'

const ToastContext = createContext(null)

// Показывает короткие сообщения внизу экрана: const toast = useToast(); toast.show('Привет')
export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const show = useCallback((message) => {
    const id = Date.now() + Math.random()
    setToasts((list) => [...list, { id, message }])
    // через 2.5 секунды убираем сообщение
    setTimeout(() => setToasts((list) => list.filter((t) => t.id !== id)), 2500)
  }, [])

  const value = useMemo(() => ({ show }), [show])

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="toasts" aria-live="polite">
        {toasts.map((toast) => (
          <div className="toast" key={toast.id}>
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  return useContext(ToastContext)
}
