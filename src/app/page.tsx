"use client"

import { useState, useEffect, useRef } from "react"
import {
  AmbientBackground,
  MouseSpotlight,
  Hero,
  About,
  Experience,
  Projects,
  Skills,
  Education,
  Footer,
} from "@/components/portfolio"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Animation classes
  const fadeInClass = `transition-all duration-1000 ease-out ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`

  const delay1 = isVisible ? "delay-100" : ""
  const delay2 = isVisible ? "delay-200" : ""
  const delay3 = isVisible ? "delay-300" : ""
  const delay4 = isVisible ? "delay-500" : ""
  const delay5 = isVisible ? "delay-700" : ""

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-portfolio-bg text-portfolio-text-secondary font-sans portfolio-selection relative overflow-hidden"
    >
      <AmbientBackground />
      <MouseSpotlight mousePosition={mousePosition} />

      <main className="relative z-10 max-w-2xl mx-auto px-6 py-24 md:py-32">
        <Hero fadeInClass={fadeInClass} />
        <About fadeInClass={fadeInClass} delayClass={delay1} />
        <Experience fadeInClass={fadeInClass} delayClass={delay2} />
        <Projects fadeInClass={fadeInClass} delayClass={delay3} />
        <Skills fadeInClass={fadeInClass} delayClass={delay4} />
        <Education fadeInClass={fadeInClass} delayClass={delay5} />
        <Footer fadeInClass={fadeInClass} />
      </main>
    </div>
  )
}
