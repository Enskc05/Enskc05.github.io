import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Languages } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [showLangMenu, setShowLangMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowLangMenu(false)
      }
    }

    if (showLangMenu) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showLangMenu])

  const handleLanguageChange = (lang: 'tr' | 'en') => {
    setLanguage(lang)
    setShowLangMenu(false)
  }

  return (
    <div 
      ref={menuRef}
      className="fixed top-4 right-4 z-50"
    >
      <motion.button
        onClick={() => setShowLangMenu(!showLangMenu)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="p-3 rounded-lg bg-slate-800/90 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 flex items-center gap-2"
        aria-label="Change language"
        aria-expanded={showLangMenu}
      >
        <Languages className="w-5 h-5 text-cyan-400" />
        <span className="text-sm font-medium text-slate-200 uppercase">
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
              className={`w-full px-4 py-3 text-left text-sm transition-colors flex items-center gap-2 border-t border-slate-700/50 ${
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
  )
}

