"use client"

import { useEffect, useRef, useState } from "react"
import { AlertCircle } from "lucide-react"

export function PainSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const painPoints = [
    "Dificuldade em traduzir a norma para situações reais de campo",
    "Insegurança na hora de emitir laudos e pareceres técnicos",
    "Falta de método para identificar e priorizar riscos efetivamente",
    "Pressão operacional que compromete as decisões de segurança",
    "Profissionais sem visão sistêmica dos sistemas de máquinas",
  ]

  return (
    <section 
      ref={ref}
      id="problema" 
      className="relative bg-surface-warm py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber/[0.04] to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-amber/[0.03] blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-[1fr_480px] gap-16 lg:gap-24 items-center">
          {/* Content - Left aligned for variety */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="inline-flex items-center gap-2 font-[family-name:var(--font-condensed)] text-[11px] font-semibold tracking-[0.15em] uppercase text-amber mb-8">
              <span className="w-8 h-px bg-amber" />
              O problema real
            </span>
            
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-ink mb-8 leading-[1.1] text-balance">
              A teoria você já tem.<br />
              <span className="text-ink-60">Mas e na prática?</span>
            </h2>
            
            <div className="space-y-5 mb-10">
              <p className="text-lg lg:text-xl text-ink-60 leading-relaxed font-light max-w-xl">
                Muitos profissionais dominam os conceitos da NR12. Sabem citar artigos, conhecem os requisitos.
              </p>
              <p className="text-lg lg:text-xl text-ink leading-relaxed font-medium max-w-xl">
                Mas na hora de analisar uma máquina real, de tomar uma decisão de segurança, de orientar uma equipe — surgem as dúvidas.
              </p>
            </div>

            <ul className="space-y-5">
              {painPoints.map((point, index) => (
                <li 
                  key={index} 
                  className={`flex items-start gap-4 text-ink-60 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <AlertCircle className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual - Right side with depth */}
          <div className={`relative transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Background accent */}
            <div className="absolute -inset-4 bg-gradient-to-br from-ink/5 to-amber/5 rounded-2xl" />
            
            {/* Main image */}
            <div className="relative rounded-xl overflow-hidden aspect-[3/4] shadow-2xl shadow-ink/10">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=700&q=80"
                alt="Engenheiro analisando equipamento industrial"
                className="w-full h-full object-cover object-top"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-ink/0" />
            </div>
            
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 md:-left-10 bg-white border border-steel-light/50 rounded-xl p-6 shadow-xl shadow-ink/5 max-w-[240px] backdrop-blur-sm">
              <div className="font-[family-name:var(--font-condensed)] text-5xl font-bold text-ink leading-none mb-3">
                68%
              </div>
              <p className="text-sm text-steel leading-snug">
                dos acidentes com máquinas poderiam ser evitados com análise de risco adequada
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
