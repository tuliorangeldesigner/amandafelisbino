'use client'

import PageHeader from '@/components/ui/PageHeader'
import Skills from '@/components/home/Skills'
import Container from '@/components/ui/Container'

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <PageHeader 
        title="Habilidades." 
        subtitle="Skills"
        description="Competências em social media, design, conteúdo e organização visual para marcas."
      />
      
      <div className="pb-24">
        <Skills />
      </div>

      <Container className="pb-24">
        <div className="grid md:grid-cols-2 gap-16">
           <div className="bg-gray-50 p-12 rounded-3xl">
              <h3 className="text-3xl font-serif mb-6">Ferramentas</h3>
              <ul className="space-y-4 text-gray-600">
                 <li className="flex items-center gap-4">
                    <span className="w-2 h-2 bg-black rounded-full"></span>
                    Canva
                 </li>
                 <li className="flex items-center gap-4">
                    <span className="w-2 h-2 bg-black rounded-full"></span>
                    Adobe Creative Suite
                 </li>
                 <li className="flex items-center gap-4">
                    <span className="w-2 h-2 bg-black rounded-full"></span>
                    CapCut
                 </li>
                 <li className="flex items-center gap-4">
                    <span className="w-2 h-2 bg-black rounded-full"></span>
                    Meta Business
                 </li>
              </ul>
           </div>
           <div className="bg-black text-white p-12 rounded-3xl">
              <h3 className="text-3xl font-serif mb-6">Competencias</h3>
              <ul className="space-y-4 text-gray-300">
                 <li className="flex items-center gap-4">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Organização
                 </li>
                 <li className="flex items-center gap-4">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Pensamento estrategico
                 </li>
                 <li className="flex items-center gap-4">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Comunicacao
                 </li>
                 <li className="flex items-center gap-4">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Consistencia visual
                 </li>
              </ul>
           </div>
        </div>

        <div className="mt-24 text-center">
            <h3 className="text-3xl font-serif mb-8">Aprendizado continuo</h3>
            <div className="flex flex-wrap justify-center gap-4">
                {["Instagram", "Reels", "Carrosseis", "Branding", "Planejamento"].map((tag, i) => (
                    <span key={i} className="px-6 py-3 border border-gray-200 rounded-full text-gray-600 hover:border-black hover:text-black transition-colors cursor-default">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
      </Container>
    </div>
  )
}
