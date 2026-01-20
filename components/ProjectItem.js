'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiOutlineArrowRight, HiOutlinePlay } from 'react-icons/hi'

const ProjectItem = ({ 
  title, 
  description, 
  backgroundImg, 
  tags, 
  projectUrl, 
  metric,
  metricLabel,
  isMobileApp = false,
  index = 0 
}) => {
  const isGif = typeof backgroundImg === 'string' && backgroundImg.endsWith('.gif')

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1 }}
    >
      <Link href={projectUrl}>
        <div className="card group overflow-hidden cursor-pointer">
          {/* Image container */}
          <div 
            className="relative aspect-[16/10] overflow-hidden flex items-center justify-center" 
            style={{ 
              backgroundColor: isMobileApp ? 'var(--bg-base)' : 'var(--bg-elevated)',
              background: isMobileApp 
                ? 'radial-gradient(circle at center, color-mix(in srgb, var(--accent) 5%, var(--bg-base)) 0%, var(--bg-base) 70%)' 
                : undefined
            }}
          >
            {isMobileApp ? (
              // Mobile app phone frame preview
              <div className="relative h-[85%] aspect-[9/19] group-hover:scale-105 transition-transform duration-500">
                {/* Phone frame */}
                <div 
                  className="absolute inset-0 rounded-[24px] border-4 shadow-2xl overflow-hidden"
                  style={{ 
                    borderColor: '#2a2a2a',
                    backgroundColor: '#1a1a1a',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.1)'
                  }}
                >
                  {/* Notch */}
                  <div 
                    className="absolute top-1 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full z-10"
                    style={{ backgroundColor: '#1a1a1a' }}
                  />
                  {/* Screen content */}
                  <div className="absolute inset-1 rounded-[20px] overflow-hidden">
                    <img
                      src={backgroundImg}
                      alt={title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                {/* Phone reflection/shine */}
                <div 
                  className="absolute inset-0 rounded-[24px] pointer-events-none"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)'
                  }}
                />
              </div>
            ) : isGif ? (
              // Use native img for GIFs to preserve animation
              <img
                src={backgroundImg}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <Image
                src={backgroundImg}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}
            
            {/* Gradient overlay - skip for mobile app */}
            {!isMobileApp && (
              <div 
                className="absolute inset-0" 
                style={{ background: 'linear-gradient(to top, var(--bg-base), color-mix(in srgb, var(--bg-base) 50%, transparent), transparent)' }}
              />
            )}
            
            {/* Mobile app CTA badge */}
            {isMobileApp && (
              <div 
                className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium border backdrop-blur-sm"
                style={{ 
                  backgroundColor: 'color-mix(in srgb, var(--accent) 15%, var(--bg-base))', 
                  borderColor: 'var(--accent)',
                  color: 'var(--accent)'
                }}
              >
                <HiOutlinePlay size={14} />
                <span>View Live Demo</span>
              </div>
            )}
            
            {/* GIF indicator - only for non-mobile GIFs */}
            {isGif && !isMobileApp && (
              <div 
                className="absolute top-4 left-4 px-2 py-1 rounded-md flex items-center gap-1 text-xs font-medium"
                style={{ backgroundColor: 'color-mix(in srgb, var(--bg-base) 80%, transparent)', color: 'var(--accent)' }}
              >
                <HiOutlinePlay size={12} />
                Live Demo
              </div>
            )}
            
            {/* Metric badge */}
            {metric && (
              <div 
                className="absolute top-4 right-4 px-3 py-1.5 rounded-lg border backdrop-blur-sm"
                style={{ backgroundColor: 'color-mix(in srgb, var(--bg-base) 80%, transparent)', borderColor: 'var(--border-muted)' }}
              >
                <span className="font-display font-bold" style={{ color: 'var(--accent)' }}>{metric}</span>
                <span className="text-sm ml-1" style={{ color: 'var(--muted)' }}>{metricLabel}</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 
              className="text-xl font-display font-semibold mb-2 transition-colors group-hover:text-accent"
              style={{ color: 'var(--foreground)' }}
            >
              {title}
            </h3>
            <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--muted)' }}>
              {description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.slice(0, 4).map((tag) => (
                <span key={tag} className="tag text-xs">
                  {tag}
                </span>
              ))}
              {tags.length > 4 && (
                <span className="tag text-xs">+{tags.length - 4}</span>
              )}
            </div>

            {/* View link */}
            <div 
              className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ color: 'var(--accent)' }}
            >
              View Project
              <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProjectItem
