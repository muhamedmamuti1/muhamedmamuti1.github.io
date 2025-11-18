import { useState, useEffect, useRef } from 'react'
import { useTypewriter } from '../hooks/useTypewriter'

export function TypewriterText({ text, speed = 60, className = '' }) {
  const ref = useRef(null)
  const [shouldStart, setShouldStart] = useState(false)

  useEffect(() => {
    if (shouldStart) return

    let timer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldStart) {
            // Small delay before starting the typewriter
            timer = setTimeout(() => {
              setShouldStart(true)
            }, 300)
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: '0px',
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (timer) clearTimeout(timer)
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [shouldStart])

  const { displayedText, isComplete } = useTypewriter(
    shouldStart ? text : '',
    speed
  )

  return (
    <span ref={ref} className={className}>
      {displayedText}
      {!isComplete && shouldStart && <span className="typewriter-cursor">|</span>}
    </span>
  )
}

