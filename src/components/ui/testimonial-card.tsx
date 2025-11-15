import { cn } from "@/lib/utils"

export interface TestimonialAuthor {
  name: string
  handle: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'
  
  // Get initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }
  
  return (
    <Card
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "flex flex-col rounded-lg border-t border-slate-700/50",
        "bg-gradient-to-b from-slate-800/50 to-slate-900/30",
        "p-4 text-start sm:p-6",
        "hover:from-slate-800/70 hover:to-slate-900/50 hover:border-cyan-500/50",
        "max-w-[320px] sm:max-w-[320px]",
        "transition-all duration-300",
        "shadow-lg hover:shadow-xl hover:shadow-cyan-500/10",
        className
      )}
    >
      <div className="flex items-center gap-3">
        {/* Avatar without image - just initials */}
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-slate-700/50 flex items-center justify-center shrink-0">
          <span className="text-cyan-400 font-semibold text-lg">
            {getInitials(author.name)}
          </span>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-md font-semibold leading-none text-slate-200">
            {author.name}
          </h3>
          {author.handle && (
            <p className="text-sm text-slate-400">
              {author.handle}
            </p>
          )}
        </div>
      </div>
      <p className="sm:text-md mt-4 text-sm text-slate-300 leading-relaxed">
        {text}
      </p>
    </Card>
  )
}
