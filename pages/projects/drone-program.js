import ProjectLayout from '../../components/ProjectLayout'

export default function DroneProgram() {
  return (
    <ProjectLayout
      title="NDOT UAS Drone Program Development"
      subtitle="Technical development and deployment of Nebraska DOT's UAS Drone program"
      role="Technical Lead & Lead Pilot"
      heroImage="/assets/dronePhoto.jpg"
      techStack={[
        'Next.js',
        '.NET Core API',
        'SQL Server',
        'Azure',
        'GIS',
        'Drone Technology',
      ]}
      summary="I led the technical development and deployment of Nebraska DOT's UAS Drone program, building a web application for flight planning and data processing. I also served as lead pilot, personally conducting aerial surveys."
      problem="Nebraska Department of Transportation needed to establish a drone program for aerial surveys and infrastructure inspection. Traditional surveying methods were expensive and time-consuming. The department had no internal drone expertise and needed a complete solution—from flight planning to data processing—that could operate within Azure cloud environments."
      solution={[
        "I led a 4-member team in both technical development and operational execution.",
        "I built the planning and data processing web application using Next.js for frontend, .NET Core API for backend services, and SQL Server for data persistence.",
        "I designed the system to operate within Azure for integration with existing DOT infrastructure.",
        "I served as lead pilot and data processing engineer, personally orchestrating aerial surveys.",
      ]}
      keyDecisions="This project required wearing multiple hats—developer and pilot. The advantage was that I understood both sides of the problem. I built features into the software that I knew pilots would actually need because I was using it myself. The disadvantage was context switching, which I managed by batching flight operations and development work rather than interleaving them."
      outcome={[
        'Saved the state of Nebraska over $650,000 compared to traditional surveying methods',
        'Established fully operational drone program with supporting technology infrastructure',
        'Enhanced data accuracy and storage through cloud data management tools',
        'Program continues delivering value for infrastructure inspection, emergency response, and planning',
      ]}
      metrics={[
        { value: '$650K+', label: 'Cost savings vs traditional surveys' },
      ]}
    />
  )
}
