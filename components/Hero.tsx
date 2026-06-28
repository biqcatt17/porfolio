import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="card overflow-hidden relative animate-fade-in">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-r from-emerald-500/10 via-transparent to-amber-400/10 blur-3xl" />
      <div className="relative grid gap-10 overflow-hidden md:grid-cols-[1.4fr_1fr] md:items-center">
        <div className="space-y-6 animate-slide-up">
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center rounded-full bg-emerald-600/15 px-4 py-1 font-semibold text-emerald-200 ring-1 ring-emerald-400/15">Finance Officer</span>
            <span className="inline-flex items-center rounded-full bg-emerald-950/70 px-4 py-1 font-semibold text-emerald-200 ring-1 ring-emerald-200/10">IT Graduate</span>
          </div>
          <div>
            <h1 className="text-5xl font-semibold leading-tight text-white">Chinny Sok <span className="text-emerald-200">(Jinny)</span></h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-emerald-200">I help student organizations and small teams launch digital experiences, creative media, and finance operations with modern websites, content, and reporting.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-emerald-950/50 px-5 py-4 text-sm transition hover:border-emerald-400/30 hover:bg-emerald-950/70">
              <p className="text-emerald-200">Specialties</p>
              <p className="mt-1 text-white font-medium">Next.js • Firebase • Tailwind</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-emerald-950/50 px-5 py-4 text-sm transition hover:border-amber-400/30 hover:bg-emerald-950/70">
              <p className="text-emerald-200">Creative Work</p>
              <p className="mt-1 text-white font-medium">Video, Photo, WordPress</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-emerald-300">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-950" />
              View UniLife
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-emerald-950/80 px-6 py-3 text-sm text-white transition duration-200 ease-out hover:-translate-y-0.5 hover:border-emerald-400/30 hover:bg-emerald-950">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              Talk with me
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-slide-up">
          <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-emerald-500/25 to-amber-400/25 blur-2xl animate-glow-pulse" />
          <Image src="/profile.JPG" alt="Chinny Sok" width={320} height={320} className="relative h-80 w-80 rounded-full object-cover border-4 border-white/10 shadow-2xl" priority />
        </div>
      </div>
    </section>
  )
}
