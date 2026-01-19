'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaReact, FaAws, FaDocker, FaGithub, FaFigma } from 'react-icons/fa'
import { SiTypescript, SiDotnet, SiNextdotjs, SiKubernetes, SiPostgresql, SiJira } from 'react-icons/si'
import { HiOutlineCode, HiOutlineCloud, HiOutlineCog, HiOutlineDatabase, HiOutlineTemplate, HiOutlineDocumentText } from 'react-icons/hi'
import { VscAzure } from 'react-icons/vsc'

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    icon: HiOutlineCode,
    skills: [
      { name: 'React / React Native', level: 'Expert' },
      { name: 'TypeScript', level: 'Expert' },
      { name: '.NET / .NET Core', level: 'Expert' },
      { name: 'Next.js', level: 'Advanced' },
      { name: 'Node.js', level: 'Advanced' },
      { name: 'Expo', level: 'Advanced' },
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    icon: HiOutlineCloud,
    skills: [
      { name: 'AWS (Lambda, API Gateway)', level: 'Expert' },
      { name: 'Microsoft Azure', level: 'Expert' },
      { name: 'OpenShift / Kubernetes', level: 'Advanced' },
      { name: 'Docker', level: 'Advanced' },
    ],
  },
  {
    title: 'DevOps & CI/CD',
    icon: HiOutlineCog,
    skills: [
      { name: 'GitHub Actions', level: 'Expert' },
      { name: 'ArgoCD / GitOps', level: 'Advanced' },
      { name: 'Jenkins', level: 'Advanced' },
      { name: 'CodeQL / OWASP', level: 'Advanced' },
    ],
  },
  {
    title: 'Data & APIs',
    icon: HiOutlineDatabase,
    skills: [
      { name: 'SQL Server', level: 'Expert' },
      { name: 'PostgreSQL', level: 'Advanced' },
      { name: 'REST API Design', level: 'Expert' },
      { name: 'Shopify / Salesforce APIs', level: 'Advanced' },
      { name: 'Microsoft Graph API', level: 'Advanced' },
    ],
  },
  {
    title: 'Content Management',
    icon: HiOutlineTemplate,
    skills: [
      { name: 'Hyland OnBase', level: 'Expert' },
      { name: 'SharePoint', level: 'Advanced' },
      { name: 'Power Platform', level: 'Advanced' },
      { name: 'Microsoft 365', level: 'Expert' },
    ],
  },
  {
    title: 'Design & Documentation',
    icon: HiOutlineDocumentText,
    skills: [
      { name: 'Figma', level: 'Advanced' },
      { name: 'Miro / Mural', level: 'Expert' },
      { name: 'Mermaid.js', level: 'Advanced' },
      { name: 'Jira / Confluence', level: 'Expert' },
    ],
  },
]

const featuredTech = [
  { icon: FaReact, name: 'React' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiDotnet, name: '.NET' },
  { icon: SiNextdotjs, name: 'Next.js' },
  { icon: FaAws, name: 'AWS' },
  { icon: VscAzure, name: 'Azure' },
  { icon: SiKubernetes, name: 'Kubernetes' },
  { icon: FaDocker, name: 'Docker' },
  { icon: FaGithub, name: 'GitHub' },
  { icon: SiPostgresql, name: 'PostgreSQL' },
  { icon: FaFigma, name: 'Figma' },
  { icon: SiJira, name: 'Jira' },
]

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="section relative overflow-hidden">
      {/* Background elements */}
      <div className="glow glow-highlight w-[400px] h-[400px] -top-48 right-0 opacity-10" />
      
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
            Technical Skills
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            Tools I Use to Build Solutions
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="max-w-2xl"
            style={{ color: 'var(--muted)' }}
          >
            A decade of hands-on experience across the full stack. I choose tools based on 
            what solves the problem, not what&apos;s trendy.
          </motion.p>
        </motion.div>

        {/* Featured tech icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 mb-16 py-8 border-y"
          style={{ borderColor: 'var(--border-muted)' }}
        >
          {featuredTech.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.05 }}
              className="flex flex-col items-center gap-2 group"
            >
              <tech.icon 
                size={36} 
                className="transition-colors"
                style={{ color: 'var(--muted-foreground)' }}
              />
              <span className="text-xs transition-colors" style={{ color: 'var(--muted-foreground)' }}>
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill categories grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="card p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--bg-elevated)' }}>
                  <category.icon className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                </div>
                <h3 className="font-display font-medium" style={{ color: 'var(--foreground-muted)' }}>
                  {category.title}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center justify-between">
                    <span className="text-sm" style={{ color: 'var(--muted)' }}>{skill.name}</span>
                    <span 
                      className="text-xs px-2 py-0.5 rounded"
                      style={{ 
                        backgroundColor: skill.level === 'Expert' 
                          ? 'rgba(59, 130, 246, 0.15)' 
                          : 'rgba(16, 185, 129, 0.15)',
                        color: skill.level === 'Expert' ? 'var(--accent)' : 'var(--highlight)'
                      }}
                    >
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
