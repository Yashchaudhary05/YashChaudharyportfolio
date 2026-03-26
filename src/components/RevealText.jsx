import { useEffect, useRef } from 'react'
import gsap from 'gsap'

/**
 * Renders text that reveals word-by-word on scroll (or on mount).
 * No SplitText plugin needed — uses span wrapping.
 */
export default function RevealText({ text, as: Tag = 'p', className = '', delay = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const words = el.querySelectorAll('.reveal-word')
    gsap.fromTo(
      words,
      { opacity: 0, y: 20, filter: 'blur(4px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.5,
        stagger: 0.03,
        ease: 'power3.out',
        delay,
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
        },
      },
    )
  }, [delay])

  const words = text.split(' ')

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="reveal-word"
          style={{ display: 'inline-block', marginRight: '0.3em' }}
        >
          {word}
        </span>
      ))}
    </Tag>
  )
}
