import React from 'react'
import { motion } from 'framer-motion'
import Hero from '@/components/ui/animated-shader-hero'
import { GlowingEffect } from '@/components/ui/glowing-effect'
import { useLanguage } from '@/contexts/LanguageContext'
import { 
  Code, 
  Smartphone, 
  Globe, 
  ShoppingCart, 
  BarChart3,
  Zap,
  Palette,
  Database,
  Cloud,
  Shield
} from 'lucide-react'

const solutions = [
  { 
    name: 'Web Uygulama Geliştirme', 
    icon: Code, 
    description: 'Modern, ölçeklenebilir ve performanslı web uygulamaları'
  },
  { 
    name: 'Mobil Uygulama Çözümleri', 
    icon: Smartphone, 
    description: 'Cross-platform mobil uygulamalar ile geniş kitlelere ulaşın'
  },
  { 
    name: 'E-Ticaret Platformları', 
    icon: ShoppingCart, 
    description: 'Kullanıcı dostu ve güvenli online satış deneyimleri'
  },
  { 
    name: 'Kurumsal Web Siteleri', 
    icon: Globe, 
    description: 'Profesyonel ve modern kurumsal dijital kimlik'
  },
  { 
    name: 'Analitik ve Dashboard', 
    icon: BarChart3, 
    description: 'Gerçek zamanlı veri görselleştirme ve analiz'
  },
  { 
    name: 'API Geliştirme', 
    icon: Zap, 
    description: 'Güçlü ve dokümantasyonlu RESTful API servisleri'
  },
  { 
    name: 'UI/UX Tasarım', 
    icon: Palette, 
    description: 'Kullanıcı odaklı, sezgisel ve modern arayüz tasarımları'
  },
  { 
    name: 'Veri Yönetimi', 
    icon: Database, 
    description: 'Güvenli ve optimize edilmiş veritabanı çözümleri'
  },
  { 
    name: 'Bulut Altyapı', 
    icon: Cloud, 
    description: 'Ölçeklenebilir ve güvenilir bulut mimarisi'
  },
  { 
    name: 'Güvenlik Çözümleri', 
    icon: Shield, 
    description: 'En iyi güvenlik pratikleri ile korumalı sistemler'
  },
]

export function Skills() {
  const { t } = useLanguage()
  
  return (
    <section id="skills" className="relative min-h-screen overflow-hidden bg-slate-950" aria-label="Sunduğum çözümler bölümü">
      {/* Shader Hero Background - Stars Effect - Full Section Height */}
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="relative w-full h-full overflow-hidden bg-slate-950">
          <Hero
            headline={{
              line1: '',
              line2: '',
            }}
            subtitle=""
            className="h-full w-full"
          />
          {/* Smoother gradient overlay to blend with background */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/50 to-slate-950/60 z-10 pointer-events-none" />
        </div>
      </div>

      {/* Skills Content */}
      <div className="relative z-20 min-h-screen py-12 sm:py-16 md:py-20 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent px-4">
              {t.skills.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8" />
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              {t.skills.subtitle}
            </p>
          </motion.div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={solution.name}
              solution={solution}
              index={index}
            />
          ))}
        </ul>
        </div>
      </div>
      
      {/* Soft gradient transition from Skills to Projects */}
      <div className="h-32 bg-gradient-to-b from-slate-950 via-slate-950/90 via-slate-950/75 via-slate-950/60 via-slate-900/80 to-slate-900" />
    </section>
  )
}

interface SolutionCardProps {
  solution: {
    name: string
    icon: React.ComponentType<{ className?: string }>
    description: string
  }
  index: number
}

const SolutionCard = React.memo(({ solution, index }: SolutionCardProps) => {
  const Icon = solution.icon

  return (
    <motion.li
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="min-h-[16rem] list-none"
    >
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-slate-700/50 p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-slate-700/50 bg-gradient-to-br from-slate-900/95 to-slate-950/95 backdrop-blur-md p-6 shadow-sm">
          <div className="relative flex flex-1 flex-col justify-between gap-4">
            <div className="w-fit rounded-lg border-[0.75px] border-slate-700/50 bg-slate-800/50 p-3">
              <Icon className="h-7 w-7 text-cyan-400" />
            </div>
            
            <div className="space-y-3 flex-1 flex flex-col justify-between">
              <h3 className="text-xl leading-[1.375rem] font-bold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-slate-100">
                {solution.name}
              </h3>
              <p className="font-sans text-sm leading-[1.375rem] md:text-base md:leading-[1.5rem] text-slate-400 flex-1">
                {solution.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.li>
  )
})
SolutionCard.displayName = 'SolutionCard'

