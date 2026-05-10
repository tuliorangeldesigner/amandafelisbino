import './globals.css'
import Navbar from '@/components/layout/Navbar'
import SmoothScroll from '@/components/layout/SmoothScroll'
import Footer from '@/components/home/Footer'
import { Cormorant_Garamond, Great_Vibes, Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '800'],
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-great-vibes',
  weight: '400',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

export const metadata = {
  title: 'Amanda Felisbino - Social Media e Designer',
  description: 'Portfólio de Amanda Felisbino - social media, designer e criadora de conteúdo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${greatVibes.variable} ${cormorant.variable} font-sans selection:bg-lilac selection:text-black`}>
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
