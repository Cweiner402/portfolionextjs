import ProjectLayout from '../../components/ProjectLayout'

export default function OnbaseECM() {
  return (
    <ProjectLayout
      title="OnBase Enterprise Content Management"
      subtitle="OnBase implementations with clear process maps for document management and workflow automation"
      role="OnBase Solution Architect"
      heroImage="/images/projects/onbaseunity.png"
      techStack={[
        'Hyland OnBase',
        'Unity Forms',
        'Workflow',
        'Document Imaging',
        'Integration Server',
        'SQL Server',
      ]}
      summary="I implement and optimize Hyland OnBase for document management, workflow automation, and forms processing. A key part of my approach is creating process maps that serve as roadmaps for junior developers."
      problem="Organizations running OnBase often underutilize its capabilities—treating it as a simple document repository rather than a workflow automation platform. Junior developers struggle to understand moderate-complexity workflows. Knowledge lives in the heads of senior staff, creating risk and bottlenecks."
      solution={[
        "I design OnBase solutions with clear process maps that serve dual purposes: they guide the implementation AND provide a roadmap for junior developers to understand document lifecycles.",
        "Unity Forms capture structured data at the point of entry.",
        "Workflows enforce business rules and route documents through approval chains.",
        "Every implementation includes visual documentation showing how documents flow through the system.",
      ]}
      keyDecisions="Organizations unlock the full potential of their OnBase investment. Document processing times decrease through automation. Junior developers can contribute to moderate-complexity lifecycles because the roadmap is clear. Knowledge transfer happens through documentation, not tribal knowledge. The system scales with the organization because it's understood, not just used."
      outcome={[
        'Organizations unlock full OnBase potential beyond simple document storage',
        'Document processing times decrease through automation',
        'Junior developers contribute to complex lifecycles with clear roadmaps',
        'Knowledge transfer through documentation reduces senior staff bottlenecks',
      ]}
      gallery={[
        { image: '/images/projects/onbaseunity.png', caption: 'OnBase Unity Form for structured data capture' },
        { image: '/assets/storBoard.png', caption: 'Process map serving as developer roadmap' },
      ]}
    />
  )
}
