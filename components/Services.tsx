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
        <p className="mt-3 text-sm text-emerald-200 max-w-2xl">A full range of web, media, and finance services for student organizations, events, and creative teams.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {services.map((service) => (
          <div key={service.title} className="rounded-3xl border border-white/10 bg-emerald-950/70 p-6 shadow-[0_20px_60px_-30px_rgba(16,185,129,0.8)] transition duration-200 ease-out hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-emerald-950/90">
            <div className="inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">Service</div>
            <h3 className="mt-4 text-lg font-semibold text-white">{service.title}</h3>
            <p className="mt-3 text-emerald-200">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
