import { SKILLS, SECTION_TITLES } from "@/lib/constants"
import { SectionHeader } from "./section-header"

interface SkillsProps {
  fadeInClass: string
  delayClass: string
}

export function Skills({ fadeInClass, delayClass }: SkillsProps) {
  return (
    <section className={`mb-28 ${fadeInClass} ${delayClass}`}>
      <SectionHeader title={SECTION_TITLES.skills} className="mb-10" />

      <div className="grid grid-cols-2 gap-y-10 gap-x-8">
        {SKILLS.map((category) => (
          <div key={category.title}>
            <h3 className="text-sm font-medium text-portfolio-text-secondary mb-4 flex items-center gap-2">
              <category.icon size={14} className={category.iconColor} />
              {category.title}
            </h3>
            <ul className="text-sm text-portfolio-text-tertiary space-y-2">
              {category.skills.map((skill) => (
                <li key={skill.name} className="flex items-center gap-2">
                  <span className="skill-bullet" />
                  {skill.name}
                  {skill.badge && <span className="skill-badge">{skill.badge}</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
