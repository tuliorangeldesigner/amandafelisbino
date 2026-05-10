'use client'

import { useState, useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import { gsap } from 'gsap'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero({ startAnimation = true }) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Hide elements initially if animation hasn't started
    if (!startAnimation) {
      gsap.set('.hero-text', { y: 100, opacity: 0 })
      gsap.set('.hero-image', { scale: 1.1, opacity: 0 })
      gsap.set('.hero-meta', { opacity: 0, y: 20 })
      return
    }
    
    setIsLoaded(true)
    
    // Simple entrance animation
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    
    tl.to('.hero-text', 
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.05 }
    )
    .to('.hero-image',
      { scale: 1, opacity: 1, duration: 1 },
      '-=0.6'
    )
    .to('.hero-meta',
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.05 },
      '-=0.6'
    )

  }, [startAnimation])

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 bg-[#f9f9f9] overflow-hidden">
      <div className="absolute right-0 top-24 h-40 w-40 rounded-full bg-lilac/25 blur-3xl pointer-events-none"></div>
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="overflow-hidden mb-6">
              <span className="hero-text inline-block text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-2">
                Social Media e Designer
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] leading-[1.08] font-serif font-light text-black mb-8 -ml-1">
              <div className="overflow-visible">
                <span className="hero-text block">Presença</span>
              </div>
              <div className="overflow-visible">
                <span className="hero-text block italic text-lilac-deep">Digital</span>
              </div>
              <div className="overflow-visible">
                <span className="hero-text block">Estratégica</span>
              </div>
            </h1>

            <div className="overflow-hidden max-w-lg mb-10">
              <p className="hero-text text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                Ajudo empresas a construírem uma presença digital mais clara, bonita e consistente com planejamento de conteúdo, design e produção de vídeos.
              </p>
            </div>

            <div className="hero-meta flex flex-wrap gap-6 items-center">
              <Link 
                href="/#work"
                className="group flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full transition-all duration-300 hover:bg-lilac-deep"
              >
                <span className="text-lg font-medium">Ver Projetos</span>
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              
              <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                <span className="w-2 h-2 bg-lilac rounded-full animate-pulse"></span>
                Disponível para novos projetos
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="lg:col-span-5 relative h-[60vh] lg:h-[80vh]">
             <div className="hero-image w-full h-full relative rounded-none overflow-hidden">
               {/* Abstract Background Shape */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-lilac-soft rounded-full blur-3xl opacity-80 pointer-events-none"></div>
               
               <Image
                src="/images/amanda2.webp"
                alt="Amanda Felisbino"
                fill
                priority
                quality={78}
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-center transition-all duration-1000 ease-out"
              />
            </div>
            
            {/* Decorative floating card */}
            <div className="absolute bottom-10 -left-10 bg-white p-6 shadow-xl shadow-lilac/20 border border-lilac/30 max-w-xs hidden md:block hero-meta z-20">
              <p className="font-serif text-2xl italic text-gray-900 leading-snug">
                "Conteúdo bom faz a marca ser lembrada."
              </p>
              <p className="text-xs text-gray-400 mt-4 uppercase tracking-widest">Amanda Felisbino</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
