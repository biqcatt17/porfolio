const experiences = [
  {
    title: 'Media Support Assistant (Paid Internship)',
    company: 'Royal University of Phnom Penh',
    details: [
      'Created and edited photos, videos, and promotional media for student events.',
      'Managed social content posting and supported event campaign coverage.',
      'Produced video shoots, editing, and publishing for online platforms.',
      'Designed and updated WordPress pages, layouts, and content.',
      'Mentored junior students in media, teamwork, and digital skills.',
    ],
  },
  {
    title: 'Volunteer Leader — STEM Festival 2025',
    company: 'Royal University of Phnom Penh',
    details: [
      'Led volunteer teams and coordinated event flow for workshop days.',
      'Handled on-site challenges and kept participant experiences smooth.',
    ],
  },
  {
    title: 'Volunteer — STEM Festival',
    company: 'Royal University of Phnom Penh',
    details: [
      'Supported workshops and guided attendees through hands-on activities.',
      'Assisted organizers with logistics and event setup.',
    ],
  },
  {
    title: 'Class Monitor',
    company: 'Royal University of Phnom Penh',
    details: [
      'Represented classmates and liaised with lecturers.',
      'Coordinated schedules, attendance, and class activities.',
      'Supported peers in academic and administrative matters.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="card animate-slide-up">
      <div className="section-title flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="label">Experience</div>
          <h2 className="text-2xl font-medium">Experience</h2>
          <p className="mt-2 max-w-2xl text-sm text-emerald-200">Practical media support, event leadership, and digital experience across student-facing projects.</p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-emerald-950/60 px-4 py-2 text-sm text-emerald-200">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          Royal University of Phnom Penh
        </div>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {experiences.map((experience) => (
          <div key={experience.title} className="group rounded-3xl border border-white/10 bg-emerald-950/60 p-5 transition hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-emerald-950/80">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">{experience.title}</h3>
                <p className="mt-1 text-sm text-emerald-200">{experience.company}</p>
              </div>
              <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-200">Media & Events</div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-emerald-200">
              {experience.details.map((detail) => (
                <li key={detail} className="flex gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-emerald-400" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
