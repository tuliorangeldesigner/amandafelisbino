'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Container from '@/components/ui/Container'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const navigationMenu = [
    { label: 'Home', href: '/' },
    { label: 'Projetos', href: '/work' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contato', href: '/contact' },
  ]

  const handleNavClick = () => setIsMenuOpen(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isLight = isMenuOpen
  const textColor = isLight ? 'text-white' : 'text-black'
  const hoverColor = isLight ? 'hover:text-gray-300' : 'hover:text-gray-600'
  const isActive = (path) => pathname === path

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled && !isMenuOpen
            ? 'py-4 bg-white/80 backdrop-blur-md border-b border-gray-100'
            : 'py-6 bg-transparent'
        }`}
      >
        <Container className="flex justify-between items-center">
          <Link
            href="/"
            onClick={handleNavClick}
            className={`text-xl font-serif font-medium tracking-tight cursor-pointer transition-colors z-50 relative ${textColor}`}
          >
            Amanda Felisbino
          </Link>

          <div className="hidden lg:flex items-center gap-10 text-sm font-medium tracking-wide">
            {navigationMenu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className={`transition-colors uppercase tracking-widest text-xs relative group ${
                  isActive(item.href) ? 'text-black font-bold' : textColor
                } ${hoverColor}`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-lilac transform origin-left transition-transform duration-300 ${
                    isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </div>

          <button
            className={`lg:hidden z-50 relative ${textColor}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </Container>
      </nav>

      <div className={`fixed inset-0 bg-black z-40 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="absolute inset-x-0 top-0 h-px bg-lilac/60" />
        <div className="h-full flex flex-col justify-start pt-28 px-8 pb-20 overflow-y-auto">
          <div className="space-y-8">
            {navigationMenu.map((item, index) => (
              <div key={item.href} className="overflow-hidden">
                <Link
                  href={item.href}
                  onClick={handleNavClick}
                  className={`block text-4xl font-serif hover:text-gray-400 transition-colors ${isMenuOpen ? 'translate-y-0' : 'translate-y-20'} transition-transform duration-700 ${
                    index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : 'delay-300'
                  } ${isActive(item.href) ? 'text-white italic' : 'text-white/80'}`}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
