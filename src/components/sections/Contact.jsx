import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, Mail, Linkedin, Github, MapPin, GraduationCap, Zap, Clock, Copy, Check, ExternalLink } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'
import { socials } from '../../utils/constants/socials'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
})

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [copied, setCopied] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = (data) => {
    setStatus('loading')
    // Mailto fallback — open email client with pre-filled data
    const mailto = `mailto:ritiksharma.14y@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`From: ${data.name} (${data.email})\n\n${data.message}`)}`
    window.open(mailto, '_blank')
    // Simulate success after mailto opens
    setTimeout(() => {
      setStatus('success')
      reset()
      setTimeout(() => setStatus('idle'), 4000)
    }, 1000)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText('ritiksharma.14y@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const quickInfo = [
    { icon: MapPin, text: 'Lucknow, India' },
    { icon: GraduationCap, text: "IET Lucknow, CSE '28" },
    { icon: Zap, text: 'Open to: Internships · Freelance · Collab' },
    { icon: Clock, text: 'Response time: < 24 hours' },
  ]

  return (
    <section id="contact" className="relative">
      <div className="section-divider" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8">
        <SectionHeading
          badge="{ Get In Touch }"
          title="Let's Build Something"
          highlight="Amazing Together"
          subtitle="I'm currently open to internships, freelance projects, and exciting collaborations. Let's talk!"
        />

        {/* Toast notification */}
        <AnimatePresence>
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 rounded-xl glass border border-accent-emerald/30 text-accent-emerald text-sm font-medium shadow-lg"
              aria-live="polite"
            >
              ✅ Message sent! I&apos;ll reply shortly.
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* LEFT — Form (3/5) */}
          <ScrollReveal className="lg:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-text-secondary mb-2">Full Name</label>
                  <input id="contact-name" type="text" placeholder="John Doe" {...register('name')} className={`form-input ${errors.name ? 'error' : ''}`} aria-describedby={errors.name ? 'name-error' : undefined} />
                  {errors.name && <p id="name-error" className="text-accent-rose text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-text-secondary mb-2">Email</label>
                  <input id="contact-email" type="email" placeholder="john@example.com" {...register('email')} className={`form-input ${errors.email ? 'error' : ''}`} aria-describedby={errors.email ? 'email-error' : undefined} />
                  {errors.email && <p id="email-error" className="text-accent-rose text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium text-text-secondary mb-2">Subject</label>
                <input id="contact-subject" type="text" placeholder="Let's collaborate on..." {...register('subject')} className={`form-input ${errors.subject ? 'error' : ''}`} aria-describedby={errors.subject ? 'subject-error' : undefined} />
                {errors.subject && <p id="subject-error" className="text-accent-rose text-xs mt-1">{errors.subject.message}</p>}
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-text-secondary mb-2">Message</label>
                <textarea id="contact-message" rows={5} placeholder="Tell me about your project..." {...register('message')} className={`form-input resize-none ${errors.message ? 'error' : ''}`} aria-describedby={errors.message ? 'message-error' : undefined} />
                {errors.message && <p id="message-error" className="text-accent-rose text-xs mt-1">{errors.message.message}</p>}
              </div>
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full sm:w-auto px-8 py-3 rounded-full font-semibold text-sm inline-flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                  status === 'success' ? 'bg-accent-emerald text-white' :
                  status === 'error' ? 'bg-accent-rose text-white' :
                  'bg-gradient-to-r from-cyan-400 to-violet-500 text-white shadow-lg hover:shadow-cyan'
                } ${status === 'loading' ? 'opacity-70 cursor-wait' : ''}`}
              >
                {status === 'loading' && <><span className="animate-spin">⟳</span> Sending...</>}
                {status === 'success' && <><Check size={16} /> Message Sent!</>}
                {status === 'error' && <>✗ Try Again</>}
                {status === 'idle' && <><Send size={16} /> Send Message</>}
              </motion.button>
            </form>
          </ScrollReveal>

          {/* RIGHT — Contact Info (2/5) */}
          <ScrollReveal delay={0.2} className="lg:col-span-2 space-y-4">
            {/* Email Card */}
            <div className="glass rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-accent-cyan" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm">Email</p>
                  <p className="text-text-secondary text-sm truncate">ritiksharma.14y@gmail.com</p>
                  <button onClick={handleCopy} className="mt-2 inline-flex items-center gap-1.5 text-accent-cyan text-xs font-medium hover:underline cursor-pointer">
                    {copied ? <><Check size={12} /> Copied!</> : <><Copy size={12} /> Copy Email</>}
                  </button>
                </div>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="glass rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0A66C2]/10 flex items-center justify-center flex-shrink-0">
                  <Linkedin size={18} className="text-[#0A66C2]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm">LinkedIn</p>
                  <p className="text-text-secondary text-xs truncate">linkedin.com/in/ritik-sharma-295536331</p>
                  <a href="https://www.linkedin.com/in/ritik-sharma-295536331" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1.5 text-[#0A66C2] text-xs font-medium hover:underline">
                    <ExternalLink size={12} /> Open →
                  </a>
                </div>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="glass rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Github size={18} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm">GitHub</p>
                  <p className="text-text-secondary text-xs truncate">github.com/Ritik-Sharma28</p>
                  <a href="https://github.com/Ritik-Sharma28" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1.5 text-white text-xs font-medium hover:underline">
                    <ExternalLink size={12} /> Open →
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="space-y-3 pt-2">
              {quickInfo.map((info) => {
                const Icon = info.icon
                return (
                  <div key={info.text} className="flex items-center gap-3 text-sm">
                    <Icon size={16} className="text-accent-cyan flex-shrink-0" />
                    <span className="text-text-secondary">{info.text}</span>
                  </div>
                )
              })}
            </div>

            {/* Social Row */}
            <div className="flex items-center gap-3 pt-4">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={`${social.name} profile`}
                    className="w-11 h-11 rounded-full glass flex items-center justify-center text-text-secondary transition-all duration-300 hover:scale-110 hover:text-white"
                    style={{ '--glow': social.color }}
                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 0 20px ${social.color}40`}
                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = ''}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
