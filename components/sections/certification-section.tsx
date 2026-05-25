"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Building2, MapPin, TrendingUp } from "lucide-react"

const badges = [
  { icon: Building2, title: "Faculdades Anhanguera", description: "Ensino superior reconhecido" },
  { icon: Award, title: "Reconhecimento MEC", description: "Extensão universitária oficial" },
  { icon: MapPin, title: "Validade Nacional", description: "Aceito em todo o Brasil" },
  { icon: TrendingUp, title: "Valorização Profissional", description: "Diferencial no mercado" },
]

const certDetails = [
  { label: "Instituição", value: "Faculdades Anhanguera" },
  { label: "Grupo", value: "Cogna Educação" },
  { label: "Reconhecimento", value: "MEC" },
  { label: "Carga Horária", value: "72 horas" },
  { label: "Modalidade", value: "Extensão Universitária Online" },
]

export function CertificationSection() {
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

  return (
    <section ref={ref} id="certificacao" className="relative bg-surface-warm py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber/[0.05] to-transparent" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-amber/[0.03] blur-3xl -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-[1fr_500px] gap-16 lg:gap-20 items-center">
          {/* Content */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="inline-flex items-center gap-3 font-[family-name:var(--font-condensed)] text-[11px] font-semibold tracking-[0.15em] uppercase text-amber mb-6">
              <span className="w-8 h-px bg-amber" />
              Certificação
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-ink mb-6 leading-[1.1]">
              Uma formação com o peso de uma instituição real
            </h2>
            <div className="space-y-5 mb-12">
              <p className="text-lg text-ink-60 leading-relaxed font-light">
                Não é um certificado qualquer. Ao concluir o curso, você recebe um certificado de Extensão Universitária emitido pelas Faculdades Anhanguera, parte do Grupo Cogna.
              </p>
              <p className="text-lg text-ink font-medium leading-relaxed">
                Reconhecido pelo MEC. Com validade nacional. Para colocar no currículo com confiança.
              </p>
            </div>

            {/* Badges - 2x2 grid */}
            <div className="grid grid-cols-2 gap-4">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className={`bg-white border border-steel-light/30 rounded-xl p-5 text-center transition-all duration-500 hover:border-amber/30 hover:shadow-lg hover:shadow-amber/5 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${300 + index * 80}ms` }}
                >
                  <badge.icon className="w-7 h-7 text-amber mx-auto mb-3" />
                  <h4 className="text-sm font-semibold text-ink mb-1">{badge.title}</h4>
                  <p className="text-xs text-steel font-light">{badge.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certificate Visual */}
          <div className={`relative transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Glow effect */}
            <div className="absolute -inset-8 bg-gradient-to-br from-amber/10 via-amber/5 to-transparent rounded-3xl blur-2xl" />
            
            <div className="relative bg-ink rounded-2xl p-8 md:p-12 overflow-hidden shadow-2xl shadow-ink/20">
              {/* Decorative circles */}
              <div className="absolute -top-20 -right-20 w-56 h-56 border-[50px] border-amber/[0.08] rounded-full" />
              <div className="absolute -bottom-12 -left-4 w-36 h-36 border-[28px] border-amber/[0.05] rounded-full" />

              <div className="relative z-10 text-center">
                {/* Seal */}
                <div className="w-20 h-20 bg-gradient-to-br from-amber to-amber-dark rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber/30">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-white mb-2">
                  Certificado de Extensão Universitária
                </h3>
                <p className="text-sm text-white/50 font-light mb-8 max-w-xs mx-auto">
                  Prevenção e Controle de Riscos em Máquinas, Equipamentos e Instalações (NR12)
                </p>

                {/* Details */}
                <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-5 text-left">
                  {certDetails.map((detail, index) => (
                    <div
                      key={index}
                      className={`flex justify-between py-2.5 text-sm ${
                        index < certDetails.length - 1 ? "border-b border-white/[0.06]" : ""
                      }`}
                    >
                      <span className="text-white/40 font-light">{detail.label}</span>
                      <span className="text-white/90 font-medium">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
