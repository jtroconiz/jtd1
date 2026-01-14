import React from 'react';
import automationImg from '../images/Automation.png';
import designImg from '../images/Design.png';
import mlAiImg from '../images/Ml AI.png';

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Network Automation – Multi-vendor Device & Policy Management",
      image: automationImg,
      description: "Designed and implemented an automation-driven network inventory and operational platform using Python and NetBox as a source of truth.",
      details: "The solution centralized devices, interfaces, IPs, VLANs, VRFs, serial numbers, and firewall policies, enabling consistent operations across 1,500+ devices in distributed, multi-site environments.",
      outcome: "Outcome: Reduced configuration drift, improved visibility, and standardized network and security operations at scale."
    },
    {
      title: "Regional Infrastructure Redesign (Enterprise & Telecom – LATAM)",
      image: designImg,
      description: "Led the redesign and security hardening of regional infrastructures across enterprise and telecom environments in LATAM.",
      details: "The project incorporated SD-WAN, cloud connectivity, and improved monitoring, resulting in a significant increase in service reliability and operational stability.",
      recognition: "Recognition: Awarded \"Protagonistas DIRECTV\" for outstanding network infrastructure optimization across LATAM & the Caribbean."
    },
    {
      title: "AI-assisted Network Monitoring & Predictive Models",
      image: mlAiImg,
      description: "Built data-driven monitoring and correlation models to analyze network traffic and log data, enabling proactive detection of anomalies and faster incident response.",
      details: "This work was applied in collaboration with platforms such as B-Yond and Yuvo – Network Insight, supporting advanced observability and predictive network operations.",
      outcome: "Outcome: Improved troubleshooting accuracy, earlier anomaly detection, and measurable MTTR reduction in production environments."
    }
  ];

  return (
    <section className="py-12 bg-[#172A45] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center text-[#64FFDA]">FEATURED PROJECTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-[#0A192F]/50 backdrop-blur-sm rounded-lg overflow-hidden border border-[#172A45]/50 hover:border-[#64FFDA] transition-all"
            >
              {project.image && (
                <div className="w-full mb-4 flex items-center justify-center bg-[#0A192F]/30 rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-auto max-h-64 object-contain"
                  />
                </div>
              )}
              <div className="p-6 pt-0">
                <h3 className="text-xl font-bold mb-3 text-[#64FFDA]">{project.title}</h3>
                <p className="text-gray-300 text-sm lg:text-base mb-3 leading-relaxed">{project.description}</p>
                <p className="text-gray-300 text-sm lg:text-base mb-3 leading-relaxed">{project.details}</p>
                {project.outcome && (
                  <p className="text-gray-200 text-sm lg:text-base font-semibold italic">{project.outcome}</p>
                )}
                {project.recognition && (
                  <p className="text-gray-200 text-sm lg:text-base font-semibold italic mt-3">{project.recognition}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

