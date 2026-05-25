"use client"

import { useState, useEffect, useRef } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Preciso ter experiência prévia com NR12 para fazer o curso?",
    answer: "Não. O programa foi estruturado para acolher tanto profissionais que estão iniciando quanto os que já têm experiência e querem se aprofundar. O conteúdo evolui progressivamente do conhecimento básico ao nível avançado, com aplicações práticas em todos os estágios.",
  },
  {
    question: "Como funciona a certificação? O certificado tem validade legal?",
    answer: "Ao concluir o curso, você recebe um Certificado de Extensão Universitária emitido pelas Faculdades Anhanguera, parte do Grupo Cogna. O curso é reconhecido pelo MEC, o que garante validade em todo o território nacional. Esse certificado pode ser apresentado em concursos, processos seletivos e como comprovação de capacitação profissional.",
  },
  {
    question: "Quanto tempo tenho para assistir às aulas?",
    answer: "O curso é 100% online e flexível. Você assiste no seu próprio ritmo, de onde quiser, no horário que for mais conveniente. Não há aulas ao vivo ou horários fixos — o conteúdo fica disponível para você organizar conforme sua rotina.",
  },
  {
    question: "O curso é indicado para gestores e não apenas técnicos?",
    answer: "Sim. O professor Luiz Carlos foi diretor industrial durante décadas e entende bem que gestores precisam de uma perspectiva diferente da operacional. O curso foi desenhado para oferecer tanto o embasamento técnico quanto a visão estratégica e de tomada de decisão.",
  },
  {
    question: "O conteúdo é atualizado? A NR12 muda com frequência.",
    answer: "Sim. O curso conta com atualizações contínuas do conteúdo para acompanhar as revisões da NR12 e demais normas complementares. Ao adquirir o curso, você tem acesso às atualizações sem custo adicional.",
  },
  {
    question: "Posso aplicar o conteúdo imediatamente no meu trabalho?",
    answer: "Sim, esse é um dos principais diferenciais do programa. Cada módulo foi desenvolvido com foco em aplicação prática. O professor utiliza exemplos reais da indústria, e muitos alunos relatam que conseguem aplicar o aprendizado já durante o próprio curso.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
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

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={ref} id="faq" className="relative bg-white py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_var(--c-steel-xlight)_1px,_transparent_0)] [background-size:40px_40px] opacity-40" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-flex items-center justify-center gap-3 font-[family-name:var(--font-condensed)] text-[11px] font-semibold tracking-[0.15em] uppercase text-amber mb-6">
            <span className="w-8 h-px bg-amber" />
            Dúvidas frequentes
            <span className="w-8 h-px bg-amber" />
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-ink leading-[1.1]">
            Perguntas que você provavelmente tem
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-surface border border-steel-light/30 rounded-xl overflow-hidden transition-all duration-500 ${
                openIndex === index ? "border-amber/30 shadow-lg shadow-amber/5" : "hover:border-steel-light"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${200 + index * 60}ms` }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-6 md:p-7 flex items-start justify-between gap-5"
              >
                <span className={`text-lg font-medium leading-snug transition-colors duration-300 ${
                  openIndex === index ? "text-amber" : "text-ink"
                }`}>
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    openIndex === index 
                      ? "border-amber bg-amber text-white rotate-45" 
                      : "border-steel-light text-steel hover:border-amber hover:text-amber"
                  }`}
                >
                  <Plus className="w-4 h-4" />
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-[400px]" : "max-h-0"
                }`}
              >
                <div className="px-6 md:px-7 pb-6 md:pb-7 pt-0">
                  <p className="text-ink-60 leading-relaxed font-light">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
