"use client"

import { useEffect, useRef, useState } from "react"
import { Target, Lightbulb, FileCheck, Layers, Sparkles, Users } from "lucide-react"

const applications = [
  {
    icon: Target,
    title: "Realizar apreciação de risco estruturada",
    description: "Aplicar metodologias formais para identificar, analisar e avaliar riscos em máquinas com método e documentação.",
  },
  {
    icon: Lightbulb,
    title: "Tomar decisões de segurança com fundamento",
    description: "Emitir pareceres técnicos e orientar equipes com a segurança de quem domina a norma na prática.",
  },
  {
    icon: FileCheck,
    title: "Elaborar documentação técnica e laudos",
    description: "Produzir documentação de conformidade, relatórios de inspeção e laudos técnicos com respaldo institucional.",
  },
  {
    icon: Layers,
    title: "Implementar medidas de controle eficazes",
    description: "Selecionar e propor soluções de segurança adequadas para cada tipo de máquina e contexto operacional.",
  },
  {
    icon: Sparkles,
    title: "Atuar com visão sistêmica nos processos",
    description: "Enxergar além do ponto isolado de risco — compreender o sistema e o impacto nas operações.",
  },
  {
    icon: Users,
    title: "Liderar equipes com autoridade técnica",
    description: "Conquistar reconhecimento ao demonstrar profundo conhecimento técnico e prático em segurança.",
  },
]

export function ApplicationsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative bg-white py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_var(--c-steel-xlight)_1px,_transparent_0)] [background-size:48px_48px] opacity-40" />
      
      {/* Accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header - Split layout */}
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-20 mb-16 lg:mb-24 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div>
            <span className="inline-flex items-center gap-3 font-[family-name:var(--font-condensed)] text-[11px] font-semibold tracking-[0.15em] uppercase text-amber mb-6">
              <span className="w-8 h-px bg-amber" />
              Aplicação prática
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-ink leading-[1.1]">
              O que você vai conseguir fazer na prática
            </h2>
          </div>
          <div className="lg:pt-12">
            <p className="text-lg lg:text-xl text-ink-60 leading-relaxed font-light">
              Cada módulo foi construído com base em situações reais da indústria. Você aprende fazendo — com aplicações direcionadas ao seu trabalho real.
            </p>
          </div>
        </div>

        {/* Applications Grid - Bento style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {applications.map((app, index) => (
            <div
              key={index}
              className={`group relative bg-surface border border-steel-light/30 rounded-2xl p-8 transition-all duration-500 hover:border-amber/30 hover:shadow-xl hover:shadow-ink/5 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 80}ms` }}
            >
              {/* Hover accent line */}
              <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-amber via-amber to-amber/50 rounded-full transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              
              <div className="w-14 h-14 rounded-2xl bg-amber/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-amber group-hover:scale-110">
                <app.icon className="w-6 h-6 text-amber transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-ink mb-3 leading-tight">{app.title}</h3>
              <p className="text-ink-60 leading-relaxed font-light">{app.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
