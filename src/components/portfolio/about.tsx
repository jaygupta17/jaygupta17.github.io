import { ABOUT_TEXT, SECTION_TITLES } from "@/lib/constants"
import { SectionHeader } from "./section-header"

interface AboutProps {
  fadeInClass: string
  delayClass: string
}

export function About({ fadeInClass, delayClass }: AboutProps) {
  return (
    <section className={`mb-28 ${fadeInClass} ${delayClass}`}>
      <SectionHeader title={SECTION_TITLES.about} />
      <p className="text-portfolio-text-tertiary leading-7 text-[15px] max-w-xl">
        {ABOUT_TEXT}
      </p>
    </section>
  )
}
