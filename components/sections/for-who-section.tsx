"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Shield, Briefcase, Settings, Users, ClipboardCheck, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const checkoutUrl = "https://pay.voompcreators.com.br/12741"

const audiences = [
  {
    icon: Shield,
    title: "Técnicos e Engenheiros de Segurança",
    description: "Profissionais que precisam ir além da teoria e aplicar a NR12 com confiança no dia a dia da operação.",
  },
  {
    icon: Briefcase,
    title: "Gestores Industriais e de Manutenção",
    description: "Líderes responsáveis por decisões críticas de operação que precisam de embasamento técnico sólido.",
  },
  {
    icon: Settings,
    title: "Supervisores de Produção",
    description: "Responsáveis diretos pela operação segura de máquinas que precisam reconhecer riscos no cotidiano.",
  },
  {
    icon: Users,
    title: "Consultores Técnicos",
    description: "Especialistas que assessoram empresas em conformidade com NR12 e boas práticas de segurança.",
  },
  {
    icon: ClipboardCheck,
    title: "Profissionais de Auditoria e Compliance",
    description: "Quem precisa de base técnica para auditar, documentar e garantir a conformidade dos sistemas.",
  },
]

export function ForWhoSection() {
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
    <section ref={ref} className="relative bg-surface py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[600px] h-[600px] rounded-full bg-amber/[0.03] blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-[420px_1fr] gap-12 lg:gap-24">
          {/* Sticky Content */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <span className="inline-flex items-center gap-3 font-[family-name:var(--font-condensed)] text-[11px] font-semibold tracking-[0.15em] uppercase text-amber mb-6">
                <span className="w-8 h-px bg-amber" />
                Público-alvo
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-[44px] lg:text-[52px] text-ink mb-6 leading-[1.1]">
                Este curso foi feito para você?
              </h2>
              <p className="text-lg text-ink-60 leading-relaxed font-light mb-10">
                O programa é voltado para profissionais que atuam ou desejam atuar com segurança industrial — do técnico ao gestor.
              </p>
              <Link href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-amber hover:bg-amber-dark text-white font-[family-name:var(--font-condensed)] text-sm font-semibold tracking-wider uppercase px-8 py-6 h-auto gap-3 group transition-all duration-300 hover:shadow-lg hover:shadow-amber/20"
                >
                  Garantir minha vaga
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Audience Items - Cards with hover */}
          <div className="space-y-4">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className={`group bg-white border border-steel-light/50 rounded-xl p-6 md:p-8 transition-all duration-500 hover:border-amber/30 hover:shadow-lg hover:shadow-amber/5 hover:-translate-y-0.5 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-amber/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-amber group-hover:scale-110">
                    <audience.icon className="w-5 h-5 text-amber transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink text-lg mb-2">{audience.title}</h3>
                    <p className="text-ink-60 leading-relaxed font-light">{audience.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
