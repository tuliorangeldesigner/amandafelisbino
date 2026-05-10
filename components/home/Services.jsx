'use client'

import { useEffect, useRef } from 'react'
import { Palette, Smartphone, Monitor, Zap } from 'lucide-react'
import Container from '@/components/ui/Container'

export default function Services() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return

    const ctx = window.gsap.context(() => {
      window.gsap.fromTo('.service-card', 
        {
          y: 60,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const services = [
    {
      icon: <Palette size={32} strokeWidth={1.5} />,
      title: 'Gestão de Redes Sociais',
      description: 'Planejamento de conteúdo, criação de posts e acompanhamento do perfil para manter sua marca ativa.'
    },
    {
      icon: <Smartphone size={32} strokeWidth={1.5} />,
      title: 'Produção de Vídeos',
      description: 'Roteiro, captação de imagem e vídeo, edição e organização de conteúdos para redes sociais.'
    },
    {
      icon: <Monitor size={32} strokeWidth={1.5} />,
      title: 'Design para Redes',
      description: 'Posts para feed, carrosséis e materiais visuais pensados para comunicar com clareza no Instagram.'
    },
    {
      icon: <Zap size={32} strokeWidth={1.5} />,
      title: 'Identidade Visual',
      description: 'Paleta de cores, tipografia e elementos visuais para dar unidade e personalidade a marca.'
    }
  ]

  return (
    <section id="services" ref={sectionRef} className="bg-white py-32">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-24 gap-8">
          <div className="md:max-w-2xl">
             <span className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-4 block">
                Serviços
             </span>
             <h2 className="text-5xl md:text-7xl font-serif font-light text-black">
               Conteúdo com<br />
               <span className="italic text-lilac-deep">estratégia</span>
             </h2>
          </div>
          <div className="max-w-md">
            <p className="text-lg text-gray-600 leading-relaxed">
              Soluções para marcas que querem se posicionar melhor, aparecer com consistência e transformar ideias em conteúdos visuais profissionais.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 border-t border-lilac/40 pt-16">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              <div className="mb-8 text-lilac group-hover:text-lilac-deep transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif font-medium mb-4">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
