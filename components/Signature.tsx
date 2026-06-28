const pillars = [
  {
    title: 'Purpose-Driven Tech',
    description: 'Build websites and systems with clarity, meaning, and practical value for students and small teams.',
  },
  {
    title: 'Modern Islamic Style',
    description: 'Blend contemporary UX with an elegant green/gold palette and calm, respectful visual rhythm.',
  },
  {
    title: 'Fast, Honest Delivery',
    description: 'Deliver polished work on time, with clear communication and reliable support for every project.',
  },
]

export default function Signature() {
  return (
    <section id="signature" className="card overflow-hidden relative animate-slide-up">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-emerald-500/20 via-transparent to-amber-400/10 blur-3xl" />
      <div className="relative space-y-8">
        <div className="section-title">
          <div className="label">Signature Approach</div>
          <h2 className="mt-4 text-2xl font-medium">What makes my work unique</h2>
          <p className="mt-3 max-w-2xl text-sm text-emerald-200">A thoughtful combination of modern web systems, creative media, and finance support designed for student organizations and growing teams.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="group overflow-hidden rounded-3xl border border-white/10 bg-emerald-950/70 p-6 transition duration-200 ease-out hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-emerald-950/90">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-200 ring-1 ring-emerald-400/20">
                <span className="text-xl font-semibold">✓</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-7 text-emerald-200">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="rounded-[2rem] border border-emerald-400/15 bg-emerald-950/40 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">Unique builder</p>
              <h3 className="mt-3 text-3xl font-semibold text-white">A values-led portfolio for tech, finance, and media.</h3>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200 ring-1 ring-emerald-400/20">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              Trusted by student teams and campus communities
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
