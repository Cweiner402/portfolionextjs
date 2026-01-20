'use client'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { HiOutlineArrowLeft, HiOutlineExternalLink, HiOutlineZoomIn } from 'react-icons/hi'
import PhoneFrame from './PhoneFrame'
import { useLightbox, Lightbox } from './ImageLightbox'

const ProjectLayout = ({
  title,
  subtitle,
  role,
  heroImage,
  techStack,
  summary,
  problem,
  solution,
  keyDecisions,
  outcome,
  metrics,
  gallery,
  liveUrl,
  isMobileApp = false,
}) => {
  const isGif = (src) => typeof src === 'string' && src.endsWith('.gif')
  const heroIsGif = isGif(heroImage)
  const lightbox = useLightbox()

  // Collect all images for lightbox navigation
  const allImages = [
    ...(heroImage ? [{ image: heroImage, caption: title }] : []),
    ...(gallery || []),
  ]

  return (
    <>
      <Head>
        <title>{title} | Chris Weiner</title>
        <meta name="description" content={summary} />
      </Head>

      <article className="min-h-screen pt-24 pb-16">
        {/* Header section */}
        <section className="wrapper mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 mb-6 transition-colors"
              style={{ color: 'var(--muted)' }}
            >
              <HiOutlineArrowLeft />
              Back to Projects
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4" style={{ color: 'var(--foreground)' }}>
              {title}
            </h1>
            
            <p className="text-xl mb-6" style={{ color: 'var(--muted)' }}>{subtitle}</p>
            
            <div className="flex flex-wrap items-center gap-4">
              <span 
                className="px-3 py-1.5 rounded-lg text-sm font-medium"
                style={{ backgroundColor: 'color-mix(in srgb, var(--accent) 15%, transparent)', color: 'var(--accent)' }}
              >
                {role}
              </span>
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm transition-colors"
                  style={{ color: 'var(--muted)' }}
                >
                  <HiOutlineExternalLink />
                  View Live
                </a>
              )}
            </div>
          </motion.div>
        </section>

        {/* Hero media section */}
        {heroImage && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="wrapper mb-16 lg:mb-20"
          >
            {isMobileApp ? (
              // Mobile app - show in phone frame
              <div className="py-8" style={{ backgroundColor: 'var(--bg-elevated)', borderRadius: '1rem' }}>
                <PhoneFrame>
                  {heroIsGif ? (
                    <img
                      src={heroImage}
                      alt={title}
                      className="w-full h-auto"
                      style={{ display: 'block' }}
                    />
                  ) : (
                    <Image
                      src={heroImage}
                      alt={title}
                      width={320}
                      height={693}
                      className="w-full h-auto"
                      priority
                    />
                  )}
                </PhoneFrame>
              </div>
            ) : (
              // Regular project - browser frame
              <div 
                className="rounded-2xl overflow-hidden border"
                style={{ 
                  backgroundColor: 'var(--bg-elevated)', 
                  borderColor: 'var(--border-muted)'
                }}
              >
                {/* Browser-like header */}
                <div 
                  className="flex items-center gap-2 px-4 py-3 border-b"
                  style={{ borderColor: 'var(--border-muted)' }}
                >
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ff5f57' }} />
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#febc2e' }} />
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#28c840' }} />
                  </div>
                  <div 
                    className="flex-1 mx-4 px-3 py-1 rounded-md text-xs text-center truncate"
                    style={{ backgroundColor: 'var(--bg-base)', color: 'var(--muted-foreground)' }}
                  >
                    {title}
                  </div>
                </div>
                
                {/* Media container - clickable for lightbox */}
                <div 
                  style={{ backgroundColor: 'var(--bg-base)' }}
                  className="relative group cursor-zoom-in"
                  onClick={() => lightbox.openLightbox({ image: heroImage, caption: title }, allImages, 0)}
                >
                  {heroIsGif ? (
                    <img
                      src={heroImage}
                      alt={title}
                      className="w-full h-auto max-h-[600px] object-contain mx-auto"
                      style={{ display: 'block' }}
                    />
                  ) : (
                    <div className="relative aspect-video">
                      <Image
                        src={heroImage}
                        alt={title}
                        fill
                        className="object-contain"
                        priority
                        sizes="(max-width: 1280px) 100vw, 1280px"
                      />
                    </div>
                  )}
                  {/* Zoom indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
                    <div className="p-3 rounded-full bg-black/50 text-white">
                      <HiOutlineZoomIn size={28} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.section>
        )}

        <div className="wrapper">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main content */}
            <div className="lg:col-span-3 space-y-12">
              {/* Summary */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-lg leading-relaxed" style={{ color: 'var(--foreground-muted)' }}>{summary}</p>
              </motion.section>

              {/* The Problem */}
              {problem && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h2 className="text-2xl font-display font-semibold mb-4" style={{ color: 'var(--foreground)' }}>
                    The Problem
                  </h2>
                  <p className="leading-relaxed" style={{ color: 'var(--muted)' }}>{problem}</p>
                </motion.section>
              )}

              {/* The Solution */}
              {solution && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h2 className="text-2xl font-display font-semibold mb-4" style={{ color: 'var(--foreground)' }}>
                    What I Did
                  </h2>
                  <div className="leading-relaxed space-y-4" style={{ color: 'var(--muted)' }}>
                    {Array.isArray(solution) ? (
                      solution.map((para, i) => <p key={i}>{para}</p>)
                    ) : (
                      <p>{solution}</p>
                    )}
                  </div>
                </motion.section>
              )}

              {/* Key Decisions */}
              {keyDecisions && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h2 className="text-2xl font-display font-semibold mb-4" style={{ color: 'var(--foreground)' }}>
                    Key Decisions & Tradeoffs
                  </h2>
                  <p className="leading-relaxed" style={{ color: 'var(--muted)' }}>{keyDecisions}</p>
                </motion.section>
              )}

              {/* Outcome */}
              {outcome && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <h2 className="text-2xl font-display font-semibold mb-4" style={{ color: 'var(--foreground)' }}>
                    Outcome
                  </h2>
                  <ul className="space-y-3">
                    {outcome.map((item, i) => (
                      <li key={i} className="flex items-start gap-3" style={{ color: 'var(--muted)' }}>
                        <span 
                          className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" 
                          style={{ backgroundColor: 'var(--accent)' }} 
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.section>
              )}

              {/* Gallery */}
              {gallery && gallery.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <h2 className="text-2xl font-display font-semibold mb-6" style={{ color: 'var(--foreground)' }}>
                    Gallery
                  </h2>
                  <div className="grid gap-6">
                    {gallery.map((item, i) => {
                      // Gallery index in allImages is offset by 1 if heroImage exists
                      const lightboxIndex = heroImage ? i + 1 : i
                      
                      return (
                        <div 
                          key={i} 
                          className="rounded-xl overflow-hidden border"
                          style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-muted)' }}
                        >
                          {item.isMobile ? (
                            // Mobile screenshot in phone frame
                            <div 
                              className="py-8 relative group cursor-zoom-in" 
                              style={{ backgroundColor: 'var(--bg-elevated)' }}
                              onClick={() => lightbox.openLightbox(item, allImages, lightboxIndex)}
                            >
                              <PhoneFrame>
                                {isGif(item.image) ? (
                                  <img
                                    src={item.image}
                                    alt={item.caption || title}
                                    className="w-full h-auto"
                                    style={{ display: 'block' }}
                                  />
                                ) : (
                                  <Image
                                    src={item.image}
                                    alt={item.caption || title}
                                    width={320}
                                    height={693}
                                    className="w-full h-auto"
                                  />
                                )}
                              </PhoneFrame>
                              {/* Zoom indicator */}
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="p-3 rounded-full bg-black/50 text-white">
                                  <HiOutlineZoomIn size={28} />
                                </div>
                              </div>
                            </div>
                          ) : (
                            // Regular image - clickable for lightbox
                            <div 
                              style={{ backgroundColor: 'var(--bg-base)' }}
                              className="relative group cursor-zoom-in"
                              onClick={() => lightbox.openLightbox(item, allImages, lightboxIndex)}
                            >
                              {isGif(item.image) ? (
                                <img
                                  src={item.image}
                                  alt={item.caption || title}
                                  className="w-full h-auto max-h-[500px] object-contain mx-auto"
                                  style={{ display: 'block' }}
                                />
                              ) : (
                                // Tall images use aspect-[3/4] to show more content, regular images use aspect-video
                                <div className={`relative ${item.isTall ? 'aspect-[3/4]' : 'aspect-video'}`}>
                                  <Image
                                    src={item.image}
                                    alt={item.caption || title}
                                    fill
                                    className={item.isTall ? 'object-contain object-top' : 'object-contain'}
                                    sizes="(max-width: 1024px) 100vw, 75vw"
                                  />
                                </div>
                              )}
                              {/* Zoom indicator */}
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
                                <div className="p-3 rounded-full bg-black/50 text-white">
                                  <HiOutlineZoomIn size={28} />
                                </div>
                              </div>
                            </div>
                          )}
                          {item.caption && (
                            <p 
                              className="p-4 text-sm border-t"
                              style={{ color: 'var(--muted)', borderColor: 'var(--border-muted)' }}
                            >
                              {item.caption}
                            </p>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </motion.section>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="sticky top-28 space-y-6"
              >
                {/* Tech stack */}
                <div className="card p-6">
                  <h3 className="font-display font-medium mb-4" style={{ color: 'var(--foreground-muted)' }}>
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <span key={tech} className="tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                {metrics && metrics.length > 0 && (
                  <div className="card p-6">
                    <h3 className="font-display font-medium mb-4" style={{ color: 'var(--foreground-muted)' }}>
                      Key Metrics
                    </h3>
                    <div className="space-y-4">
                      {metrics.map((metric, i) => (
                        <div key={i}>
                          <p className="metric text-2xl">{metric.value}</p>
                          <p className="text-sm" style={{ color: 'var(--muted)' }}>{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div 
                  className="card p-6"
                  style={{ background: 'linear-gradient(135deg, var(--bg-elevated) 0%, var(--bg-surface) 100%)' }}
                >
                  <h3 className="font-display font-medium mb-2" style={{ color: 'var(--foreground-muted)' }}>
                    Interested in working together?
                  </h3>
                  <p className="text-sm mb-4" style={{ color: 'var(--muted)' }}>
                    Let&apos;s discuss your project.
                  </p>
                  <Link href="/#contact" className="btn-primary w-full text-center block">
                    Get In Touch
                  </Link>
                </div>
              </motion.div>
            </aside>
          </div>
        </div>
      </article>

      {/* Lightbox for image zoom */}
      <Lightbox
        isOpen={lightbox.isOpen}
        currentImage={lightbox.currentImage}
        images={lightbox.images}
        currentIndex={lightbox.currentIndex}
        onClose={lightbox.closeLightbox}
        onNext={lightbox.goNext}
        onPrev={lightbox.goPrev}
      />
    </>
  )
}

export default ProjectLayout
