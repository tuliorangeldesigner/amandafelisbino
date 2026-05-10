"use client";

import PageHeader from "@/components/ui/PageHeader";
import Blog from "@/components/home/Blog";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight, Mail, Bookmark, CheckCircle2, Sparkles } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <PageHeader
        title="Blog."
        subtitle="Conteúdos"
        description="Artigos para marcas que querem publicar com mais critério, construir autoridade e transformar conteúdo em conversas comerciais melhores."
      />

      <Container className="pb-8">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 bg-lilac-soft border border-lilac/70 rounded-3xl p-8 md:p-10 shadow-[0_24px_80px_rgba(195,166,202,0.24)] relative overflow-hidden">
            <Sparkles className="absolute right-8 top-8 text-lilac/50 hidden md:block" size={72} />
            <Bookmark className="text-lilac-deep mb-8 relative" size={28} />
            <h2 className="text-3xl md:text-5xl font-serif font-light leading-tight mb-6 relative">
              Comece pelos conteúdos que destravam <span className="italic text-lilac-deep">clareza, retenção e venda.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl relative">
              Use os artigos como um mapa prático para ajustar perfil, linha editorial, design e chamadas de ação antes de produzir mais do mesmo.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 bg-lilac text-black px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-lilac-deep hover:text-white transition-colors relative">
              Quero uma leitura do meu perfil
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="lg:col-span-5 bg-black text-white rounded-3xl p-8 md:p-10 border border-lilac/50 shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
            <Mail className="text-lilac mb-8" size={28} />
            <h3 className="text-3xl font-serif mb-5">
              Receba ideias <span className="italic text-lilac">aplicáveis</span>
            </h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              Uma curadoria curta sobre conteúdo, design e presença digital para melhorar a comunicação da sua marca.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-6 py-4 rounded-full bg-white/10 border border-lilac/40 text-white placeholder:text-gray-400 focus:outline-none focus:border-lilac transition-colors"
              />
              <button className="w-full px-6 py-4 bg-lilac text-black rounded-full font-bold uppercase tracking-widest hover:bg-lilac-deep hover:text-white transition-colors">
                Entrar na lista
              </button>
            </form>
          </div>
        </div>
      </Container>

      <div className="pb-16">
        <Blog />
      </div>

      <Container className="pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 border-t border-lilac/40 pt-16">
          <div className="lg:col-span-4">
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-lilac-deep mb-5 block">
              Trilhas de leitura
            </span>
            <h3 className="text-4xl md:text-5xl font-serif font-light leading-tight">
              Leia de acordo com o <span className="italic text-lilac-deep">gargalo</span> da sua marca.
            </h3>
          </div>
          <div className="lg:col-span-8 grid md:grid-cols-3 gap-5">
            {[
              ['Mais clareza', 'bio, posicionamento e promessa'],
              ['Mais retenção', 'carrossel, vídeo e ritmo visual'],
              ['Mais conversão', 'prova social, oferta e CTA'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl bg-lilac-soft border border-lilac/50 p-6 hover:bg-lilac hover:shadow-[0_20px_60px_rgba(195,166,202,0.24)] transition-all">
                <CheckCircle2 className="text-lilac-deep mb-5" size={22} />
                <h4 className="font-serif text-2xl mb-3">{title}</h4>
                <p className="text-gray-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
