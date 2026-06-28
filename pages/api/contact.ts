import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  status: 'success' | 'error'
  message: string
}

const FORMSPREE_FORM_ID = process.env.FORMSPREE_FORM_ID

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ status: 'error', message: 'Method not allowed' })
  }

  if (!FORMSPREE_FORM_ID) {
    return res.status(500).json({ status: 'error', message: 'Formspree is not configured. Add FORMSPREE_FORM_ID to .env.local.' })
  }

  const { name, email, message } = req.body as { name?: string; email?: string; message?: string }

  if (!name || !email || !message) {
    return res.status(400).json({ status: 'error', message: 'Please complete all fields.' })
  }

  try {
    const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })

    const data = await response.json()

    if (!response.ok) {
      return res.status(response.status).json({ status: 'error', message: data.error || 'Failed to send message.' })
    }

    return res.status(200).json({ status: 'success', message: 'Thank you! Your message has been sent.' })
  } catch (error) {
    return res.status(500).json({ status: 'error', message: 'Unable to send your message right now. Please try again later.' })
  }
}
