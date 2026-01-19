import ProjectLayout from '../../components/ProjectLayout'

export default function MuseumMobile() {
  return (
    <ProjectLayout
      title="Museum Mobile App"
      subtitle="Cross-platform mobile app bridging Shopify and Salesforce for a nonprofit museum"
      role="Solution Architect & Lead Developer"
      heroImage="/images/projects/mobilereactnativefindmycar.gif"
      isMobileApp={true}
      techStack={[
        'React Native',
        'Expo',
        'AWS Lambda',
        'API Gateway',
        'Shopify API',
        'Salesforce API',
        'TypeScript',
      ]}
      summary="I built a cross-platform mobile app for a nonprofit museum that connects their existing Shopify and Salesforce systems. The real challenge wasn't the code—it was figuring out how to deliver something useful fast while involving stakeholders who needed to see progress to trust the process."
      problem="The museum had a fragmented visitor experience. Shopify handled content and ticketing. Salesforce managed memberships and donors. Neither system talked to the other, and visitors felt that disconnect. The team was small, had no dedicated QA, and stakeholders needed hands-on involvement to ensure the app actually served their needs."
      solution={[
        "I ran an iterative POC-driven process. Instead of disappearing for months and emerging with a finished product, I delivered working prototypes that real users could test at each stage.",
        "The first iteration focused on a simple 'Find My Car' game feature—something tangible that people could actually use. The second iteration expanded to the full visitor experience with content, ticketing, and membership integration.",
        "This approach worked especially well for a small team without dedicated testing resources. Building with users means quality gets baked in rather than bolted on after the fact.",
      ]}
      keyDecisions="End users caught UX issues early that I wouldn't have found on my own. Their feedback built confidence in the final product before we ever launched. The architecture I chose—a cloud integration layer between the app and the existing systems—means the museum can eventually replace Shopify or Salesforce without touching the app. That flexibility wasn't accidental; I designed it that way because I've seen too many projects where tight coupling created long-term pain."
      outcome={[
        'Delivered unified iOS and Android experience from a single codebase',
        'Users validated each iteration, catching issues early',
        'Museum gained modern mobile presence without disrupting existing workflows',
        'Architecture positioned for future scale without vendor lock-in',
      ]}
      gallery={[
        { image: '/images/projects/mobilereactnativefindmycar.gif', caption: 'First iteration: Find My Car Game POC', isMobile: true },
        { image: '/images/projects/sdamnextiteration.gif', caption: 'Second iteration: Full visitor experience', isMobile: true },
      ]}
    />
  )
}
