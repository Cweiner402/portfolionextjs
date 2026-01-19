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
          <div className="relative aspect-[16/10] overflow-hidden" style={{ backgroundColor: 'var(--bg-elevated)' }}>
            {isGif ? (
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
            {/* Gradient overlay */}
            <div 
              className="absolute inset-0" 
              style={{ background: 'linear-gradient(to top, var(--bg-base), color-mix(in srgb, var(--bg-base) 50%, transparent), transparent)' }}
            />
            
            {/* GIF indicator */}
            {isGif && (
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
