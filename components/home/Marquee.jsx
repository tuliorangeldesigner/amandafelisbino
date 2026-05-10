export default function Marquee() {
  return (
    <div className="bg-white text-black py-12 overflow-hidden border-y border-gray-100">
      <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-16 items-center text-4xl md:text-5xl font-light">
            <span className="font-serif-display italic">#UserInterfaceDesign</span>
            <span className="font-sans tracking-tight">#Experience</span>
            <span className="font-serif-display italic">#Framer</span>
            <span className="font-sans tracking-tight">#WebDesign</span>
            <span className="font-serif-display italic">#MobileApp</span>
            <span className="font-sans tracking-tight">#Prototyping</span>
            <span className="font-serif-display italic">#CleanDesign</span>
            <span className="font-sans tracking-tight">#Aesthetics</span>
          </div>
        ))}
      </div>
    </div>
  )
}
