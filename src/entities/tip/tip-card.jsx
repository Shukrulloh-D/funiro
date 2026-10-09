import './tip-card.css'

// карточка совета: item = { image, title, date }
export function TipCard({ item }) {
  return (
    <article className="tip-card">
      <img className="tip-card-img" src={item.image} alt="" />
      <div className="tip-card-body">
        <h3 className="tip-card-title">{item.title}</h3>
        <p className="tip-card-date">{item.date}</p>
      </div>
    </article>
  )
}
