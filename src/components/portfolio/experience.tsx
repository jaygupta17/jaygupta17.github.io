import { EXPERIENCE, SECTION_TITLES } from "@/lib/constants"
import { SectionHeader } from "./section-header"

interface ExperienceProps {
  fadeInClass: string
  delayClass: string
}

function parseAchievement(text: string) {
  // Parse <highlight> and <tech> tags
  const parts = text.split(/(<highlight>.*?<\/highlight>|<tech>.*?<\/tech>)/g)

  return parts.map((part, idx) => {
    if (part.startsWith("<highlight>")) {
      const content = part.replace(/<\/?highlight>/g, "")
      return (
        <span key={idx} className="achievement-highlight">
          {content}
        </span>
      )
    }
    if (part.startsWith("<tech>")) {
      const content = part.replace(/<\/?tech>/g, "")
      return (
        <span key={idx} className="tech-badge">
          {content}
        </span>
      )
    }
    return part
  })
}

export function Experience({ fadeInClass, delayClass }: ExperienceProps) {
  return (
    <section className={`mb-28 ${fadeInClass} ${delayClass}`}>
      <SectionHeader title={SECTION_TITLES.experience} className="mb-10" />

      <div className="relative border-l border-portfolio-border-muted pl-8 ml-2 md:ml-0 space-y-12">
        {EXPERIENCE.map((exp) => (
          <div key={`${exp.company}-${exp.title}`} className="group relative">
            {/* Timeline dot */}
            <div className="absolute -left-[37px] mt-2 flex items-center justify-center">
              <div className="timeline-dot" />
              <div className="timeline-ping" />
            </div>

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <h3 className="text-lg font-medium text-portfolio-text-secondary group-hover:text-portfolio-teal-muted transition-colors duration-300">
                {exp.title}
              </h3>
              <span className="text-xs text-portfolio-text-muted font-mono mt-1 sm:mt-0 bg-portfolio-bg-secondary/50 px-2 py-1 rounded">
                {exp.period}
              </span>
            </div>

            {/* Company */}
            <div className="text-portfolio-text-tertiary mb-3 font-medium">
              {exp.company}
            </div>

            {/* Description */}
            <p className="text-sm text-portfolio-text-muted mb-6 italic">
              {exp.description}
            </p>

            {/* Achievements */}
            <ul className="space-y-4 text-portfolio-text-tertiary text-sm leading-relaxed">
              {exp.achievements.map((achievement, idx) => (
                <li
                  key={idx}
                  className="relative pl-0 transition-transform duration-300 hover:translate-x-1"
                >
                  <span className="text-portfolio-text-faint mr-2">→</span>
                  {parseAchievement(achievement)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
