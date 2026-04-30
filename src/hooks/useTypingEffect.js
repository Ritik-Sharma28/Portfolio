import { useState, useEffect, useCallback } from 'react'

const defaultPhrases = [
  'MERN Stack Developer',
  'GenAI & RAG Builder',
  'CP Enthusiast | LeetCode 400+',
  "IET Lucknow | CSE '28",
]

export default function useTypingEffect(phrases = defaultPhrases) {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  const tick = useCallback(() => {
    const current = phrases[phraseIndex]

    if (!deleting && charIndex < current.length) {
      setText(current.slice(0, charIndex + 1))
      setCharIndex((c) => c + 1)
    } else if (!deleting && charIndex === current.length) {
      // Pause before deleting
      setTimeout(() => setDeleting(true), 1800)
      return
    } else if (deleting && charIndex > 0) {
      setText(current.slice(0, charIndex - 1))
      setCharIndex((c) => c - 1)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setPhraseIndex((i) => (i + 1) % phrases.length)
    }
  }, [charIndex, deleting, phraseIndex, phrases])

  useEffect(() => {
    const speed = deleting ? 50 : 100
    const timeout = setTimeout(tick, speed)
    return () => clearTimeout(timeout)
  }, [tick, deleting])

  return text
}
