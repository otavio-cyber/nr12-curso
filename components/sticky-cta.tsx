"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const checkoutUrl = "https://pay.voompcreators.com.br/12741"
const mes = new Date().toLocaleDateString('pt-BR', { month: 'long' })
const mesCapitalizado = mes.charAt(0).toUpperCase() + mes.slice(1)

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
    >
      <Link href={checkoutUrl} target="_blank" rel="noopener noreferrer">
        <Button
          size="lg"
          className="bg-amber hover:bg-amber-dark text-black font-[family-name:var(--font-condensed)] text-sm font-semibold tracking-wider uppercase px-6 py-5 h-auto gap-2 group shadow-2xl shadow-amber/30 hover:shadow-amber/40 transition-all duration-300 hover:scale-105"
        >
          <span className="flex flex-col items-start leading-none gap-0.5">
  <span>
    Oferta de {" "}
    <span className="text-[18px]">{mesCapitalizado}/26</span>
  </span>
  <span className="text-[16px] font-bold normal-case tracking-normal opacity-80">
    R$ 988 ou 10x R$ 98,80
  </span>
</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </Link>
    </div>
  )
}
