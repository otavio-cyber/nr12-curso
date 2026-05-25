"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const checkoutUrl = "https://pay.voompcreators.com.br/12741"

const modules = [
  { title: "Introdução ao curso", details: "" },
  { title: "Perigos e Riscos", details: "2 aulas – Carga total: 50 min" },
  { title: "Ferramentas manuais e motorizadas", details: "" },
  { title: "Elementos de máquinas", details: "" },
  { title: "Cabos de aço", details: "" },
  { title: "Máquinas de fluxo", details: "" },
  { title: "Motores a combustão", details: "" },
  { title: "Motores elétricos", details: "" },
  { title: "Prensas e equipamentos similares", details: "" },
  { title: "Zonas de perigo/Proteções em máquinas", details: "5 aulas – Carga total: 1h 30min" },
  { title: "Apreciação e Riscos", details: "4 aulas – Carga total: 1h 15min" },
  { title: "Fornos", details: "4 aulas – Carga total: 1h 10min" },
  { title: "Eletricidade", details: "4 aulas – Carga total: 1h 40min" },
  { title: "Processos de Soldagem", details: "6 aulas – Carga total: 2h 20min" },
  { title: "Trabalho em altura", details: "4 aulas – 1h 10min" },
  { title: "Equipamentos para movimentação de materiais", details: "11 aulas – Carga total: 4h" },
  { title: "Segurança em Construções e Edificações", details: "1 aula – Carga total: 30min" },
  { title: "Veículos de Transporte Industrial", details: "1 aula – Carga total: 30min" },
  { title: "Cozinha Industrial", details: "2 aulas – Carga total: 50min" },
  { title: "Industria Rural e Máquinas Agrícolas", details: "5 aulas – Carga total: 1h 40min" },
  { title: "Espaços Confinados", details: "6 aulas – Carga total: 2h 15min" },
  { title: "Áreas Classificadas", details: "1 aula – Carga total: 30 min" },
  { title: "Vasos de pressão – Caldeiras", details: "4 aulas – Carga total: 1h 30min" },
  { title: "Considerações finais", details: "Módulo Extra" },
]

export function ModulesSection() {
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
    <section ref={ref} id="conteudo" className="relative bg-ink py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber/[0.03] to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-amber/[0.02] blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header - Left aligned editorial style */}
        <div className={`max-w-3xl mb-16 lg:mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-flex items-center gap-3 font-[family-name:var(--font-condensed)] text-[11px] font-semibold tracking-[0.15em] uppercase text-white/40 mb-6">
            <span className="w-8 h-px bg-amber" />
            Estrutura do curso
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white mb-6 leading-[1.1]">
            24 módulos.<br />
            <span className="text-white/50">Do básico ao avançado.</span>
          </h2>
          <p className="text-lg text-white/50 font-light max-w-2xl leading-relaxed">
            Conteúdo estruturado para evoluir progressivamente — do entendimento dos componentes à análise e controle de riscos em cenários complexos.
          </p>
        </div>

        {/* Modules Grid - Asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden mb-14">
          {modules.map((module, index) => (
            <div
              key={index}
              className={`bg-ink-80 p-6 md:p-7 hover:bg-[#1a2030] transition-all duration-300 group ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${100 + (index % 12) * 50}ms` }}
            >
              <span className="font-[family-name:var(--font-condensed)] text-[10px] font-bold tracking-[0.2em] uppercase text-amber/70 block mb-3 transition-colors group-hover:text-amber">
                {module.details === "Módulo Extra" ? "Módulo Extra" : `Módulo ${String(index === 0 ? "Intro" : index).padStart(2, "0")}`}
              </span>
              <span className="text-sm font-medium text-white/80 leading-relaxed block transition-colors group-hover:text-white">
                {module.title}
              </span>
              {module.details && module.details !== "Módulo Extra" && (
                <span className="text-xs text-white/40 mt-2 block font-light">
                  {module.details}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <Link href={checkoutUrl} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-amber hover:bg-amber-dark text-white font-[family-name:var(--font-condensed)] text-sm font-semibold tracking-wider uppercase px-10 py-7 h-auto gap-3 group transition-all duration-300 hover:shadow-xl hover:shadow-amber/20"
            >
              Quero receber o cronograma completo do curso
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
          <span className="text-white/40 text-sm font-light">72 horas de conteúdo estruturado</span>
        </div>
      </div>
    </section>
  )
}
