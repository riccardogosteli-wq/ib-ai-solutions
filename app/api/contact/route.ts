import { NextRequest, NextResponse } from 'next/server'

const RESEND_API_KEY = process.env.RESEND_API_KEY || 're_jSGcCv3C_NHdjr17ryPUYFtUx3S3qKQEZ'
const TO_EMAIL = 'info@ib-ai-solutions.ch'
const FROM_EMAIL = 'info@ib-ai-solutions.ch'

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, phone, service, message } = await req.json()

    if (!name || !email || !company || !service) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const serviceLabels: Record<string, string> = {
      produkt: 'Produkt-Video',
      werbung: 'Werbevideo',
      erklaer: 'Erklär-Video',
      sonstiges: 'Sonstiges / Noch unklar',
    }

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9fafb; border-radius: 8px;">
        <div style="background: #0f172a; padding: 20px 24px; border-radius: 8px 8px 0 0; margin-bottom: 24px;">
          <h1 style="color: #ffffff; margin: 0; font-size: 20px;">🎬 Neue Projektanfrage</h1>
          <p style="color: #94a3b8; margin: 4px 0 0; font-size: 14px;">IB AI Solutions — ib-ai-solutions.ch</p>
        </div>

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; width: 140px;">Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; font-size: 14px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">E-Mail</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">Unternehmen</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px;">${company}</td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">Telefon</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px;">${phone}</td>
          </tr>` : ''}
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">Service</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px;">
              <span style="background: #dbeafe; color: #1d4ed8; padding: 2px 10px; border-radius: 12px; font-size: 13px; font-weight: 600;">${serviceLabels[service] || service}</span>
            </td>
          </tr>
          ${message ? `
          <tr>
            <td style="padding: 10px 0; color: #6b7280; font-size: 14px; vertical-align: top;">Nachricht</td>
            <td style="padding: 10px 0; font-size: 14px; white-space: pre-wrap;">${message}</td>
          </tr>` : ''}
        </table>

        <div style="margin-top: 24px; padding: 16px; background: #eff6ff; border-radius: 8px; border-left: 4px solid #2563eb;">
          <p style="margin: 0; font-size: 13px; color: #1d4ed8;">
            <strong>Antworten:</strong> Direkt auf diese E-Mail antworten — Reply-To ist auf ${email} gesetzt.
          </p>
        </div>

        <p style="margin-top: 20px; font-size: 12px; color: #9ca3af; text-align: center;">
          © IB AI Solutions · <a href="https://ib-ai-solutions.ch" style="color: #9ca3af;">ib-ai-solutions.ch</a>
        </p>
      </div>
    `

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        reply_to: email,
        subject: `🎬 Neue Anfrage: ${serviceLabels[service] || service} — ${company}`,
        html,
      }),
    })

    if (!res.ok) {
      const err = await res.json()
      console.error('Resend error:', err)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
