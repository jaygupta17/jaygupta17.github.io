import { ExternalLink } from "lucide-react"
import { PROJECTS, SECTION_TITLES } from "@/lib/constants"
import { SectionHeader } from "./section-header"

interface ProjectsProps {
  fadeInClass: string
  delayClass: string
}

export function Projects({ fadeInClass, delayClass }: ProjectsProps) {
  return (
    <section className={`mb-28 ${fadeInClass} ${delayClass}`}>
      <SectionHeader title={SECTION_TITLES.projects} className="mb-10" />

      <div className="grid gap-8">
        {PROJECTS.map((project) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative"
          >
            {/* Hover background effect */}
            <div className="project-card-bg" />

            {/* Title row */}
            <div className="flex items-baseline justify-between mb-3">
              <h3 className="text-base font-semibold text-portfolio-text-secondary group-hover:text-portfolio-teal-muted transition-colors flex items-center gap-2">
                {project.title}
                <span className="w-1 h-1 bg-portfolio-text-faint rounded-full" />
                <span className="text-portfolio-text-muted font-normal text-sm group-hover:text-portfolio-text-tertiary">
                  {project.subtitle}
                </span>
              </h3>
              <ExternalLink
                size={14}
                className="text-portfolio-text-faint group-hover:text-portfolio-teal/70 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 duration-300"
              />
            </div>

            {/* Description */}
            <p className="text-portfolio-text-tertiary text-sm mb-5 leading-relaxed max-w-lg group-hover:text-portfolio-text-secondary transition-colors">
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
