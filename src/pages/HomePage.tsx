import HeroSection from '../components/HeroSection'
import FeatureCards from '../components/FeatureCards'
import BrandGrid from '../components/BrandGrid'

export default function HomePage() {
  return (
    <>
      <HeroSection variant="home" showCta ctaText="ดูสินค้าของเรา" ctaLink="/products" />
      <FeatureCards />
      <BrandGrid />
    </>
  )
}
