import useScrollProgress from '../../hooks/useScrollProgress'

export default function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 z-[200]" aria-hidden="true">
      <div
        className="h-full rounded-r-full"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #22d3ee, #8b5cf6)',
          transition: 'width 0.1s ease-out',
        }}
      />
    </div>
  )
}
