"use client"

interface MouseSpotlightProps {
  mousePosition: { x: number; y: number }
}

export function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-portfolio-blob-violet rounded-full blur-[100px] animate-blob" />
      <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] bg-portfolio-blob-teal rounded-full blur-[100px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-portfolio-blob-blue rounded-full blur-[100px] animate-blob animation-delay-4000" />

      {/* Noise texture overlay for film grain effect */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  )
}

export function MouseSpotlight({ mousePosition }: MouseSpotlightProps) {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.03), transparent 40%)`,
      }}
    />
  )
}
