'use client'

import { Star } from 'lucide-react'
import Container from '@/components/ui/Container'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Cliente de Social Media',
      role: 'Empreendedora',
      company: 'Marca local',
      content: 'A Amanda organizou nosso Instagram e trouxe uma identidade muito mais profissional para os conteúdos.',
      rating: 5,
      avatar: '/images/Felisbino_1 (1).webp'
    },
    {
      name: 'Cliente de Conteúdo',
      role: 'Fundador',
      company: 'Negócio digital',
      content: 'Os posts ficaram mais claros, bonitos e alinhados com o que a marca precisava comunicar.',
      rating: 5,
      avatar: '/images/Felisbino_1 (3).webp'
    },
    {
      name: 'Cliente de Identidade',
      role: 'Profissional liberal',
      company: 'Atendimento online',
      content: 'A identidade visual deixou minha comunicação mais consistente e facilitou muito a criação dos materiais.',
      rating: 5,
      avatar: '/images/Felisbino_1 (4).webp'
    }
  ]

  return (
    <section id="testimonials" className="bg-[#111] text-white py-32">
      <Container>
        <div className="text-center mb-20">
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-4 block">
            Depoimentos
          </span>
          <h2 className="text-5xl md:text-7xl font-serif font-light text-white">
            Marcas com <span className="italic text-gray-500">presença</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet testimonial-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active testimonial-bullet-active'
            }}
            loop={true}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="text-center px-4 py-8">
                  <div className="flex justify-center mb-10 gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-white fill-white w-4 h-4" />
                    ))}
                  </div>

                  <blockquote className="text-2xl md:text-4xl font-serif font-light mb-12 leading-relaxed text-gray-200">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="flex flex-col items-center justify-center gap-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      quality={70}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gray-800"
                    />
                    <div className="text-center">
                      <div className="font-bold text-white text-lg">{testimonial.name}</div>
                      <div className="text-sm text-gray-500 tracking-wider uppercase mt-1">{testimonial.role} — {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>

      <style jsx global>{`
        .testimonial-swiper {
          padding-bottom: 50px !important;
        }

        .testimonial-swiper .swiper-pagination {
          bottom: 0 !important;
        }

        .testimonial-bullet {
          width: 6px !important;
          height: 6px !important;
          background: #333 !important;
          opacity: 1 !important;
          margin: 0 6px !important;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
        }

        .testimonial-bullet-active {
          background: #fff !important;
          transform: scale(1.5);
        }

        .testimonial-bullet:hover {
          background: #666 !important;
        }

        .testimonial-bullet-active:hover {
          background: #fff !important;
        }
      `}</style>
    </section>
  )
}
