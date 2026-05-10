import Container from '@/components/ui/Container'

export default function PageHeader({ title, subtitle, description }) {
  return (
    <div className="pt-32 pb-16 md:pt-48 md:pb-24">
      <Container>
        <div className="max-w-4xl">
          {subtitle && (
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-6 block">
              {subtitle}
            </span>
          )}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-light leading-[0.9] mb-8">
            {title}
          </h1>
          {description && (
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </Container>
    </div>
  )
}
