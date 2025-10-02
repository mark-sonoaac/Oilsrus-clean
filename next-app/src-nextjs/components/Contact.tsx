import { useState } from 'react'

export default function Contact(){
  const [status, setStatus] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const form = new FormData(e.target as HTMLFormElement)
    const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(Object.fromEntries(form as any)), headers: { 'Content-Type': 'application/json' } })
    const data = await res.json()
    if (data.success) setStatus('Message sent — thank you!')
    else setStatus('Failed to send message')
  }

    // Contact section removed per user request. Keep an empty placeholder for layout if needed.
    return null
}
