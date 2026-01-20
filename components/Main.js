'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiOutlineArrowRight, HiOutlineChevronDown } from 'react-icons/hi'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Main = () => {
  const scrollToAbout = (e) => {
    e.preventDefault()
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Blueprint grid background - pointer-events-none so it doesn't block clicks */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(var(--blueprint-grid) 1px, transparent 1px),
            linear-gradient(90deg, var(--blueprint-grid) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          opacity: 0.03
        }}
      />
      
      {/* Animated gradient blobs */}
      <div className="glow glow-accent animate-pulse-glow w-[600px] h-[600px] -top-48 -left-48" />
      <div className="glow glow-highlight animate-pulse-glow w-[500px] h-[500px] -bottom-24 -right-24" style={{ animationDelay: '2s' }} />
      <div className="glow glow-accent w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5" />

      <div className="wrapper relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Blueprint annotation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <span className="section-label">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--success)' }} />
              Available for projects
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            Building Software 
            <br />
            <span className="text-gradient">From the Ground Up</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
            style={{ color: 'var(--muted)' }}
          >
            I&apos;m <strong style={{ color: 'var(--foreground-muted)' }}>Chris Weiner</strong>, a software architect who thinks like a general contractor. 
            Solid foundations, iterative building, and solutions that last.
          </motion.p>

          {/* Tech focus pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {['Cloud Architecture', 'Mobile Solutions', 'Agile Transformation', 'Process Design'].map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="tag"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link href="/#projects" className="btn btn-primary group">
              View My Work
              <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/#contact" className="btn btn-secondary">
              Get In Touch
            </Link>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href="https://www.linkedin.com/in/chris-weiner-996037114/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-lg transition-all group"
              style={{ 
                backgroundColor: 'var(--bg-surface)', 
                border: '1px solid var(--border-muted)'
              }}
              aria-label="LinkedIn"
            >
              <FaLinkedinIn 
                size={20} 
                className="transition-colors"
                style={{ color: 'var(--muted)' }}
              />
            </a>
            <a
              href="https://github.com/cweiner402"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-lg transition-all group"
              style={{ 
                backgroundColor: 'var(--bg-surface)', 
                border: '1px solid var(--border-muted)'
              }}
              aria-label="GitHub"
            >
              <FaGithub 
                size={20}
                className="transition-colors"
                style={{ color: 'var(--muted)' }}
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        style={{ color: 'var(--muted-foreground)' }}
        aria-label="Scroll to about section"
      >
        <span className="text-xs font-mono uppercase tracking-wider">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <HiOutlineChevronDown size={20} />
        </motion.div>
      </motion.button>

      {/* Blueprint corner annotation */}
      <div className="absolute bottom-24 right-8 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3 }}
          className="flex items-center gap-2 text-xs font-mono"
          style={{ color: 'var(--muted-foreground)' }}
        >
          <span>v2.0</span>
          <div className="w-8 h-px" style={{ backgroundColor: 'var(--border)' }} />
        </motion.div>
      </div>
    </section>
  )
}

export default Main
