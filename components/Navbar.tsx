import { useEffect, useState } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 border-b backdrop-blur-lg animate-slide-up transition duration-300 ${scrolled ? 'border-[rgba(48,52,59,0.2)] bg-[rgba(250,248,241,0.92)] shadow-[0_10px_30px_rgba(48,52,59,0.05)]' : 'border-[rgba(48,52,59,0.12)] bg-[rgba(250,248,241,0.8)]'}`}>
      <div className="container flex flex-wrap items-center justify-between gap-4 py-4">
        <a href="#home" className="flex items-center gap-3 text-lg font-semibold text-[var(--ink)] transition hover:-translate-y-0.5">
          <span className="handwritten text-[2rem] leading-none">Chinny Sok</span>
          <span className="hidden rounded-full border border-[rgba(48,52,59,0.15)] bg-[rgba(220,234,247,0.8)] px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[var(--ink)] md:inline">Finance & Web</span>
        </a>

        <button
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(48,52,59,0.15)] bg-[rgba(255,253,247,0.9)] text-[var(--ink)] transition hover:-translate-y-0.5 hover:bg-[rgba(220,234,247,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(242,139,130,0.35)] md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>

        <nav aria-label="Primary navigation" className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-[rgba(48,52,59,0.12)] bg-[rgba(255,253,247,0.96)] md:hidden">
          <div className="container space-y-2 px-4 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-2xl border border-[rgba(48,52,59,0.12)] bg-[rgba(255,253,247,0.9)] px-4 py-3 text-sm font-semibold text-[var(--ink)] transition hover:bg-[rgba(220,234,247,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(242,139,130,0.35)]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
