'use client'

import { useEffect, useRef, useState } from 'react'
import { Instagram, Linkedin, Mail, MapPin, ArrowRight, CheckCircle2, Clock, MessageCircle } from 'lucide-react'
import Container from '@/components/ui/Container'
import { gsap } from 'gsap'

export default function ContactPage() {
  const containerRef = useRef(null)
  const [activeBudget, setActiveBudget] = useState(null)
  const [activeServices, setActiveServices] = useState([])

  const whatsappUrl = 'https://wa.me/554898426731?text=Oi%2C%20Amanda.%20Quero%20falar%20sobre%20a%20presen%C3%A7a%20digital%20da%20minha%20marca.'
  const budgets = ['Essencial', 'Presença completa', 'Projeto visual', 'Sob medida']
  const services = ['Gestão de Redes', 'Produção de Vídeos', 'Design para Redes', 'Identidade Visual', 'Diagnóstico']

  const toggleService = (service) => {
    if (activeServices.includes(service)) {
      setActiveServices(activeServices.filter((s) => s !== service))
    } else {
      setActiveServices([...activeServices, service])
    }
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-header > *', {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power3.out',
      })

      gsap.from('.contact-content', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-black pt-32 pb-20">
      <Container>
        <div className="contact-header mb-16 md:mb-24 max-w-5xl">
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-6 block">
            Contato
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-light leading-[0.9] mb-8">
            Vamos transformar atenção em <span className="italic text-lilac-deep">demanda.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl">
            Conte onde sua marca está hoje e o que precisa melhorar. Eu retorno com um direcionamento inicial para clarear prioridade, formato e próximo passo.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-lilac text-black rounded-full font-bold uppercase tracking-widest hover:bg-lilac-deep hover:text-white transition-colors shadow-[0_18px_50px_rgba(195,166,202,0.35)]"
            >
              <MessageCircle size={20} />
              Chamar no WhatsApp
            </a>
            <a
              href="#formulario-contato"
              className="inline-flex items-center gap-3 px-8 py-4 border border-lilac/60 text-lilac-deep rounded-full font-bold uppercase tracking-widest hover:bg-lilac-soft transition-colors"
            >
              Preencher briefing
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-20">
          {[
            ['01', 'Você envia contexto, perfil e objetivo principal.'],
            ['02', 'Eu avalio clareza, consistência visual e oportunidades de conteúdo.'],
            ['03', 'Seguimos com proposta ou diagnóstico, conforme a necessidade.'],
          ].map(([step, text]) => (
            <div key={step} className="rounded-2xl border border-lilac/60 bg-lilac-soft p-6 md:p-8 shadow-[0_18px_50px_rgba(195,166,202,0.16)]">
              <div className="font-serif text-5xl text-lilac-deep mb-4">{step}</div>
              <p className="text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="contact-content grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div id="formulario-contato" className="lg:col-span-8 scroll-mt-28">
            <div className="mb-10">
              <h2 className="text-4xl md:text-6xl font-serif font-light leading-tight mb-5">
                Me diga o que precisa ficar mais claro, bonito ou vendável.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                Quanto mais objetivo for o contexto, melhor consigo indicar se sua marca precisa de rotina, direção visual, conteúdo de prova ou uma reestruturação completa.
              </p>
            </div>

            <form className="space-y-12 md:space-y-16">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="group">
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-4 group-focus-within:text-black transition-colors">
                    Seu nome
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-gray-200 py-4 text-xl md:text-2xl focus:outline-none focus:border-lilac transition-colors placeholder:text-gray-300 font-serif"
                    placeholder="Nome e sobrenome"
                  />
                </div>
                <div className="group">
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-4 group-focus-within:text-black transition-colors">
                    Melhor e-mail
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-gray-200 py-4 text-xl md:text-2xl focus:outline-none focus:border-lilac transition-colors placeholder:text-gray-300 font-serif"
                    placeholder="voce@email.com"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-4 group-focus-within:text-black transition-colors">
                  Perfil ou site da marca
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-gray-200 py-4 text-xl md:text-2xl focus:outline-none focus:border-lilac transition-colors placeholder:text-gray-300 font-serif"
                  placeholder="@suaempresa ou seusite.com"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-6">
                  O que você precisa agora?
                </label>
                <div className="flex flex-wrap gap-4">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`px-6 py-3 rounded-full border transition-all duration-300 text-sm md:text-base ${
                        activeServices.includes(service)
                          ? 'bg-lilac text-black border-lilac'
                          : 'bg-white text-gray-600 border-gray-200 hover:border-lilac hover:text-lilac-deep'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-6">
                  Formato de interesse
                </label>
                <div className="flex flex-wrap gap-4">
                  {budgets.map((budget) => (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => setActiveBudget(budget)}
                      className={`px-6 py-3 rounded-full border transition-all duration-300 text-sm md:text-base ${
                        activeBudget === budget
                          ? 'bg-lilac text-black border-lilac'
                          : 'bg-white text-gray-600 border-gray-200 hover:border-lilac hover:text-lilac-deep'
                      }`}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>

              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-4 group-focus-within:text-black transition-colors">
                  Onde está o maior gargalo?
                </label>
                <textarea
                  rows="5"
                  className="w-full bg-transparent border-b border-gray-200 py-4 text-xl md:text-2xl focus:outline-none focus:border-lilac transition-colors resize-none placeholder:text-gray-300 font-serif"
                  placeholder="Ex: temos conteúdo, mas o perfil não gera pedidos de orçamento..."
                />
              </div>

              <button className="group flex items-center gap-4 bg-black text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-lilac-deep transition-all duration-300">
                <span>Enviar contexto</span>
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>

          <div className="lg:col-span-4 lg:pl-8 space-y-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-3xl bg-lilac text-black p-8 shadow-[0_24px_70px_rgba(195,166,202,0.32)] hover:bg-lilac-deep hover:text-white transition-colors"
            >
              <MessageCircle className="mb-6" size={28} />
              <h3 className="font-serif text-3xl mb-4">Prefere falar direto pelo WhatsApp?</h3>
              <p className="leading-relaxed mb-6">
                Toque aqui para abrir a conversa com uma mensagem pronta e enviar seu perfil.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
                Chamar agora
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={16} />
              </span>
            </a>

            <div className="bg-black text-white rounded-3xl p-8 border border-lilac/30">
              <Clock className="text-lilac mb-6" size={26} />
              <h3 className="font-serif text-3xl mb-4">Retorno com direção, não com resposta pronta.</h3>
              <p className="text-gray-300 leading-relaxed">
                O objetivo do primeiro contato é entender se sua marca precisa de uma ação pontual, uma rotina de conteúdo ou uma reorganização estratégica.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">
                Bom encaixe para
              </h3>
              <div className="space-y-5">
                {[
                  'marcas que querem publicar com mais consistência',
                  'negócios que precisam parecer mais profissionais',
                  'profissionais que querem transformar autoridade em demanda',
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-gray-600">
                    <CheckCircle2 className="text-lilac-deep flex-shrink-0 mt-0.5" size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">
                Dados de contato
              </h3>
              <div className="space-y-6">
                <a href="mailto:contato@amandafelisbino.com" className="flex items-center gap-4 text-lg hover:text-gray-600 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-lilac-soft flex items-center justify-center group-hover:bg-lilac group-hover:text-black transition-colors">
                    <Mail size={18} />
                  </div>
                  <span>contato@amandafelisbino.com</span>
                </a>
                <div className="flex items-center gap-4 text-lg text-gray-600 group cursor-default">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                    <MapPin size={18} />
                  </div>
                  <span>Brasil</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">
                Redes
              </h3>
              <div className="flex gap-4">
                {[Instagram, Linkedin, MessageCircle].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-lilac hover:text-black hover:border-lilac transition-all duration-300"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
