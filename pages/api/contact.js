import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, subject, message } = req.body

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'contact@ctrlshiftconsulting.com'
  const toEmail = process.env.CONTACT_TO_EMAIL || 'Chris.Weiner@ctrlshiftconsulting.com'
  const enableAutoReply = process.env.ENABLE_AUTO_REPLY === 'true'

  try {
    // Send notification email to you
    await resend.emails.send({
      from: `Portfolio Contact <${fromEmail}>`,
      to: toEmail,
      subject: `Portfolio Contact: ${subject}`,
      html: createContactEmailHtml({ name, email, subject, message }),
    })

    // Send auto-reply to the person who submitted (if enabled)
    if (enableAutoReply) {
      await resend.emails.send({
        from: `Chris Weiner <${fromEmail}>`,
        to: email,
        subject: 'Thanks for reaching out!',
        html: createAutoReplyHtml(name),
      })
    }

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Email error:', error)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}

function createContactEmailHtml({ name, email, subject, message }) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Portfolio Contact</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            border-bottom: 2px solid #3b82f6;
            padding-bottom: 16px;
            margin-bottom: 24px;
          }
          .field {
            margin-bottom: 16px;
          }
          .field strong {
            color: #0f172a;
          }
          .message {
            background: #f8fafc;
            padding: 16px;
            border-radius: 8px;
            border-left: 4px solid #3b82f6;
          }
          .footer {
            margin-top: 32px;
            padding-top: 16px;
            border-top: 1px solid #e2e8f0;
            font-size: 14px;
            color: #64748b;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1 style="margin: 0; color: #0f172a;">New Portfolio Contact</h1>
          <p style="margin: 8px 0 0; color: #64748b;">Someone reached out via your portfolio site</p>
        </div>
        
        <div class="field">
          <strong>Name:</strong> ${escapeHtml(name)}
        </div>
        
        <div class="field">
          <strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>
        </div>
        
        <div class="field">
          <strong>Subject:</strong> ${escapeHtml(subject)}
        </div>
        
        <div class="field">
          <strong>Message:</strong>
          <div class="message">${escapeHtml(message).replace(/\n/g, '<br>')}</div>
        </div>
        
        <div class="footer">
          Sent from your portfolio contact form.
        </div>
      </body>
    </html>
  `
}

function createAutoReplyHtml(name) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thanks for reaching out!</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            border-bottom: 2px solid #3b82f6;
            padding-bottom: 16px;
            margin-bottom: 24px;
          }
          .footer {
            margin-top: 32px;
            padding-top: 16px;
            border-top: 1px solid #e2e8f0;
            font-size: 14px;
            color: #64748b;
          }
          a {
            color: #3b82f6;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1 style="margin: 0; color: #0f172a;">Thanks for Reaching Out!</h1>
        </div>
        
        <p>Hi ${escapeHtml(name)},</p>
        
        <p>Thanks for getting in touch! I've received your message and will get back to you within 1-2 business days.</p>
        
        <p>In the meantime, feel free to check out my latest work and insights:</p>
        <ul>
          <li><a href="https://ctrlshiftconsulting.com/blog">Technical Articles</a></li>
          <li><a href="https://www.linkedin.com/in/chris-weiner-996037114/">LinkedIn</a></li>
          <li><a href="https://github.com/cweiner402">GitHub</a></li>
        </ul>
        
        <p>Looking forward to connecting!</p>
        
        <p>Best,<br>Chris Weiner</p>
        
        <div class="footer">
          This is an automated response. Please don't reply to this email directly.
        </div>
      </body>
    </html>
  `
}

// Basic HTML escaping to prevent XSS
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }
  return text.replace(/[&<>"']/g, m => map[m])
}
