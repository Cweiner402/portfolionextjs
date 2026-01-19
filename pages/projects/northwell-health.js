import ProjectLayout from '../../components/ProjectLayout'

export default function NorthwellHealth() {
  return (
    <ProjectLayout
      title="Northwell Health Patient Care Support Application"
      subtitle="Enhanced patient care support application reducing hospital readmissions"
      role="Lead Architect & Team Coordinator"
      heroImage="/assets/storBoard.png"
      techStack={[
        '.NET',
        'React',
        'SQL Server',
        'Azure',
        'REST APIs',
        'Entity Framework',
      ]}
      summary="I enhanced a patient care support application to improve post-admission care and reduce hospital readmissions. The real measure of success wasn't the technology—it was whether clinical staff would actually use it."
      problem="Northwell Health needed better tracking of post-admission care to reduce costly hospital readmissions. The existing system lacked automated care tracking features, staff found the technology difficult to use, and patient care management processes were inefficient. User satisfaction was 2/5 on quarterly surveys—people actively disliked using it."
      solution={[
        "I led architectural design and coordinated multiple development teams to deliver care tracking and automated solution features.",
        "I focused heavily on user experience improvements to increase staff adoption. I implemented automated workflows for care follow-ups and early warning indicators.",
        "Most importantly, I spent time with clinical staff to understand how they actually worked rather than how we assumed they worked.",
      ]}
      keyDecisions="I prioritized usability over feature completeness. A system nurses hate using is worse than a simpler system they'll actually use. That meant cutting some features that looked good on paper but added complexity to daily workflows."
      outcome={[
        'Measurable decrease in readmission rates',
        'User satisfaction improved from 2/5 to 4/5—100% improvement in UX scores',
        'Increased efficiency across care coordination workflows',
      ]}
      metrics={[
        { value: '100%', label: 'UX score improvement' },
        { value: '2x', label: 'User satisfaction' },
      ]}
    />
  )
}
