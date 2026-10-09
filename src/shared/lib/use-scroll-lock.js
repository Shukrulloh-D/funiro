import { useEffect } from 'react'

// пока locked = true, страница под окном не прокручивается
export function useScrollLock(locked) {
  useEffect(() => {
    document.body.style.overflow = locked ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [locked])
}
