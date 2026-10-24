const testimonials = [
  {
    quote: 'Chinny took our student event website from concept to launch with a beautiful design and easy editing flow.',
    name: 'Sreymom Heng',
    role: 'Event Coordinator, STEM Festival',
  },
  {
    quote: 'Her work was reliable, quick, and the final website helped our campus reach more students than ever.',
    name: 'Kosal N.',
    role: 'Student Club President',
  },
  {
    quote: 'A modern portfolio and friendly communication made the whole process smooth and professional.',
    name: 'Tea Ly',
    role: 'Media Team Lead',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="card animate-slide-up">
      <div className="section-title">
        <div className="label">Testimonials</div>
        <h2 className="text-2xl font-medium">Kind words from collaborators</h2>
        <p className="mt-3 max-w-2xl text-sm text-[var(--muted)]">Feedback from student leaders and teams who worked with me on campus projects and creative media.</p>
      </div>

      <div className="mt-6 grid gap-5 xl:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="group rounded-[1.8rem] border border-[rgba(48,52,59,0.12)] bg-[rgba(255,253,247,0.9)] p-6 transition duration-200 ease-out hover:-translate-y-1 hover:bg-[rgba(220,234,247,0.45)]">
            <p className="text-lg leading-8 text-[var(--muted)]">“{item.quote}”</p>
            <div className="mt-6 flex flex-col gap-1">
              <span className="text-sm font-semibold text-[var(--ink)]">{item.name}</span>
              <span className="text-sm text-[var(--muted)]">{item.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
