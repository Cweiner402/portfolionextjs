'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import ProjectItem from './ProjectItem'

const projects = [
  {
    title: 'Museum Mobile App',
    description: 'Cross-platform mobile app bridging Shopify and Salesforce for a nonprofit museum. POC-driven development with real user validation at each iteration.',
    backgroundImg: '/images/projects/mobilereactnativefindmycar.gif',
    tags: ['React Native', 'Expo', 'AWS Lambda', 'TypeScript', 'Shopify API', 'Salesforce API'],
    projectUrl: '/projects/museum-mobile',
    isMobileApp: true,
  },
  {
    title: 'Government of Canada Modernization',
    description: 'Cloud-native transformation of legacy .NET applications to OpenShift with GitOps CI/CD. Led Agile coaching and technical debt remediation.',
    backgroundImg: '/images/projects/CanadaPortalHomepage.png',
    tags: ['.NET 8', 'React 18', 'OpenShift', 'GitHub Actions', 'ArgoCD', 'PostgreSQL'],
    projectUrl: '/projects/canada-modernization',
    metric: '95%',
    metricLabel: 'faster deploys',
  },
  {
    title: 'Northwell Health Patient Care',
    description: 'Enhanced patient care support application reducing hospital readmissions through automated care tracking and improved UX.',
    backgroundImg: '/assets/storBoard.png',
    tags: ['.NET', 'React', 'SQL Server', 'Azure', 'REST APIs', 'Entity Framework'],
    projectUrl: '/projects/northwell-health',
    metric: '100%',
    metricLabel: 'UX improvement',
  },
  {
    title: 'Nebraska State Patrol Reporting',
    description: 'Transformed paper-based accident reporting to cloud-based Content Management System. Officers spend less time on paperwork.',
    backgroundImg: '/images/projects/onbaseunity.png',
    tags: ['Hyland OnBase', 'Unity Forms', 'Workflow', 'SQL Server', '.NET', 'Selenium'],
    projectUrl: '/projects/nebraska-patrol',
  },
  {
    title: 'NDOT Drone Program',
    description: 'Built web application for flight planning and data processing while serving as lead pilot. Saved $650K vs traditional surveying.',
    backgroundImg: '/assets/dronePhoto.jpg',
    tags: ['Next.js', '.NET Core', 'SQL Server', 'Azure', 'GIS', 'Drone/UAS'],
    projectUrl: '/projects/drone-program',
    metric: '$650K+',
    metricLabel: 'saved',
  },
  {
    title: 'Process Design & Storyboarding',
    description: 'Visual storyboarding approach that catches misunderstandings early. Map complete user journeys before writing code.',
    backgroundImg: '/images/projects/HelicopterFigmaFlow.png',
    tags: ['Figma', 'Miro', 'Lucidchart', 'Jira', 'Confluence'],
    projectUrl: '/projects/process-design',
  },
  {
    title: 'Living Documentation with Mermaid.js',
    description: 'Architecture diagrams embedded in code that stay current. Documentation lives with the code and updates in the same PRs.',
    backgroundImg: '/images/projects/helpandsupportmermaidexample.png',
    tags: ['Mermaid.js', 'Markdown', 'Git', 'Docusaurus', 'Confluence'],
    projectUrl: '/projects/mermaid-docs',
  },
  {
    title: 'OnBase Enterprise ECM',
    description: 'OnBase implementations with clear process maps that guide development AND serve as roadmaps for junior developers.',
    backgroundImg: '/images/projects/onbaseunity.png',
    tags: ['Hyland OnBase', 'Unity Forms', 'Workflow', 'Document Imaging', 'SQL Server'],
    projectUrl: '/projects/onbase-ecm',
  },
]

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="section relative overflow-hidden">
      {/* Blueprint grid background - pointer-events-none so they don't block clicks */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(var(--blueprint-grid) 1px, transparent 1px),
            linear-gradient(90deg, var(--blueprint-grid) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="glow glow-highlight w-[500px] h-[500px] -top-64 -left-64 pointer-events-none" />
      <div className="glow glow-accent w-[400px] h-[400px] -bottom-32 right-0 opacity-10 pointer-events-none" />
      
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
            Featured Work
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            Projects That Made an Impact
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="max-w-2xl"
            style={{ color: 'var(--muted)' }}
          >
            Each project represents real challenges, real tradeoffs, and real outcomes. 
            I focus on what matters: systems that work, teams that grow, and users who succeed.
          </motion.p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectItem
              key={project.title}
              {...project}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
