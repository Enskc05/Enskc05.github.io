import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Languages } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

interface NavItem {
  label: string
  id: string
}

/**
 * Responsive Navigation with Hamburger Menu
 * Mobile: Hamburger menu with slide-in animation
 * Desktop: Horizontal navigation pill with hover expansion
 */
export const PillBase: React.FC = () => {
  const { t, language, setLanguage } = useLanguage()
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showLangMenu, setShowLangMenu] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const langMenuRef = useRef<HTMLDivElement>(null)

  const navItems: NavItem[] = [
    { label: t.nav.home, id: 'home' },
    { label: t.nav.about, id: 'about' },
    { label: t.nav.skills, id: 'skills' },
    { label: t.nav.projects, id: 'projects' },
    { label: t.nav.testimonials, id: 'testimonials' },
    { label: t.nav.contact, id: 'contact' },
  ]

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      // Close menu when switching from mobile to desktop
      if (!mobile && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [isMenuOpen])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setShowLangMenu(false)
      }
    }

    if (isMenuOpen || showLangMenu) {
      document.addEventListener('mousedown', handleClickOutside)
      // Prevent body scroll when menu is open on mobile
      if (isMobile && isMenuOpen) {
        document.body.style.overflow = 'hidden'
      }
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen, showLangMenu, isMobile])

  // Scroll detection to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250
      let currentSection = 'home'

      for (let i = navItems.length - 1; i >= 0; i--) {
        const element = document.querySelector(`#${navItems[i].id}`)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = window.scrollY + rect.top

          if (scrollPosition >= elementTop - 150) {
            currentSection = navItems[i].id
            break
          }
        }
      }

      setActiveSection(prev => {
        if (prev !== currentSection) {
          return currentSection
        }
        return prev
      })
    }

    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', throttledHandleScroll)
  }, [navItems])

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsMenuOpen(false)

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleLanguageChange = (lang: 'tr' | 'en') => {
    setLanguage(lang)
    setShowLangMenu(false)
  }

  // Mobile: Hamburger Menu
  if (isMobile) {
    return (
      <>
        {/* Hamburger Button */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="fixed top-4 left-4 z-50 p-3 rounded-lg bg-slate-800/90 backdrop-blur-md border border-slate-700/50 shadow-lg"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-cyan-400" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6 text-cyan-400" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40"
                onClick={() => setIsMenuOpen(false)}
              />

              {/* Slide-in Menu */}
              <motion.div
                ref={menuRef}
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-slate-900 border-r border-slate-700/50 z-40 overflow-y-auto shadow-2xl"
              >
                <div className="flex flex-col h-full pt-20 px-6">
                  {/* Navigation Items */}
                  <nav className="flex flex-col gap-2 mb-8">
                    {navItems.map((item) => {
                      const isActive = item.id === activeSection
                      return (
                        <motion.button
                          key={item.id}
                          onClick={() => handleSectionClick(item.id)}
                          className={`text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                            isActive
                              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                              : 'text-slate-300 hover:bg-slate-800/50 border border-transparent'
                          }`}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="font-semibold text-lg">{item.label}</span>
                        </motion.button>
                      )
                    })}
                  </nav>

                  {/* Divider */}
                  <div className="h-px bg-slate-700/50 my-4" />

                  {/* Language Switcher */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 px-4 mb-3">
                      <Languages className="w-5 h-5 text-cyan-400" />
                      <span className="text-slate-400 text-sm font-semibold uppercase tracking-wider">
                        {language === 'tr' ? 'Dil' : 'Language'}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => handleLanguageChange('tr')}
                        className={`text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3 ${
                          language === 'tr'
                            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                            : 'text-slate-300 hover:bg-slate-800/50 border border-transparent'
                        }`}
                      >
                        <span className="text-2xl">🇹🇷</span>
                        <span className="font-semibold">Türkçe</span>
                        {language === 'tr' && (
                          <span className="ml-auto text-cyan-400">✓</span>
                        )}
                      </button>
                      <button
                        onClick={() => handleLanguageChange('en')}
                        className={`text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3 ${
                          language === 'en'
                            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                            : 'text-slate-300 hover:bg-slate-800/50 border border-transparent'
                        }`}
                      >
                        <span className="text-2xl">🇬🇧</span>
                        <span className="font-semibold">English</span>
                        {language === 'en' && (
                          <span className="ml-auto text-cyan-400">✓</span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </>
    )
  }

  // Desktop: Horizontal Navigation Pill (with hover expansion - no complex animations)
  return (
    <>
      <motion.nav
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 h-14 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/50 shadow-lg"
        initial={false}
      >
        <div className="relative h-full flex items-center justify-center px-6">
          {/* Navigation items */}
          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = item.id === activeSection
              return (
                <motion.button
                  key={item.id}
                  onClick={() => handleSectionClick(item.id)}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-sm whitespace-nowrap">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </div>
        </div>
      </motion.nav>

      {/* Desktop Language Switcher - Top Right */}
      <div ref={langMenuRef} className="fixed top-6 right-6 z-50">
        <motion.button
          onClick={() => setShowLangMenu(!showLangMenu)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="h-14 px-4 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 flex items-center gap-2"
          aria-label="Change language"
          aria-expanded={showLangMenu}
        >
          <Languages className="w-5 h-5 text-cyan-400" />
          <span className="text-sm font-semibold text-slate-200 uppercase">
            {language === 'tr' ? 'TR' : 'EN'}
          </span>
        </motion.button>

        <AnimatePresence>
          {showLangMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-36 rounded-lg bg-slate-800/95 backdrop-blur-md border border-slate-700/50 shadow-xl overflow-hidden"
            >
              <button
                onClick={() => handleLanguageChange('tr')}
                className={`w-full px-4 py-3 text-left text-sm transition-colors flex items-center gap-2 ${
                  language === 'tr'
                    ? 'bg-cyan-500/20 text-cyan-400 font-semibold'
                    : 'text-slate-300 hover:bg-slate-700/50'
                }`}
              >
                <span className="text-lg">🇹🇷</span>
                <span>Türkçe</span>
                {language === 'tr' && (
                  <span className="ml-auto text-cyan-400">✓</span>
                )}
              </button>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`w-full px-4 py-3 text-left text-sm transition-colors border-t border-slate-700/50 flex items-center gap-2 ${
                  language === 'en'
                    ? 'bg-cyan-500/20 text-cyan-400 font-semibold'
                    : 'text-slate-300 hover:bg-slate-700/50'
                }`}
              >
                <span className="text-lg">🇬🇧</span>
                <span>English</span>
                {language === 'en' && (
                  <span className="ml-auto text-cyan-400">✓</span>
                )}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
