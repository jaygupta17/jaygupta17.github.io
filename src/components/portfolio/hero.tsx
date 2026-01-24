import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants"

interface HeroProps {
  fadeInClass: string
}

export function Hero({ fadeInClass }: HeroProps) {
  return (
    <header className={`mb-28 ${fadeInClass}`}>
      {/* Name with hover effect */}
      <div className="inline-block mb-6 relative group cursor-default">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-portfolio-text-primary relative z-10">
          {PERSONAL_INFO.name}.
        </h1>
        <div className="absolute bottom-1 left-0 w-full h-2 bg-portfolio-teal-bg -z-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>

      {/* Tagline with highlighted words */}
      <p className="text-xl md:text-2xl text-portfolio-text-tertiary leading-relaxed font-light mb-8 tracking-tight">
        {PERSONAL_INFO.tagline}{" "}
        {PERSONAL_INFO.highlights.map((highlight, idx) => (
          <span key={highlight}>
            <span className="text-highlight">{highlight}</span>
            {idx < PERSONAL_INFO.highlights.length - 1 && ", "}
            {idx === PERSONAL_INFO.highlights.length - 2 && "and "}
          </span>
        ))}
        .
      </p>

      {/* Bio */}
      <p className="text-base text-portfolio-text-muted mb-10 max-w-lg leading-relaxed border-l-2 border-portfolio-border pl-4">
        {PERSONAL_INFO.bio}
      </p>

      {/* Social Links */}
      <div className="flex items-center gap-6 text-sm font-medium text-portfolio-text-muted">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-portfolio-text-primary transition-all duration-300 group relative"
          >
            <link.icon
              size={16}
              className="group-hover:text-portfolio-teal-muted transition-colors duration-300"
            />
            <span>{link.label}</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-portfolio-text-faint group-hover:w-full transition-all duration-300" />
          </a>
        ))}
      </div>
    </header>
  )
}
