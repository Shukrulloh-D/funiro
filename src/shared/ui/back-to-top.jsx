import { useScrolled } from '../lib/use-scrolled'
import { scrollToId } from '../lib/scroll'
import './back-to-top.css'

// кнопка "наверх" появляется, когда страница прокручена
export function BackToTop() {
  const visible = useScrolled(700)

  return (
    <button
      className={visible ? 'to-top to-top--visible' : 'to-top'}
      aria-label="Back to top"
      onClick={() => scrollToId('top')}
    >
      ↑
    </button>
  )
}
