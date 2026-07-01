import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import {
  validateQuotePayload,
  sendQuoteViaResend,
} from '../functions/_shared/quoteEmail.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.post('/api/quote', async (req, res) => {
  const validation = validateQuotePayload(req.body)

  if (!validation.ok) {
    return res.status(400).json({ error: validation.error })
  }

  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
    return res.status(503).json({
      error: 'ระบบส่งอีเมลยังไม่ได้ตั้งค่า กรุณาติดต่อผู้ดูแลเว็บไซต์',
    })
  }

  try {
    await sendQuoteViaResend({
      apiKey: process.env.RESEND_API_KEY,
      fromEmail: process.env.RESEND_FROM_EMAIL,
      payload: validation.data,
    })

    res.json({ success: true, message: 'ส่งคำขอใบเสนอราคาเรียบร้อยแล้ว' })
  } catch (err) {
    console.error('Email send error:', err)
    res.status(500).json({ error: 'ไม่สามารถส่งอีเมลได้ กรุณาลองใหม่อีกครั้ง' })
  }
})

app.listen(PORT, () => {
  console.log(`Email API running on http://localhost:${PORT}`)
})
