'use client'

import { ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import Link from 'next/link'
import Image from 'next/image'
import { blogs } from '@/data/blogs'

export default function Blog({ limit }) {
  const posts = limit ? blogs.slice(0, limit) : blogs

  return (
    <section id="blog" className="bg-white py-24">
      <Container>
        <div className="flex justify-between items-end gap-4 lg:!flex-nowrap flex-wrap mb-16 border-b border-lilac/40 pb-10">
          <div>
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-lilac-deep mb-4 block">
              Biblioteca estratégica
            </span>
            <h2 className="text-5xl md:text-7xl font-serif-display mb-4">
              Conteúdo <span className="italic text-lilac-deep">Insights</span>
            </h2>
            <p className="text-xl text-gray-500 font-light">
              Ideias sobre redes sociais, design e presença digital
            </p>
          </div>
          <Link href="/blog" className="hidden md:flex items-center gap-2 text-lilac-deep font-bold hover:gap-4 transition-all uppercase tracking-wider text-sm">
            Ver todos <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group cursor-pointer block">
              <article className="h-full rounded-2xl border border-lilac/20 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-lilac/70 hover:shadow-[0_24px_70px_rgba(195,166,202,0.22)]">
                <div className="relative overflow-hidden rounded-xl mb-6 h-64 bg-lilac-soft">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    quality={62}
                    priority={index < 3}
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-lilac-deep/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4 bg-lilac text-black px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                    {post.category}
                  </div>
                </div>

                <div className="space-y-4 px-2 pb-3">
                  <div className="flex items-center gap-4 text-xs text-lilac-deep uppercase tracking-wider font-bold">
                    <span>{post.date}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-lilac" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-2xl font-serif-display group-hover:text-lilac-deep transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-500 leading-relaxed font-light text-sm">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-lilac-deep text-sm font-bold group-hover:gap-4 transition-all pt-2 uppercase tracking-wider">
                    Ler artigo <ArrowRight size={16} />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Link href="/blog" className="inline-block bg-lilac text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-lilac-deep hover:text-white transition-colors">
            Ver todos
          </Link>
        </div>
      </Container>
    </section>
  )
}
