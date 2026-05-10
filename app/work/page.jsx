'use client'

import PageHeader from '@/components/ui/PageHeader'
import WorkList from '@/components/home/WorkList'
import Container from '@/components/ui/Container'
import Link from 'next/link'
import { ArrowUpRight, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react'

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <PageHeader
        title="Projetos."
        subtitle="Portfólio"
        description="Uma seleção maior de projetos em social media, conteúdo e identidade visual para marcas que precisam parecer mais claras, consistentes e prontas para vender."
      />

      <Container className="pb-10">
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {[
            ['06', 'projetos organizados por objetivo'],
            ['03', 'frentes principais: estratégia, design e vídeo'],
            ['01', 'método para transformar presença em demanda'],
          ].map(([number, label]) => (
            <div key={label} className="border border-lilac/60 bg-lilac-soft rounded-2xl p-6 md:p-8 shadow-[0_20px_60px_rgba(195,166,202,0.18)]">
              <div className="font-serif text-5xl text-lilac-deep mb-3">{number}</div>
              <p className="text-sm uppercase tracking-[0.18em] text-gray-500 leading-relaxed">{label}</p>
            </div>
          ))}
        </div>
      </Container>

      <div className="pb-12">
        <WorkList hideHeader />
      </div>

      <Container className="pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-20">
          <div className="lg:col-span-5">
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-5 block">
              Como escolher
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-light leading-tight">
              Nem todo projeto precisa de tudo. Precisa do próximo passo certo.
            </h2>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {[
              ['Perfil confuso', 'reposicionamento, bio, destaques e linha editorial'],
              ['Baixa frequência', 'calendário, formatos replicáveis e rotina de posts'],
              ['Visual inconsistente', 'templates, paleta, tipografia e direção de arte'],
              ['Pouca conversão', 'conteúdos de prova, oferta e chamadas mais claras'],
            ].map(([pain, direction]) => (
              <div key={pain} className="rounded-2xl border border-lilac/30 bg-white p-6 hover:bg-lilac-soft/50 transition-colors">
                <CheckCircle2 className="text-lilac-deep mb-5" size={22} />
                <h3 className="font-serif text-2xl mb-3">{pain}</h3>
                <p className="text-gray-600 leading-relaxed">{direction}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black text-white rounded-3xl p-8 min-[480px]:p-12 md:p-16 overflow-hidden relative">
          <div className="absolute right-8 top-8 text-lilac/30 hidden md:block">
            <Sparkles size={88} />
          </div>
          <div className="max-w-3xl relative">
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-lilac mb-6 block">
              Diagnóstico rápido
            </span>
            <h3 className="text-4xl md:text-6xl font-serif font-light mb-6 leading-tight">
              Quer saber qual desses caminhos faz mais sentido para a sua marca?
            </h3>
            <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed">
              Envie seu perfil e receba uma leitura inicial com os pontos que mais travam clareza, consistência e conversão.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest hover:bg-lilac transition-colors"
              >
                Solicitar diagnóstico
                <ArrowUpRight size={20} />
              </Link>
              <a
                href="mailto:contato@amandafelisbino.com"
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full font-bold uppercase tracking-widest hover:border-lilac hover:text-lilac transition-colors"
              >
                <MessageCircle size={18} />
                Enviar perfil
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
