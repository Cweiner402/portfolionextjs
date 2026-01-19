import ProjectLayout from '../../components/ProjectLayout'

export default function NebraskaPatrol() {
  return (
    <ProjectLayout
      title="Nebraska State Patrol Accident Reporting Transformation"
      subtitle="Transition from paper-based reporting to cloud-based Content Management System"
      role="Team Lead & Senior Developer"
      heroImage="/images/projects/onbaseunity.png"
      techStack={[
        'Hyland OnBase',
        'Office 365',
        'Unity Forms',
        'Workflow',
        'SQL Server',
        '.NET',
        'Selenium',
      ]}
      summary="I led the transition from paper-based accident reporting to a cloud-based Content Management System for Nebraska State Patrol. Officers were spending too much time on paperwork instead of patrol duties."
      problem="Nebraska State Patrol relied on paper-based accident reporting that was slow, error-prone, and created significant data management challenges. Officers spent excessive time on paperwork. Historical records were difficult to retrieve. Data accuracy suffered from manual entry errors. The system needed to integrate with existing Office 365 infrastructure."
      solution={[
        "I led a team in transitioning from paper to a comprehensive digital solution using OnBase as the content management foundation.",
        "I designed Unity Forms for structured data capture at the point of entry—getting data right the first time rather than fixing it later.",
        "I built automated workflows for routing, approvals, and compliance. I created a Selenium-based automated testing suite to ensure quality.",
        "I developed the integration layer connecting OnBase with Office 365 Suite.",
      ]}
      keyDecisions="The tradeoff was between customization and maintainability. OnBase can do almost anything if you're willing to build it, but every customization is something you have to maintain forever. I pushed back on some feature requests that would have created long-term technical debt, instead finding simpler solutions that achieved the same goals."
      outcome={[
        'Significant enhancement in operational efficiency and accuracy',
        'Officers spend less time on administrative tasks',
        'Improved data management and accessibility',
        'Created developer guides that enabled knowledge transfer and reduced dependency on senior staff',
      ]}
      gallery={[
        { image: '/images/projects/onbaseunity.png', caption: 'OnBase Unity Form for accident report data capture' },
        { image: '/assets/storBoard.png', caption: 'Workflow storyboard for accident reporting process' },
      ]}
    />
  )
}
