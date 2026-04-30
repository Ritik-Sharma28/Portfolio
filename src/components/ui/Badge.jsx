export default function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium
                  text-accent-cyan border border-accent-cyan/30
                  bg-accent-cyan/5 font-mono tracking-wider ${className}`}
    >
      {children}
    </span>
  )
}
