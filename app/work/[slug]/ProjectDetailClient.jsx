'use client'

import { useEffect, useRef } from 'react'
import Container from '@/components/ui/Container'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ProjectDetailClient({ project, nextProject }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from('.hero-content > *', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out'
      })

      gsap.from('.hero-image', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: 'power3.out'
      })

      // Content Sections
      gsap.utils.toArray('.animate-up').forEach(elem => {
        gsap.from(elem, {
          y: 50,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: elem,
            start: 'top 80%',
          }
        })
      })

    }, containerRef)

    return () => ctx.revert()
  }, [project])

  return (
    <div ref={containerRef} className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 relative overflow-hidden">
        <Container>
          <div className="hero-content max-w-4xl mb-12 md:mb-20">
            <Link href="/work" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors mb-8">
              <ArrowLeft size={16} />
              Voltar aos projetos
            </Link>
            <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">
              <span>{project.year}</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span className="text-black">{project.category}</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-black leading-[0.9] mb-8">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
              {project.description}
            </p>
          </div>
        </Container>

        <div className="hero-image w-full h-[50vh] md:h-[80vh] relative">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            quality={76}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </section>

      <Container>
        {/* Project Meta Grid */}
        <div className="animate-up grid min-[480px]:grid-cols-2 md:grid-cols-4 gap-8 py-16 md:py-24 border-b border-gray-100">
          <div>
            <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Cliente</span>
            <span className="text-lg md:text-xl font-serif">{project.client || 'Confidencial'}</span>
          </div>
          <div>
            <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Serviços</span>
            <span className="text-lg md:text-xl font-serif">{project.services || 'Social Media'}</span>
          </div>
          <div>
            <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Função</span>
            <span className="text-lg md:text-xl font-serif">{project.role}</span>
          </div>
          <div>
            <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Ano</span>
            <span className="text-lg md:text-xl font-serif">{project.year}</span>
          </div>
        </div>

        {/* Challenge & Solution */}
        <div className="grid md:grid-cols-12 gap-12 md:gap-24 py-24 md:py-32">
          <div className="md:col-span-4 animate-up">
            <h3 className="text-3xl font-serif mb-6">O Desafio</h3>
            <p className="text-gray-600 leading-relaxed">
              {project.challenge || "The main challenge was to create a cohesive experience that balances functionality with aesthetics. We needed to ensure that the user journey was intuitive while maintaining a high visual standard."}
            </p>
          </div>
          <div className="md:col-span-1 animate-up hidden md:block">
            <div className="w-[1px] h-full bg-gray-100 mx-auto"></div>
          </div>
          <div className="md:col-span-7 animate-up">
            <h3 className="text-3xl font-serif mb-6">A Solução</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {project.solution || "We approached this by first establishing a clear design system. This allowed us to iterate quickly and maintain consistency. We focused on micro-interactions to delight the user and used a clean, minimal layout to let the content breathe."}
            </p>
            
            {project.details && (
              <div className="mt-12 flex flex-wrap gap-3">
                {project.details.map((tag, i) => (
                  <span key={i} className="px-4 py-2 border border-gray-200 rounded-full text-xs font-bold uppercase tracking-widest text-gray-500">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* Gallery */}
      {project.screens && project.screens.length > 0 && (
        <section className="py-12 bg-gray-50">
          <Container>
             <div className="grid gap-8 md:gap-16">
                {project.screens.map((screen, index) => (
                  <div key={index} className="animate-up relative aspect-[4/3] group overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src={screen}
                      alt={`Imagem ${index + 1}`}
                      fill
                      quality={72}
                      sizes="(min-width: 1024px) 1200px, 100vw"
                      className="object-cover"
                    />
                  </div>
                ))}
             </div>
          </Container>
        </section>
      )}

      {/* Outcome */}
      <Container className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center animate-up">
          <span className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Resultado</span>
          <h3 className="text-3xl md:text-5xl font-serif leading-tight mb-8">
            "{project.outcome || 'The project was a huge success, leading to increased user engagement and positive feedback from stakeholders.'}"
          </h3>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>
      </Container>

      {/* Next Project Navigation */}
      <section className="border-t border-gray-100 bg-black text-white py-24 md:py-32">
        <Container>
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-12">
            <div>
              <span className="block text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Próximo projeto</span>
              <h2 className="text-5xl md:text-7xl font-serif mb-8">
                {nextProject.title}
              </h2>
              <Link 
                href={`/work/${nextProject.slug}`}
                className="inline-flex items-center gap-3 text-lg font-bold uppercase tracking-widest hover:text-gray-300 transition-colors"
              >
                Ver projeto
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="hidden md:block opacity-50 text-9xl font-serif text-gray-800">
              {nextProject.id}
            </div>
          </div>
        </Container>
      </section>

    </div>
  )
}
