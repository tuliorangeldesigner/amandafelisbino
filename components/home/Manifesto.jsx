'use client'

import { useEffect, useRef } from 'react'
import Container from '@/components/ui/Container'

export default function Manifesto() {
  const textRef = useRef(null)

  useEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return

    const ctx = window.gsap.context(() => {
      window.gsap.fromTo(textRef.current,
        { backgroundColor: '#000000' },
        {
          backgroundColor: '#111111',
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: 1
          }
        }
      )

      const words = window.gsap.utils.toArray(".manifesto-word")
      window.gsap.set(words, { opacity: 0.1 })

      window.gsap.to(words, {
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 60%",
          end: "bottom 40%",
          scrub: 1,
        },
        ease: "none"
      })
    }, textRef)

    return () => ctx.revert()
  }, [])

  const content = [
    { type: 'text', value: "Acredito que " },
    { type: 'highlight', value: "conteúdo bom " },
    { type: 'text', value: "une estratégia, estética e clareza para fazer uma marca ser lembrada." },
    { type: 'break' },
    { type: 'break' },
    { type: 'text', value: "Planejamento dá ritmo. " },
    { type: 'highlight', value: "Design cria desejo. " },
    { type: 'text', value: "Consistência gera presença." },
    { type: 'break' },
    { type: 'text', value: "Cada decisão visual precisa conversar com a personalidade e os objetivos da " },
    { type: 'highlight', value: "marca." },
    { type: 'break' },
    { type: 'break' },
    { type: 'text', value: "Posts, vídeos e identidade visual são ferramentas para criar conexão e " },
    { type: 'highlight', value: "autoridade " },
    { type: 'text', value: "no digital." }
  ]

  return (
    <section id="about" ref={textRef} className="bg-[#111] text-white py-32 min-h-screen flex items-center justify-center">
      <Container>
        <div className="text-4xl md:text-5xl lg:text-7xl font-serif font-light leading-[1.3] text-center max-w-6xl mx-auto">
          {content.map((item, i) => {
            if (item.type === 'break') return <br key={i} className="mb-4 md:mb-8 block" />
            return (
              <span
                key={i}
                className={`manifesto-word transition-colors duration-500 ${
                  item.type === 'highlight'
                    ? 'text-white italic'
                    : 'text-gray-500'
                }`}
              >
                {item.value}
              </span>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
