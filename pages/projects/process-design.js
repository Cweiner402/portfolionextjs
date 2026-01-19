import ProjectLayout from '../../components/ProjectLayout'

export default function ProcessDesign() {
  return (
    <ProjectLayout
      title="Process Design & Collaborative Storyboarding"
      subtitle="Visual storyboarding approach that catches misunderstandings early"
      role="Process Architect & Facilitator"
      heroImage="/images/projects/HelicopterFigmaFlow.png"
      techStack={[
        'Figma',
        'Miro',
        'Mural',
        'Lucidchart',
        'Jira',
        'Confluence',
      ]}
      summary="I use Figma, Miro, and collaborative design tools to storyboard complex workflows and process maps before writing code. This approach catches misunderstandings early and keeps stakeholders engaged throughout development."
      problem="Complex projects often fail not because of technical limitations but because stakeholders can't visualize how systems will work before they're built. Requirements get lost in translation between business and technical teams. Timelines slip because scope isn't clearly decomposed into deliverables."
      solution={[
        "I start every engagement with visual storyboarding. I map the complete user journey and system interactions before touching code.",
        "I break storyboards into discrete deliverables with dependencies and realistic timelines.",
        "Stakeholders can see, comment on, and validate the plan visually—reducing surprises and building alignment early.",
      ]}
      keyDecisions="Projects launch with clear scope, validated requirements, and realistic timelines. Stakeholders stay engaged because they understand what's being built. Development teams work from living visual specifications rather than static documents. This reduces rework, accelerates decision-making, and builds trust between business and technical teams."
      outcome={[
        'Clear scope and validated requirements before development begins',
        'Stakeholder alignment through visual communication',
        'Reduced rework through early validation',
        'Accelerated decision-making with living visual specifications',
      ]}
      gallery={[
        { image: '/images/projects/HelicopterFigmaFlow.png', caption: 'High-level system flow designed in Figma' },
        { image: '/assets/storBoard.png', caption: 'Detailed storyboard breaking workflows into deliverables' },
      ]}
    />
  )
}
