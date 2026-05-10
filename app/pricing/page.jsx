'use client'

import PageHeader from '@/components/ui/PageHeader'
import Pricing from '@/components/home/Pricing'
import Container from '@/components/ui/Container'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <PageHeader 
        title="Investimento." 
        subtitle="Planos"
        description="Formatos de trabalho pensados para diferentes momentos da sua marca."
      />
      
      <div className="pb-24">
        <Pricing />
      </div>

      <Container className="pb-24">
         <div className="mb-24">
            <h3 className="text-3xl font-serif mb-12 text-center">Serviços adicionais</h3>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { name: "Identidade visual", price: "Sob consulta" },
                    { name: "Pacote de carrosseis", price: "Sob consulta" },
                    { name: "Edição de vídeos", price: "Sob consulta" }
                ].map((addon, i) => (
                    <div key={i} className="flex justify-between items-center p-6 border-b border-gray-200">
                        <span className="font-medium text-lg">{addon.name}</span>
                        <span className="text-gray-500">{addon.price}</span>
                    </div>
                ))}
            </div>
         </div>

         <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-serif mb-8">Todos os pacotes incluem</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
               {[
                  "Briefing inicial",
                  "Direção de conteúdo",
                  "Organização de entregas",
                  "Ajustes conforme escopo",
                  "Comunicacao objetiva",
                  "Arquivos finais combinados"
               ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
                     <span className="w-2 h-2 bg-black rounded-full"></span>
                     <span className="text-gray-700">{item}</span>
                  </div>
               ))}
            </div>
         </div>
      </Container>
    </div>
  )
}
