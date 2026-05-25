"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, ChevronDown, Shield, Clock, Award, GraduationCap, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const checkoutUrl = "https://pay.voompcreators.com.br/12741"

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY
        const parallax = heroRef.current.querySelector('.hero-bg') as HTMLElement
        if (parallax) {
          parallax.style.transform = `translateY(${scrolled * 0.3}px)`
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        className="hero-bg absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1920&q=80')`,
        }}
      />
      
      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-ink/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
      
      {/* Subtle amber accent glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-amber/5 via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28 pt-32">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            <div className="w-12 h-px bg-gradient-to-r from-amber to-amber/0" />
            <span className="font-[family-name:var(--font-condensed)] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-amber">
              Extensão Universitária
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] text-white max-w-4xl mb-8 leading-[1.05] animate-fade-in-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            Aprenda a identificar riscos{" "}
            <em className="not-italic text-amber italic">antes</em>{" "}
            que eles se tornem acidentes.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/70 max-w-2xl mb-12 leading-relaxed font-light animate-fade-in-up opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            Formação prática e estratégica em NR12 para profissionais que querem crescer com autoridade técnica.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 mb-12 animate-fade-in-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            {[
              { icon: Clock, label: "72h de conteúdo" },
              { icon: Award, label: "22 Módulos" },
              { icon: Shield, label: "Certificado MEC" },
              { icon: GraduationCap, label: "Anhanguera" },
            ].map((badge, index) => (
              <div key={index} className="flex items-center gap-2.5 text-white/80">
                <badge.icon className="w-4 h-4 text-amber" />
                <span className="text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
            {/* Price block */}
            <div className="flex flex-col gap-0.5 mr-2">
              <span className="text-white/40 text-xs line-through">De R$ 1.430,00</span>
              <span className="text-white font-[family-name:var(--font-display)] text-3xl font-bold leading-none">R$ 988,00</span>
              <span className="text-amber/80 text-xs font-medium tracking-wide">ou 10x de R$ 98,80 no cartão</span>
            </div>
            <Link href={checkoutUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-amber hover:bg-amber-dark text-white font-[family-name:var(--font-condensed)] text-sm font-semibold tracking-wider uppercase px-8 py-7 h-auto gap-3 group transition-all duration-300 hover:shadow-xl hover:shadow-amber/20"
              >
                Quero me inscrever agora
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="#professor">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30 font-[family-name:var(--font-condensed)] text-sm font-semibold tracking-wider uppercase px-8 py-7 h-auto gap-3 backdrop-blur-sm transition-all duration-300"
              >
                <Play className="w-4 h-4" />
                Assistir apresentação
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <ChevronDown className="w-5 h-5 animate-bounce" />
        <span className="font-[family-name:var(--font-condensed)] text-[10px] tracking-[0.2em] uppercase">
          Explore
        </span>
      </div>
    </section>
  )
}
