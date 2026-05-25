"use client"

import { useState, useEffect } from "react"
import { X, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CronogramaModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CronogramaModal({ isOpen, onClose }: CronogramaModalProps) {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown)
    }
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simula envio - aqui você pode integrar com sua API
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Fecha o modal após sucesso
    setTimeout(() => {
      onClose()
      setIsSuccess(false)
      setFormData({ nome: "", telefone: "", email: "" })
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink/90 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-surface-warm border border-ink/10 rounded-2xl shadow-2xl animate-in zoom-in-95 fade-in duration-300">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-ink/40 hover:text-ink transition-colors duration-200 rounded-full hover:bg-ink/5"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl text-ink mb-2">
                Enviado com sucesso!
              </h3>
              <p className="text-ink/60 text-sm">
                Em breve você receberá o cronograma completo no seu e-mail.
              </p>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <span className="inline-flex items-center gap-2 font-[family-name:var(--font-condensed)] text-[10px] font-semibold tracking-[0.15em] uppercase text-amber mb-4">
                  <span className="w-6 h-px bg-amber" />
                  Cronograma completo
                  <span className="w-6 h-px bg-amber" />
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-ink mb-3">
                  Receba o conteúdo programático
                </h3>
                <p className="text-ink/60 text-sm leading-relaxed">
                  Preencha os campos abaixo e você receberá automaticamente o conteúdo programático com assuntos e detalhes de cada aula.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="nome" className="block text-xs font-medium text-ink/70 mb-2 uppercase tracking-wide">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome"
                    className="w-full px-4 py-3.5 bg-white border border-ink/10 rounded-lg text-ink placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-amber/30 focus:border-amber transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="telefone" className="block text-xs font-medium text-ink/70 mb-2 uppercase tracking-wide">
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    placeholder="(00) 00000-0000"
                    className="w-full px-4 py-3.5 bg-white border border-ink/10 rounded-lg text-ink placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-amber/30 focus:border-amber transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-ink/70 mb-2 uppercase tracking-wide">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3.5 bg-white border border-ink/10 rounded-lg text-ink placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-amber/30 focus:border-amber transition-all duration-200"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber hover:bg-amber-dark text-white font-[family-name:var(--font-condensed)] text-sm font-semibold tracking-wider uppercase py-4 h-auto gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-amber/20 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Quero receber o cronograma
                    </>
                  )}
                </Button>
              </form>

              {/* Trust note */}
              <p className="text-center text-[11px] text-ink/40 mt-6">
                Seus dados estão seguros e não serão compartilhados.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
