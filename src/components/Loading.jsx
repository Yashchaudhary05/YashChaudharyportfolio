import { useState, useEffect, useCallback } from 'react'
import './styles/Loading.css'

const terminalLines = [
  { text: '> initializing portfolio...', delay: 200 },
  { text: '> loading modules ████████░░ ', delay: 600 },
  { text: '> compiling assets...', delay: 1000 },
  { text: '> deploying to browser ✓', delay: 1500, success: true },
  { text: '> ready.', delay: 1900, success: true },
]

export default function Loading({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [visibleLines, setVisibleLines] = useState(0)
  const [hidden, setHidden] = useState(false)

  const finish = useCallback(() => {
    setHidden(true)
    setTimeout(() => onComplete(), 600)
  }, [onComplete])

  useEffect(() => {
    // Progress bar
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 40)

    // Terminal lines
    terminalLines.forEach((line, i) => {
      setTimeout(() => setVisibleLines(i + 1), line.delay)
    })

    // Auto-complete after all lines
    const timer = setTimeout(finish, 2400)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [finish])

  return (
    <div className={`loading-screen${hidden ? ' hidden' : ''}`} aria-live="polite">
      <div className="loader-content">
        <div className="loader-logo" aria-hidden="true">YC</div>

        <div className="loader-terminal" role="status">
          {terminalLines.map((line, i) => (
            <div
              key={i}
              className={`line${i < visibleLines ? ' visible' : ''}`}
            >
              {line.success ? (
                <span className="success">{line.text}</span>
              ) : (
                <span className="prompt">{line.text}</span>
              )}
            </div>
          ))}
        </div>

        <div className="loader-bar-container">
          <div
            className="loader-bar"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
        <div className="loader-percent">{progress}%</div>
      </div>
    </div>
  )
}
