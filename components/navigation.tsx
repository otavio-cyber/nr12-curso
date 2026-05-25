"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#problema", label: "O Problema" },
  { href: "#professor", label: "Professor" },
  { href: "#conteudo", label: "Conteúdo" },
  { href: "#certificacao", label: "Certificação" },
  { href: "#faq", label: "FAQ" },
]

const checkoutUrl = "https://pay.voompcreators.com.br/12741"
const whatsappUrl = "https://wa.me/5516991977135?text=Olá! Gostaria de saber mais sobre o desconto para empresas no curso NR12."

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-ink/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/10"
          : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            href="#" 
            className="font-[family-name:var(--font-condensed)] text-xl font-bold tracking-wider text-white transition-transform hover:scale-105"
          >
            NR<span className="text-amber">12</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm text-white/60 hover:text-white transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-amber after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-[family-name:var(--font-condensed)] font-semibold tracking-wider uppercase text-amber border border-amber/30 rounded-md hover:bg-amber/10 hover:border-amber/50 transition-all duration-300"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Desconto Para Empresas
            </Link>
            <Link
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-amber hover:bg-amber-dark text-white font-[family-name:var(--font-condensed)] text-xs font-semibold tracking-wider uppercase px-5 py-2.5 transition-all duration-300 hover:shadow-lg hover:shadow-amber/20">
                Inscrever-se
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-ink/95 backdrop-blur-xl border-t border-white/[0.06]">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-3 border-t border-white/[0.06] mt-2">
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3.5 text-xs font-[family-name:var(--font-condensed)] font-semibold tracking-wider uppercase text-amber border border-amber/30 rounded-lg hover:bg-amber/10 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Desconto Para Empresas
              </Link>
              <Link
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button className="w-full bg-amber hover:bg-amber-dark text-white font-[family-name:var(--font-condensed)] text-sm font-semibold tracking-wider uppercase py-3.5">
                  Inscrever-se
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
