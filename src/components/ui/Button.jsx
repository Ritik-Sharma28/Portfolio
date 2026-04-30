import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-gradient-to-r from-cyan-400 to-violet-500 text-white font-semibold rounded-full px-6 py-3 shadow-lg',
  secondary:
    'glass text-accent-cyan border border-accent-cyan/30 font-semibold rounded-full px-6 py-3',
  tertiary:
    'text-accent-cyan font-medium hover:underline px-4 py-3 inline-flex items-center gap-2',
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  download,
  target,
  rel,
  ariaLabel,
}) {
  const baseClass = `${variants[variant]} transition-colors duration-300 inline-flex items-center justify-center gap-2 ${className}`

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.05 },
    whileTap: disabled ? {} : { scale: 0.95 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  }

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        download={download}
        className={baseClass}
        aria-label={ariaLabel}
        {...motionProps}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      aria-label={ariaLabel}
      {...motionProps}
    >
      {children}
    </motion.button>
  )
}
