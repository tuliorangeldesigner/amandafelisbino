'use client'

import { useState } from 'react'
import { Check, ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import Link from 'next/link'

export default function Pricing() {
  const [hoveredPlan, setHoveredPlan] = useState(null)

  const plans = [
    {
      name: 'Essencial',
      price: 'Sob consulta',
      duration: 'mensal',
      description: 'Organização inicial para marcas que precisam manter o perfil ativo.',
      features: [
        'Planejamento de conteúdo',
        'Posts para feed',
        'Calendario mensal',
        'Acompanhamento do perfil'
      ],
      popular: false
    },
    {
      name: 'Presença',
      price: 'Sob consulta',
      duration: 'mensal',
      description: 'Gestão completa com design, carrosséis e conteúdos para fortalecer a marca.',
      features: [
        'Estratégia de conteúdo',
        'Criação de posts',
        'Carrosseis',
        'Roteiros para videos',
        'Organização das publicações',
        'Ajustes mensais'
      ],
      popular: true
    },
    {
      name: 'Visual',
      price: 'Sob consulta',
      duration: 'projeto',
      description: 'Materiais visuais e identidade para marcas que precisam de uma imagem mais coerente.',
      features: [
        'Paleta de cores',
        'Tipografia',
        'Elementos visuais',
        'Templates para redes',
        'Direcao visual',
        'Arquivos finais'
      ],
      popular: false
    }
  ]

  return (
    <section id="pricing" className="bg-white py-32">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-20 gap-8">
           <div className="md:max-w-2xl">
             <span className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-4 block">
                Investimento
             </span>
             <h2 className="text-5xl md:text-7xl font-serif font-light text-black">
               Planos sob<br />
               <span className="italic text-lilac-deep">medida</span>
             </h2>
           </div>
           <p className="text-lg text-gray-600 max-w-md leading-relaxed">
             Cada marca tem uma rotina e uma necessidade. Os pacotes sao ajustados de acordo com escopo, volume e objetivos.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-10 flex flex-col transition-all duration-500 border ${
                plan.popular 
                  ? 'bg-[#111] text-white border-lilac shadow-xl shadow-lilac/20' 
                  : 'bg-white text-black border-gray-200 hover:border-lilac'
              }`}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              <div className="mb-8">
                <h3 className="text-xl font-medium mb-4 uppercase tracking-widest">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                   <span className="text-5xl font-serif font-light">{plan.price}</span>
                   <span className={`text-sm ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>/ {plan.duration}</span>
                </div>
                <p className={`text-sm leading-relaxed mt-4 ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <Check size={16} className={plan.popular ? 'text-lilac' : 'text-lilac-deep'} />
                      <span className={plan.popular ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href="/contact"
                className={`w-full py-4 px-6 text-sm font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-between group ${
                  plan.popular
                    ? 'bg-lilac text-black hover:bg-white'
                    : 'bg-black text-white hover:bg-lilac-deep'
                }`}
              >
                <span>Solicitar proposta</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 pt-16 border-t border-gray-100">
          <p className="text-gray-500">
            Precisa de algo especifico? <Link 
              href="/contact"
              className="text-lilac-deep font-medium border-b border-lilac hover:text-black hover:border-black transition-colors ml-1"
            >
              Vamos conversar
            </Link>
          </p>
        </div>
      </Container>
    </section>
  )
}
