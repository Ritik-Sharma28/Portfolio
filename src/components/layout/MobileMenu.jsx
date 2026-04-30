import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../../utils/constants/navLinks'
import { socials } from '../../utils/constants/socials'

export default function MobileMenu({ isOpen, onClose, activeSection, onNavClick }) {
  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // ESC key close
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handler)
    }
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed inset-0 z-[55] bg-bg-primary/[0.98] backdrop-blur-[40px]
                     flex flex-col md:hidden"
        >
          {/* Navigation links */}
          <div className="flex-1 flex flex-col items-center justify-center gap-6">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => onNavClick(e, link.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
                className={`text-2xl font-display font-bold tracking-wide transition-colors ${
                  activeSection === link.href
                    ? 'text-accent-cyan'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.name.toUpperCase()}
              </motion.a>
            ))}
          </div>

          {/* Social icons at bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-4 pb-12"
          >
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.name} profile`}
                  className="w-11 h-11 rounded-full glass flex items-center justify-center
                             text-text-secondary hover:text-white transition-colors duration-300"
                  style={{ '--hover-color': social.color }}
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
