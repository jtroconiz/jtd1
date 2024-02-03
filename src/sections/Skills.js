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
          <Strong>"Skills"</Strong>: {"{"}
        <br />
            <Strong>"Cloud & Virtualization"</Strong>: "IaaS platforms such as Openstack, Azure, Huawei cloud services. Experience in Software & Virtualization tools like Vmware, Windows Server, Linux, VirtualBox, Hyper-V, Docker, IPAM, and VDI solutions.",
        <br />
            <Strong>"Networking & Security"</Strong>: "Proficient in firewall, routing and switching, proxy, and WLC administration, across a wide range of platforms including ASR, ISR, Catalyst, Nexus, ASA, and various brands such as Cisco, Fortinet, Juniper, HP, and more. Expertise in advanced security measures, encompassing micro-segmentation, port security, DNS, DMZ configurations, and the deployment and management of IPS/IDS systems. Knowledge in security standards and compliance, including ISO, GDPR, and PCI DSS. Adept in implementing and managing network security protocols such as TACACS+, RADIUS, VPN SSL/IPsec, and applying secure network design principles, including split tunneling and SSL filtering. Experienced in enhancing network defenses with botnet inspection, antivirus solutions, and SSL decryption for traffic inspection. Skilled in the setup and utilization of Syslog, SIEM, LDAP, and multi-factor authentication (MFA) to enhance security measures.",
        <br />
            <Strong>"Protocols"</Strong>: "Knowledgeable in GPON, DWDM, CWDM, STP, MSTP, VLAN, Trunk, Dot1Q, QinQ, EtherChannel, LACP, HSRP, advanced routing protocols (OSPF, BGP), and proficient in VRF, MPLS, NAT, ACLs, QoS, and SD-WAN.",
        <br />
            <Strong>"Databases"</Strong>: "Management and experience with SQL, MySQL, PostgreSQL & Big Data technologies Vertica, Presto/Trino, Spark, and Redshift for large-scale data analysis.",
        <br />
            <Strong>"Data Analysis"</Strong>: "R, RStudio, Dplyr, Tidyr, Anaconda, Jupyter Notebook, plotly, Seaborn, and tools like Power Bi for data analysis and visualization.",
        <br />
            <Strong>"Machine Learning & AI"</Strong>: "Familiarity with supervised and unsupervised learning models such as linear regression and random forest trees. Experience in data preprocessing, feature engineering, and model training using libraries like scikit-learn.",
        <br />
            <Strong>"Programming & Tools"</Strong>: "R, Python (Pandas, NumPy, scikit-learn), JavaScript, ReactJS, JSON, YAML, XML, and supporting tools.",
        <br />
            <Strong>"Integration & Tools"</Strong>: "Expertise in API integration and various other tools and platforms like Visual Studio Code, Jira, Trello, Postman, Google Colab, ITIL, Git, Github, Wireshark, Network Analyzer, and Traffic Generator, and more.",
        <br />
            <Strong>"DevOps & Monitoring"</Strong>: "Proficiency in managing system logs, SNMP traps, MIBS, syslogs, and utilizing monitoring tools like PRTG, SolarWinds, Checkmk, Zabbix, etc. Played a key role in the development of an innovative monitoring software solution as part of a dedicated engineering team (NI Platform | YUVO).",
        <br />
            <Strong>"Web Development & Programming"</Strong>: "HTML, CSS, Grid, Flexbox, Bootstrap, Tailwind, SASS.",
        <br />
            <Strong>"Languages"</Strong>: "Native in Spanish and advanced proficiency in English."
        <br />
          {"}"}
        <br />
        {"}"}
      </div>
    </div>
  );
};

export default Skills;
