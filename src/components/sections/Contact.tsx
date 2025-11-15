import { motion } from 'framer-motion'
import { Mail, MapPin, Linkedin, Github, Twitter } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export function Contact() {
  const { t } = useLanguage()
  return (
    <section id="contact" className="min-h-screen bg-slate-950 py-12 sm:py-16 md:py-20 px-4 sm:px-6" aria-label="İletişim bölümü">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent px-4">
            {t.contact.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8" />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-200 mb-4 md:mb-6">
                {t.contact.reachOut}
              </h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                {t.contact.description}
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, text: 'eneskoc.dev@gmail.com', href: 'mailto:eneskoc.dev@gmail.com' },
                { icon: MapPin, text: 'Manisa, Turkey', href: '#' },
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <contact.icon className="text-cyan-400" size={24} />
                  </div>
                  <span className="text-slate-300 group-hover:text-cyan-400 transition-colors text-base sm:text-lg break-all">
                    {contact.text}
                  </span>
                </motion.a>
              ))}
            </div>

                  <div className="text-center mt-12">
                    <h4 className="text-xl font-semibold text-slate-200 mb-6">
                      {t.contact.socialMedia}
                    </h4>
                    <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
                      {[
                        { icon: Linkedin, href: 'https://www.linkedin.com/in/enes-ko%C3%A7-16698728b/', label: 'LinkedIn' },
                        { icon: Github, href: 'https://github.com/Enskc05/', label: 'GitHub' },
                        { icon: Twitter, href: 'https://x.com/EnskcSec', label: 'Twitter' },
                      ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                  >
                    <social.icon className="text-cyan-400" size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 text-center border-t border-slate-800 pt-8"
      >
                <p className="text-slate-500">
                  {t.contact.copyright.replace('{year}', new Date().getFullYear().toString())}
                </p>
      </motion.div>
    </section>
  )
}

