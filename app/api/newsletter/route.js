import { NextResponse } from 'next/server'

const contactEmail = 'tuliorangeldesigner@gmail.com'

async function sendToFormSubmit(payload) {
  const formData = new FormData()

  formData.append('_subject', 'Nova inscricao na newsletter Amanda Felisbino')
  formData.append('_template', 'table')
  formData.append('_captcha', 'false')

  Object.entries(payload).forEach(([key, value]) => {
    formData.append(key, value || '-')
  })

  const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: formData,
  })

  if (!response.ok) {
    throw new Error('FormSubmit request failed')
  }
}

async function sendToGoogleSheets(payload) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL
  if (!webhookUrl) return

  await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
}

export async function POST(request) {
  const formData = await request.formData()
  const payload = {
    type: 'Newsletter',
    name: '',
    email: formData.get('email')?.toString() || '',
    profile: '',
    services: 'Newsletter',
    budget: '',
    message: 'Inscricao na lista de conteudos',
    createdAt: new Date().toISOString(),
  }

  try {
    await Promise.all([
      sendToFormSubmit(payload),
      sendToGoogleSheets(payload),
    ])

    return NextResponse.redirect(new URL('/obrigado?tipo=newsletter', request.url), 303)
  } catch (error) {
    return NextResponse.redirect(new URL('/obrigado?status=erro', request.url), 303)
  }
}
