import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
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
  
  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col rounded-[2.5rem] border border-white/5",
        "bg-white/[0.02] backdrop-blur-3xl",
        "p-6 sm:p-8 text-start md:p-10",
        "hover:bg-white/[0.05] transition-all duration-500",
        "min-w-[280px] sm:min-w-[400px]",
        className
      )}
    >
      <div className="flex items-center gap-4">
        <Avatar className="h-14 w-14 border border-white/10">
          <AvatarImage src={author.avatar} alt={author.name} className="grayscale hover:grayscale-0 transition-all duration-700" />
        </Avatar>
        <div className="flex flex-col items-start translate-y-[-2px]">
          <h3 className="text-lg font-bold text-white uppercase tracking-tight leading-none">
            {author.name}
          </h3>
          <p className="text-xs text-royal font-bold uppercase tracking-[0.2em] mt-1.5 opacity-60">
            {author.handle}
          </p>
        </div>
      </div>
      <p className="text-base md:text-lg mt-8 text-blue-100/40 font-medium leading-[1.6] border-l-2 border-royal/10 pl-6 italic">
        "{text}"
      </p>
    </Card>
  )
}
