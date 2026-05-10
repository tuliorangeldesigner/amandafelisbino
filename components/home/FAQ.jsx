'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import Container from '@/components/ui/Container'
import Link from 'next/link'

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(0)

  const faqs = [
    {
      question: 'Quais serviços você oferece?',
      answer: 'Trabalho com gestão de redes sociais, planejamento de conteúdo, criação de posts, carrosséis, produção de vídeos e identidade visual para marcas.'
    },
    {
      question: 'Você cria o planejamento dos posts?',
      answer: 'Sim. O planejamento inclui temas, formatos, direção visual e organização da rotina de conteúdos de acordo com os objetivos da marca.'
    },
    {
      question: 'Você também produz vídeos?',
      answer: 'Sim. Posso atuar no roteiro, captação de imagem e vídeo, edição e adaptação do conteúdo para redes sociais.'
    },
    {
      question: 'Você faz identidade visual?',
      answer: 'Sim. Posso desenvolver paleta de cores, tipografia, elementos visuais e materiais base para deixar a comunicação da marca mais consistente.'
    },
    {
      question: 'Como funciona a gestao mensal?',
      answer: 'A gestão mensal é organizada com planejamento, criação dos conteúdos, acompanhamento do perfil e ajustes de acordo com a rotina da empresa.'
    },
    {
      question: 'Como solicito uma proposta?',
      answer: 'Entre em contato contando sobre sua marca, objetivos e quais serviços precisa. Assim é possível indicar o melhor formato de trabalho.'
    }
  ]

  return (
    <section id="faq" className="bg-[#f5f5f5] py-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-serif-display mb-6">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-500 font-light">
              O que você precisa saber antes de começar
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-none border border-transparent hover:border-gray-200 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                  className="w-full p-8 text-left flex items-center justify-between group"
                >
                  <h3 className="text-xl font-medium pr-4 font-serif-display">{faq.question}</h3>
                  {openFAQ === index ? (
                    <Minus className="text-black flex-shrink-0 transition-transform duration-300" size={20} />
                  ) : (
                    <Plus className="text-gray-400 group-hover:text-black flex-shrink-0 transition-all duration-300" size={20} />
                  )}
                </button>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFAQ === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-8 pt-0 text-gray-500 leading-relaxed font-light">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-500 mb-6 font-light">Ainda tem dúvidas?</p>
            <Link
              href="/contact"
              className="inline-block bg-black text-white px-10 py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              Fale Comigo
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
