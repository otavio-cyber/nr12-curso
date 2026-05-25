"use client"

import { useEffect, useRef, useState } from "react"
import { Check, X } from "lucide-react"

export function TransformationSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const beforeItems = [
    "Insegurança ao analisar máquinas em campo",
    "Dificuldade em priorizar riscos de forma sistemática",
    "Conhecimento teórico sem aplicabilidade prática",
    "Decisões baseadas em intuição, sem método",
    "Pouca autoridade técnica perante a equipe",
    "Currículo sem diferencial de mercado",
  ]

  const afterItems = [
    "Capacidade real de identificar e analisar riscos",
    "Método estruturado para apreciação de riscos",
    "Visão sistêmica de máquinas e instalações",
    "Decisões técnicas fundamentadas e seguras",
    "Reconhecimento e autoridade técnica na área",
    "Certificado universitário MEC no currículo",
  ]

  return (
    <section ref={ref} className="relative bg-white py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_var(--c-steel-xlight)_1px,_transparent_0)] [background-size:40px_40px] opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header - Asymmetric layout */}
        <div className={`grid lg:grid-cols-[1fr_400px] gap-8 lg:gap-20 items-end mb-16 lg:mb-24 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div>
            <span className="inline-flex items-center gap-3 font-[family-name:var(--font-condensed)] text-[11px] font-semibold tracking-[0.15em] uppercase text-amber mb-6">
              <span className="w-8 h-px bg-amber" />
              Transformação
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-ink leading-[1.1]">
              O que muda depois do curso
            </h2>
          </div>
          <p className="text-lg text-ink-60 leading-relaxed font-light lg:text-right">
            Não é só um certificado. É uma mudança real na forma como você enxerga riscos e toma decisões.
          </p>
        </div>

        {/* Before/After - Full width dramatic comparison */}
        <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl shadow-ink/5">
          {/* Before */}
          <div className={`bg-surface-2 p-8 md:p-12 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-3 h-3 rounded-full bg-steel/50" />
              <span className="font-[family-name:var(--font-condensed)] text-xs font-bold tracking-[0.15em] uppercase text-steel">
                Antes do curso
              </span>
            </div>
            <ul className="space-y-5">
              {beforeItems.map((item, index) => (
                <li 
                  key={index} 
                  className={`flex items-start gap-4 text-ink-60 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${300 + index * 80}ms` }}
                >
                  <X className="w-4 h-4 flex-shrink-0 mt-1 text-steel/50" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className={`bg-ink p-8 md:p-12 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-3 h-3 rounded-full bg-amber" />
              <span className="font-[family-name:var(--font-condensed)] text-xs font-bold tracking-[0.15em] uppercase text-amber">
                Depois do curso
              </span>
            </div>
            <ul className="space-y-5">
              {afterItems.map((item, index) => (
                <li 
                  key={index} 
                  className={`flex items-start gap-4 text-white/80 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${400 + index * 80}ms` }}
                >
                  <Check className="w-4 h-4 flex-shrink-0 mt-1 text-amber" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
