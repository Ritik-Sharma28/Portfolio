import useCursorGlow from '../../hooks/useCursorGlow'

export default function CursorGlow() {
  const { x, y } = useCursorGlow()

  return (
    <div
      className="fixed pointer-events-none z-[999] hidden lg:block"
      aria-hidden="true"
      style={{
        left: x,
        top: y,
        width: 400,
        height: 400,
        transform: 'translate(-50%, -50%)',
        background:
          'radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 60%)',
        transition: 'left 0.15s ease-out, top 0.15s ease-out',
      }}
    />
  )
}
