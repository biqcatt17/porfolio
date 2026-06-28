const skillGroups = [
  {
    title: 'Technical Skills',
    items: ['TypeScript', 'Next.js / React', 'Firebase', 'Tailwind CSS', 'WordPress', 'Graphic Design'],
  },
  {
    title: 'Creative Skills',
    items: ['Video Creation & Editing', 'Photography'],
  },
  {
    title: 'Professional Skills',
    items: ['Financial Management', 'Media Relations', 'Teamwork & Collaboration'],
  },
  {
    title: 'Languages',
    items: ['Khmer (Native)', 'English (Fluent)', 'Turkish (Learning)'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="card">
      <div className="section-title flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="label">Skills</div>
          <h2 className="text-2xl font-medium">Skills</h2>
          <p className="mt-2 text-sm text-emerald-200">A balanced mix of technical, creative, and professional strengths for digital projects.</p>
        </div>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-3xl border border-white/10 bg-emerald-950/60 p-5 transition hover:border-emerald-400/30 hover:bg-emerald-950/80">
            <h3 className="text-sm font-semibold text-white">{group.title}</h3>
            <div className="mt-4 space-y-3">
              {group.items.map((item) => (
                <span key={item} className="block rounded-2xl bg-emerald-950/40 px-3 py-2 text-sm text-emerald-200">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
