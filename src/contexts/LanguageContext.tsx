import { createContext, useContext, useState, useEffect, useMemo } from 'react'
import type { ReactNode } from 'react'

type Language = 'tr' | 'en'

interface Translations {
  nav: {
    home: string
    about: string
    skills: string
    projects: string
    testimonials: string
    contact: string
  }
  hero: {
    title: string
    titleBreak: string
    animatedWords: string[]
  }
  about: {
    title: string
    intro: string
    experience: string
    projects: string
    satisfaction: string
    support: string
    passion: string
  }
  skills: {
    title: string
    subtitle: string
  }
  projects: {
    title: string
    subtitle: string
  }
  testimonials: {
    title: string
    subtitle: string
  }
  contact: {
    title: string
    subtitle: string
    reachOut: string
    description: string
    socialMedia: string
    copyright: string
  }
}

const translations: Record<Language, Translations> = {
  tr: {
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      skills: 'Çözümler',
      projects: 'Projeler',
      testimonials: 'Müşteri Yorumları',
      contact: 'İletişim',
    },
    hero: {
      title: 'Dijital Dünyada <br /> Fark Yaratan Çözümler',
      titleBreak: 'Dijital Dünyada',
      animatedWords: [
        'Full Stack Developer',
        'Web Geliştirici',
        'Dijital Çözüm Uzmanı',
        'Yazılım Mimarı',
        'Teknoloji Danışmanı'
      ],
    },
    about: {
      title: 'Hakkımda',
      intro: 'Modern web teknolojileri ile kullanıcı deneyimini ön planda tutan, performanslı ve ölçeklenebilir dijital çözümler geliştiriyorum.',
      experience: 'profesyonel geliştirme deneyimim boyunca, küçük startup\'lardan büyük kurumsal projelere kadar geniş bir yelpazede çalışma fırsatı buldum.',
      projects: 'başarıyla tamamlanan proje ile müşterilerimin dijital hedeflerine ulaşmalarına yardımcı oldum.',
      satisfaction: 'müşteri memnuniyeti oranı ile gurur duyuyorum. Her zaman kaliteli, zamanında teslimat yapmayı hedefliyorum.',
      support: 'kesintisiz teknik destek sağlayarak, müşterilerimin projelerinin her aşamasında yanlarında oluyorum.',
      passion: 'Kodlama benim için sadece bir meslek değil, aynı zamanda bir tutku. Sürekli öğrenmeye ve yeni teknolojileri keşfetmeye devam ediyorum.',
    },
    skills: {
      title: 'Sunduğum Çözümler',
      subtitle: 'İşinize değer katan, modern ve ölçeklenebilir dijital çözümler',
    },
    projects: {
      title: 'Projeler',
      subtitle: 'Başarıyla tamamladığım projeler. Her biri müşteri ihtiyaçlarına özel çözümler sunuyor.',
    },
    testimonials: {
      title: 'Müşteri Yorumları',
      subtitle: 'İşlerini bir üst seviyeye taşıyan müşterilerimizin görüşleri',
    },
    contact: {
      title: 'İletişim',
      subtitle: 'Projeniz için birlikte çalışmak ister misiniz? Benimle iletişime geçin!',
      reachOut: 'Bana Ulaşın',
      description: 'Yeni projeler, işbirlikleri veya sadece merhaba demek için benimle iletişime geçmekten çekinmeyin. Size en kısa sürede geri dönüş yapacağım.',
      socialMedia: 'Sosyal Medya',
      copyright: '© {year} Eneskc05. Tüm hakları saklıdır.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Solutions',
      projects: 'Projects',
      testimonials: 'Testimonials',
      contact: 'Contact',
    },
    hero: {
      title: 'Solutions That Make <br /> a Difference in the Digital World',
      titleBreak: 'Solutions That Make',
      animatedWords: [
        'Full Stack Developer',
        'Web Developer',
        'Digital Solutions Expert',
        'Software Architect',
        'Technology Consultant'
      ],
    },
    about: {
      title: 'About Me',
      intro: 'I develop performant and scalable digital solutions with modern web technologies, prioritizing user experience.',
      experience: 'years of professional development experience, I have had the opportunity to work across a wide spectrum from small startups to large corporate projects.',
      projects: 'successfully completed projects helping my clients achieve their digital goals.',
      satisfaction: 'client satisfaction rate. I always aim for quality, on-time delivery.',
      support: 'providing uninterrupted technical support, I stand by my clients at every stage of their projects.',
      passion: 'Coding is not just a profession for me, but also a passion. I continue to learn and discover new technologies.',
    },
    skills: {
      title: 'Solutions I Offer',
      subtitle: 'Modern and scalable digital solutions that add value to your business',
    },
    projects: {
      title: 'Projects',
      subtitle: 'Projects I have successfully completed. Each one offers custom solutions tailored to client needs.',
    },
    testimonials: {
      title: 'Client Testimonials',
      subtitle: 'Feedback from our clients who have taken their businesses to the next level',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Would you like to work together on your project? Get in touch with me!',
      reachOut: 'Get In Touch',
      description: 'Don\'t hesitate to contact me for new projects, collaborations, or just to say hello. I will get back to you as soon as possible.',
      socialMedia: 'Social Media',
      copyright: '© {year} Eneskc05. All rights reserved.',
    },
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language')
    return (saved === 'tr' || saved === 'en') ? saved : 'tr'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = language
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  const value = useMemo(() => ({
    language,
    setLanguage,
    t: translations[language]
  }), [language])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
