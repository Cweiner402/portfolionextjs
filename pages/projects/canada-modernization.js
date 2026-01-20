import ProjectLayout from '../../components/ProjectLayout'

export default function CanadaModernization() {
  return (
    <ProjectLayout
      title="Government of Canada Digital Platform Modernization"
      subtitle="Cloud-native transformation of legacy .NET applications with GitOps CI/CD"
      role="Senior Technical Lead & Modernization Architect"
      heroImage="/images/projects/CanadaPortalHomepage.png"
      liveUrl="https://complaint.vsbc.gov.bc.ca/"
      techStack={[
        '.NET 8',
        'React 18.2',
        'Vite',
        'OpenShift',
        'Kubernetes',
        'GitHub Actions',
        'ArgoCD',
        'PostgreSQL',
        'CodeQL',
        'Sysdig',
        'HashiCorp Vault',
        'BC Services Card SSO',
        'OIDC/OAuth 2.0',
      ]}
      summary="I led the cloud-native transformation for a Government of Canada Ministry, migrating legacy .NET 4.6.1 applications to OpenShift with GitOps CI/CD. The technical migration was only half the challenge—I also had to coach a team that had never worked in Agile before. A key feature was implementing BC Services Card SSO integration for secure citizen authentication."
      problem="The ministry ran 7 critical applications on legacy .NET 4.6.1 and React 16. Releases happened quarterly. Windows Server licensing costs were high. Technical debt had accumulated for years. The project team had no Agile experience, BAs struggled with stakeholder engagement, and the infrastructure couldn't scale to meet citizen service demands. Citizens needed secure, authenticated access to submit and track complaints."
      solution={[
        "Phase 1 (2024): I spent the first phase transitioning the team to Agile methodology. That meant coaching BAs, POs, and Scrum Masters on SCRUM practices and mentoring newly promoted senior developers on technical debt remediation. I walked the team through all 7 ministry applications and existing infrastructure—understanding what we had before deciding what to change.",
        "Phase 2 (2025): I drove the migration to OpenShift, facilitated process improvement workshops with business groups, and built the GitOps CI/CD pipeline using GitHub Actions, ArgoCD, CodeQL, OWASP scanning, and Sysdig security checks. I introduced feature flags for feature-driven development. We integrated BC Services Card SSO for secure citizen authentication and implemented full light/dark mode theming for accessibility.",
      ]}
      keyDecisions="The biggest tradeoff was time spent on team coaching vs. pure technical work. I could have migrated the applications faster if I just did the work myself, but that would have left the team unable to maintain what I built. The investment in training paid off—developers who struggled with the legacy codebase became confident contributors to the modern stack."
      outcome={[
        '95% faster deployments—from quarterly to weekly feature releases',
        '60% reduction in Windows Server licensing costs through containerization',
        '90% delivery predictability through feature-driven development',
        '75% reduction in developer onboarding time through documentation and GitOps guides',
        'Delivered MVP parity while capturing quick wins from previously descoped features',
      ]}
      metrics={[
        { value: '95%', label: 'Faster deployments' },
        { value: '60%', label: 'License cost reduction' },
        { value: '90%', label: 'Delivery predictability' },
        { value: '75%', label: 'Faster onboarding' },
      ]}
      gallery={[
        { image: '/images/projects/CanadaPortalHomepage.png', caption: 'Citizen portal homepage with BC Services Card SSO login - Light Mode' },
        { image: '/images/canada/CanadaPortalHomepageDarkMode.png', caption: 'Citizen portal homepage with BC Services Card SSO login - Dark Mode' },
        { image: '/images/canada/CanadaSubmitcomplaintLightMode.png', caption: 'Complaint submission form with unauthenticated user session - Light Mode', isTall: true },
        { image: '/images/canada/CanadaSubmitComplaintDarkMode.png', caption: 'Complaint submission form with unauthenticated user session - Dark Mode', isTall: true },
      ]}
    />
  )
}
