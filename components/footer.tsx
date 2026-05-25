import Link from "next/link"
import { MessageCircle } from "lucide-react"

const whatsappUrl = "https://wa.me/5516991977135?text=Olá! Gostaria de saber mais sobre o desconto para empresas no curso NR12."

export function Footer() {
  return (
    <footer className="bg-[#050608] border-t border-white/[0.04] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8 items-center">
          {/* Logo & Description */}
          <div>
            <Link href="#" className="font-[family-name:var(--font-condensed)] text-xl font-bold tracking-wider text-white/80 inline-block mb-3">
              NR<span className="text-amber">12</span>
            </Link>
            <p className="text-sm text-white/30 font-light leading-relaxed">
              Curso de Extensão Universitária em Prevenção e Controle de Riscos em Máquinas.
            </p>
          </div>

          {/* Links */}
          <nav className="md:justify-self-center">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                { href: "#problema", label: "O Problema" },
                { href: "#professor", label: "Professor" },
                { href: "#conteudo", label: "Conteúdo" },
                { href: "#certificacao", label: "Certificação" },
                { href: "#faq", label: "FAQ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-white/35 hover:text-white/70 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact & Copyright */}
          <div className="md:text-right space-y-3">
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-amber/70 hover:text-amber transition-colors duration-300"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Desconto para empresas
            </Link>
            <p className="text-sm text-white/20 font-light">
              © {new Date().getFullYear()} NR12. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
