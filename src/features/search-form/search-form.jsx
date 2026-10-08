import './search-form.css'

// поиск. Пока без логики: форма отправляется как обычная
export function SearchForm() {
  return (
    <form className="search">
      <img src="/images/search.svg" alt="" />
      <input type="search" name="q" placeholder="Search for minimalist chair" />
    </form>
  )
}
