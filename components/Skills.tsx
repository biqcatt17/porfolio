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
          <p className="mt-2 text-sm text-[var(--muted)]">A balanced mix of technical, creative, and professional strengths for digital projects.</p>
        </div>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-[1.7rem] border border-[rgba(48,52,59,0.12)] bg-[rgba(255,253,247,0.9)] p-5 transition hover:-translate-y-0.5 hover:bg-[rgba(220,234,247,0.45)]">
            <h3 className="text-sm font-semibold text-[var(--ink)]">{group.title}</h3>
            <div className="mt-4 space-y-3">
              {group.items.map((item) => (
                <span key={item} className="block rounded-[1rem] border border-[rgba(48,52,59,0.08)] bg-[rgba(248,231,161,0.18)] px-3 py-2 text-sm text-[var(--muted)]">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
