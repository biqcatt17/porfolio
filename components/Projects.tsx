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
          <p className="mt-2 text-sm text-[var(--muted)]">Selected work that highlights web projects, content production, and student-focused digital solutions.</p>
        </div>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-[1.8rem] border border-[rgba(48,52,59,0.12)] bg-[rgba(255,253,247,0.9)] p-6 shadow-[0_16px_45px_rgba(48,52,59,0.05)] transition duration-200 ease-out hover:-translate-y-1 hover:bg-[rgba(220,234,247,0.42)]"
          >
            <div className="mb-6 overflow-hidden rounded-[1.5rem] border border-[rgba(48,52,59,0.12)] bg-[linear-gradient(135deg,_rgba(220,234,247,0.8),_rgba(248,231,161,0.22),_rgba(255,253,247,0.8))] p-4">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--coral)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--yellow)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--sage)]" />
              </div>

              {project.title === 'UniLife' ? (
                <div className="rounded-[1.2rem] border border-[rgba(48,52,59,0.12)] bg-[rgba(255,255,255,0.45)] p-3 shadow-[0_8px_18px_rgba(48,52,59,0.04)]">
                  <div className="mb-3 flex items-center justify-between gap-2 text-[0.58rem] font-bold uppercase tracking-[0.16em] text-[var(--ink)]">
                    <span>Unilife</span>
                    <span className="rounded-full border border-[rgba(48,52,59,0.12)] bg-[rgba(220,234,247,0.7)] px-2 py-1">Live</span>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-[1.1fr_0.9fr]">
                    <div className="space-y-2 rounded-[1rem] border border-[rgba(48,52,59,0.1)] bg-[rgba(255,253,247,0.9)] p-2.5">
                      <div className="h-2 w-16 rounded-full bg-[rgba(48,52,59,0.18)]" />
                      <div className="h-10 rounded-[0.8rem] bg-[linear-gradient(135deg,_rgba(220,234,247,0.9),_rgba(255,253,247,0.8))]" />
                      <div className="space-y-1.5">
                        <div className="h-2 w-full rounded-full bg-[rgba(48,52,59,0.12)]" />
                        <div className="h-2 w-5/6 rounded-full bg-[rgba(48,52,59,0.12)]" />
                        <div className="h-2 w-4/6 rounded-full bg-[rgba(48,52,59,0.12)]" />
                      </div>
                    </div>

                    <div className="space-y-2 rounded-[1rem] border border-[rgba(48,52,59,0.1)] bg-[rgba(248,231,161,0.18)] p-2.5">
                      <div className="flex items-center justify-between">
                        <span className="h-2 w-10 rounded-full bg-[rgba(48,52,59,0.18)]" />
                        <span className="h-2 w-7 rounded-full bg-[rgba(242,139,130,0.7)]" />
                      </div>
                      <div className="h-16 rounded-[0.9rem] bg-[linear-gradient(135deg,_rgba(242,139,130,0.32),_rgba(220,234,247,0.75))]" />
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="h-8 rounded-[0.7rem] bg-[rgba(255,255,255,0.75)]" />
                        <div className="h-8 rounded-[0.7rem] bg-[rgba(255,255,255,0.75)]" />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid gap-3">
                  <div className="h-28 rounded-[1.4rem] bg-[linear-gradient(135deg,_rgba(96,137,162,0.28),_rgba(255,253,247,0.6),_rgba(220,234,247,0.72))]" />
                  <div className="flex flex-wrap gap-2">
                    <span className="h-2.5 w-20 rounded-full bg-[rgba(48,52,59,0.22)]" />
                    <span className="h-2.5 w-16 rounded-full bg-[rgba(48,52,59,0.16)]" />
                    <span className="h-2.5 w-24 rounded-full bg-[rgba(242,139,130,0.38)]" />
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[var(--ink)]">Featured project</p>
                <h3 className="mt-2 text-xl font-semibold text-[var(--ink)]">{project.title}</h3>
                <p className="mt-3 text-[var(--muted)]">{project.description}</p>
              </div>
              <span className="inline-flex rounded-full border border-[rgba(48,52,59,0.12)] bg-[rgba(248,231,161,0.28)] px-4 py-2 text-sm text-[var(--ink)]">{project.tech}</span>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-[var(--muted)]">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[var(--coral)]" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={project.live}
                target={project.live.startsWith('#') ? undefined : '_blank'}
                rel={project.live.startsWith('#') ? undefined : 'noopener noreferrer'}
                className="inline-flex items-center rounded-full border-2 border-[rgba(48,52,59,0.12)] bg-[var(--coral)] px-4 py-2 text-sm font-semibold text-[var(--ink)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[rgba(242,139,130,0.85)]"
              >
                View live
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-[rgba(48,52,59,0.12)] bg-[rgba(255,253,247,0.8)] px-4 py-2 text-sm text-[var(--ink)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[rgba(220,234,247,0.7)]"
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
