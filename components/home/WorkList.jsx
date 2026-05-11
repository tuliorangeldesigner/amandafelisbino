'use client'

import { useRef, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import { projects } from '@/data/projects'
import Link from 'next/link'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function WorkList({ hideHeader = false, limit }) {
  const containerRef = useRef(null)
  const visibleProjects = limit ? projects.slice(0, limit) : projects

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!hideHeader) {
        gsap.from('.section-header', {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.section-header',
            start: 'top 80%',
          }
        })
      }

      // Projects Animation
      const projectCards = gsap.utils.toArray('.project-card')
      
      projectCards.forEach((card, i) => {
        const image = card.querySelector('.project-image')
        const content = card.querySelector('.project-content')
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 75%',
            end: 'top 20%',
            toggleActions: 'play none none reverse'
          }
        })

        tl.from(image, {
          y: 50,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out'
        })
        .from(content, {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        }, '-=0.8')
      })

    }, containerRef)

    return () => ctx.revert()
  }, [hideHeader])

  return (
    <section ref={containerRef} id="work" className="bg-white py-24 md:py-32 overflow-hidden">
      <Container>
         {/* Section Header */}
         {!hideHeader && (
         <div className="section-header mb-20 md:mb-32">
             <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
               <div>
                  <span className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-4 block">
                    Projetos
                  </span>
                  <h2 className="text-5xl md:text-7xl font-serif font-light text-black leading-tight">
                    Trabalhos em <span className="italic text-lilac-deep">destaque</span>
                  </h2>
               </div>
               <div className="mb-2 hidden md:block">
                 <Link href="/work" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-gray-600 transition-colors">
                    Ver todos
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                 </Link>
               </div>
             </div>
             <div className="w-full h-[1px] bg-lilac/40 mt-10"></div>
        </div>
        )}

        {/* Projects Grid */}
        <div className="flex flex-col gap-24 md:gap-40">
           {visibleProjects.map((project, index) => (
             <div 
               key={project.id} 
               className={`project-card flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-20 items-center`}
             >
                {/* Image Section */}
                <div className="project-image w-full lg:w-3/5 relative group">
                   <div className="overflow-hidden rounded-xl md:rounded-2xl relative aspect-[4/3] lg:aspect-[16/10]">
                     <Image
                       src={project.image}
                       alt={project.title}
                       fill
                       sizes="(min-width: 1024px) 60vw, 100vw"
                       quality={72}
                       priority={index === 0}
                       className="object-cover transition-transform duration-1000 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500"></div>
                   </div>
                   
                   {/* Floating ID for extra style */}
                   <span className="absolute -top-6 -left-4 md:-left-8 text-8xl md:text-9xl font-serif text-lilac-soft -z-10 select-none">
                     {project.id}
                   </span>
                </div>

                {/* Content Section */}
                <div className="project-content w-full lg:w-2/5">
                   <div className="flex items-center gap-4 text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400 mb-4 md:mb-6">
                      <span>{project.year || '2024'}</span>
                      <span className="w-1.5 h-1.5 bg-lilac rounded-full"></span>
                      <span className="text-lilac-deep">{project.category}</span>
                   </div>

                   <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-black mb-6 leading-tight">
                     {project.title}
                   </h3>

                   <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 md:mb-10 line-clamp-3 md:line-clamp-none">
                     {project.description}
                   </p>

                   {/* Tags */}
                   <div className="flex flex-wrap gap-2 md:gap-3 mb-10 md:mb-12">
                     {project.details.map((tag, idx) => (
                       <span key={idx} className="px-3 md:px-4 py-1.5 border border-lilac/40 rounded-full text-[10px] md:text-xs font-medium uppercase tracking-wider text-gray-500 hover:border-lilac hover:text-lilac-deep transition-colors cursor-default">
                         {tag}
                       </span>
                     ))}
                   </div>

                   <Link 
                     href={`/work/${project.slug}`} 
                     className="inline-flex items-center gap-3 text-black text-sm md:text-base font-bold uppercase tracking-widest hover:text-gray-600 transition-colors group/btn"
                   >
                     Ver projeto
                     <span className="w-8 h-8 rounded-full border border-lilac flex items-center justify-center transition-all duration-300 group-hover/btn:border-lilac group-hover/btn:bg-lilac group-hover/btn:text-black">
                        <ArrowRight className="w-4 h-4 -rotate-45 group-hover/btn:rotate-0 transition-transform duration-300" />
                     </span>
                   </Link>
                </div>
             </div>
           ))}
        </div>
        
        {/* Mobile View All Link */}
        <div className="mt-20 text-center md:hidden">
           <Link href="/work" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-gray-600 transition-colors">
              Ver todos
              <ArrowRight className="w-4 h-4" />
           </Link>
        </div>

      </Container>
    </section>
  )
}
