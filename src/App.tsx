import { useEffect, lazy, Suspense, memo } from 'react'
import { Navigation } from '@/components/Navigation'
import { LampDemo } from '@/components/ui/lamp'

// Lazy load section components for code splitting
const About = lazy(() => import('@/components/sections/About').then(module => ({ default: module.About })))
const Skills = lazy(() => import('@/components/sections/Skills').then(module => ({ default: module.Skills })))
const Projects = lazy(() => import('@/components/sections/Projects').then(module => ({ default: module.Projects })))
const Testimonials = lazy(() => import('@/components/sections/Testimonials').then(module => ({ default: module.Testimonials })))
const Contact = lazy(() => import('@/components/sections/Contact').then(module => ({ default: module.Contact })))

// Loading placeholder component
const SectionLoader = memo(() => (
  <div className="min-h-screen flex items-center justify-center bg-slate-950">
    <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
  </div>
))
SectionLoader.displayName = 'SectionLoader'

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Full Stack Developer | Web ve Mobil Uygulama Geliştirme'
    
    // Update meta description dynamically if needed
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Modern web ve mobil uygulama geliştirme hizmetleri. 5+ yıllık deneyim ile dijital çözümleriniz için profesyonel geliştirici. E-ticaret, Kurumsal Web Siteleri, API Geliştirme ve daha fazlası.')
    }
  }, [])

  return (
    <div className="relative">
      <header role="banner">
        <Navigation />
      </header>
      <main role="main">
        <section id="home" aria-label="Ana Sayfa">
          <LampDemo />
        </section>
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
      <footer role="contentinfo" className="hidden">
        <p>&copy; {new Date().getFullYear()} Eneskc05. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  )
}

export default memo(App)
