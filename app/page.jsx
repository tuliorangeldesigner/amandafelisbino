'use client';

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Hero from "@/components/home/Hero";
import Manifesto from "@/components/home/Manifesto";
import Services from "@/components/home/Services";
import WorkList from "@/components/home/WorkList";
import Process from "@/components/home/Process";
import Skills from "@/components/home/Skills";
import Testimonials from "@/components/home/Testimonials";
import Pricing from "@/components/home/Pricing";
import Blog from "@/components/home/Blog";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import Marquee from "@/components/home/Marquee";
import Loading from "@/components/ui/Loading";
import useGSAPLoad from "@/hooks/useGSAPLoad";

export default function Home() {
  const gsapLoaded = useGSAPLoad();
  const [loadingComplete, setLoadingComplete] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    // We can use this effect for other global animations if needed
    // But Hero animation is now controlled via prop
  }, [loadingComplete]);

  if (!gsapLoaded) {
    return null; // Or a simple spinner if needed, but Loading component handles it
  }

  return (
    <div ref={contentRef}>
      {!loadingComplete && <Loading onComplete={() => setLoadingComplete(true)} />}
      <main>
        <Hero startAnimation={loadingComplete} />
        <Manifesto />
        <Services />
        <WorkList limit={3} />
        <Process />
        <Skills />
        <Testimonials />
        <Pricing />
        <Blog limit={3} />
        <FAQ />
        <CTA />
        <Marquee />
      </main>
    </div>
  );
}
