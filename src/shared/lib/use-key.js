import { useEffect } from 'react'

// вызывает handler, когда нажата клавиша (например 'Escape')
export function useKey(key, handler) {
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === key) handler(e)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [key, handler])
}
