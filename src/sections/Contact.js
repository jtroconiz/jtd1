import React from 'react';
import { FaEnvelope, FaLinkedin, FaGlobe } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-[#0A192F] to-[#172A45] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-[#64FFDA]">Contact</h2>
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-center gap-3 text-lg lg:text-xl">
              <FaEnvelope className="text-[#64FFDA]" />
              <a 
                href="mailto:jtroconiz@outlook.com" 
                className="hover:text-[#64FFDA] transition-colors"
              >
                jtroconiz@outlook.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 text-lg lg:text-xl">
              <FaLinkedin className="text-[#64FFDA]" />
              <a 
                href="https://www.linkedin.com/in/jtroconiz/" 
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#64FFDA] transition-colors"
              >
                linkedin.com/in/jtroconiz
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 text-lg lg:text-xl">
              <FaGlobe className="text-[#64FFDA]" />
              <a 
                href="https://jtd.com.ar" 
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#64FFDA] transition-colors"
              >
                jtd.com.ar
              </a>
            </div>
          </div>
          <p className="text-gray-300 text-sm lg:text-base mt-6">
            Based in Madrid, Spain. Open to remote or hybrid roles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

