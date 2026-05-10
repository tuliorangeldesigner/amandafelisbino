import { useState, useEffect } from 'react'

export default function useGSAPLoad() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (window.gsap && window.ScrollTrigger) {
      setLoaded(true)
      return
    }

    const script1 = document.createElement('script')
    script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'
    script1.onload = () => {
      const script2 = document.createElement('script')
      script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js'
      script2.onload = () => {
        window.gsap.registerPlugin(window.ScrollTrigger)
        setLoaded(true)
      }
      document.body.appendChild(script2)
    }
    document.body.appendChild(script1)
  }, [])

  return loaded
}
