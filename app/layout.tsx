import type { Metadata } from 'next'
import { DM_Serif_Display, DM_Sans, Barlow_Condensed } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-display',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-condensed',
})

export const metadata: Metadata = {
  title: 'NR12 — Curso de Extensão Universitária | Prof. Luiz Carlos Natale Macedo',
  description: 'Aprenda a identificar riscos antes que eles se tornem acidentes. Formação prática e estratégica em NR12 com certificação MEC. 72h de conteúdo, 22 módulos, 100% online.',
  keywords: ['NR12', 'curso nr12', 'segurança do trabalho', 'máquinas e equipamentos', 'certificação MEC', 'extensão universitária'],
  openGraph: {
    title: 'NR12 — Curso de Extensão Universitária',
    description: 'Formação prática e estratégica em NR12 para profissionais que querem crescer com autoridade técnica.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${dmSerifDisplay.variable} ${dmSans.variable} ${barlowCondensed.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
