"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    text: "O curso mudou minha forma de enxergar os riscos na planta. Hoje consigo argumentar tecnicamente com a gerência e propor soluções com embasamento.",
    name: "Ricardo S.",
    role: "Técnico de Segurança — Metalúrgica",
    initials: "RS",
  },
  {
    text: "Professor Luiz tem uma capacidade rara de pegar situações complexas e traduzir de forma prática. O conteúdo de apreciação de riscos apliquei na semana seguinte.",
    name: "Ana Paula F.",
    role: "Engenheira de Produção — Alimentício",
    initials: "AP",
  },
  {
    text: "Como gestor de manutenção, eu precisava de autoridade técnica para tomar decisões sobre segurança das máquinas. O curso me deu isso.",
    name: "Marcos V.",
    role: "Gerente de Manutenção — Petroquímica",
    initials: "MV",
  },
]

const stats = [
  { value: "2.400+", label: "Profissionais formados" },
  { value: "15+", label: "Setores atendidos" },
  { value: "4.9", label: "Avaliação média" },
  { value: "50+", label: "Anos de experiência" },
]

export function SocialProofSection() {
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
    <section ref={ref} className="relative bg-ink py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[500px] h-[500px] rounded-full bg-amber/[0.02] blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className={`max-w-2xl mb-16 lg:mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-flex items-center gap-3 font-[family-name:var(--font-condensed)] text-[11px] font-semibold tracking-[0.15em] uppercase text-white/40 mb-6">
            <span className="w-8 h-px bg-amber" />
            Resultados reais
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-white mb-4 leading-[1.1]">
            O que dizem os profissionais
          </h2>
          <p className="text-lg text-white/50 font-light leading-relaxed">
            Técnicos, engenheiros e gestores de diferentes setores industriais que transformaram sua atuação.
          </p>
        </div>

        {/* Testimonials - Editorial layout */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative bg-ink-80 border border-white/[0.06] rounded-2xl p-8 transition-all duration-500 hover:border-amber/20 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-amber/20 mb-6" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber text-amber" />
                ))}
              </div>
              
              <p className="text-white/70 leading-relaxed font-light mb-8">
                {'"'}{testimonial.text}{'"'}
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber/20 to-amber/10 flex items-center justify-center">
                  <span className="font-[family-name:var(--font-condensed)] text-sm font-bold text-amber">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <span className="text-sm font-semibold text-white block">{testimonial.name}</span>
                  <span className="text-xs text-white/40 font-light">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className={`bg-gradient-to-r from-amber/10 via-amber/5 to-amber/10 border border-amber/10 rounded-2xl overflow-hidden transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-8 md:p-10 text-center ${
                  index < stats.length - 1 ? "border-b sm:border-b-0 sm:border-r border-amber/10" : ""
                }`}
              >
                <span className="font-[family-name:var(--font-condensed)] text-4xl md:text-5xl font-bold text-amber leading-none block mb-2">
                  {stat.value}
                </span>
                <span className="text-sm text-white/50 font-light">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
