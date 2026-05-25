"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Shield, Clock, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

const checkoutUrl = "https://pay.voompcreators.com.br/12741"

export function FinalCTASection() {
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

  return (
    <section ref={ref} className="relative bg-ink py-24 md:py-36 lg:py-44 overflow-hidden">
      {/* Background Image with strong overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.07]"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1565363887715-d2eca5b15f29?w=1400&q=60')",
        }}
      />
      
      {/* Gradient accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-amber/[0.05] blur-3xl" />

      <div className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        {/* Quote-style headline */}
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[68px] text-white mb-8 leading-[1.1]">
          Segurança não é custo.{" "}
          <em className="text-amber italic">É investimento.</em>
        </h2>
        
        <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light mb-14 max-w-2xl mx-auto">
          Este é o momento de investir na sua qualificação e se tornar o profissional que a indústria precisa. Com autoridade técnica, visão estratégica e certificação reconhecida.
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center gap-6 mb-10">
          {/* Price block */}
          <div className="flex flex-col items-center gap-1">
            <span className="text-white/30 text-sm line-through">De R$ 1.430,00</span>
            <div className="flex items-baseline gap-2">
              <span className="text-white/60 text-lg font-light">Por apenas</span>
              <span className="font-[family-name:var(--font-display)] text-5xl text-white font-bold">R$ 988,00</span>
            </div>
            <span className="text-amber/70 text-sm font-medium tracking-wide">ou 10x de R$ 98,80 no cartão</span>
          </div>
          <Link href={checkoutUrl} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-amber hover:bg-amber-dark text-white font-[family-name:var(--font-condensed)] text-base font-semibold tracking-wider uppercase px-12 py-8 h-auto gap-3 group transition-all duration-300 hover:shadow-2xl hover:shadow-amber/30 hover:scale-105"
            >
              Inscrever-se agora
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Trust Items */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          {[
            { icon: Shield, label: "Acesso imediato" },
            { icon: Clock, label: "Estude no seu ritmo" },
            { icon: RefreshCw, label: "Atualizações inclusas" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2.5 text-white/40 text-sm font-light">
              <item.icon className="w-4 h-4 text-amber/60" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
