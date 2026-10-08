import './product-card.css'

// карточка товара: item = { image, name, text, price, oldPrice, badge }
// badge: '-30%' или 'New'. При наведении появляется тёмный слой с кнопками
export function ProductCard({ item }) {
  return (
    <article className="product-card">
      <div className="product-card__photo">
        <img src={item.image} alt={item.name} />
        {item.badge && (
          <span
            className={
              item.badge === 'New'
                ? 'product-card__badge product-card__badge--new'
                : 'product-card__badge'
            }
          >
            {item.badge}
          </span>
        )}
      </div>

      <div className="product-card__info">
        <h3 className="product-card__name">{item.name}</h3>
        <p className="product-card__text">{item.text}</p>
        <p className="product-card__price">
          {item.price}
          {item.oldPrice && <s>{item.oldPrice}</s>}
        </p>
      </div>

      <div className="product-card__hover">
        <button className="product-card__cart">Add to cart</button>
        <div className="product-card__links">
          <span>
            <img src="/images/share.svg" alt="" /> Share
          </span>
          <span>
            <img src="/images/like.svg" alt="" /> Like
          </span>
        </div>
      </div>
    </article>
  )
}
