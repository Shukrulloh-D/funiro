import './product-card.css'

// карточка товара при наведении
export function ProductCard({ item }) {
  return (
    <article className="product-card">
      <div className="product-card-photo">
        <img src={item.image} alt={item.name} />
        {item.badge && (
          <span
            className={
              item.badge === 'New'
                ? 'product-card-badge product-card-badge--new'
                : 'product-card-badge'
            }
          >
            {item.badge}
          </span>
        )}
      </div>

      <div className="product-card-info">
        <h3 className="product-card-name">{item.name}</h3>
        <p className="product-card-text">{item.text}</p>
        <p className="product-card-price">
          {item.price}
          {item.oldPrice && <s>{item.oldPrice}</s>}
        </p>
      </div>

      <div className="product-card-hover">
        <button className="product-card-cart">Add to cart</button>
        <div className="product-card-links">
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
