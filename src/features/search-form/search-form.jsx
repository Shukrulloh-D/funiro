import { scrollToId } from '@/shared/lib/scroll'
import { useSearch } from './search-context'
import './search-form.css'

export function SearchForm() {
  const { query, setQuery } = useSearch()

  function handleSubmit(e) {
    e.preventDefault()
    scrollToId('products')
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <img src="/images/search.svg" alt="" />
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for minimalist chair"
      />
      {query && (
        <button
          type="button"
          className="search-clear"
          aria-label="Clear"
          onClick={() => setQuery('')}
        >
          ✕
        </button>
      )}
    </form>
  )
}
