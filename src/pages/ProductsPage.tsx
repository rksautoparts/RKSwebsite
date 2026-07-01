import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import BrandGrid from '../components/BrandGrid'
import { AFTERMARKET_BRANDS, MAIN_PRODUCTS } from '../data/siteData'
import './ProductsPage.css'

export default function ProductsPage() {
  return (
    <>
      <HeroSection variant="products" />

      <section className="products-section">
        <div className="container">
          <h2 className="section-title">Genuine Parts อะไหล่แท้</h2>
          <p className="products-section__desc">
          เราเป็นผู้จัดหาและจำหน่ายอะไหล่แท้ให้กับบริษัทประกันชั้นนำและอู่ทั่วประเทศมากว่า 30 ปี ทำให้เรามีความสัมพันธ์อันดีกับศูนย์บริการต่างๆ ได้แก่ 
          Toyota, Honda, Mazda, Nissan, Isuzu, Suzuki, Mitsubishi, Chevrolet และ Ford
          
          และอะไหล่แท้ศูนย์รถจีนที่กำลังมาแรงในไทย ได้แก่ BYD, GWM, GAC Motor และ Changan 
          เราติดตามตลาดอย่างใกล้ชิดและพร้อมจัดหาอะไหล่รุ่นใหม่ล่าสุดให้คุณได้ก่อนใคร
          </p>
        </div>
      </section>

      <BrandGrid title="" showCountry />

      <section className="aftermarket-section">
        <div className="container">
          <h2 className="section-title">Aftermarket อะไหล่เทียบ</h2>
          <div className="aftermarket-grid">
            {AFTERMARKET_BRANDS.map((brand) => (
              <div key={brand.name} className="aftermarket-grid__item">
                <div
                  className="aftermarket-grid__logo"
                  style={{ backgroundColor: brand.color }}
                >
                  <span>{brand.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="main-products-section">
        <div className="container">
          <h2 className="section-title">สินค้าหลักของเรา</h2>
          <div className="main-products-grid">
            {MAIN_PRODUCTS.map((product) => (
              <div key={product.title} className="main-products-grid__item">
                <div className="main-products-grid__image">
                  <img src={product.image} alt={product.title} width={280} height={360} />
                </div>
                <h3 className="main-products-grid__title">{product.title}</h3>
              </div>
            ))}
          </div>
          <div className="main-products-section__cta">
            <Link to="/sumo" className="btn btn-red">
              ดูเพิ่มเติม
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
