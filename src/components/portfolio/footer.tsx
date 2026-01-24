import { PERSONAL_INFO } from "@/lib/constants"

interface FooterProps {
  fadeInClass: string
}

export function Footer({ fadeInClass }: FooterProps) {
  return (
    <footer
      className={`border-t border-portfolio-bg-secondary/60 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 ${fadeInClass} delay-700`}
    >
      <div className="text-portfolio-text-faint text-sm hover:text-portfolio-text-tertiary transition-colors cursor-default">
        © {new Date().getFullYear()} {PERSONAL_INFO.name}
      </div>
      <div className="text-portfolio-text-faint text-xs font-mono hover:text-portfolio-teal/80 transition-colors cursor-default">
        {PERSONAL_INFO.motto}
      </div>
    </footer>
  )
}
