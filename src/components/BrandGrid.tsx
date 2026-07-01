import { CAR_BRANDS } from '../data/siteData'
import './BrandGrid.css'

interface BrandGridProps {
  title?: string
  showCountry?: boolean
}

export default function BrandGrid({ title = 'แบรนด์ที่เราจำหน่าย', showCountry = true }: BrandGridProps) {
  return (
    <section className="brand-grid-section">
      <div className="container">
        {title ? <h2 className="section-title">{title}</h2> : null}
        <div className="brand-grid">
          {CAR_BRANDS.map((brand) => (
            <div key={brand.name} className="brand-grid__item">
              {showCountry && (
                <div className="brand-grid__meta">
                  <span className="brand-grid__name">{brand.name}</span>
                  <span className="brand-grid__country">{brand.country}</span>
                </div>
              )}
              <div className="brand-grid__logo">
                <span className="brand-grid__logo-text">{brand.name.charAt(0)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
