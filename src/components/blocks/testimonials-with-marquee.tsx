import { cn } from "@/lib/utils"
import { TestimonialCard, type TestimonialAuthor } from "@/components/ui/testimonial-card"

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
      "bg-navy text-white overflow-hidden",
      "py-24 sm:py-40 px-0",
      className
    )}>
      <div className="mx-auto flex flex-col items-center gap-16 sm:gap-24 text-center">
        <div className="flex flex-col items-center gap-6 sm:gap-8 px-6 max-w-4xl text-center">
          <p className="text-royal font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs sm:mb-[-1rem]">Community Pulse</p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight uppercase">
            {title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-medium text-blue-100/30 uppercase tracking-[0.2em] leading-relaxed">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:2rem] [gap:var(--gap)] flex-row [--duration:60s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(4)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-navy to-transparent z-10 sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/4 bg-gradient-to-l from-navy to-transparent z-10 sm:block" />
        </div>
      </div>
    </section>
  )
}
