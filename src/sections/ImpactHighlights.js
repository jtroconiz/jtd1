import React from 'react';
import { FaNetworkWired, FaRobot, FaShieldAlt } from 'react-icons/fa';

const ImpactHighlights = () => {
  const impactPoints = [
    {
      text: "Automated and operated ",
      highlight: "1,500+ devices and 10,000+ interfaces",
      rest: " across large, multi-site production environments."
    },
    {
      text: "Improved service availability from ",
      highlight: "~90% to 99.9%+ SLA",
      rest: ", redesigning network architectures and operational processes in large-scale enterprise environments (Teleperformance)."
    },
    {
      text: "Redesigned regional enterprise and telecom infrastructures across ",
      highlight: "LATAM, USA, Canada, Europe, Middle East",
      rest: ", significantly improving reliability, resilience, and security posture."
    },
    {
      text: "Delivered ",
      highlight: "$100K+ in annual OPEX savings",
      rest: " through network redesign, SD-WAN adoption, cloud connectivity optimization, and operational efficiency initiatives."
    },
    {
      text: "Recognition: Awarded ",
      highlight: "\"Protagonistas DIRECTV\"",
      rest: " for outstanding network infrastructure optimization across LATAM & the Caribbean."
    }
  ];

  const highlights = [
    {
      icon: <FaNetworkWired className="text-4xl" />,
      title: "Network Engineering",
      description: "Design and operation of enterprise and service provider networks with a strong focus on scalability, resilience, and production reliability.",
      items: [
        "L2/L3 network design and troubleshooting across multi-region environments",
        "WAN, VPN, routing, switching, SD-WAN, and hybrid connectivity architectures",
        "Integration of on-prem, cloud, and edge environments",
        "Operation of networks supporting strict SLA and availability requirements"
      ]
    },
    {
      icon: <FaRobot className="text-4xl" />,
      title: "Automation & NetOps",
      description: "Automation-first approach to network operations, using structured data and source-of-truth principles to scale reliably and reduce operational risk.",
      items: [
        "Network Source of Truth design and implementation (devices, interfaces, IP addresses, VLANs, VRFs, serial numbers, full inventory lifecycle)",
        "Python-based automation for network inventory, provisioning, and operational workflows",
        "Automated firewall rule management and policy lifecycle across multi-vendor environments",
        "NetBox as a central system for network data, relationships, and operational consistency",
        "API integrations with network platforms, cloud services, edge devices, and IoT environments",
        "Version-controlled workflows using Git and CI/CD fundamentals applied to NetOps"
      ]
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Security",
      description: "Security embedded into network architecture and operations without compromising availability or performance.",
      items: [
        "Firewall and perimeter security architectures for enterprise and service provider environments",
        "Automated and standardized firewall policies, segmentation, and access control",
        "VPN/IPsec/SSL connectivity, Zero Trust principles, and NAC integrations",
        "PCI-aligned designs, infrastructure hardening, and SIEM/SOC integration"
      ]
    }
  ];

  return (
    <section className="py-8 bg-gradient-to-b from-[#0A192F] to-[#172A45] text-white">
      <div className="container mx-auto px-4">
        {/* Impact Points */}
        <div className="mb-6">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#64FFDA]">Highlights</h2>
          <ul className="space-y-3 list-none">
            {impactPoints.map((point, index) => (
              <li key={index} className="text-gray-300 text-base lg:text-lg leading-relaxed flex items-start">
                <span className="text-[#64FFDA] mr-3 mt-1">•</span>
                <span>
                  {point.text}
                  <span className="text-[#64FFDA] font-bold">{point.highlight}</span>
                  {point.rest}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Core Expertise Section */}
        <div className="mb-2">
          <h3 className="text-3xl lg:text-4xl font-bold mb-8 text-center text-[#64FFDA]">CORE EXPERTISE</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-[#172A45]/50 backdrop-blur-sm rounded-lg p-6 border border-[#172A45]/50 hover:border-[#64FFDA] transition-all"
              >
                <div className="text-[#64FFDA] mb-4">{highlight.icon}</div>
                <h4 className="text-xl font-bold mb-3">{highlight.title}</h4>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{highlight.description}</p>
                <ul className="space-y-2">
                  {highlight.items.map((item, idx) => (
                    <li key={idx} className="text-gray-300 text-sm lg:text-base flex items-start">
                      <span className="text-[#64FFDA] mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactHighlights;

