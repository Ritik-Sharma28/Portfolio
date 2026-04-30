export default function GlowOrb({
  color = 'cyan',
  size = 600,
  x = '0%',
  y = '0%',
  opacity = 0.15,
  className = '',
}) {
  const colors = {
    cyan:   'rgba(34, 211, 238,',
    violet: 'rgba(139, 92, 246,',
    pink:   'rgba(236, 72, 153,',
  }

  const colorBase = colors[color] || colors.cyan

  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        transform: 'translate(-50%, -50%)',
        background: `radial-gradient(circle, ${colorBase}${opacity}) 0%, transparent 70%)`,
        filter: 'blur(80px)',
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  )
}
