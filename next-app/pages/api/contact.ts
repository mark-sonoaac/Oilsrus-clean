import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  success: boolean
  message?: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  const { name, email, message } = req.body || {}
  // In production, forward to Formspree or send via SMTP / third-party service.
  if (!email || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields' })
  }

  // For now, just return success.
  return res.status(200).json({ success: true })
}
