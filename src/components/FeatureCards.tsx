import './FeatureCards.css'

const FEATURES = [
  {
    icon: 'shield',
    title: 'เชื่อมั่น',
    description: 'ได้รับความไว้วางใจมากว่า 30 ปี',
  },
  {
    icon: 'gear',
    title: 'ครบวงจร',
    description: 'อะไหล่แท้และอะไหล่เทียบครบทุกยี่ห้อ',
  },
  {
    icon: 'star',
    title: 'คุณภาพ',
    description: 'สินค้าคุณภาพจากแบรนด์ชั้นนำ',
  },
]

export default function FeatureCards() {
  return (
    <section className="features">
      <div className="container">
        <div className="features__grid">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="features__card">
              <div className="features__icon">
                {feature.icon === 'shield' && <ShieldIcon />}
                {feature.icon === 'gear' && <GearIcon />}
                {feature.icon === 'star' && <StarIcon />}
              </div>
              <h3 className="features__title">{feature.title}</h3>
              <p className="features__desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ShieldIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function GearIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
