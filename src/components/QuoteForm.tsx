import { useState, type FormEvent } from 'react'
import { trackEvent } from '../lib/analytics'
import './QuoteForm.css'

interface FormState {
  name: string
  email: string
  phone: string
  message: string
}

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [feedback, setFeedback] = useState('')

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setFeedback('')

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'เกิดข้อผิดพลาด')
      }

      setStatus('success')
      setFeedback(data.message || 'ส่งคำขอใบเสนอราคาเรียบร้อยแล้ว')
      setForm({ name: '', email: '', phone: '', message: '' })
      trackEvent('quote_form_submit', { form_name: 'quote_request' })
    } catch (err) {
      setStatus('error')
      setFeedback(err instanceof Error ? err.message : 'ไม่สามารถส่งได้ กรุณาลองใหม่')
    }
  }

  return (
    <div className="quote-form">
      <h2 className="quote-form__heading">ติดต่อเรา</h2>
      <h3 className="quote-form__subheading">ขอใบเสนอราคา</h3>
      <p className="quote-form__desc">
        กรอกแบบฟอร์มด้านล่าง เราจะติดต่อกลับโดยเร็วที่สุด
      </p>

      <form className="quote-form__form" onSubmit={handleSubmit}>
        <div className="quote-form__field">
          <label htmlFor="name">ชื่อ-นามสกุล</label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={handleChange('name')}
            required
            placeholder="ชื่อ-นามสกุล"
          />
        </div>

        <div className="quote-form__field">
          <label htmlFor="email">อีเมล</label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={handleChange('email')}
            required
            placeholder="example@email.com"
          />
        </div>

        <div className="quote-form__field">
          <label htmlFor="phone">เบอร์โทรศัพท์</label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange('phone')}
            required
            placeholder="0XX-XXX-XXXX"
          />
        </div>

        <div className="quote-form__field">
          <label htmlFor="message">ข้อความ</label>
          <textarea
            id="message"
            value={form.message}
            onChange={handleChange('message')}
            rows={5}
            placeholder="รายละเอียดสินค้าที่ต้องการ..."
          />
        </div>

        {feedback && (
          <p className={`quote-form__feedback quote-form__feedback--${status}`}>
            {feedback}
          </p>
        )}

        <button
          type="submit"
          className="quote-form__submit btn btn-red"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'กำลังส่ง...' : 'ส่ง'}
        </button>
      </form>
    </div>
  )
}
