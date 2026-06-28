import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Signature from '../components/Signature'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <>
      <Head>
        <title>Chinny Sok (Jinny) — Finance, Web, and Media Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Chinny Sok (Jinny) — Finance Officer, IT graduate, and creative technologist in Phnom Penh. Modern web, media, and finance solutions for student teams and events." />
        <meta name="keywords" content="portfolio, web development, finance officer, IT graduate, digital media, Phnom Penh, Next.js" />
        <meta name="author" content="Chinny Sok" />
        <meta name="robots" content="index,follow" />
        <meta name="theme-color" content="#041f14" />
        <meta property="og:site_name" content="Chinny Sok Portfolio" />
        <meta property="og:title" content="Chinny Sok (Jinny) — Portfolio" />
        <meta property="og:description" content="Modern portfolio for finance, web, and media services with a green Islamic-inspired technology theme." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/profile.JPG" />
        <meta property="og:image:alt" content="Chinny Sok portrait" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@alwaysjinnys" />
        <meta name="twitter:site" content="@alwaysjinnys" />
        <meta name="twitter:title" content="Chinny Sok (Jinny) — Portfolio" />
        <meta name="twitter:description" content="Modern portfolio for finance, web, and media services with a green Islamic-inspired technology theme." />
        <meta name="twitter:image" content="/profile.JPG" />
      </Head>
      <Navbar />
      <main className="min-h-screen py-12">
        <div className="container space-y-10">
          <Hero />
          <About />
          <Signature />
          <Testimonials />
          <Experience />
          <Skills />
          <Services />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  )
}
