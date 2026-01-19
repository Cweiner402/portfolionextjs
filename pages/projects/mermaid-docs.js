import ProjectLayout from '../../components/ProjectLayout'

export default function MermaidDocs() {
  return (
    <ProjectLayout
      title="Living Documentation with Mermaid.js"
      subtitle="Architecture diagrams embedded in code that stay current"
      role="Documentation Strategist & Implementation Lead"
      heroImage="/images/projects/helpandsupportmermaidexample.png"
      techStack={[
        'Mermaid.js',
        'Markdown',
        'Git',
        'GitHub/GitLab',
        'Confluence',
        'Docusaurus',
      ]}
      summary="I embed architecture diagrams directly in code using Mermaid.js—creating documentation that stays current because it lives with the code and gets updated in the same PRs."
      problem="Traditional documentation lives in wikis or Word docs—disconnected from code, quickly outdated, and rarely consulted. Developers need to understand system architecture but don't have time to hunt through external tools. QA teams need flow diagrams to understand what they're testing. Users need simplified views for training."
      solution={[
        "I embed Mermaid diagrams directly in markdown files within the codebase.",
        "Architecture diagrams, sequence flows, and state machines live alongside the code they describe.",
        "When code changes, diagrams get updated in the same PR.",
        "The same diagrams that help developers understand the system become the foundation for QA test plans and user documentation.",
      ]}
      keyDecisions="Developers onboard faster because architecture is discoverable in the repo. QA teams use the same diagrams to build test scenarios. User documentation starts from accurate technical diagrams. Documentation debt decreases because updates happen naturally during development."
      outcome={[
        'Faster developer onboarding through discoverable architecture',
        'QA teams build test scenarios from the same diagrams',
        'Documentation stays current without extra effort',
        'Single source of truth for technical architecture',
      ]}
      gallery={[
        { image: '/images/projects/helpandsupportmermaidexample.png', caption: 'Mermaid.js diagram embedded in codebase documentation' },
      ]}
    />
  )
}
