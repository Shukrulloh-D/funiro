import { useEffect, useState } from 'react'

// возвращает значение с задержкой: обновляется, когда пользователь перестал печатать
export function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debounced
}
