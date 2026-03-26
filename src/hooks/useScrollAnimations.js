import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Hook that sets up GSAP ScrollTrigger animations for all `.animate-in` elements.
 * Call once at the App level after loading completes.
 */
export default function useScrollAnimations(enabled) {
  useEffect(() => {
    if (!enabled) return

    // Small delay to ensure DOM is painted
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.animate-in')

      elements.forEach((el) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          },
        )
      })

      // Stagger the hero elements for a nice entrance
      const heroEls = document.querySelectorAll('.hero .animate-in')
      gsap.fromTo(
        heroEls,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          delay: 0.1,
        },
      )

      // Skill cards stagger
      const skillCards = document.querySelectorAll('.skill-category')
      if (skillCards.length) {
        gsap.fromTo(
          skillCards,
          { opacity: 0, y: 30, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: skillCards[0],
              start: 'top 85%',
            },
          },
        )
      }

      // Experience timeline line grow
      const timeline = document.querySelector('.experience-list')
      if (timeline) {
        gsap.fromTo(
          '.experience-list::before',
          { scaleY: 0 },
          { scaleY: 1 },
        )
      }

      // Project cards stagger
      const projectCards = document.querySelectorAll('.project-card')
      if (projectCards.length) {
        gsap.fromTo(
          projectCards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: projectCards[0],
              start: 'top 85%',
            },
          },
        )
      }

      ScrollTrigger.refresh()
    }, 100)

    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [enabled])
}
