'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiOutlineArrowRight, HiOutlineBookOpen, HiOutlineCog, HiOutlineBeaker, HiOutlineDocumentText, HiOutlineLightBulb, HiOutlineSparkles, HiOutlineExternalLink } from 'react-icons/hi'

const articles = [
  {
    category: 'Architecture',
    icon: HiOutlineBookOpen,
    title: 'Museum Mobile Architecture Series',
    description: 'Four-part deep dive on building mobile apps that bridge enterprise systems. Covers React Native with Expo, AWS as a coordination layer, and designing for future flexibility.',
    topics: ['System Design', 'React Native', 'AWS', 'Integration'],
    featured: true,
    url: 'https://ctrlshiftconsulting.com/blog',
    external: true,
  },
  {
    category: 'DevOps',
    icon: HiOutlineCog,
    title: 'Hands-Off JIRA Automation',
    description: 'How to significantly reduce "JIRA paperwork" so teams focus on delivering value. CI/CD automation with Jenkins, Slack, GitHub, and Docker.',
    topics: ['CI/CD', 'Automation', 'JIRA', 'Jenkins'],
    featured: true,
    url: 'https://ctrlshiftconsulting.com/blog',
    external: true,
  },
  {
    category: 'Testing',
    icon: HiOutlineBeaker,
    title: 'Automated Testing for Power Platform',
    description: 'Practical guide to maintaining quality when anyone can modify production apps. Shift-left approach for catching issues early.',
    topics: ['Power Platform', 'Testing', 'Quality Assurance'],
    url: 'https://ctrlshiftconsulting.com/blog',
    external: true,
  },
  {
    category: 'Governance',
    icon: HiOutlineDocumentText,
    title: 'ECM Governance That Actually Works',
    description: 'Why governance programs fail and what works instead. Reduce friction to zero, make compliance the default, measure what matters.',
    topics: ['ECM', 'SharePoint', 'Compliance'],
    url: 'https://ctrlshiftconsulting.com/blog',
    external: true,
  },
  {
    category: 'Strategy',
    icon: HiOutlineLightBulb,
    title: 'Why Incremental Transformation Beats Big-Bang',
    description: 'The case for identifying highest-pain points first and delivering working solutions in weeks instead of years.',
    topics: ['Digital Transformation', 'Strategy', 'Change Management'],
    url: 'https://ctrlshiftconsulting.com/blog',
    external: true,
  },
  {
    category: 'Productivity',
    icon: HiOutlineSparkles,
    title: 'Building with Microsoft 365 Planner & Graph API',
    description: 'Expanding Planner using Power Automate, Microsoft Forms, and the Graph API for advanced task management workflows.',
    topics: ['Microsoft 365', 'Graph API', 'Power Automate'],
    url: 'https://ctrlshiftconsulting.com/blog',
    external: true,
  },
]

const Writing = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const featuredArticles = articles.filter(a => a.featured)
  const otherArticles = articles.filter(a => !a.featured)

  return (
    <section id="writing" className="section relative overflow-hidden">
      {/* Background - pointer-events-none so they don't block clicks */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(var(--accent) 1px, transparent 1px),
            linear-gradient(90deg, var(--accent) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="glow glow-accent w-[500px] h-[500px] -bottom-64 -right-64 opacity-10 pointer-events-none" />
      
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
            Writing & Insights
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            Sharing What I&apos;ve Learned
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="max-w-2xl"
            style={{ color: 'var(--muted)' }}
          >
            Technical deep dives, architecture decisions, and lessons from a decade of 
            building enterprise solutions. Published on{' '}
            <a 
              href="https://ctrlshiftconsulting.com/blog" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[var(--accent)] transition-colors"
            >
              CTRL+SHIFT Consulting
            </a>.
          </motion.p>
        </motion.div>

        {/* Featured articles */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featuredArticles.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 group cursor-pointer block h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: 'rgba(59, 130, 246, 0.15)' }}
                  >
                    <article.icon className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                  </div>
                  <span 
                    className="text-xs font-medium uppercase tracking-wider"
                    style={{ color: 'var(--accent)' }}
                  >
                    {article.category}
                  </span>
                  <div className="ml-auto flex items-center gap-2">
                    <span 
                      className="px-2 py-0.5 text-xs rounded"
                      style={{ backgroundColor: 'rgba(59, 130, 246, 0.15)', color: 'var(--accent)' }}
                    >
                      Featured
                    </span>
                    {article.external && (
                      <HiOutlineExternalLink className="w-4 h-4" style={{ color: 'var(--muted-foreground)' }} />
                    )}
                  </div>
                </div>

                <h3 
                  className="text-xl font-semibold mb-3 group-hover:text-[var(--accent)] transition-colors"
                  style={{ color: 'var(--foreground)' }}
                >
                  {article.title}
                </h3>

                <p className="text-sm mb-4 line-clamp-3" style={{ color: 'var(--muted)' }}>
                  {article.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.topics.map((topic) => (
                    <span key={topic} className="tag text-xs">
                      {topic}
                    </span>
                  ))}
                </div>

                <div 
                  className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--accent)' }}
                >
                  Read on CTRL+SHIFT
                  <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Other articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="card p-6"
        >
          <h3 className="font-semibold mb-4" style={{ color: 'var(--foreground-muted)' }}>More Articles</h3>
          <div className="divide-y" style={{ borderColor: 'var(--border-muted)' }}>
            {otherArticles.map((article) => (
              <a
                key={article.title}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 first:pt-0 last:pb-0 flex items-start gap-4 group block"
              >
                <div className="p-2 rounded-lg shrink-0" style={{ backgroundColor: 'var(--bg-elevated)' }}>
                  <article.icon className="w-4 h-4 group-hover:text-[var(--accent)] transition-colors" style={{ color: 'var(--muted-foreground)' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 
                    className="font-medium group-hover:text-[var(--accent)] transition-colors mb-1"
                    style={{ color: 'var(--foreground-muted)' }}
                  >
                    {article.title}
                  </h4>
                  <p className="text-sm line-clamp-1" style={{ color: 'var(--muted-foreground)' }}>
                    {article.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0 mt-1">
                  {article.external && (
                    <HiOutlineExternalLink className="w-4 h-4" style={{ color: 'var(--muted-foreground)' }} />
                  )}
                  <HiOutlineArrowRight 
                    className="transition-all group-hover:translate-x-1 group-hover:text-[var(--accent)]" 
                    style={{ color: 'var(--muted-foreground)' }}
                  />
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* CTA to full blog */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-8 text-center"
        >
          <a
            href="https://ctrlshiftconsulting.com/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary inline-flex"
          >
            View All Articles on CTRL+SHIFT
            <HiOutlineExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Writing
