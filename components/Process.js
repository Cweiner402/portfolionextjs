'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { HiOutlineTemplate, HiOutlineUserGroup, HiOutlineLightBulb, HiOutlineRefresh, HiOutlineChartBar, HiOutlineCode, HiOutlinePlay, HiOutlinePause, HiOutlineChevronUp, HiOutlineChevronDown } from 'react-icons/hi'

const layers = [
  {
    id: 'foundation',
    title: 'Foundation',
    subtitle: 'Solid Process First',
    icon: HiOutlineTemplate,
    color: '#3b82f6',
    description: 'Before writing code, I establish a strong foundation. Yes, it can slow things down initially—but like any good construction project, skipping the foundation creates costly problems later.',
    principles: ['Discovery & Requirements', 'Stakeholder Alignment', 'Architecture Planning', 'Risk Assessment'],
    quote: '"Measure twice, cut once" applies to software just as much as construction.',
  },
  {
    id: 'framework',
    title: 'Framework',
    subtitle: 'People in the Process',
    icon: HiOutlineUserGroup,
    color: '#8b5cf6',
    description: 'Technology serves people, not the other way around. I bring stakeholders into the process hands-on—they\'re not observers, they\'re collaborators shaping what we build.',
    principles: ['Agile Methodology', 'Scrum Practices', 'Lean Six Sigma', 'Continuous Feedback'],
    quote: 'The best solutions come from teams that feel ownership over the process.',
  },
  {
    id: 'structure',
    title: 'Structure',
    subtitle: 'Build to Learn',
    icon: HiOutlineLightBulb,
    color: '#10b981',
    description: 'Working POCs beat slide decks. I build tangible prototypes that users can touch, test, and critique—not concepts to be talked about, but products to be used.',
    principles: ['POC-Driven Development', 'User Testing', 'Iterative Refinement', 'Early Validation'],
    quote: 'Users can\'t give feedback on ideas—they need something to interact with.',
  },
  {
    id: 'iteration',
    title: 'Iteration',
    subtitle: 'Learn from Failures',
    icon: HiOutlineRefresh,
    color: '#f59e0b',
    description: 'A foundation requires iterations of what NOT to do. Mistakes aren\'t setbacks—they\'re lessons that create well-rounded developers and battle-tested solutions.',
    principles: ['Coach Learning', 'Retrospectives', 'Knowledge Transfer', 'Continuous Improvement'],
    quote: 'The most valuable lessons come from things that didn\'t work the first time.',
  },
  {
    id: 'delivery',
    title: 'Delivery',
    subtitle: 'Continuous Value',
    icon: HiOutlineChartBar,
    color: '#ef4444',
    description: 'Value isn\'t delivered at the end of a quarter—it flows continuously. Regular releases mean users get improvements fast, and problems get caught early.',
    principles: ['CI/CD Pipelines', 'Feature Flags', 'Incremental Releases', 'Metrics-Driven'],
    quote: 'Ship weekly, not quarterly. Small batches reduce risk.',
  },
  {
    id: 'completion',
    title: 'Completion',
    subtitle: 'Built to Last',
    icon: HiOutlineCode,
    color: '#06b6d4',
    description: 'The final product isn\'t just functional—it\'s maintainable, documented, and the team knows how to evolve it. I leave organizations stronger than I found them.',
    principles: ['Documentation', 'Team Enablement', 'Future-Proofing', 'Knowledge Handoff'],
    quote: 'Success is when the team can build the next version without me.',
  },
]

const Process = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px' }) // Trigger as soon as visible
  const [activeLayer, setActiveLayer] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  // Start animation quickly once in view
  useEffect(() => {
    if (isInView && !hasStarted) {
      // Small delay then start cycling
      const startTimer = setTimeout(() => {
        setHasStarted(true)
      }, 500) // Start after 0.5 seconds of being visible
      return () => clearTimeout(startTimer)
    }
  }, [isInView, hasStarted])

  // Auto-advance through layers - 4 seconds between cards
  useEffect(() => {
    if (!isPlaying || isHovered || !hasStarted) return

    const timer = setInterval(() => {
      setActiveLayer((prev) => (prev + 1) % layers.length)
    }, 4000) // Back to 4 seconds between cards

    return () => clearInterval(timer)
  }, [isPlaying, isHovered, hasStarted])

  const goNext = () => {
    setActiveLayer((prev) => (prev + 1) % layers.length)
    setIsPlaying(false)
  }

  const goPrev = () => {
    setActiveLayer((prev) => (prev - 1 + layers.length) % layers.length)
    setIsPlaying(false)
  }

  return (
    <section id="process" className="section relative overflow-hidden">
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(var(--accent) 1px, transparent 1px),
            linear-gradient(90deg, var(--accent) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Glow effects */}
      <div className="glow glow-accent w-[500px] h-[500px] -top-64 -right-64" />
      <div className="glow glow-highlight w-[400px] h-[400px] -bottom-32 -left-32" />
      
      <div className="wrapper relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="mb-12"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-label"
          >
            My Process
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            Building from the Ground Up
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="max-w-2xl text-lg"
            style={{ color: 'var(--muted)' }}
          >
            Years of construction taught me that solid foundations create lasting value. 
            Navigate through the layers to see how I build solutions.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Interactive Layer Stack */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Card stack area */}
            <div className="relative overflow-hidden" style={{ height: '380px' }}>
              {/* Up arrow - positioned at top of stack area */}
              <button
                onClick={goPrev}
                className="absolute top-0 left-1/2 -translate-x-1/2 z-20 p-2 rounded-full transition-all hover:scale-110"
                style={{ 
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  color: 'var(--muted)'
                }}
                aria-label="Previous layer"
              >
                <HiOutlineChevronUp size={20} />
              </button>

              {/* Cards */}
              <div className="absolute inset-0 flex items-center justify-center">
                {layers.map((layer, index) => {
                  const offset = index - activeLayer
                  const isActive = offset === 0
                  
                  let yPosition = offset * 80
                  let scale = 1 - Math.abs(offset) * 0.04
                  let opacity = isActive ? 1 : Math.max(0.35, 1 - Math.abs(offset) * 0.25)
                  let zIndex = 10 - Math.abs(offset)
                  
                  if (Math.abs(offset) > 2) {
                    opacity = 0
                    scale = 0.85
                  }
                  
                  return (
                    <motion.div
                      key={layer.id}
                      onClick={() => {
                        setActiveLayer(index)
                        setIsPlaying(false)
                      }}
                      className="absolute cursor-pointer"
                      style={{ 
                        width: '100%',
                        maxWidth: '380px',
                        zIndex,
                      }}
                      initial={false}
                      animate={{
                        y: yPosition,
                        scale,
                        opacity,
                      }}
                      transition={{ 
                        type: 'spring', 
                        stiffness: 400, 
                        damping: 35,
                      }}
                    >
                      <div 
                        className="p-5 rounded-xl border-2 transition-all duration-300"
                        style={{ 
                          backgroundColor: 'var(--bg-surface)',
                          borderColor: isActive ? layer.color : 'var(--border-muted)',
                          boxShadow: isActive 
                            ? `0 8px 30px -8px ${layer.color}50` 
                            : '0 4px 15px -5px rgba(0,0,0,0.15)',
                        }}
                      >
                        <div className="flex items-center gap-4">
                          <div 
                            className="p-3 rounded-lg shrink-0 transition-colors duration-300"
                            style={{ backgroundColor: isActive ? `${layer.color}20` : 'var(--bg-elevated)' }}
                          >
                            <layer.icon 
                              className="w-6 h-6 transition-colors duration-300" 
                              style={{ color: isActive ? layer.color : 'var(--muted)' }} 
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              <span 
                                className="text-xs font-mono uppercase tracking-wider transition-colors duration-300"
                                style={{ color: isActive ? layer.color : 'var(--muted-foreground)' }}
                              >
                                {String(index + 1).padStart(2, '0')}
                              </span>
                              <div 
                                className="h-px flex-1 transition-colors duration-300"
                                style={{ backgroundColor: isActive ? layer.color : 'var(--border-muted)' }}
                              />
                            </div>
                            <h3 
                              className="text-lg font-semibold truncate transition-colors duration-300" 
                              style={{ color: isActive ? 'var(--foreground)' : 'var(--muted)' }}
                            >
                              {layer.title}
                            </h3>
                            <p 
                              className="text-sm truncate transition-colors duration-300" 
                              style={{ color: isActive ? 'var(--muted)' : 'var(--muted-foreground)' }}
                            >
                              {layer.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Down arrow - positioned at bottom of stack area */}
              <button
                onClick={goNext}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 p-2 rounded-full transition-all hover:scale-110"
                style={{ 
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  color: 'var(--muted)'
                }}
                aria-label="Next layer"
              >
                <HiOutlineChevronDown size={20} />
              </button>
            </div>
            
            {/* Controls bar - separate from stack */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-lg transition-all"
                style={{ 
                  backgroundColor: isPlaying ? 'var(--accent)' : 'var(--bg-elevated)',
                  color: isPlaying ? 'white' : 'var(--muted)'
                }}
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <HiOutlinePause size={16} /> : <HiOutlinePlay size={16} />}
              </button>

              <div className="flex gap-1.5">
                {layers.map((layer, index) => (
                  <button
                    key={layer.id}
                    onClick={() => {
                      setActiveLayer(index)
                      setIsPlaying(false)
                    }}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{ 
                      backgroundColor: index === activeLayer ? layer.color : 'var(--border)',
                      width: index === activeLayer ? '20px' : '8px',
                    }}
                    aria-label={`Go to ${layer.title}`}
                  />
                ))}
              </div>

              <span className="text-xs font-mono tabular-nums" style={{ color: 'var(--muted-foreground)' }}>
                {String(activeLayer + 1).padStart(2, '0')}/{String(layers.length).padStart(2, '0')}
              </span>
            </div>
          </motion.div>

          {/* Layer Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            <AnimatedLayerContent layer={layers[activeLayer]} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Animated content panel
const AnimatedLayerContent = ({ layer }) => {
  return (
    <motion.div
      key={layer.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="card p-6 lg:p-8"
      style={{ borderColor: `${layer.color}30` }}
    >
      <div className="flex items-center gap-4 mb-6">
        <div 
          className="p-4 rounded-xl"
          style={{ backgroundColor: `${layer.color}15` }}
        >
          <layer.icon className="w-8 h-8" style={{ color: layer.color }} />
        </div>
        <div>
          <h3 className="text-xl lg:text-2xl font-semibold" style={{ color: 'var(--foreground)' }}>
            {layer.title}
          </h3>
          <p className="text-sm font-medium" style={{ color: layer.color }}>{layer.subtitle}</p>
        </div>
      </div>
      
      <p className="mb-6 leading-relaxed" style={{ color: 'var(--muted)' }}>
        {layer.description}
      </p>
      
      <div className="mb-6">
        <p className="text-xs font-mono uppercase tracking-wider mb-3" style={{ color: 'var(--muted-foreground)' }}>
          Key Principles
        </p>
        <div className="grid grid-cols-2 gap-2">
          {layer.principles.map((principle) => (
            <div 
              key={principle}
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg"
              style={{ backgroundColor: 'var(--bg-elevated)' }}
            >
              <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: layer.color }} />
              <span className="text-sm" style={{ color: 'var(--foreground-muted)' }}>{principle}</span>
            </div>
          ))}
        </div>
      </div>
      
      <blockquote 
        className="pl-4 italic"
        style={{ borderLeft: `3px solid ${layer.color}`, color: 'var(--muted)' }}
      >
        {layer.quote}
      </blockquote>
    </motion.div>
  )
}

export default Process
