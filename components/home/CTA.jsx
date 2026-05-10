'use client'

import { ArrowRight, Mail, Instagram, Linkedin, Twitter, Github } from 'lucide-react'
import Container from '@/components/ui/Container'
import Link from 'next/link'

export default function CTA() {
  return (
    <section id="cta" className="bg-[#111] text-white pb-8 pt-24 md:pt-40 relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lilac/60 to-transparent"></div>
      <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-lilac/10 blur-3xl pointer-events-none"></div>
      
      <Container className="relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h2 className="text-5xl md:text-8xl font-serif-display font-light mb-10 leading-tight">
            Vamos construir sua
            <br />
            <span className="font-serif-display italic text-lilac">presença digital</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-16 max-w-xl mx-auto font-light leading-relaxed">
            Se sua marca precisa de conteúdo, design e organização para aparecer melhor nas redes, vamos conversar.
          </p>

          {/* CTA Button */}
          <div className="mb-20">
            <Link 
              href="/contact"
              className="group bg-lilac hover:bg-white text-black px-10 py-5 rounded-full font-medium text-lg transition-all duration-500 flex items-center gap-4 mx-auto w-fit"
            >
              <Mail size={20} />
              Fale Comigo
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="mb-20">
            <p className="text-xs text-gray-500 mb-8 uppercase tracking-[0.2em]">Conecte-se</p>
            <div className="flex justify-center items-center gap-6">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Github, label: "Github" }
              ].map(({ Icon, label }, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-14 h-14 border border-white/10 hover:border-lilac hover:bg-lilac/10 rounded-full flex items-center justify-center transition-all duration-500 group"
                  aria-label={label}
                >
                  <Icon size={20} className="text-gray-400 group-hover:text-lilac transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Simple stats */}
          <div className="flex justify-center items-center gap-8 ss:gap-16 md:gap-24 border-t border-white/10 pt-12">
            <div className="text-center">
              <div className="text-3xl font-serif-display text-lilac mb-2">24h</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Resposta</div>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="text-center">
              <div className="text-3xl font-serif-display text-lilac mb-2">4</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Serviços</div>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="text-center">
              <div className="text-3xl font-serif-display text-lilac mb-2">360</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Conteúdo</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
