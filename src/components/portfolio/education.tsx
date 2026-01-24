import { EDUCATION, SECTION_TITLES } from "@/lib/constants"
import { SectionHeader } from "./section-header"

interface EducationProps {
  fadeInClass: string
  delayClass: string
}

export function Education({ fadeInClass, delayClass }: EducationProps) {
  return (
    <section className={`mb-24 ${fadeInClass} ${delayClass}`}>
      <SectionHeader title={SECTION_TITLES.education} />

      {EDUCATION.map((edu) => (
        <div
          key={edu.institution}
          className="hover:bg-portfolio-bg-secondary/30 p-4 -mx-4 rounded-lg transition-colors"
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
            <h3 className="text-sm font-medium text-portfolio-text-secondary">
              {edu.degree}
            </h3>
            <span className="text-xs text-portfolio-text-muted font-mono mt-1 sm:mt-0">
              {edu.period}
            </span>
          </div>
          <div className="text-sm text-portfolio-text-tertiary">{edu.institution}</div>
          <div className="text-xs text-portfolio-text-muted mt-2 font-mono text-opacity-70">
            {edu.gpa}
          </div>
        </div>
      ))}
    </section>
  )
}
