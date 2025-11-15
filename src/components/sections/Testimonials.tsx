import { TestimonialsSection } from '@/components/ui/testimonials-with-marquee'
import { useLanguage } from '@/contexts/LanguageContext'

const testimonials = [
  {
    author: {
      name: "Ahmet Yılmaz",
      handle: "Kurumsal Müdür",
    },
    text: "Web uygulamamızın geliştirilmesi sürecinde profesyonel yaklaşımı ve zamanında teslimatı sayesinde işimizi çok daha verimli hale getirdik. Kesinlikle tavsiye ederim.",
  },
  {
    author: {
      name: "Ayşe Demir",
      handle: "E-Ticaret Girişimcisi",
    },
    text: "E-ticaret platformumuzun kurulumundan bu yana satışlarımız %200 arttı. Kullanıcı dostu arayüz ve mükemmel teknik destek için teşekkürler.",
  },
  {
    author: {
      name: "Mehmet Kaya",
      handle: "Teknoloji Direktörü",
    },
    text: "Mobil uygulama projemizde gösterdikleri özveri ve teknik uzmanlık gerçekten etkileyici. Sonuçlar beklentilerimizin çok üzerindeydi.",
  },
  {
    author: {
      name: "Zeynep Şahin",
      handle: "Pazarlama Müdürü",
    },
    text: "Kurumsal web sitemizin tasarımı ve işlevselliği sayesinde marka kimliğimizi güçlendirdik. Müşteri geri bildirimleri çok olumlu.",
  },
  {
    author: {
      name: "Can Öztürk",
      handle: "İşletme Sahibi",
    },
    text: "API entegrasyonu ve veri yönetimi konularındaki deneyimi sayesinde sistemlerimizi başarıyla optimize ettik. Harika bir çalışma ortaya çıktı.",
  },
  {
    author: {
      name: "Elif Arslan",
      handle: "Proje Yöneticisi",
    },
    text: "Analitik dashboard sayesinde iş kararlarımızı çok daha hızlı ve veri odaklı alabiliyoruz. Performans ve güvenilirlik konusunda mükemmel.",
  },
]

export function Testimonials() {
  const { t } = useLanguage()
  
  return (
    <>
      {/* Soft gradient transition from Projects to Testimonials - with accent colors */}
      <div className="h-32 bg-gradient-to-b from-slate-900 via-slate-900/95 via-cyan-950/30 via-blue-950/25 via-slate-900/90 to-slate-900" />
      
      <section id="testimonials" aria-label="Müşteri yorumları bölümü">
        <TestimonialsSection
          title={t.testimonials.title}
          description={t.testimonials.subtitle}
          testimonials={testimonials}
        />
      </section>
      
      {/* Soft gradient transition from Testimonials to Contact - with accent colors */}
      <div className="h-32 bg-gradient-to-b from-slate-900 via-blue-950/25 via-cyan-950/30 via-slate-950/90 via-slate-950/95 to-slate-950" />
    </>
  )
}
