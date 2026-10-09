import { createContext, useContext, useMemo, useState } from 'react'

const SearchContext = createContext(null)

// общий текст поиска: поле в шапке пишет, список товаров читает
export function SearchProvider({ children }) {
  const [query, setQuery] = useState('')
  const value = useMemo(() => ({ query, setQuery }), [query])
  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
}

export function useSearch() {
  return useContext(SearchContext)
}
