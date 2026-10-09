import { Button } from '@/shared/ui/button'
import { ProductCard } from '@/entities/product/product-card'
import './products.css'

const products = [
  {
    image: '/images/product-1.png',
    name: 'Syltherine',
    text: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    oldPrice: 'Rp 3.500.000',
    badge: '-30%',
  },
  {
    image: '/images/product-2.png',
    name: 'Leviosa',
    text: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
  },
  {
    image: '/images/product-3.png',
    name: 'Lolito',
    text: 'Luxury big sofa',
    price: 'Rp 7.000.000',
    oldPrice: 'Rp 14.000.000',
    badge: '-50%',
  },
  {
    image: '/images/product-4.png',
    name: 'Respira',
    text: 'Minimalist fan',
    price: 'Rp 500.000',
    badge: 'New',
  },
  { image: '/images/product-5.png',
    name: 'Grifo',
    text: 'Night lamp',
    price: 'Rp 1.500.000' },
  {
    image: '/images/product-6.png',
    name: 'Muggo',
    text: 'Small mug',
    price: 'Rp 150.000',
    badge: 'New',
  },
  {
    image: '/images/product-7.png',
    name: 'Pingky',
    text: 'Cute bed set',
    price: 'Rp 7.000.000',
    oldPrice: 'Rp 14.000.000',
    badge: '-50%',
  },
  {
    image: '/images/product-8.png',
    name: 'Potty',
    text: 'Minimalist flower pot',
    price: 'Rp 500.000',
    badge: 'New',
  },
]

export function Products() {
  return (
    <section className="products" id="products">
      <div className="container">
        <h2 className="products-title">Our Products</h2>

        <div className="products-grid">
          {products.map((item) => (
            <ProductCard key={item.name} item={item} />
          ))}
        </div>

        <div className="products-more">
          <Button color="outline">Show More</Button>
        </div>
      </div>
    </section>
  )
}
