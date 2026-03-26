import { useState, useEffect, useRef } from 'react'

/**
 * Hook that types out phrases one by one with a blinking cursor effect.
 * Returns the current text string.
 */
export default function useTypingEffect(phrases, typingSpeed = 80, pauseTime = 2000) {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]

    if (!isDeleting && charIndex < currentPhrase.length) {
      // Typing
      timeoutRef.current = setTimeout(() => {
        setText(currentPhrase.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, typingSpeed)
    } else if (!isDeleting && charIndex === currentPhrase.length) {
      // Pause before deleting
      timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseTime)
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      timeoutRef.current = setTimeout(() => {
        setText(currentPhrase.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, typingSpeed / 2)
    } else if (isDeleting && charIndex === 0) {
      // Move to next phrase
      setIsDeleting(false)
      setPhraseIndex((phraseIndex + 1) % phrases.length)
    }

    return () => clearTimeout(timeoutRef.current)
  }, [charIndex, isDeleting, phraseIndex, phrases, typingSpeed, pauseTime])

  return text
}
