'use client'

import PageHeader from '@/components/ui/PageHeader'
import Process from '@/components/home/Process'
import Container from '@/components/ui/Container'
import Image from 'next/image'

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <PageHeader 
        title="Como funciona." 
        subtitle="Processo"
        description="Um método simples para organizar ideias, criar conteúdos e manter a marca presente com consistência."
      />
      
      <div className="pb-24">
        <Process />
      </div>

      <Container className="pb-24">
         <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
               <h3 className="text-4xl font-serif mb-6">Por que o processo importa</h3>
               <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Criar conteúdo sem direção deixa a rotina pesada e a comunicação confusa. O processo organiza as ideias, define prioridades e garante que cada peça publicada tenha uma função dentro da estratégia da marca.
               </p>
               <ul className="space-y-4">
                  {[
                     "Reduz improvisos na rotina de publicação",
                     "Mantém a comunicação alinhada à marca",
                     "Facilita a criação de posts, vídeos e carrosséis",
                     "Ajuda a construir presença com consistência"
                  ].map((item, i) => (
                     <li key={i} className="flex items-center gap-4 text-lg font-medium">
                        <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">{i + 1}</span>
                        {item}
                     </li>
                  ))}
               </ul>
            </div>
            <div className="h-[500px] bg-gray-100 rounded-3xl overflow-hidden relative">
               <Image
                  src="/images/amanda1.webp"
                  alt="Amanda Felisbino em processo de criação"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>
         </div>

         <div className="mt-24 border-t border-gray-100 pt-24">
            <h3 className="text-3xl font-serif mb-12 text-center">Ferramentas de trabalho</h3>
            <div className="grid min-[480px]:grid-cols-2 md:grid-cols-4 gap-8">
                {[
                    { name: "WhatsApp", role: "Comunicação" },
                    { name: "Google Drive", role: "Organização" },
                    { name: "Canva", role: "Criação visual" },
                    { name: "CapCut", role: "Edição de vídeo" }
                ].map((tool, i) => (
                    <div key={i} className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                        <div className="font-bold text-lg mb-1">{tool.name}</div>
                        <div className="text-sm text-gray-500 uppercase tracking-wider">{tool.role}</div>
                    </div>
                ))}
            </div>
         </div>
      </Container>
    </div>
  )
}
