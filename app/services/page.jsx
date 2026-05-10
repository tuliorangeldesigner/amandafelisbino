'use client'

import PageHeader from '@/components/ui/PageHeader'
import Services from '@/components/home/Services'
import Container from '@/components/ui/Container'
import { Check } from 'lucide-react'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <PageHeader 
        title="Serviços." 
        subtitle="Social Media"
        description="Soluções de conteúdo, design e identidade visual para sua marca aparecer melhor nas redes."
      />
      
      <div className="pb-24">
        <Services />
      </div>

      <Container className="pb-24">
         <div className="grid md:grid-cols-2 gap-16">
            <div>
               <h3 className="text-4xl font-serif mb-8">O que você recebe</h3>
               <div className="space-y-6">
                  {[
                     "Planejamento alinhado aos objetivos da marca",
                     "Comunicação clara durante o processo",
                     "Design consistente para redes sociais",
                     "Conteúdos organizados para publicação",
                     "Acompanhamento e ajustes de rotina"
                  ].map((item, i) => (
                     <div key={i} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 text-green-600">
                           <Check size={14} />
                        </div>
                        <p className="text-xl text-gray-700">{item}</p>
                     </div>
                  ))}
               </div>
            </div>
            <div className="bg-gray-50 p-12 rounded-3xl">
               <h3 className="text-3xl font-serif mb-6">Não sabe por onde começar?</h3>
               <p className="text-gray-600 mb-8 leading-relaxed">
                  Cada marca tem uma necessidade. Vamos conversar sobre seus objetivos e entender qual formato faz mais sentido para sua rotina.
               </p>
               <a 
                  href="/contact" 
                  className="inline-block border-b border-black pb-1 text-lg font-medium hover:text-gray-600 hover:border-gray-600 transition-colors"
               >
                  Fale comigo
               </a>
            </div>
         </div>

         <div className="mt-24">
            <h3 className="text-3xl font-serif mb-12 text-center">Segmentos atendidos</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Comércio", "Serviços", "Saúde", "Beleza", "Educação", "Lifestyle", "Eventos", "Profissionais"].map((industry, i) => (
                    <div key={i} className="p-6 border border-gray-100 rounded-xl text-center hover:border-black transition-colors cursor-default">
                        <span className="text-lg text-gray-600">{industry}</span>
                    </div>
                ))}
            </div>
         </div>
      </Container>
    </div>
  )
}
