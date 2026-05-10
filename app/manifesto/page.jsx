'use client'

import PageHeader from '@/components/ui/PageHeader'
import Container from '@/components/ui/Container'
import Image from 'next/image'

export default function ManifestoPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <PageHeader
        title="Manifesto."
        subtitle="Sobre"
        description="Conteúdo com propósito, design com clareza e uma presença digital que conversa com a essência da marca."
      />

      <Container className="pb-24">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed text-gray-600">
            <p>
              Em um ambiente cheio de informação, a marca precisa comunicar com clareza. Um bom conteúdo organiza ideias, valoriza a identidade e ajuda o público a entender o que torna cada negócio especial.
            </p>
            <p>
              Minha abordagem une planejamento, estética e intenção. Cada post, vídeo ou material visual precisa ter uma função dentro da estratégia, sem perder leveza e personalidade.
            </p>
          </div>
          <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed text-gray-600">
            <p>
              A colaboração faz parte do processo. Entender a rotina, os objetivos e o tom da marca é essencial para criar uma comunicação coerente e possível de manter.
            </p>
            <p>
              Mais do que preencher um calendário, o objetivo é construir presença, reconhecimento e confiança por meio de conteúdos bem pensados.
            </p>
          </div>
        </div>

        <div className="mt-24 relative h-[600px] rounded-2xl overflow-hidden">
          <Image
            src="/images/amanda1.webp"
            alt="Amanda Felisbino"
            fill
            sizes="100vw"
            className="object-cover object-[center_18%] grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-12">
            {[
                { title: "Clareza", desc: "A mensagem precisa ser entendida com rapidez e intenção." },
                { title: "Consistência", desc: "A repetição visual e editorial fortalece o reconhecimento da marca." },
                { title: "Propósito", desc: "Cada conteúdo deve existir por um motivo dentro da estratégia." }
            ].map((value, i) => (
                <div key={i} className="border-t border-gray-200 pt-8">
                    <h3 className="text-2xl font-serif mb-4">{value.title}</h3>
                    <p className="text-gray-500">{value.desc}</p>
                </div>
            ))}
        </div>
      </Container>
    </div>
  )
}
