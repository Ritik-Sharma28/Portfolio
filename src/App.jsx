import { HelmetProvider } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import Loader from './components/ui/Loader'
import ScrollProgress from './components/layout/ScrollProgress'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/ui/ScrollToTop'
import CursorGlow from './components/ui/CursorGlow'

import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Achievements from './components/sections/Achievements'
import CPStats from './components/sections/CPStats'
import Contact from './components/sections/Contact'

export default function App() {
  const [loading, setLoading] = useState(true)

  // Loading screen timer
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2100)
    return () => clearTimeout(t)
  }, [])

  // Tab blur title flicker
  useEffect(() => {
    const title = document.title
    const handleBlur = () => { document.title = '👋 Come back, Ritik is waiting!' }
    const handleFocus = () => { document.title = title }
    window.addEventListener('blur', handleBlur)
    window.addEventListener('focus', handleFocus)
    return () => {
      window.removeEventListener('blur', handleBlur)
      window.removeEventListener('focus', handleFocus)
    }
  }, [])

  // Keyboard shortcut: "/" focuses contact form
  useEffect(() => {
    const handler = (e) => {
      if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault()
        document.getElementById('contact-name')?.focus()
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <HelmetProvider>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <CursorGlow />
          <ScrollProgress />
          <Navbar />
          <main id="main">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Achievements />
            <CPStats />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </motion.div>
      )}
    </HelmetProvider>
  )
}
