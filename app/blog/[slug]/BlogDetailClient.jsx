'use client'

import { useEffect, useRef } from 'react'
import Container from '@/components/ui/Container'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowLeft, Clock, Calendar, Share2, Twitter, Linkedin, Facebook } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function BlogDetailClient({ post, nextPost, prevPost }) {
  const containerRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from('.hero-element', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      })

      // Image Parallax
      gsap.to('.hero-image', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-image-container',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      })

      // Content Fade In
      gsap.from('.content-element', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={containerRef} className="bg-white min-h-screen pt-32 pb-24">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-black z-50 origin-left scale-x-0" id="progress-bar"></div>

      <Container>
        {/* Back Link */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-12 uppercase tracking-widest text-xs font-medium hero-element"
        >
          <ArrowLeft size={16} /> Voltar ao Blog
        </Link>

        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <div className="flex xx:!flex-nowrap flex-wrap items-center justify-center gap-4 text-xs font-medium uppercase tracking-widest text-gray-500 mb-6 hero-element">
            <span className="bg-gray-100 px-3 py-1 rounded-full text-black">{post.category}</span>
            <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
            <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif-display leading-tight mb-8 hero-element">
            {post.title}
          </h1>

          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed hero-element">
            {post.excerpt}
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden rounded-xl mb-20 hero-image-container hero-element">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            quality={76}
            sizes="100vw"
            className="absolute inset-0 h-[120%] object-cover hero-image"
          />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto" ref={contentRef}>
          {/* Sidebar (Share & Author) */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <div className="sticky top-32 space-y-12 content-element">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Autora</h3>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                    {/* Placeholder for author image */}
                    <div className="w-full h-full bg-black flex items-center justify-center text-white font-serif italic text-xl">A</div>
                  </div>
                  <div>
                    <div className="font-medium text-black">{post.author}</div>
                    <div className="text-xs text-gray-500">Social Media</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Compartilhar</h3>
                <div className="flex gap-4">
                  <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-black hover:text-black transition-all">
                    <Twitter size={18} />
                  </button>
                  <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-black hover:text-black transition-all">
                    <Linkedin size={18} />
                  </button>
                  <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-black hover:text-black transition-all">
                    <Facebook size={18} />
                  </button>
                  <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-black hover:text-black transition-all">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 lg:col-start-5 order-1 lg:order-2">
            <div className="prose prose-lg prose-headings:font-serif-display prose-headings:font-normal prose-p:text-gray-600 prose-p:font-light prose-p:leading-loose prose-a:text-black prose-a:no-underline prose-a:border-b prose-a:border-black/20 hover:prose-a:border-black hover:prose-a:text-black transition-all max-w-none">
              {post.content.map((block, index) => {
                switch (block.type) {
                  case 'paragraph':
                    return <p key={index} className="content-element mb-8 text-lg">{block.text}</p>
                  case 'heading':
                    return <h2 key={index} className="content-element text-3xl md:text-4xl mt-12 mb-6 text-black">{block.text}</h2>
                  case 'quote':
                    return (
                      <blockquote key={index} className="content-element border-l-2 border-black pl-6 my-12 italic text-2xl font-serif text-black leading-relaxed">
                        "{block.text}"
                      </blockquote>
                    )
                  case 'image':
                    return (
                      <figure key={index} className="content-element my-12">
                        <Image
                          src={block.url}
                          alt={block.caption || ''}
                          width={1200}
                          height={800}
                          quality={72}
                          sizes="(min-width: 1024px) 760px, 100vw"
                          className="w-full rounded-lg"
                        />
                        {block.caption && (
                          <figcaption className="text-center text-sm text-gray-400 mt-4 italic">
                            {block.caption}
                          </figcaption>
                        )}
                      </figure>
                    )
                  default:
                    return null
                }
              })}
            </div>

            {/* Tags */}
            <div className="border-t border-gray-100 mt-16 pt-8 content-element">
              <div className="flex flex-wrap gap-2">
                {['Design', 'Social Media', 'Conteúdo', 'Marca'].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-gray-50 text-gray-600 text-sm rounded-full hover:bg-black hover:text-white transition-colors cursor-pointer">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="border-t border-gray-200 mt-24 pt-16">
          <div className="grid md:grid-cols-2 gap-8">
            {prevPost && (
              <Link href={`/blog/${prevPost.slug}`} className="group block text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block group-hover:text-black transition-colors">Artigo anterior</span>
                <h4 className="text-2xl font-serif-display group-hover:underline decoration-1 underline-offset-4">{prevPost.title}</h4>
              </Link>
            )}
            {nextPost && (
              <Link href={`/blog/${nextPost.slug}`} className="group block text-right ml-auto">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block group-hover:text-black transition-colors">Próximo artigo</span>
                <h4 className="text-2xl font-serif-display group-hover:underline decoration-1 underline-offset-4">{nextPost.title}</h4>
              </Link>
            )}
          </div>
        </div>

      </Container>
    </main>
  )
}
