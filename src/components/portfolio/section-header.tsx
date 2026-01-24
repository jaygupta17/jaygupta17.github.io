interface SectionHeaderProps {
  title: string
  className?: string
}

export function SectionHeader({ title, className = "mb-6" }: SectionHeaderProps) {
  return (
    <h2
      className={`text-xs uppercase tracking-[0.2em] text-portfolio-text-faint font-medium flex items-center gap-2 ${className}`}
    >
      <span className="w-2 h-[1px] bg-portfolio-border-muted" />
      {title}
    </h2>
  )
}
