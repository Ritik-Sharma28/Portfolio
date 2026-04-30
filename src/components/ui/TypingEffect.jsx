import useTypingEffect from '../../hooks/useTypingEffect'

export default function TypingEffect() {
  const text = useTypingEffect()

  return (
    <div className="font-mono text-accent-cyan text-lg md:text-xl flex items-center gap-2">
      <span className="text-text-muted">{'>'}</span>
      <span>{text}</span>
      <span className="animate-blink text-accent-cyan font-light">|</span>
    </div>
  )
}
