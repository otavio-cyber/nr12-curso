"use client"

import { useEffect, useRef, useState } from "react"

export function CredibilityBar() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const stats = [
    { value: "72h", label: "Carga Horária" },
    { value: "22", label: "Módulos" },
    { value: "50+", label: "Anos Experiência" },
    { value: "MEC", label: "Certificação" },
  ]

  return (
    <div ref={ref} className="bg-ink relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber/[0.03] via-transparent to-amber/[0.03]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="font-[family-name:var(--font-condensed)] text-4xl md:text-5xl lg:text-6xl font-bold text-amber leading-none block mb-2">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm text-white/50 font-light tracking-wide uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
