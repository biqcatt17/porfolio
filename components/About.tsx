const details = [
  { label: 'Education', value: 'B.Sc. in Information Technology and Engineering' },
  { label: 'Current role', value: 'Finance Officer' },
  { label: 'Focus', value: 'Full-stack development & digital media' },
  { label: 'Languages', value: 'Khmer, Cham, English, Turkish (Learning)' },
]

export default function About() {
  return (
    <section id="about" className="card animate-slide-up">
      <div className="grid gap-8 lg:grid-cols-[1.8fr_1fr] lg:items-start">
        <div>
          <div className="section-title">
            <div className="label">About me</div>
            <h2 className="mt-4 text-2xl font-medium">About</h2>
          </div>
          <p className="mt-4 text-[var(--muted)]">I am a multidisciplinary digital professional with a focus on finance, web, and media, creating refined digital experiences that connect strategy, design, and technology. My work is built on thoughtful execution, clear communication, and a strong understanding of how digital platforms can support business goals and audience engagement.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.6rem] border border-[rgba(48,52,59,0.12)] bg-[rgba(255,253,247,0.9)] p-5 transition hover:-translate-y-0.5 hover:bg-[rgba(220,234,247,0.6)]">
              <h3 className="text-sm font-semibold text-[var(--ink)]">What I build</h3>
              <p className="mt-3 text-sm text-[var(--muted)]">Digital experiences, branded platforms, and practical solutions designed for clarity, usability, and business value.</p>
            </div>
            <div className="rounded-[1.6rem] border border-[rgba(48,52,59,0.12)] bg-[rgba(248,231,161,0.24)] p-5 transition hover:-translate-y-0.5 hover:bg-[rgba(248,231,161,0.32)]">
              <h3 className="text-sm font-semibold text-[var(--ink)]">What I bring</h3>
              <p className="mt-3 text-sm text-[var(--muted)]">Strategic thinking, polished execution, technical discipline, and a consistent focus on measurable outcomes.</p>
            </div>
          </div>
        </div>

        <aside className="space-y-4 rounded-[1.8rem] border border-[rgba(48,52,59,0.12)] bg-[rgba(255,253,247,0.9)] p-5">
          {details.map((item) => (
            <div key={item.label} className="rounded-[1.2rem] border border-[rgba(48,52,59,0.12)] bg-[rgba(220,234,247,0.33)] p-4">
              <p className="text-sm text-[var(--muted)]">{item.label}</p>
              <p className="mt-1 text-sm font-medium text-[var(--ink)]">{item.value}</p>
            </div>
          ))}
        </aside>
      </div>
    </section>
  )
}
