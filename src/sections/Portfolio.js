import React from 'react';
import CloudVirtualizationImage from '../images/CloudVirtualizationImage.jpg';
import NetworkingSecurityImage from '../images/NetworkingSecurityImage.jpg';
import DataManagementImage from '../images/DataManagementImage.jpg';
import MachineLearningImage from '../images/MachineLearningImage.jpg';
import DevOpsImage from '../images/DevOpsImage.jpg';
import FullStackImage from '../images/FullStackImage.jpg';
import ProfessionalEngagementsImage from '../images/ProfessionalEngagementsImage.jpg';
import ExpertiseInstallation from '../images/ExpertiseInstallation.jpg';



const Resume = () => {
  return (
    <div className="flex flex-wrap justify-around">
      {resumeItems.map((item, index) => (
        <div key={index} className=" md:max-w-md lg:max-w-lg ml-5 mr-5 rounded   mt-8 ">
          
            <div className="flex flex-col items-center mt-4 shadow-lg rounded">
              <img src={item.imagen} alt={item.titulo} className="h-64  object-cover rounded" />
              <h4 className="text-lg lg:text-xl xl:text-2xl font-bold">{item.titulo}</h4>
              <p className="mt-2 m-4 md:text-base lg:text-lg xl:text-xl   text-left">{item.descripcion}</p>
            </div>

         
        </div>
      ))}
    </div>
  );
};



  


  const resumeItems = [
    {
      imagen: CloudVirtualizationImage,
      titulo: "Cloud & Virtualization Initiatives",
      descripcion: (
        <>
          Developed and deployed scalable cloud solutions utilizing IaaS platforms like Openstack, Azure, and Huawei cloud services. Managed virtual environments with tools like VMware, Windows Server, Linux, VirtualBox, Hyper-V, Docker, IPAM, and VDI solutions, ensuring high availability and performance.
        </>
      ),
    },
    {
      imagen: NetworkingSecurityImage,
      titulo: "Networking & Security Architecture",
      descripcion: (
        <>
          Designed and administered complex ISP & Enterprose network infrastructures, incorporating Wire, Wireless, Datacenter, and VPN technologies across a variety of equipment including ASR, ISR, Catalyst, Nexus, and ASA. I have collaborated with leading industry brands such as Cisco, Fortinet, Juniper, Aruba and HP. Implemented advanced security protocols and measures, such as micro-segmentation, DNS, DMZ configurations, and IPS/IDS systems, ensuring compliance with ISO, GDPR, and PCI DSS standards.
        </>
      ),
    },
    {
      imagen: DataManagementImage,
      titulo: "Data Management & Analytics",
      descripcion: (
        <>
          Executed large-scale data analysis projects using SQL, MySQL, PostgreSQL, and Big Data technologies like Vertica, Presto/Trino, Spark, and Redshift. Conducted data visualization and analysis using R, RStudio, Python with libraries like Pandas and NumPy, and tools like Power BI and Jupyter Notebook.
        </>
      ),
    },
    {
      imagen: MachineLearningImage,
      titulo: "Machine Learning & AI Applications",
      descripcion: (
        <>
          Applied machine learning techniques, including linear regression and random forest trees, for predictive modeling and data analysis. Performed data preprocessing, feature engineering, and model training with scikit-learn to develop AI-driven insights for business optimization.
        </>
      ),
    },
    {
      imagen: DevOpsImage,
      titulo: "DevOps & Automated Monitoring",
      descripcion: (
        <>
         Played a key role in the development of an innovative monitoring software solution, namely the NI Platform | YUVO. Managed various aspects including SQL, API, and system logs, and leveraged SNMP, MIBS, syslogs for in-depth system monitoring. Utilized tools such as PRTG, SolarWinds, Checkmk, and Zabbix to ensure comprehensive coverage and effective monitoring.
        </>
      ),
    },
    {
      imagen: FullStackImage,
      titulo: "Full Stack Development & Integration",
      descripcion: (
        <>
          Developed robust web applications using HTML, CSS, JavaScript, ReactJS, and modern CSS frameworks like Bootstrap and Tailwind. Integrated APIs and leveraged tools like Visual Studio Code, Jira, Trello, Postman, Git, and Github for streamlined development and project management.
        </>
      ),
    },
    {
      imagen: ProfessionalEngagementsImage,
      titulo: "Professional Engagements and Achievements",
      descripcion: (
        <>
          As a Senior Network Cloud Engineer, led pivotal infrastructure and cloud projects, delivering high-quality cloud services to over 4,000 virtual desktops. As a Telecom IP Network SME, optimized network performance using AI and SQL, achieving a 94% accuracy rate in network model testing from 2G to 5G. Managed and reengineered Teleperformance's South Cone network, achieving over 99.9% uptime and annual savings of $110,000.
        </>
      ),
    },
    {
      imagen: ExpertiseInstallation,
      titulo: "Expertise in Equipment Installation and Certification",
      descripcion: (
        <>
          Skilled in the installation and certification of various network equipment, with a particular focus on optical fiber technologies. I have hands-on experience with DWDM and CWDM equipment, among others. My proficiency extends to achieving ATP certification, ensuring the highest standards of quality and performance in all installations. In addition to my technical skills, I have extensive experience conducting site surveys and detailed engineering with AutoCAD plans. These capabilities allow me to assess the feasibility of installations, plan effectively, and ensure that all network equipment, including optical fiber technologies, are installed and certified to the highest standards. This comprehensive approach, combined with my ability to manage and monitor systems effectively, contributes to the overall efficiency and reliability of the networks I work with.
        </>
      ),
    },


  ];


export default Resume;


