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
          <p className="mt-4 text-emerald-200">I’m Chinny Sok — an IT and Engineering graduate who blends finance, web development, and creative production to support students, events, and small organizations. I combine technical skills with practical media and data work to deliver polished results.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-emerald-950/60 p-5 transition hover:border-emerald-400/30 hover:bg-emerald-950/80">
              <h3 className="text-sm font-semibold text-white">What I build</h3>
              <p className="mt-3 text-sm text-emerald-200">Web apps, media assets, and student-facing digital experiences.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-emerald-950/60 p-5 transition hover:border-amber-400/30 hover:bg-emerald-950/80">
              <h3 className="text-sm font-semibold text-white">What I bring</h3>
              <p className="mt-3 text-sm text-emerald-200">Technical attention, creative teamwork, and reliable delivery.</p>
            </div>
          </div>
        </div>

        <aside className="space-y-4 rounded-3xl border border-white/10 bg-emerald-950/60 p-5">
          {details.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-emerald-950/40 p-4">
              <p className="text-sm text-emerald-200">{item.label}</p>
              <p className="mt-1 text-sm font-medium text-white">{item.value}</p>
            </div>
          ))}
        </aside>
      </div>
    </section>
  )
}
