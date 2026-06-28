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
    <header className={`sticky top-0 z-50 border-b backdrop-blur-lg animate-slide-up transition duration-300 ${scrolled ? 'border-white/15 bg-emerald-950/95 shadow-2xl' : 'border-white/10 bg-emerald-950/80'}`}>
      <div className="container flex flex-wrap items-center justify-between gap-4 py-4">
        <a href="#home" className="flex items-center gap-3 text-lg font-semibold text-white transition hover:text-emerald-300 hover:-translate-y-0.5">
          <span>Chinny Sok</span>
          <span className="hidden rounded-full bg-emerald-950/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200 md:inline">Finance & Web</span>
        </a>

        <button
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-emerald-950/70 text-emerald-200 transition hover:border-emerald-400/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-950 md:hidden"
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

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-emerald-200 transition duration-200 ease-out hover:text-emerald-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-950">
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-white/10 bg-emerald-950/90 md:hidden">
          <div className="container space-y-2 px-4 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-2xl border border-white/10 bg-emerald-950/80 px-4 py-3 text-sm font-medium text-emerald-200 transition hover:bg-emerald-950 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-950"
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
