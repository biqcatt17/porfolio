const services = [
  {
    title: 'Web Development',
    description: 'Building full-stack web applications using Next.js, Firebase, and TypeScript, as well as WordPress websites tailored to your needs.',
  },
  {
    title: 'Design & Content',
    description: 'Graphic design, video production and editing, and photography for personal or professional use.',
  },
  {
    title: 'Financial Services',
    description: 'Financial reporting, data management, and administrative support to keep your operations organized.',
  },
  {
    title: 'Content Creation',
    description: 'Social media content strategy and production across multiple platforms.',
  },
]

export default function Services() {
  return (
    <section id="services" className="card animate-slide-up">
      <div className="section-title">
        <div className="label">Services</div>
        <h2 className="text-2xl font-medium">What I offer</h2>
        <p className="mt-3 max-w-2xl text-sm text-[var(--muted)]">A full range of web, media, and finance services for student organizations, events, and creative teams.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {services.map((service) => (
          <div key={service.title} className="rounded-[1.8rem] border border-[rgba(48,52,59,0.12)] bg-[rgba(255,253,247,0.9)] p-6 shadow-[0_12px_30px_rgba(48,52,59,0.06)] transition duration-200 ease-out hover:-translate-y-1 hover:border-[rgba(48,52,59,0.18)]">
            <div className="inline-flex rounded-full border border-[rgba(48,52,59,0.12)] bg-[rgba(220,234,247,0.75)] px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[var(--ink)]">Service</div>
            <h3 className="mt-4 text-[1.6rem] font-semibold text-[var(--ink)]">{service.title}</h3>
            <p className="mt-3 text-[var(--muted)]">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
