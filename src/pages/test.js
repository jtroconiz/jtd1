import React from 'react';
import img1 from '../images/DataAnalisis.jpeg'
import img2 from '../images/Agi.webp'
import img3 from '../images/yuvo.png'
import img4 from '../images/ooredo.jpeg'
function Projects() {
  const projects = [
    {
        id: 1,
        title: <strong>Model Optimization</strong>,
        description: (
            <div className="max-w-3xl mx-auto">
              
              <p>
                <strong>My Role:</strong> Within the B-Yond team, I made significant contributions to the analysis and enhancement of our machine learning and artificial intelligence models. This ensured the accuracy and reliability of predictions and classifications made by our systems.
              </p>
              <p>
                <strong>Key Activities:</strong>
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>
                  <strong>Database Analysis:</strong> I delved deep into our datasets to understand trends, anomalies, and patterns. This research was crucial not only for data preparation and cleaning but also for addressing specific application-related issues.
                </li>
                <li>
                  <strong>Model Evaluation:</strong> I used key metrics like accuracy and other relevant measures to evaluate the effectiveness and accuracy of our existing models.
                </li>
                <li>
                  <strong>Model Optimization:</strong> I proposed significant improvements for the models, especially for classifiers. Through adjusting thresholds and introducing new relationships, I was able to noticeably improve model performance and outcomes.
                </li>
              </ul>
              <p>
                <strong>Tools Used:</strong>
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>
                  <strong>SQL:</strong> Essential for querying and manipulating databases, allowing for effective data exploration.
                </li>
                <li>
                  <strong>Jupyter Notebooks:</strong> I used Jupyter as my primary development environment, leveraging Python and its powerful visualization libraries to analyze data, test, and optimize models.
                </li>
              </ul>
            </div>
          ),
        image: img1,
        link: 'https://www.b-yond.com'
      },
    {
      id: 2,
      title: (
        <div dangerouslySetInnerHTML={{ __html: "<strong>AGILITY:</strong> Pioneering AI-driven Network Optimization" }} />
      ),
      description: (
        <div className="max-w-3xl mx-auto"> 
          <p>
            <strong>Overview:</strong> In the dynamic realm of telecom, I had the privilege of working with AGILITY, B-Yond's game-changing software that elegantly streamlines 4G & 5G network troubleshooting and analysis. This tool, fueled by the prowess of artificial intelligence and machine learning, is a trusted ally of industry stalwarts including AT&T, Verizon, T-Mobile, Ooredoo, and OneWeb. My hands-on experience with AGILITY enabled me to delve deep into its capabilities, redefining the paradigms of network testing and optimization.
          </p>
          <p>
            <strong>Features & Impact:</strong>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Reliable 5G Deployments:</strong> Streamlined 5G rollouts bolstered by automated packet analysis.
            </li>
            <li>
              <strong>Intelligent Analysis:</strong> Offers root cause identification, dramatically cutting test costs by 50% on average.
            </li>
            <li>
              <strong>Cutting-edge AI Repository:</strong> Revolutionizes network testing, slashing test cycles from hours to just minutes.
            </li>
            <li>
              <strong>Enhanced Network Quality:</strong> Boasts a tenfold surge in test capacity, paired with auto topology detection and pinpoint critical failure identification.
            </li>
            <li>
              <strong>Visual Insights:</strong> Enables end-to-end call flow visualization, zeroing in on protocol and network element level errors for efficient troubleshooting.
            </li>
          </ul>
          <p>
            The undeniable success of AGILITY with top-tier North American Operators is a testament to its unparalleled potential. Its integrated approach to Continuous Validation and Testing empowers operators to maintain a competitive edge, swiftly launching new features and enhancing process efficiency.
          </p>
        </div>
      ),
      image: img2,
      link: 'https://www.b-yond.com/agility-product'
    },
    // ... más proyectos
  ];

  const moreProjects = [
    {
      id: 1,
      title: <strong>NE Insights Network Module</strong>,
      description: (
        <div className="max-w-3xl mx-auto">
          <p>
            <strong>My Role:</strong> I played a pivotal role in designing and implementing the network module for NE Insights, showcasing my expertise in leading complex tech projects.

          </p>
          <p>
            <strong>About NE Insights:</strong>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Vendor Agnostic Solution: </strong> Simplifies access to all transport domain network data, offering a consolidated view across vendors and technologies like Microwave, IP, and Fiber.
            </li>
            <li>
              <strong>Root Cause Analysis: </strong> Employs machine learning algorithms to pinpoint problematic network elements, impacting customer QoS and revenue.
            </li>
            <li>
              <strong>Advanced Correlation: </strong> Utilizes the networks PM, CM, and FM to help optimization and quality teams uncover underlying network performance issues and their business implications.
            </li>
            <li>
              <strong>Alerting Module: </strong> Proactively notifies engineers of potential performance degradations before they escalate to service-impacting levels.

            </li>
            <li>
              <strong>KPIs: </strong> Standardizes vendor-agnostic KPIs and formula definitions based on ITU-T standards, ensuring consistent metrics across the organization.

            </li>
            <li>
              <strong>Inventory Analytics:  </strong> Provides configuration studies, inventory details, and parameter auditing reports against planning.

            </li>
          </ul>
        
        </div>
      ),
      image: img3,
      link: 'https://yuvo.net/ni-platform'
    },
    {
      id: 2,
      title: (
        <strong>
          Public Recognition for Our Implemented Software: <br />
         
        </strong>
      ),
      description: 'I am proud to share a public acknowledgment from Ooredoo, one of the largest telcos in the world, highlighting the impact of the software we implemented',
      image: img4,
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7085528421623033857/'
    },
    // ... más proyectos
  ];

  const thirdProjects = [
    {
      id: 1,
      title: <strong>Network Monitoring Solution</strong>,
      description: (
        <div className="max-w-3xl mx-auto">
          <p>
            <strong>My Role:</strong> As part of the network operations team, I played a key role in designing and implementing a comprehensive network monitoring solution. This involved setting up monitoring tools, creating dashboards, and ensuring real-time visibility into network performance.
          </p>
          <p>
            <strong>Key Features:</strong>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Real-time Monitoring:</strong> Constantly monitors network traffic, devices, and services to identify potential issues promptly.
            </li>
            <li>
              <strong>Custom Dashboards:</strong> Created customized dashboards to visualize critical network metrics and KPIs.
            </li>
            <li>
              <strong>Alerting Mechanism:</strong> Implemented an alerting system to notify the team of network anomalies or outages.
            </li>
            <li>
              <strong>Historical Analysis:</strong> Stored historical data for trend analysis and capacity planning.
            </li>
          </ul>
        </div>
      ),
      image: img3,
      link: 'https://example.com/network-monitoring'
    },
    {
      id: 2,
      title: (
        <strong>
          Industry Webinar: <br />
          Next-Gen Telecommunication Technologies
        </strong>
      ),
      description: 'I presented at a high-profile industry webinar, discussing the latest trends and advancements in next-generation telecommunication technologies.',
      image: img4,
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:1234567890/'
    },
    const projecttp 



  ];

  return (
    <div className="max-w-7xl mx-auto p-4">
        <div className="flex items-center justify-center">
            <h2 className="text-2xl font-bold mb-8 mt-24">Data & Business Analyst at B-Yond</h2>
        </div>
        <div className="flex items-center justify-center">    
            <div className="grid lg:grid-cols-2 gap-4  ">
              {projects.map((project) => (
                <div key={project.id} className="cmp-container p-4 border flex flex-col items-center ">
                  <div className="cmp-teaser__image "  style={{ width: '70%' }}>
                    <img src={project.image} alt={project.title} style={{ width: '100%', height: 'auto' }} />
                  </div>
                  <h3 className="text-lg font-semibold mt-2">{project.title}</h3>
                  {project.description}
                  <p className="mt-4">
                  For more information, click here  <a href={project.link} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">{project.link}</a>
                  </p>
                </div>
              ))}
            </div>
        </div>

        <div className="flex items-center justify-center my-12">
            <div className="h-8 w-full bg-custom-blue"></div>
        </div>
        
        <div className="flex items-center justify-center">
            <h2 className="text-2xl font-bold mb-8 ">IP SME & Business Analyst at YUVO</h2>
        </div>
        <div className="flex items-center justify-center">    
            <div className="grid lg:grid-cols-2 gap-4 ">
                {moreProjects.map((project) => (
                <div key={project.id} className="cmp-container p-4 border flex flex-col items-center ">
                    <div className="cmp-teaser__image "  style={{ width: '70%' }}>
                        <img src={project.image} alt={project.title} style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <h3 className="text-lg font-semibold mt-2">{project.title}</h3>
                    {project.description}
                    <p className="mt-4">
                    For more information, click here  <a href={project.link} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">{project.link}</a>
                    </p>
                </div>
            ))}
            </div>
        </div>
       
        <div className="flex items-center justify-center my-12">
            <div className="h-8 w-full bg-custom-blue"></div>
        </div>
        <div className="flex items-center justify-center">
            <h2 className="text-2xl font-bold mb-8 ">Network Manager at Teleperformance</h2>
        </div>

        <div className="flex items-center justify-center">
            <div className="grid lg:grid-cols-2 gap-4 ">
            {thirdProjects.map((project) => (
                <div key={project.id} className="cmp-container p-4 border flex flex-col items-center ">
                <div className="cmp-teaser__image " style={{ width: '70%' }}>
                    <img src={project.image} alt={project.title} style={{ width: '100%', height: 'auto' }} />
                </div>
                <h3 className="text-lg font-semibold mt-2">{project.title}</h3>
                {project.description}
                <p className="mt-4">
                    For more information, click here  <a href={project.link} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">{project.link}</a>
                </p>
                </div>
            ))}
            </div>
        </div>                
    
    </div>
  );
}

export default Projects;
