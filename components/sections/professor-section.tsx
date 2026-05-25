"use client"

import { useEffect, useRef, useState } from "react"

export function ProfessorSection() {
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

  const credentials = [
    "Engenheiro Mecânico",
    "Ex-Diretor Industrial",
    "Perito Judicial",
    "Professor Universitário",
    "Consultor em Máquinas",
  ]

  return (
    <section 
      ref={ref}
      id="professor" 
      className="relative bg-ink py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-r from-amber/[0.04] to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-amber/[0.02] blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section eyebrow - left aligned */}
        <div className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <span className="inline-flex items-center gap-3 font-[family-name:var(--font-condensed)] text-[11px] font-semibold tracking-[0.15em] uppercase text-white/40">
            <span className="w-8 h-px bg-amber" />
            Sobre o professor
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Video Embed - with cinematic treatment */}
          <div className={`relative transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Decorative frame */}
            <div className="absolute -inset-3 bg-gradient-to-br from-amber/10 to-transparent rounded-2xl" />
            
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black shadow-2xl shadow-black/40">
              <iframe
                src="https://www.youtube.com/embed/6pPJdLlqCq4?rel=0&modestbranding=1"
                title="Apresentação do curso NR12 — Prof. Luiz Carlos Natale Macedo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full"
              />
            </div>
            
            {/* Caption */}
            <p className="mt-5 text-white/40 text-sm italic text-center">
              Prof. Luiz Carlos Natale Macedo apresenta o programa
            </p>
          </div>

          {/* Professor Info */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-[44px] lg:text-[52px] text-white mb-8 leading-[1.1]">
              Quem vai conduzir sua formação é alguém que{" "}
              <em className="text-amber italic">viveu a indústria</em>
            </h2>

            <blockquote className="relative my-10 pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-amber via-amber to-amber/20 rounded-full" />
              <p className="font-[family-name:var(--font-display)] text-xl lg:text-2xl text-white/80 leading-relaxed italic">
                {'"'}Vi de perto onde estão os maiores riscos — e, principalmente, as maiores lacunas de qualificação.{'"'}
              </p>
            </blockquote>

            <div className="space-y-5 mb-10">
              <p className="text-white/50 leading-relaxed font-light text-lg">
                Luiz Carlos Natale Macedo é engenheiro mecânico com mais de 50 anos de trajetória na indústria. Ex-diretor industrial, professor universitário, consultor e perito judicial em máquinas e segurança industrial.
              </p>
              <p className="text-white/50 leading-relaxed font-light text-lg">
                Não é alguém que aprendeu sobre máquinas em livros. É alguém que passou décadas tomando decisões reais onde o erro tem custo alto.
              </p>
            </div>

            {/* Credentials */}
            <div className="flex flex-wrap gap-2">
              {credentials.map((cred, index) => (
                <span
                  key={index}
                  className={`font-[family-name:var(--font-condensed)] text-xs font-semibold tracking-wide uppercase bg-amber/10 text-amber border border-amber/20 px-4 py-2 rounded-full transition-all duration-500 hover:bg-amber/20 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  }`}
                  style={{ transitionDelay: `${400 + index * 80}ms` }}
                >
                  {cred}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
