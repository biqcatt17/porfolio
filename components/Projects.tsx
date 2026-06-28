const projects = [
  {
    title: 'UniLife',
    description: 'A student-centered platform for Cambodian university life, built to surface campus news, events, and resources with a polished mobile-first experience.',
    highlights: [
      'Responsive Next.js frontend with accessible UI and Khmer/English support',
      'Real-time event and announcement updates powered by Firebase',
      'Content-driven pages for student clubs, campus news, and resources',
    ],
    tech: 'Next.js • Firebase • TypeScript • Tailwind CSS',
    live: 'https://unilife-xi.vercel.app',
    repo: 'https://github.com/biqcatt17',
  },
  {
    title: 'Portfolio Website',
    description: 'A modern personal portfolio built with Next.js and Tailwind CSS, designed to showcase experience, skills, and contact details in a polished, easy-to-scan layout.',
    highlights: [
      'Dark, glassmorphism-inspired UI with smooth section navigation',
      'Clear project storytelling and responsive layout for mobile and desktop',
      'Fast performance and clean TypeScript structure across components',
    ],
    tech: 'Next.js • Tailwind CSS • TypeScript',
    live: '#home',
    repo: 'https://github.com/biqcatt17',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="card animate-slide-up">
      <div className="section-title flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="label">Projects</div>
          <h2 className="text-2xl font-medium">Projects</h2>
          <p className="mt-2 text-sm text-emerald-200">Selected work that highlights web projects, content production, and student-focused digital solutions.</p>
        </div>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-3xl border border-white/10 bg-emerald-950/80 p-6 shadow-[0_24px_80px_-40px_rgba(16,185,129,0.85)] transition duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl hover:border-emerald-400/30 hover:bg-emerald-950/95"
          >
            <div className="mb-6 overflow-hidden rounded-3xl border border-emerald-800 bg-gradient-to-br from-emerald-900/95 via-emerald-950/80 to-amber-950/20 p-4">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-200/80" />
              </div>
              <div className="grid gap-3">
                <div className="h-28 rounded-3xl bg-gradient-to-br from-emerald-800 to-emerald-950/80" />
                <div className="flex flex-wrap gap-2">
                  <span className="h-2.5 w-20 rounded-full bg-emerald-500/80" />
                  <span className="h-2.5 w-16 rounded-full bg-emerald-400/90" />
                  <span className="h-2.5 w-24 rounded-full bg-amber-300/50" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Featured project</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-emerald-200">{project.description}</p>
              </div>
              <span className="inline-flex rounded-full bg-emerald-950/60 px-4 py-2 text-sm text-emerald-200">{project.tech}</span>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-emerald-200">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-emerald-400" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={project.live}
                target={project.live.startsWith('#') ? undefined : '_blank'}
                rel={project.live.startsWith('#') ? undefined : 'noopener noreferrer'}
                className="inline-flex items-center rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-emerald-300"
              >
                View live
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-white/10 bg-emerald-950/60 px-4 py-2 text-sm text-slate-200 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-emerald-400/30 hover:bg-emerald-950/80"
              >
                View source
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
