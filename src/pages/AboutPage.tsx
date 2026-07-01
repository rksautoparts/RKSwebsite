import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import Logo from '../components/Logo'
import BrandGrid from '../components/BrandGrid'
import { fetchSiteImage, isSupabaseConfigured } from '../lib/supabase'
import './AboutPage.css'

const PARTNERS_BANNER_KEY = 'partners_banner'
const SERVICES_IMAGE_KEY = 'services_image'

export default function AboutPage() {
  const [partnersImage, setPartnersImage] = useState<string | null>(null)
  const [partnersAlt, setPartnersAlt] = useState('คู่ค้าของเรา')
  const [servicesImage, setServicesImage] = useState<string | null>(null)
  const [servicesAlt, setServicesAlt] = useState('เราจัดหาอะไร')

  useEffect(() => {
    if (!isSupabaseConfigured) return

    let active = true

    fetchSiteImage(PARTNERS_BANNER_KEY)
      .then((img) => {
        if (!active || !img) return
        setPartnersImage(img.image_url)
        if (img.alt) setPartnersAlt(img.alt)
      })
      .catch(() => {
        /* keep placeholder on error */
      })

    fetchSiteImage(SERVICES_IMAGE_KEY)
      .then((img) => {
        if (!active || !img) return
        setServicesImage(img.image_url)
        if (img.alt) setServicesAlt(img.alt)
      })
      .catch(() => {
        /* keep placeholder on error */
      })

    return () => {
      active = false
    }
  }, [])

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
          <div className="partners-banner">
            {partnersImage ? (
              <img src={partnersImage} alt={partnersAlt} width={1920} height={1080} />
            ) : (
              <div className="partners-banner__placeholder">
                <span>อัปโหลดรูปคู่ค้า (1920 × 1080) ใน Supabase ตาราง site_images</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="about-services">
        <div className="container about-services__inner">
          <div className="about-services__content">
            <h2 className="about-services__title">เราจัดหาอะไร</h2>
            <p>
            เราจัดหาและจำหน่ายอะไหล่รถยนต์ครบวงจรสำหรับรถยนต์แบรนด์ต่างๆ เช่น Toyota, Honda, Mazda, Isuzu, Nissan, Suzuki, Chevrolet และ Ford
            
            อะไหล่ที่เราจำหน่ายครอบคลุมทุกประเภท ตั้งแต่ บอดี้พาร์ท ระบบไฟ ช่วงล่าง ระบบระบายความร้อน
            
            ไม่ว่าจะเป็นอะไหล่แท้ราคาพิเศษ อะไหล่เทียบคุณภาพดี หรืออะไหล่มือสอง — เราจัดหาให้ได้ครบในที่เดียว

            </p>
            <Link to="/products" className="btn btn-red about-services__cta">
              ดูสินค้า
            </Link>
          </div>
          <div className="about-services__image">
            {servicesImage ? (
              <img src={servicesImage} alt={servicesAlt} width={1920} height={1080} />
            ) : (
              <div className="about-services__image-placeholder">
                <span>อัปโหลดรูป (1920 × 1080) ใน Supabase ตาราง site_images (key: services_image)</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <BrandGrid title="แบรนด์ที่เราจำหน่าย" />
    </>
  )
}
