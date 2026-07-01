const RECIPIENT = 'rksautopart@gmail.com'

export function validateQuotePayload(body) {
  const { name, email, phone } = body ?? {}

  if (!name?.trim() || !email?.trim() || !phone?.trim()) {
    return { ok: false, error: 'กรุณากรอกข้อมูลให้ครบถ้วน' }
  }

  return {
    ok: true,
    data: {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      message: body.message?.trim() || '',
    },
  }
}

export function buildQuoteEmail({ name, email, phone, message }) {
  const textMessage = message || '(ไม่มีข้อความ)'

  return {
    to: RECIPIENT,
    replyTo: email,
    subject: `[ขอใบเสนอราคา] ${name}`,
    text: [
      `ชื่อ-นามสกุล: ${name}`,
      `อีเมล: ${email}`,
      `เบอร์โทรศัพท์: ${phone}`,
      '',
      'ข้อความ:',
      textMessage,
    ].join('\n'),
    html: `
      <h2>คำขอใบเสนอราคาใหม่จากเว็บไซต์</h2>
      <p><strong>ชื่อ-นามสกุล:</strong> ${escapeHtml(name)}</p>
      <p><strong>อีเมล:</strong> ${escapeHtml(email)}</p>
      <p><strong>เบอร์โทรศัพท์:</strong> ${escapeHtml(phone)}</p>
      <p><strong>ข้อความ:</strong></p>
      <p>${escapeHtml(textMessage).replace(/\n/g, '<br>')}</p>
    `.trim(),
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function sendQuoteViaResend({ apiKey, fromEmail, payload }) {
  const email = buildQuoteEmail(payload)

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [email.to],
      reply_to: email.replyTo,
      subject: email.subject,
      text: email.text,
      html: email.html,
    }),
  })

  if (!response.ok) {
    const errorBody = await response.text()
    throw new Error(`Resend API error: ${response.status} ${errorBody}`)
  }

  return response.json()
}
