import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import Logo from '../components/Logo'
import BrandGrid from '../components/BrandGrid'
import { PARTNERS } from '../data/siteData'
import './AboutPage.css'

export default function AboutPage() {
  return (
    <>
      <HeroSection variant="home" showCta={false} />

      <section className="about-history">
        <div className="container about-history__inner">
          <div className="about-history__logo">
            <Logo size={180} />
          </div>
          <div className="about-history__content">
            <h2 className="about-history__title">ประวัติบริษัท</h2>
            <p>
              บริษัท ร.ก. อะไหล่ยนต์ จำกัด ก่อตั้งขึ้นเมื่อกว่า 30 ปีที่แล้ว
              ด้วยความมุ่งมั่นในการเป็นคู่ค้าที่เชื่อถือได้ในธุรกิจอะไหล่รถยนต์
              เราเริ่มต้นจากร้านค้าเล็กๆ และเติบโตมาเป็นผู้จำหน่ายอะไหล่รถยนต์
              ที่ได้รับความไว้วางใจจากลูกค้าทั่วประเทศ
            </p>
            <p>
              ด้วยประสบการณ์และความเชี่ยวชาญที่สั่งสมมายาวนาน
              เราพร้อมให้บริการจัดหาอะไหล่แท้และอะไหล่เทียบคุณภาพสูง
              ครอบคลุมทุกยี่ห้อ ทุกรุ่น พร้อมทีมงานมืออาชีพที่พร้อมให้คำปรึกษา
              และบริการหลังการขายอย่างเต็มที่
            </p>
            <p>
              เรามุ่งมั่นที่จะเป็นพันธมิตรทางธุรกิจที่ดีที่สุดสำหรับลูกค้าทุกท่าน
              ด้วยสินค้าคุณภาพ ราคายุติธรรม และการบริการที่เป็นเลิศ
            </p>
          </div>
        </div>
      </section>

      <section className="about-partners">
        <div className="container">
          <h2 className="section-title">คู่ค้าของเรา</h2>
          <div className="partners-grid">
            {PARTNERS.map((partner) => (
              <div key={partner} className="partners-grid__item">
                <span>{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-services">
        <div className="container about-services__inner">
          <div className="about-services__content">
            <h2 className="about-services__title">เราจัดหาอะไร</h2>
            <p>
              เราจัดหาอะไหล่รถยนต์ครบวงจร ทั้งอะไหล่แท้ (Genuine Parts)
              และอะไหล่เทียบ (Aftermarket) จากแบรนด์ชั้นนำทั่วโลก
              ครอบคลุมสินค้าหลัก ได้แก่ แผงคอยล์แอร์ หม้อน้ำ อินเตอร์คูลเลอร์
              และอะไหล่อื่นๆ อีกมากมาย
            </p>
            <p>
              เรามีสินค้าสำหรับรถยนต์ทุกยี่ห้อ ทั้งรถเก๋ง รถกระบะ และรถ SUV
              พร้อมบริการจัดส่งทั่วประเทศและให้คำปรึกษาฟรี
            </p>
            <Link to="/products" className="btn btn-red about-services__cta">
              ดูเพิ่มเติม
            </Link>
          </div>
          <div className="about-services__brands">
            <div className="about-services__brand-icons">
              {['T', 'H', 'M', 'N', 'I', 'S', 'F'].map((letter) => (
                <div key={letter} className="about-services__brand-icon">
                  {letter}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BrandGrid title="แบรนด์ที่เราจำหน่าย" />
    </>
  )
}
