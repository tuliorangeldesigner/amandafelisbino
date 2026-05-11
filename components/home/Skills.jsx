'use client'

import { useEffect, useRef } from 'react'
import Container from '@/components/ui/Container'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image Animation
      gsap.from('.skills-image', {
        scale: 1.1,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        }
      })

      // Content Animation
      gsap.from('.skills-content > *', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.skills-content',
          start: 'top 70%',
        }
      })

      // Progress Bars
      gsap.utils.toArray('.progress-bar').forEach((bar) => {
        gsap.to(bar, {
          width: bar.dataset.width,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 85%',
          }
        })
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const skillCategories = [
    {
      title: "Social Media",
      skills: [
        { name: "Planejamento de Conteúdo", level: "95%" },
        { name: "Gestao de Perfil", level: "90%" },
        { name: "Criação de Posts", level: "95%" },
        { name: "Calendario Editorial", level: "85%" }
      ]
    },
    {
      title: "Criação Visual",
      skills: [
        { name: "Design para Instagram", level: "90%" },
        { name: "Edição de Vídeos", level: "85%" },
        { name: "Identidade Visual", level: "80%" },
        { name: "Direção de Conteúdo", level: "85%" }
      ]
    }
  ]

  const tools = [
    "Canva", "CapCut", "Instagram", "Meta Business", 
    "Illustrator", "Photoshop", "Figma", "Google Drive"
  ]

  return (
    <section ref={sectionRef} id="skills" className="bg-[#111] text-white py-24 md:py-32 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Image */}
          <div className="w-full lg:w-5/12 relative">
             <div className="skills-image relative aspect-[3/4] rounded-2xl overflow-hidden">
               <Image
                 src="/images/Felisbino_1 (1).webp"
                 alt="Amanda Felisbino criando conteúdo"
                 fill
                 sizes="(min-width: 1024px) 42vw, 100vw"
                 quality={72}
                 className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
               
               <div className="absolute bottom-8 left-8 right-8">
                 <p className="font-serif text-2xl italic leading-snug mb-2">
                   "Consistência transforma conteúdo em presença."
                 </p>
                 <p className="text-xs uppercase tracking-widest text-gray-400">Amanda Felisbino</p>
               </div>
             </div>

             {/* Stats Overlay */}
             <div className="hidden lg:flex absolute -right-12 top-20 bg-white text-black p-8 rounded-xl shadow-2xl flex-col gap-6 max-w-[200px]">
                <div>
                   <span className="block text-4xl font-serif font-bold">4</span>
                   <span className="text-xs text-gray-500 uppercase tracking-wider">Serviços</span>
                </div>
                <div className="w-full h-[1px] bg-gray-200"></div>
                <div>
                   <span className="block text-4xl font-serif font-bold">360</span>
                   <span className="text-xs text-gray-500 uppercase tracking-wider">Conteúdo</span>
                </div>
             </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-7/12 skills-content pt-0 lg:pt-10">
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-4 block">
               Habilidades
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-light mb-8 leading-tight">
               Criando conteúdo <br/> <span className="italic text-gray-400">visual</span> que posiciona.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-16 max-w-xl">
               Minha abordagem une estética, organização e estratégia. Cada post, vídeo e material visual nasce com um objetivo: fortalecer a marca e facilitar a comunicação com o público certo.
            </p>

            {/* Skill Categories */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
               {skillCategories.map((category, idx) => (
                 <div key={idx}>
                    <h3 className="text-xl font-serif mb-6">{category.title}</h3>
                    <div className="space-y-6">
                       {category.skills.map((skill, sIdx) => (
                         <div key={sIdx}>
                            <div className="flex justify-between text-sm mb-2 text-gray-300">
                               <span>{skill.name}</span>
                               <span className="text-gray-500">{skill.level}</span>
                            </div>
                            <div className="w-full h-[2px] bg-gray-800 rounded-full overflow-hidden">
                               <div 
                                 className="progress-bar h-full bg-white rounded-full w-0"
                                 data-width={skill.level}
                               ></div>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
               ))}
            </div>

            {/* Tools Tags */}
            <div>
               <h3 className="text-sm font-medium uppercase tracking-widest text-gray-500 mb-6">
                 Ferramentas
               </h3>
               <div className="flex flex-wrap gap-3">
                  {tools.map((tool, index) => (
                    <span 
                      key={index} 
                      className="px-5 py-2 border border-white/10 rounded-full text-sm text-gray-300 hover:border-white hover:text-white transition-colors cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
               </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  )
}
