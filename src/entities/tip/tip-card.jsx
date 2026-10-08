import './tip-card.css'

// карточка совета: item = { image, title, date }
export function TipCard({ item }) {
  return (
    <article className="tip-card">
      <img className="tip-card__img" src={item.image} alt="" />
      <div className="tip-card__body">
        <h3 className="tip-card__title">{item.title}</h3>
        <p className="tip-card__date">{item.date}</p>
      </div>
    </article>
  )
}
