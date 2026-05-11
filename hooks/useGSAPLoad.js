import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function useGSAPLoad() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    gsap.registerPlugin(ScrollTrigger)
    window.gsap = gsap
    window.ScrollTrigger = ScrollTrigger
    setLoaded(true)
  }, [])

  return loaded
}
