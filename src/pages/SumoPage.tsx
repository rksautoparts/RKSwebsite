import { useEffect, useState } from 'react'
import HeroSection from '../components/HeroSection'
import { fetchProducts, isSupabaseConfigured, type Product } from '../lib/supabase'
import './SumoPage.css'

export default function SumoPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setStatus('error')
      setErrorMsg('ยังไม่ได้ตั้งค่า Supabase (VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY)')
      return
    }

    let active = true
    fetchProducts()
      .then((data) => {
        if (!active) return
        setProducts(data)
        setStatus('ready')
      })
      .catch((err) => {
        if (!active) return
        setErrorMsg(err instanceof Error ? err.message : 'โหลดสินค้าไม่สำเร็จ')
        setStatus('error')
      })

    return () => {
      active = false
    }
  }, [])

  // Preserve category order as it first appears in the sorted data
  const categories = products.reduce<string[]>((acc, product) => {
    if (!acc.includes(product.category)) acc.push(product.category)
    return acc
  }, [])

  return (
    <>
      <HeroSection variant="sumo" />

      <section className="sumo-catalog">
        <div className="container">
          <h2 className="section-title">สินค้าของเรา</h2>

          {status === 'loading' && (
            <p className="sumo-catalog__state">กำลังโหลดสินค้า...</p>
          )}

          {status === 'error' && (
            <p className="sumo-catalog__state sumo-catalog__state--error">{errorMsg}</p>
          )}

          {status === 'ready' && products.length === 0 && (
            <p className="sumo-catalog__state">ยังไม่มีสินค้าในระบบ</p>
          )}

          {status === 'ready' &&
            categories.map((category) => {
              const items = products.filter((p) => p.category === category)

              return (
                <div key={category} className="sumo-category">
                  <h3 className="sumo-category__title">{category}</h3>
                  <div className="sumo-products-grid">
                    {items.map((product) => (
                      <div key={product.id} className="sumo-product-card">
                        <div className="sumo-product-card__image">
                          <img
                            src={product.image_url}
                            alt={product.name}
                            width={240}
                            height={240}
                            loading="lazy"
                          />
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
