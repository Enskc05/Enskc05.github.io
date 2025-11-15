import { memo } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

const projects = [
  {
    title: 'E-Ticaret Platformu',
    description: 'Modern ve kullanıcı dostu e-ticaret çözümü. Güvenli ödeme entegrasyonları, stok yönetimi ve müşteri takip sistemi ile tam kapsamlı online satış deneyimi.',
    tech: ['Web Uygulama', 'E-Ticaret', 'Güvenlik'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    solution: 'E-Ticaret Platformları',
  },
  {
    title: 'Kurumsal İş Yönetim Sistemi',
    description: 'Kurumsal web uygulaması ile çalışanlarınız için merkezi bir yönetim platformu. Proje takibi, raporlama ve iletişim araçları bir arada.',
    tech: ['Web Uygulama', 'Kurumsal', 'Dashboard'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    solution: 'Web Uygulama Geliştirme',
  },
  {
    title: 'Analitik Dashboard',
    description: 'Gerçek zamanlı veri görselleştirme ve analiz platformu. İş kararlarınızı destekleyen detaylı raporlar ve grafiklerle donatılmış dashboard.',
    tech: ['Analitik', 'Dashboard', 'Veri Yönetimi'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    solution: 'Analitik ve Dashboard',
  },
  {
    title: 'Mobil Uygulama',
    description: 'Cross-platform mobil uygulama çözümü. iOS ve Android için tek kod tabanı ile hızlı ve maliyet etkin mobil deneyim.',
    tech: ['Mobil', 'Cross-Platform', 'UI/UX'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    solution: 'Mobil Uygulama Çözümleri',
  },
  {
    title: 'Kurumsal Web Sitesi',
    description: 'Profesyonel kurumsal web sitesi. Modern tasarım, SEO optimize edilmiş içerik ve responsive yapı ile dijital kimliğinizi güçlendirin.',
    tech: ['Web Sitesi', 'Kurumsal', 'UI/UX'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    solution: 'Kurumsal Web Siteleri',
  },
  {
    title: 'API Entegrasyon Platformu',
    description: 'RESTful API servisleri ile sistemlerinizi entegre edin. Dokümantasyonlu, güvenli ve ölçeklenebilir API çözümleri.',
    tech: ['API', 'Entegrasyon', 'Güvenlik'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    solution: 'API Geliştirme',
  },
]

export function Projects() {
  const { t } = useLanguage()
  
  return (
    <>
      <section id="projects" className="min-h-screen bg-slate-900 py-20 px-4" aria-label="Projeler bölümü">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {t.projects.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8" />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
              role="listitem"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.solution} projesi görseli`}
                  title={project.title}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                    {project.solution}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      </section>
    </>
  )
}

