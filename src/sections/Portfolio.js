import React from "react";
import excitedHackerImage from '../images/excited-hacker-after-breaking-government-server-using-supercomputer.jpg';
import manager from '../images/workplace-results-professional-report-accounting-during.jpg'
import dataCenter from '../images/cloud-storage-banner-background.jpg'
import AI from '../images/AI.webp'

const Resume = () => {
  const renderResumeItem = (image, title, description, isReverse) => {
    return (
      <div className={`w-3/4 mx-auto flex flex-col ${isReverse ? "lg:flex-row-reverse" : "lg:flex-row"} ld:flex-col items-center justify-center m-12 rounded-lg  `}>
        <div className='w-full md:w-1/1 flex items-center justify-center'>
          <div className='flex flex-col items-center justify-center ml-2'>
            <h3 className="text-md sm:text-md md:text-xl xl:text-5xl font-bold text-center">{title}</h3>
            <p className="pt-4 text-md sm:text-md md:text-md lg:text-md xl:text-2xl text-center">{description}</p>
          </div>
        </div>
        <div className="container mx-auto md:w-1/1 sm:w-5/6 mt-3">
        <img className="aspect-video  rounded-lg" src={image} alt="AI" />
        </div>

      </div>
    );
  };

  return (
    <div>
      {renderResumeItem(
        AI,
        "Data & Business Analyst - B-Yond",
        <>
          <strong className="block text-center mb-2"> Optimized network performance:</strong>
          <ul className="list-disc list-inside text-left pr-4 xl:ml-24 xl:mr-24">
            <li>Used AI techniques, Python, and SQL for testing 2G to 5G, CorePS, and IMS models.</li>
            <li>Enhanced the model's accuracy to 94%.</li>
            <li>Improved network troubleshooting speed by setting alarm thresholds and correlating alarms for early anomaly and outage detection.</li>
          </ul>
        </>,
        false
      )}
      {renderResumeItem(
        excitedHackerImage,
        "IP SME & Business Analyst - YUVO",
        <>
          <strong className="block text-center mb-2"> Optimized network performance:</strong>
          <ul className="list-disc list-inside text-left pr-4 xl:ml-24 xl:mr-24">
            <li>Enhanced customer satisfaction and efficiency by effectively deploying Yuvo's Network Insights WAN platform. This system predicted issues and facilitated improvements across areas like hardware inventory, automatic network diagrams, vendor management, and SLA tracking, leading to proactive decision-making.</li>
            <li>Provided optimized software solutions for service providers like Ooredoo and T-Mobile, notably with Yuvo's DIAG and DAR systems for seamless data ingestion and superior reporting.</li>
            <li>Automated processes by leveraging APIs and CLI in devices like Juniper MX, Junos Space, Netbox, Netbrain, and MFNA.</li>
          </ul>
        </>,
        true
      )}
    {renderResumeItem(
        manager,
        "Network Manager - Teleperformance",
        <>
          <strong className="block text-center mb-2"> </strong>
          <ul className="list-disc list-inside text-left pr-4 xl:ml-24 xl:mr-24">    
             <li>Redesigned the Teleperformance South Cone's network to achieve 99.9%+ uptime, enhanced performance, and security, resulting in annual savings of $110,000.</li>
             <li>Led and executed various telecommunications projects involving networks, video, energy, and data transmission.</li>
             <li>Responded rapidly to the Covid-19 crisis enabling 97% of remote connections for business continuity, which led to "Operational Continuity" recognition for our CIO from CETIUC.</li>
          </ul>
        </>,
        false
      )}

   
{renderResumeItem(
    dataCenter,
    "Sr Network Engineer & Project Manager -    Metrotel & Eprotel",
    <>

      <ul className="list-disc list-inside text-left pr-4 xl:ml-24 xl:mr-24">
          <li>I demonstrated strong team leadership and project management. I led the design, implementation, and support of network projects, focusing particularly on ISP services, and trained and supervised a diverse team of NOC personnel, engineers, and contractors.</li>
          <li>I effectively managed projects, spearheading the development of detailed LLD/HLD (Low-Level/High-Level Design) and MOP (Method of Procedure), and handled change controls. I was also responsible for reporting site surveys and preparing audit manuals/procedures, ensuring organized and efficient project execution.</li>
          <li>In my technical roles, I excelled in configuring, monitoring, and troubleshooting ISP services over MPLS and optical networks. I adeptly handled the installation and pre-configuration of diverse telecom equipment, including devices from Cisco, Fortinet, Coriant/Tellabs, Microsemi, MRV, Huawei, Raisecom, and Juniper. I assured network reliability by conducting ATP (Acceptance Testing Procedures) and certifying network connections, emphasizing my commitment to high-quality project deliverables.</li>
        </ul>



      
    </>,
    true
  )}


</div>


  );
};

export default Resume;
