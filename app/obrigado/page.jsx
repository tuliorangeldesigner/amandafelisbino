import Link from 'next/link'
import Container from '@/components/ui/Container'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function ObrigadoPage({ searchParams }) {
  const hasError = searchParams?.status === 'erro'
  const isNewsletter = searchParams?.tipo === 'newsletter'

  return (
    <main className="min-h-screen bg-white text-black pt-32 pb-24">
      <Container>
        <div className="max-w-4xl">
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-lilac-deep mb-6 block">
            {hasError ? 'Algo nao foi enviado' : 'Recebido'}
          </span>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-light leading-[0.9] mb-8">
            {hasError ? (
              <>
                Tente novamente pelo <span className="italic text-lilac-deep">WhatsApp.</span>
              </>
            ) : (
              <>
                Obrigada pelo <span className="italic text-lilac-deep">contato.</span>
              </>
            )}
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-2xl mb-10">
            {hasError
              ? 'A mensagem nao chegou pelo formulario. Use o WhatsApp para falar direto com a Amanda.'
              : isNewsletter
                ? 'Sua inscricao foi recebida. Em breve voce recebe ideias sobre conteudo, design e presenca digital.'
                : 'Sua mensagem foi recebida. A Amanda retorna com um direcionamento inicial assim que possivel.'}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/554898426731?text=Oi%2C%20Amanda.%20Quero%20falar%20sobre%20a%20presen%C3%A7a%20digital%20da%20minha%20marca."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-lilac text-black rounded-full font-bold uppercase tracking-widest hover:bg-lilac-deep hover:text-white transition-colors"
            >
              <MessageCircle size={20} />
              Chamar no WhatsApp
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-3 px-8 py-4 border border-lilac/60 text-lilac-deep rounded-full font-bold uppercase tracking-widest hover:bg-lilac-soft transition-colors"
            >
              Voltar para Home
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Container>
    </main>
  )
}
