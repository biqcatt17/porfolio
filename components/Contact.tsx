import { FormEvent, useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle')
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error')
      return
    }

    setSubmitting(true)
    setStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })

      const result = await response.json()

      if (response.ok && result.status === 'success') {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }

    setSubmitting(false)
  }

  return (
    <section id="contact" className="card overflow-hidden relative animate-fade-in">
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-r from-emerald-500/10 via-transparent to-amber-400/10 blur-3xl" />

      <div className="section-title flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between animate-slide-up">
        <div className="space-y-3">
          <div className="label">Contact</div>
          <h2 className="text-2xl font-medium">Ready to start something together?</h2>
          <p className="mt-2 max-w-2xl text-sm text-emerald-200">I’m available for internships, freelance work, and collaborative digital media or web development projects.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="mailto:jinnysok17@gmail.com?subject=Project%20Inquiry" className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-slate-950 transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-emerald-300 hover:shadow-lg">Email me</a>
          <a href="/resume.pdf" download="Chinny-Sok-Resume.pdf" className="inline-flex items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-950/80 px-5 py-2 text-sm text-emerald-200 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-emerald-400/40 hover:bg-emerald-950">Download Resume</a>
          <a href="mailto:jinnysok17@gmail.com?subject=Resume%20Request" className="inline-flex items-center justify-center rounded-full border border-emerald-500/30 bg-slate-950/80 px-5 py-2 text-sm text-emerald-200 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-emerald-400/40 hover:bg-slate-950">Request CV</a>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1.2fr]">
        <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-emerald-950/60 p-6 text-emerald-200 shadow-[0_20px_60px_rgba(8,46,31,0.3)] transition duration-500 ease-out hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-emerald-950/80 animate-slide-up">
          <div className="pointer-events-none absolute -top-1 left-0 h-1 w-full bg-gradient-to-r from-emerald-400/80 via-amber-300/80 to-emerald-400/80" />
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">How I can help</p>
          <ul className="mt-5 space-y-3 text-sm leading-6">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-3.5 w-3.5 shrink-0 rounded-full bg-emerald-400" />
              <span>Build student-facing web experiences with modern UI</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-3.5 w-3.5 shrink-0 rounded-full bg-emerald-400" />
              <span>Manage finance, event media, and digital content</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-3.5 w-3.5 shrink-0 rounded-full bg-emerald-400" />
              <span>Create polished content for social, campuses, and events</span>
            </li>
          </ul>
          <p className="mt-6 text-sm text-emerald-200">I usually reply within 24 hours. Share your goal and I’ll suggest the next steps.</p>
        </div>

        <div className="grid gap-4">
          <form onSubmit={handleSubmit} className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition duration-500 ease-out hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-slate-950/95 animate-slide-up">
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-emerald-500/10 to-transparent blur-2xl" />
            <div className="relative space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex h-9 min-w-[2.5rem] items-center justify-center rounded-full bg-emerald-400/20 text-xs uppercase tracking-[0.22em] text-emerald-300">New</span>
                <p className="text-sm text-emerald-200">Send a quick inquiry and it will reach me directly through the contact form.</p>
              </div>

              <div className="grid gap-4">
                <label htmlFor="contact-name" className="space-y-2 text-sm text-emerald-200">
                  <span>Name</span>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none transition duration-200 focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/20"
                    placeholder="Your name"
                  />
                </label>
                <label htmlFor="contact-email" className="space-y-2 text-sm text-emerald-200">
                  <span>Email</span>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none transition duration-200 focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/20"
                    placeholder="you@example.com"
                  />
                </label>
                <label htmlFor="contact-message" className="space-y-2 text-sm text-emerald-200">
                  <span>Message</span>
                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className="min-h-[10rem] w-full rounded-2xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none transition duration-200 focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/20"
                    placeholder="Tell me about your project or ask a question"
                  />
                </label>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-emerald-300 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? 'Sending…' : 'Send message'}
                </button>
                <p className={`text-sm ${status === 'error' ? 'text-rose-300' : status === 'success' ? 'text-emerald-300' : 'text-emerald-200'}`} aria-live="polite">
                  {status === 'error'
                    ? 'Please fill in all fields and try again.'
                    : status === 'success'
                    ? 'Message sent! I will reply soon.'
                    : 'I aim to reply within 24 hours.'}
                </p>
              </div>
            </div>
          </form>

          <div className="grid gap-4">
            <a href="mailto:jinnysok17@gmail.com?subject=Hello%20from%20portfolio" className="group relative overflow-hidden rounded-3xl border border-white/10 bg-emerald-950/60 p-5 transition duration-300 ease-out hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-emerald-950/80 animate-slide-up">
              <p className="text-sm text-emerald-200">Email</p>
              <p className="mt-2 text-white">jinnysok17@gmail.com</p>
            </a>
            <a href="tel:+855976348618" className="group relative overflow-hidden rounded-3xl border border-white/10 bg-emerald-950/60 p-5 transition duration-300 ease-out hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-emerald-950/80 animate-slide-up">
              <p className="text-sm text-emerald-200">Phone</p>
              <p className="mt-2 text-white">+855 976 348 618</p>
            </a>
            <a href="https://www.linkedin.com/in/jinnysok" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-3xl border border-white/10 bg-emerald-950/60 p-5 transition duration-300 ease-out hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-emerald-950/80 animate-slide-up">
              <p className="text-sm text-emerald-200">LinkedIn</p>
              <p className="mt-2 text-white">Jinny Sok</p>
            </a>
            <a href="https://www.instagram.com/alwaysjinnys/" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-3xl border border-white/10 bg-emerald-950/60 p-5 transition duration-300 ease-out hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-emerald-950/80 animate-slide-up">
              <p className="text-sm text-emerald-200">Instagram</p>
              <p className="mt-2 text-white">@alwaysjinnys</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
