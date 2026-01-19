'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiOutlineArrowRight } from 'react-icons/hi'
import Link from 'next/link'
import dancePhoto from '../public/assets/dancePhoto.jpg'

const metrics = [
  { value: '95%', label: 'Faster Deployments', description: 'Quarterly → Weekly releases' },
  { value: '$650K+', label: 'Cost Savings', description: 'NDOT Drone Program' },
  { value: '100%', label: 'UX Improvement', description: 'Northwell satisfaction scores' },
  { value: '60%', label: 'License Reduction', description: 'Cloud migration savings' },
]

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Blueprint grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(var(--accent) 1px, transparent 1px),
            linear-gradient(90deg, var(--accent) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Glow effects */}
      <div className="glow glow-accent w-[400px] h-[400px] top-1/2 -right-48 opacity-10" />
      
      <div className="wrapper relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="grid lg:grid-cols-12 gap-12 items-start"
        >
          {/* Left column - photo and story */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="section-label"
            >
              About Me
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              From Construction Sites to Cloud Architecture
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-4"
              style={{ color: 'var(--muted)' }}
            >
              <p>
                Before I wrote my first line of production code, I was running a construction 
                company. That might seem like an unusual path to software architecture, but 
                it taught me something crucial: <strong style={{ color: 'var(--foreground-muted)' }}>you can&apos;t 
                skip the foundation</strong>.
              </p>
              
              <p>
                In construction, rushing the foundation means cracks appear later. In software, 
                skipping process means technical debt compounds. The parallel is exact. When I 
                transitioned into tech, I brought that builder&apos;s mindset with me—measure twice, 
                cut once, and always build for the long term.
              </p>

              <p>
                Today I lead cloud-native transformations, architect mobile solutions, and 
                coach teams through Agile adoption. But my approach is still that of a 
                general contractor: understand the blueprint, involve the stakeholders, 
                build iteratively, and never sacrifice structural integrity for speed.
              </p>
              
              <p>
                Outside of work, you might catch me on the dance floor—a different kind of 
                building, but the same principle applies: master the fundamentals before 
                you try the fancy stuff.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                href="/#process"
                className="inline-flex items-center gap-2 font-medium hover:gap-3 transition-all group"
                style={{ color: 'var(--accent)' }}
              >
                See my building process
                <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 font-medium hover:gap-3 transition-all group"
                style={{ color: 'var(--muted)' }}
              >
                View recent projects
                <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right column - photo and metrics */}
          <div className="lg:col-span-5">
            {/* Photo with blueprint frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="relative mb-8"
            >
              {/* Blueprint corner marks */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 z-10" style={{ borderColor: 'var(--accent)' }} />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-r-2 border-t-2 z-10" style={{ borderColor: 'var(--accent)' }} />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-l-2 border-b-2 z-10" style={{ borderColor: 'var(--accent)' }} />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 z-10" style={{ borderColor: 'var(--accent)' }} />
              
              <div 
                className="rounded-xl overflow-hidden"
                style={{ border: '1px solid var(--border-muted)' }}
              >
                <Image
                  src={dancePhoto}
                  alt="Chris Weiner"
                  className="w-full h-auto"
                  placeholder="blur"
                  priority
                />
              </div>
              
              {/* Caption */}
              <p 
                className="mt-3 text-sm text-center"
                style={{ color: 'var(--muted-foreground)' }}
              >
                Yes, that&apos;s me on the dance floor—fundamentals first, fancy footwork later.
              </p>
            </motion.div>

            {/* Compact metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-3"
            >
              {metrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="card p-4"
                >
                  <p className="metric text-2xl">{metric.value}</p>
                  <p className="font-medium text-sm mt-1" style={{ color: 'var(--foreground-muted)' }}>{metric.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

