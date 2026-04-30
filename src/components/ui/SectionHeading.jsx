import ScrollReveal from './ScrollReveal'

export default function SectionHeading({ badge, title, highlight, subtitle }) {
  return (
    <ScrollReveal>
      <div className="text-center mb-10">
        <span
          className="inline-block px-4 py-1.5 rounded-full text-sm font-medium
                     text-accent-cyan border border-accent-cyan/30
                     bg-accent-cyan/5 mb-4 font-mono tracking-wider"
        >
          {badge}
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
          {title}{' '}
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            {highlight}
          </span>
        </h2>
        {subtitle && (
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </ScrollReveal>
  )
}
