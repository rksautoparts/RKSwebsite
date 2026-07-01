import HeroSection from '../components/HeroSection'
import { SUMO_PRODUCTS } from '../data/siteData'
import './SumoPage.css'

export default function SumoPage() {
  const categories = ['แผงคอยล์แอร์', 'หม้อน้ำ', 'อินเตอร์คูลเลอร์']

  return (
    <>
      <HeroSection variant="sumo" />

      <section className="sumo-catalog">
        <div className="container">
          <h2 className="section-title">สินค้าของเรา</h2>

          {categories.map((category) => {
            const products = SUMO_PRODUCTS.filter((p) => p.type === category)
            if (products.length === 0) return null

            return (
              <div key={category} className="sumo-category">
                <h3 className="sumo-category__title">{category}</h3>
                <div className="sumo-products-grid">
                  {products.map((product, idx) => (
                    <div key={`${product.model}-${idx}`} className="sumo-product-card">
                      <div className="sumo-product-card__image">
                        <img
                          src={`https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&h=240&fit=crop&sig=${idx}`}
                          alt={product.model}
                          width={240}
                          height={180}
                        />
                      </div>
                      <div className="sumo-product-card__brand">
                        <span>{product.brand.charAt(0)}</span>
                      </div>
                      <div className="sumo-product-card__info">
                        <p className="sumo-product-card__model">{product.model}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
