import {
  validateQuotePayload,
  sendQuoteViaResend,
} from '../_shared/quoteEmail.js'

const JSON_HEADERS = { 'Content-Type': 'application/json' }

export async function onRequestPost(context) {
  const { request, env } = context

  try {
    const body = await request.json()
    const validation = validateQuotePayload(body)

    if (!validation.ok) {
      return json({ error: validation.error }, 400)
    }

    if (!env.RESEND_API_KEY || !env.RESEND_FROM_EMAIL) {
      return json(
        { error: 'ระบบส่งอีเมลยังไม่ได้ตั้งค่า กรุณาติดต่อผู้ดูแลเว็บไซต์' },
        503,
      )
    }

    await sendQuoteViaResend({
      apiKey: env.RESEND_API_KEY,
      fromEmail: env.RESEND_FROM_EMAIL,
      payload: validation.data,
    })

    return json({
      success: true,
      message: 'ส่งคำขอใบเสนอราคาเรียบร้อยแล้ว',
    })
  } catch (err) {
    console.error('Quote email error:', err)
    return json({ error: 'ไม่สามารถส่งอีเมลได้ กรุณาลองใหม่อีกครั้ง' }, 500)
  }
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: JSON_HEADERS,
  })
}
