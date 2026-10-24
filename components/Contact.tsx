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
      <div className="absolute inset-x-0 top-0 h-36 bg-[radial-gradient(circle,_rgba(220,234,247,0.9),_transparent_60%)] blur-3xl" />

      <div className="section-title flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between animate-slide-up">
        <div className="space-y-3">
          <div className="label">Contact</div>
          <h2 className="text-2xl font-medium">Ready to start something together?</h2>
          <p className="mt-2 max-w-2xl text-sm text-[var(--muted)]">I’m available for internships, freelance work, and collaborative digital media or web development projects.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="mailto:jinnysok17@gmail.com?subject=Project%20Inquiry" className="inline-flex items-center justify-center rounded-full border-2 border-[rgba(48,52,59,0.12)] bg-[var(--coral)] px-5 py-2 text-sm font-semibold text-[var(--ink)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[rgba(242,139,130,0.85)]">Email me</a>
          <a href="/resume.pdf" download="Chinny-Sok-Resume.pdf" className="inline-flex items-center justify-center rounded-full border border-[rgba(48,52,59,0.12)] bg-[rgba(255,253,247,0.84)] px-5 py-2 text-sm text-[var(--ink)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[rgba(220,234,247,0.7)]">Download Resume</a>
          <a href="mailto:jinnysok17@gmail.com?subject=Resume%20Request" className="inline-flex items-center justify-center rounded-full border border-[rgba(48,52,59,0.12)] bg-[rgba(248,231,161,0.24)] px-5 py-2 text-sm text-[var(--ink)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[rgba(248,231,161,0.35)]">Request CV</a>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1.2fr]">
        <div className="group relative overflow-hidden rounded-[1.8rem] border border-[rgba(48,52,59,0.12)] bg-[rgba(255,253,247,0.9)] p-6 text-[var(--ink)] shadow-[0_12px_40px_rgba(48,52,59,0.06)] transition duration-500 ease-out hover:-translate-y-1 animate-slide-up">
          <div className="pointer-events-none absolute -top-1 left-0 h-1 w-full bg-[linear-gradient(90deg,_rgba(242,139,130,1),_rgba(248,231,161,1),_rgba(220,234,247,1))]" />
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--ink)]">How I can help</p>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--muted)]">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-3.5 w-3.5 shrink-0 rounded-full bg-[var(--coral)]" />
              <span>Build student-facing web experiences with modern UI</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-3.5 w-3.5 shrink-0 rounded-full bg-[var(--coral)]" />
              <span>Manage finance, event media, and digital content</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-3.5 w-3.5 shrink-0 rounded-full bg-[var(--coral)]" />
              <span>Create polished content for social, campuses, and events</span>
            </li>
          </ul>
          <p className="mt-6 text-sm text-[var(--muted)]">I usually reply within 24 hours. Share your goal and I’ll suggest the next steps.</p>
        </div>

        <div className="grid gap-4">
          <form onSubmit={handleSubmit} className="relative overflow-hidden rounded-[1.8rem] border border-[rgba(48,52,59,0.12)] bg-[rgba(255,253,247,0.92)] p-6 text-[var(--ink)] shadow-[0_12px_40px_rgba(48,52,59,0.06)] transition duration-500 ease-out hover:-translate-y-1 animate-slide-up">
            <div className="absolute inset-x-0 top-0 h-20 bg-[radial-gradient(circle,_rgba(220,234,247,0.8),_transparent_70%)] blur-2xl" />
            <div className="relative space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex h-9 min-w-[2.5rem] items-center justify-center rounded-full border border-[rgba(48,52,59,0.12)] bg-[rgba(220,234,247,0.7)] text-[0.62rem] uppercase tracking-[0.22em] text-[var(--ink)]">New</span>
                <p className="text-sm text-[var(--muted)]">Send a quick inquiry and it will reach me directly through the contact form.</p>
              </div>

              <div className="grid gap-4">
                <label htmlFor="contact-name" className="space-y-2 text-sm text-[var(--muted)]">
                  <span>Name</span>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="w-full rounded-[1rem] border border-[rgba(48,52,59,0.12)] bg-[rgba(255,255,255,0.7)] px-4 py-3 text-[var(--ink)] outline-none transition duration-200 focus:border-[rgba(48,52,59,0.3)] focus:ring-2 focus:ring-[rgba(242,139,130,0.18)]"
                    placeholder="Your name"
                  />
                </label>
                <label htmlFor="contact-email" className="space-y-2 text-sm text-[var(--muted)]">
                  <span>Email</span>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full rounded-[1rem] border border-[rgba(48,52,59,0.12)] bg-[rgba(255,255,255,0.7)] px-4 py-3 text-[var(--ink)] outline-none transition duration-200 focus:border-[rgba(48,52,59,0.3)] focus:ring-2 focus:ring-[rgba(242,139,130,0.18)]"
                    placeholder="you@example.com"
                  />
                </label>
                <label htmlFor="contact-message" className="space-y-2 text-sm text-[var(--muted)]">
                  <span>Message</span>
                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className="min-h-[10rem] w-full rounded-[1rem] border border-[rgba(48,52,59,0.12)] bg-[rgba(255,255,255,0.7)] px-4 py-3 text-[var(--ink)] outline-none transition duration-200 focus:border-[rgba(48,52,59,0.3)] focus:ring-2 focus:ring-[rgba(242,139,130,0.18)]"
                    placeholder="Tell me about your project or ask a question"
                  />
                </label>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center rounded-full border-2 border-[rgba(48,52,59,0.12)] bg-[var(--coral)] px-5 py-3 text-sm font-semibold text-[var(--ink)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[rgba(242,139,130,0.85)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? 'Sending…' : 'Send message'}
                </button>
                <p className={`text-sm ${status === 'error' ? 'text-[#b93f47]' : status === 'success' ? 'text-[#406d5e]' : 'text-[var(--muted)]'}`} aria-live="polite">
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
            <a href="mailto:jinnysok17@gmail.com?subject=Hello%20from%20portfolio" className="group relative overflow-hidden rounded-[1.5rem] border border-[rgba(48,52,59,0.12)] bg-[rgba(255,253,247,0.9)] p-5 transition duration-300 ease-out hover:-translate-y-1 hover:bg-[rgba(220,234,247,0.5)] animate-slide-up">
              <p className="text-sm text-[var(--muted)]">Email</p>
              <p className="mt-2 text-[var(--ink)]">jinnysok17@gmail.com</p>
            </a>
            <a href="tel:+855976348618" className="group relative overflow-hidden rounded-[1.5rem] border border-[rgba(48,52,59,0.12)] bg-[rgba(255,253,247,0.9)] p-5 transition duration-300 ease-out hover:-translate-y-1 hover:bg-[rgba(220,234,247,0.5)] animate-slide-up">
              <p className="text-sm text-[var(--muted)]">Phone</p>
              <p className="mt-2 text-[var(--ink)]">+855 976 348 618</p>
            </a>
            <a href="https://www.linkedin.com/in/jinnysok" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-[1.5rem] border border-[rgba(48,52,59,0.12)] bg-[rgba(255,253,247,0.9)] p-5 transition duration-300 ease-out hover:-translate-y-1 hover:bg-[rgba(220,234,247,0.5)] animate-slide-up">
              <p className="text-sm text-[var(--muted)]">LinkedIn</p>
              <p className="mt-2 text-[var(--ink)]">Jinny Sok</p>
            </a>
            <a href="https://www.instagram.com/alwaysjinnys/" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-[1.5rem] border border-[rgba(48,52,59,0.12)] bg-[rgba(255,253,247,0.9)] p-5 transition duration-300 ease-out hover:-translate-y-1 hover:bg-[rgba(220,234,247,0.5)] animate-slide-up">
              <p className="text-sm text-[var(--muted)]">Instagram</p>
              <p className="mt-2 text-[var(--ink)]">@alwaysjinnys</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
