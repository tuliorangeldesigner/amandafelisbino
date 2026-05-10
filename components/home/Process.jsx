'use client'

import { useEffect, useRef } from 'react'
import Container from '@/components/ui/Container'

export default function Process() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return

    const ctx = window.gsap.context(() => {
      window.gsap.fromTo('.process-step', 
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
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

  const steps = [
    {
      number: '01',
      title: 'Diagnóstico',
      description: 'Entendimento da marca, do público, dos objetivos e do momento atual das redes sociais.'
    },
    {
      number: '02',
      title: 'Planejamento',
      description: 'Definição de temas, formatos, frequência, linguagem visual e direção de conteúdo.'
    },
    {
      number: '03',
      title: 'Criação',
      description: 'Produção de artes, carrosséis, roteiros, vídeos e materiais alinhados à identidade da marca.'
    },
    {
      number: '04',
      title: 'Acompanhamento',
      description: 'Organização das entregas, publicações e ajustes para manter o perfil consistente.'
    }
  ]

  return (
    <section id="process" ref={sectionRef} className="py-32 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="lg:sticky top-32">
             <span className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-4 block">
                Processo
             </span>
            <h2 className="text-5xl md:text-7xl font-serif font-light mb-8 text-black">
              Conteúdo com <br />
              <span className="italic text-lilac-deep">direção</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Um fluxo organizado para transformar ideias em conteúdos claros, bonitos e coerentes com a mensagem da sua empresa.
            </p>
            <div className="p-8 rounded-none border-l-2 border-lilac bg-lilac-soft/60">
              <h3 className="text-xl font-serif font-medium mb-3">Por que funciona</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                O planejamento evita improvisos, melhora a consistência visual e torna a rotina de publicação mais leve para a marca.
              </p>
            </div>
          </div>

          <div className="space-y-16 mt-8 lg:mt-0">
            {steps.map((step, index) => (
              <div key={index} className="process-step flex gap-8 items-baseline group">
                <div className="text-sm font-bold tracking-widest text-lilac group-hover:text-lilac-deep transition-colors duration-300">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-3xl font-serif font-medium mb-4 group-hover:italic transition-all duration-300">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
