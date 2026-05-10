'use client'

import PageHeader from '@/components/ui/PageHeader'
import FAQ from '@/components/home/FAQ'
import Container from '@/components/ui/Container'
import Link from 'next/link'

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <PageHeader 
        title="Perguntas Frequentes." 
        subtitle="FAQ"
        description="Respostas sobre processo, servicos, formatos de trabalho e disponibilidade."
      />
      
      <div className="pb-24">
        <FAQ />
      </div>

      <Container className="pb-24">
         <div className="mb-24 grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-2xl">
                <h4 className="text-xl font-bold mb-4">Tempo de resposta</h4>
                <p className="text-gray-600">As mensagens sao respondidas em ate 24 horas em dias uteis.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
                <h4 className="text-xl font-bold mb-4">Ajustes</h4>
                <p className="text-gray-600">Os projetos incluem rodadas de ajustes conforme o escopo combinado.</p>
            </div>
         </div>

         <div className="bg-gray-50 rounded-3xl p-12 text-center">
            <h3 className="text-2xl font-serif mb-4">Ainda tem duvidas?</h3>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
               Não encontrou o que procurava? Entre em contato e conte sobre sua necessidade.
            </p>
            <Link 
               href="/contact" 
               className="inline-block px-8 py-3 bg-white border border-gray-200 rounded-full text-sm font-bold uppercase tracking-widest hover:border-black transition-colors"
            >
               Fale Comigo
            </Link>
         </div>
      </Container>
    </div>
  )
}
