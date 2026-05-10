import { ArrowUpRight, Instagram, Linkedin, Twitter, Github, Youtube, Music } from 'lucide-react'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import Image from 'next/image'

export default function Footer() {
  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
    { name: 'TikTok', icon: Music, href: '#' },
  ]

  return (
    <footer className="bg-white text-black py-20 relative overflow-hidden">
      <Container className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="z-10 order-2 lg:order-1">
          <h2 className="text-6xl md:text-8xl mb-8 font-serif font-light leading-[0.9]">
            Vamos <br />
            <span className="italic text-gray-400">conversar.</span>
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-md leading-relaxed">
            Se sua marca precisa de planejamento, posts, vídeos ou uma identidade visual mais consistente, me conte o que você tem em mente.
          </p>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-xl font-medium border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors mb-16"
          >
            <span>Iniciar conversa</span>
            <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">Redes</h3>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-black hover:border-black transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
             <p>© 2026 Amanda Felisbino. Todos os direitos reservados.</p>
             <p>Social media, design e conteúdo.</p>
          </div>
        </div>

        <div className="relative h-[600px] w-full grayscale hover:grayscale-0 transition-all duration-1000 ease-out order-1 lg:order-2">
          <div className="absolute inset-0 bg-gray-100 rounded-2xl overflow-hidden">
             <Image
               src="/images/amanda2.webp"
               alt="Amanda Felisbino"
               fill
               sizes="(min-width: 1024px) 50vw, 100vw"
               quality={74}
               className="object-cover object-center transform hover:scale-105 transition-transform duration-1000"
             />
          </div>
        </div>
      </Container>
    </footer>
  )
}
