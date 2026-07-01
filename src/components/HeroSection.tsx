import { Link } from 'react-router-dom'
import './HeroSection.css'

interface HeroSectionProps {
  variant?: 'home' | 'products' | 'contact' | 'sumo'
  title?: string
  subtitle?: string
  showCta?: boolean
  ctaText?: string
  ctaLink?: string
}

export default function HeroSection({
  variant = 'home',
  title,
  subtitle,
  showCta = false,
  ctaText = 'ดูสินค้าของเรา',
  ctaLink = '/products',
}: HeroSectionProps) {
  const defaultTitles: Record<string, { title: string; subtitle?: string }> = {
    home: {
      title: 'คู่ค้าอะไหล่รถยนต์ที่ได้รับ\nความไว้วางใจมากว่า 30 ปี',
      subtitle: 'จำหน่ายอะไหล่แท้และอะไหล่เทียบครบวงจร ทุกยี่ห้อ ทุกรุ่น',
    },
    products: {
      title: 'ทางเรายินดีให้คำปรึกษาฟรี',
      subtitle: 'โทร 02-621-1297 / 02-621-1488 | Line: @rksautoparts',
    },
    contact: {
      title: 'ทางเรายินดีให้คำปรึกษาฟรี',
      subtitle: 'โทร 02-621-1297 / 02-621-1488 | Line: @rksautoparts',
    },
    sumo: {
      title: 'แบรนด์อะไหล่ชั้นนำของเรา',
      subtitle: 'SUMO AUTOMOTIVE PARTS',
    },
  }

  const content = defaultTitles[variant]
  const displayTitle = title ?? content.title
  const displaySubtitle = subtitle ?? content.subtitle

  return (
    <section className={`hero hero--${variant}`}>
      <div className="hero__overlay" />
      <div className="container hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">
            {displayTitle.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < displayTitle.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h1>
          {displaySubtitle && <p className="hero__subtitle">{displaySubtitle}</p>}
          {showCta && (
            <Link to={ctaLink} className="btn btn-blue hero__cta">
              {ctaText}
            </Link>
          )}
        </div>

        {variant === 'home' && (
          <div className="hero__image">
            <img
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=700&h=500&fit=crop"
              alt="อะไหล่รถยนต์"
              width={560}
              height={400}
            />
          </div>
        )}

        {(variant === 'products' || variant === 'contact') && (
          <div className="hero__brand">
            <div className="hero__sumo-logo">SUMO</div>
            <p className="hero__brand-tagline">แบรนด์อะไหล่ชั้นนำของเรา</p>
          </div>
        )}

        {variant === 'sumo' && (
          <div className="hero__sumo-products">
            <img
              src="https://images.unsplash.com/photo-1619642751034-765df0367e84?w=600&h=400&fit=crop"
              alt="SUMO Products"
              width={480}
              height={320}
            />
          </div>
        )}
      </div>
    </section>
  )
}
