import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="card overflow-hidden relative animate-fade-in">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-r from-emerald-500/10 via-transparent to-amber-400/10 blur-3xl" />
      <div className="relative grid gap-10 overflow-hidden md:grid-cols-[1.4fr_1fr] md:items-center">
        <div className="space-y-6 animate-slide-up">
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center rounded-full border border-[rgba(48,52,59,0.12)] bg-[rgba(220,234,247,0.65)] px-4 py-1 font-semibold text-[var(--ink)]">Finance Officer</span>
            <span className="inline-flex items-center rounded-full border border-[rgba(48,52,59,0.12)] bg-[rgba(255,253,247,0.9)] px-4 py-1 font-semibold text-[var(--ink)]">IT Graduate</span>
          </div>
          <div>
            <h1 className="handwritten text-5xl font-semibold leading-tight text-[var(--ink)]">Chinny Sok <span className="text-[var(--muted)]">(Jinny)</span></h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--muted)]">I am a multidisciplinary digital professional focused on finance, web, and media, creating polished digital experiences that combine strategy, design, and technology to help brands communicate with clarity and impact.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-[rgba(48,52,59,0.12)] bg-[rgba(255,253,247,0.82)] px-5 py-4 text-sm transition hover:-translate-y-0.5 hover:border-[rgba(48,52,59,0.18)]">
              <p className="text-[var(--muted)]">Specialties</p>
              <p className="mt-1 text-base font-semibold text-[var(--ink)]">Next.js • Firebase • Tailwind</p>
            </div>
            <div className="rounded-[1.5rem] border border-[rgba(48,52,59,0.12)] bg-[rgba(220,234,247,0.55)] px-5 py-4 text-sm transition hover:-translate-y-0.5 hover:border-[rgba(48,52,59,0.18)]">
              <p className="text-[var(--muted)]">Creative Work</p>
              <p className="mt-1 text-base font-semibold text-[var(--ink)]">Video, Photo, WordPress</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[rgba(48,52,59,0.14)] bg-[var(--coral)] px-6 py-3 text-sm font-semibold text-[var(--ink)] shadow-[0_4px_0_rgba(48,52,59,0.08)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[rgba(242,139,130,0.85)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--ink)]" />
              View UniLife
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(48,52,59,0.12)] bg-[rgba(255,253,247,0.85)] px-6 py-3 text-sm font-semibold text-[var(--ink)] shadow-[0_4px_0_rgba(48,52,59,0.05)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[rgba(220,234,247,0.7)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--coral)]" />
              Talk with me
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-slide-up">
          <div className="absolute -inset-6 rounded-full bg-[radial-gradient(circle,_rgba(242,139,130,0.32),_rgba(220,234,247,0.12),_transparent_72%)] blur-2xl animate-glow-pulse" />
          <Image src="/profile.JPG" alt="Chinny Sok" width={320} height={320} className="relative h-80 w-80 rounded-full object-cover border-4 border-[rgba(48,52,59,0.1)] shadow-[0_20px_40px_rgba(48,52,59,0.12)]" priority />
        </div>
      </div>
    </section>
  )
}
