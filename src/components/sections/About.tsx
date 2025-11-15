import { motion } from 'framer-motion'
import AnimatedTextCycle from '@/components/ui/animated-text-cycle'
import { useLanguage } from '@/contexts/LanguageContext'

export function About() {
  const { t, language } = useLanguage()
  return (
    <>
      {/* Gradient transition from Lamp to About */}
      <div className="h-20 bg-gradient-to-b from-slate-950 to-slate-900" />
      <section id="about" className="min-h-screen bg-slate-900 py-16 sm:py-24 md:py-32 px-4 sm:px-6" aria-label="Hakkımda bölümü">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent px-4">
              {t.about.title}
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto" />
          </motion.div>

          {/* Hero Introduction with Animated Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-16"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-16 border border-slate-700/50 shadow-2xl">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-slate-200 leading-relaxed text-center"
              >
                {language === 'tr' ? (
                  <>
                    Merhaba, ben bir{' '}
                    <AnimatedTextCycle
                      words={t.hero.animatedWords}
                      interval={3000}
                      className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                    />
                    . {t.about.intro}
                  </>
                ) : (
                  <>
                    Hello, I'm a{' '}
                    <AnimatedTextCycle
                      words={t.hero.animatedWords}
                      interval={3000}
                      className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                    />
                    . {t.about.intro}
                  </>
                )}
              </motion.p>
            </div>
          </motion.div>

          {/* Content Sections Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Experience Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-700/50 shadow-xl h-full">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {language === 'tr' ? 'Deneyim' : 'Experience'}
                  </h3>
                </div>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
                  {language === 'tr' ? (
                    <>
                      <span className="text-cyan-400 font-semibold text-xl">5+ yıllık</span> {t.about.experience}
                    </>
                  ) : (
                    <>
                      With <span className="text-cyan-400 font-semibold text-xl">5+ years</span> {t.about.experience}
                    </>
                  )}
                </p>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  {language === 'tr' ? 'Her projede en iyi pratikleri uygulayarak, ölçeklenebilir ve sürdürülebilir kod yazıyorum.' : 'I write scalable and sustainable code by applying best practices in every project.'}
                </p>
              </div>
            </motion.div>

            {/* Projects Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {language === 'tr' ? 'Projeler' : 'Projects'}
                  </h3>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed mb-4">
                  {language === 'tr' ? (
                    <>
                      <span className="text-blue-400 font-semibold text-xl">50+ başarıyla tamamlanan proje</span> ile {t.about.projects}
                    </>
                  ) : (
                    <>
                      With <span className="text-blue-400 font-semibold text-xl">50+ successfully completed projects</span>, {t.about.projects}
                    </>
                  )}
                </p>
                <p className="text-slate-400 text-base leading-relaxed">
                  {language === 'tr' ? 'Her proje için kaliteli, zamanında teslimat ve sürdürülebilir çözümler sağlıyorum.' : 'I provide quality, on-time delivery and sustainable solutions for each project.'}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Values & Approach Section */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Satisfaction Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {language === 'tr' ? 'Müşteri Memnuniyeti' : 'Client Satisfaction'}
                  </h3>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed">
                  {language === 'tr' ? (
                    <>
                      <span className="text-cyan-400 font-semibold text-xl">%98 müşteri memnuniyeti</span> oranı ile {t.about.satisfaction}
                    </>
                  ) : (
                    <>
                      With a <span className="text-cyan-400 font-semibold text-xl">98% client satisfaction</span> rate, {t.about.satisfaction}
                    </>
                  )}
                </p>
              </div>
            </motion.div>

            {/* Support Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {language === 'tr' ? 'Kesintisiz Destek' : 'Uninterrupted Support'}
                  </h3>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed">
                  {language === 'tr' ? (
                    <>
                      <span className="text-blue-400 font-semibold text-xl">7/24 kesintisiz teknik destek</span> sağlayarak, {t.about.support}
                    </>
                  ) : (
                    <>
                      By <span className="text-blue-400 font-semibold text-xl">providing 24/7 uninterrupted technical support</span>, {t.about.support}
                    </>
                  )}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Passion Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-3xl p-10 md:p-16 border border-slate-700/50 shadow-2xl">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-xl md:text-2xl font-light text-slate-300 leading-relaxed text-center"
              >
                {language === 'tr' ? (
                  <>
                    Kodlama benim için sadece bir meslek değil, aynı zamanda bir{' '}
                    <span className="font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      tutku
                    </span>
                    . {t.about.passion}
                  </>
                ) : (
                  <>
                    Coding is not just a profession for me, but also a{' '}
                    <span className="font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      passion
                    </span>
                    . {t.about.passion}
                  </>
                )}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Gradient transition from About to Skills */}
      <div className="h-20 bg-gradient-to-b from-slate-900 to-slate-950" />
    </>
  )
}

