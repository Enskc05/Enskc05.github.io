import { cn } from "@/lib/utils"
import { TestimonialCard } from "@/components/ui/testimonial-card"
import type { TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "bg-slate-900 text-slate-200",
      "py-12 sm:py-24 md:py-32 px-0",
      className
    )}>
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-md max-w-[600px] font-medium text-slate-400 sm:text-xl">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-4 sm:py-6 md:py-8">
          <div className="group flex overflow-hidden w-full" style={{ '--gap': '1rem', '--duration': '40s' } as React.CSSProperties}>
            <div className="flex shrink-0 animate-marquee gap-4 group-hover:[animation-play-state:paused]">
              {/* First set of testimonials */}
              {testimonials.map((testimonial, i) => (
                <TestimonialCard 
                  key={`first-${i}`}
                  {...testimonial}
                />
              ))}
              {/* Duplicate set for seamless loop */}
              {testimonials.map((testimonial, i) => (
                <TestimonialCard 
                  key={`second-${i}`}
                  {...testimonial}
                />
              ))}
              {/* Third set for smoother loop */}
              {testimonials.map((testimonial, i) => (
                <TestimonialCard 
                  key={`third-${i}`}
                  {...testimonial}
                />
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-slate-900 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-slate-900 to-transparent z-10" />
        </div>
      </div>
    </section>
  )
}
