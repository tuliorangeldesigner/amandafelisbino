'use client'

import { useEffect } from 'react'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { usePathname } from 'next/navigation'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function SmoothScrollSync() {
  const pathname = usePathname()
  const lenis = useLenis(() => {
    ScrollTrigger.update()
  })

  useEffect(() => {
    if (!lenis) return

    window.lenis = lenis
    window.__premiumSmoothScroll = true
    document.documentElement.classList.add('premium-smooth-scroll-active')

    const refresh = () => {
      lenis.resize()
      ScrollTrigger.refresh()
    }

    refresh()
    window.addEventListener('resize', refresh)

    return () => {
      window.removeEventListener('resize', refresh)
      document.documentElement.classList.remove('premium-smooth-scroll-active')
      delete window.__premiumSmoothScroll
      delete window.lenis
    }
  }, [lenis])

  useEffect(() => {
    if (!lenis) return

    requestAnimationFrame(() => {
      lenis.scrollTo(0, { immediate: true, force: true })
      window.scrollTo(0, 0)
      ScrollTrigger.refresh()
    })
  }, [pathname, lenis])

  return null
}

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 2.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 0.55,
        touchMultiplier: 1.4,
        normalizeWheel: true,
        lerp: 0.055,
      }}
    >
      <SmoothScrollSync />
      {children}
    </ReactLenis>
  )
}
