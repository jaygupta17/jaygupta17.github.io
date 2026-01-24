import type { LucideIcon } from "lucide-react"

export interface SocialLink {
  icon: LucideIcon
  label: string
  href: string
}

export interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
}

export interface ProjectItem {
  title: string
  subtitle: string
  description: string
  href: string
  technologies: string[]
}

export interface SkillCategory {
  title: string
  icon: LucideIcon
  iconColor: string
  skills: SkillItem[]
}

export interface SkillItem {
  name: string
  badge?: string
}

export interface EducationItem {
  degree: string
  institution: string
  period: string
  gpa: string
}

export interface PersonalInfo {
  name: string
  tagline: string
  highlights: string[]
  bio: string
  motto: string
}
