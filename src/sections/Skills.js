import React from "react";

const Strong = ({ children }) => (
  <strong className="text-custom-blue2">{children}</strong>
);

const Skills = () => {
  return (
    <div id='Skills' className="mt-1 mb-10 flex items-center justify-center bg-custom-blue w-3/4 text-white font-mono rounded-lg mx-auto">

      <div className="json-content m-5 text-left md:m-10 lg:ml-20 xl:ml-30  pb-8 text-md sm:text-md md:text-md lg:text-md xl:text-2xl ">
        {"{"} 
        <br className="sm:text-md md:text-md lg:text-md xl:text-2xl"/>
        &nbsp;&nbsp;<Strong>"Skills"</Strong>: {"{"}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<Strong>"Networking &amp; Security"</Strong>: "Proficient in firewall, router, wireless controllers, and switch administration, including ASR, ISR, Catalyst, Nexus, ASA, NGFW, Fortigate, Load Balancers, and Network Proxies.",
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<Strong>"Protocols"</Strong>: "Knowledgeable in GPON, DWDM, CWDM, STP, VLAN, Trunk, Dot1Q, EtherChannel, LACP, HSRP, routing protocols (OSPF, BGP), VRF, MPLS, NAT, ACLs, QoS, MFA, Radius, Tacacs, SD-WAN, GRE, VPN SSL/IPsec, and scripting.",
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<Strong>"Monitoring & Logs"</Strong>: Capable of managing and analyzing system logs, SNMP traps, MIBS, and syslogs. Proficient in network monitoring and performance tools like PRTG and Natgeo among others.",
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<Strong>"Programming"</Strong>: "Acquainted with Python (including libraries such as Pandas and NumPy), JavaScript, ReactJS.",
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<Strong>"Data Analysis &amp; Programming Tools"</Strong>: "Knowledgeable in Anaconda, Jupyter Notebook, Seaborn, and clustering techniques for data analysis and visualization.",
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<Strong>"Web Development"</Strong>: "Knowledgeable in HTML, CSS, Grid, Flexbox, Bootstrap, tailwind, SASS, and JSON.",
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<Strong>"Databases"</Strong>: "Skilled in SQL, MySQL, Vertica, and database management.",
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<Strong>"Software"</Strong>: "Familiar with Windows Server, Microsoft Office, Linux, VirtualBox, and IPAM.",
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<Strong>"Tools"</Strong>: "Visual Studio Code, Jira, Postman, and version control using Git, Github.",
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<Strong>"Cloud"</Strong>: "Experience with Azure and Huawei cloud services.",
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<Strong>"APIs"</Strong>: "Knowledgeable in API integration and usage.",
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<Strong>"Languages"</Strong>: "Spanish: <Strong>native</Strong>, English: <Strong>advanced</Strong>"
        <br />
        &nbsp;&nbsp;{"}"}
        <br />
        {"}"}
      </div>
    </div>
  );
};

export default Skills;
