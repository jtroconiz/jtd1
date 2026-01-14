import React from 'react';
import ooredooLogo from '../images/ooredoo-logo.png';
import teleperformanceLogo from '../images/teleperformance-group.jpg';
import directvLogo from '../images/directv-logo.png';
import ooredooPhoto from '../images/Ooredoo R.jpg';
import teleperformancePhoto from '../images/Teleperformane R.jpg';
import directvPhoto from '../images/Direct R.jpg';

const RecognitionsReferences = () => {
  const recognitions = [
    {
      title: 'Tier-1 Telco Partner Testimonial',
      text: '“Global network visibility and near real-time KPI degradation alerts across multi-vendor environments, simplifying supervision and troubleshooting while enabling data-driven network evolution.”',
      footer: 'Transport Service Manager — Ooredoo Algeria',
      logo: ooredooLogo,
      photo: ooredooPhoto
    },
    {
      title: 'Operational Excellence — Enterprise Ops',
      text: 'Recognized for ensuring continuity of telecom and network operations during the COVID-19 pandemic, enabling secure and reliable remote connectivity across a multinational organization.',
      footer: 'Teleperformance',
      logo: teleperformanceLogo,
      photo: teleperformancePhoto
    },
    {
      title: 'Recognition — LATAM Operations',
      text: 'Internal recognition for leadership and technical contribution to networking operations across LATAM, supporting business continuity and regional infrastructure reliability.',
      footer: 'Vrio LATAM',
      logo: directvLogo,
      photo: directvPhoto
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#0A192F] to-[#172A45] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center text-[#64FFDA]">Recognitions & References</h2>
        <p className="text-gray-300 text-base lg:text-lg text-center max-w-4xl mx-auto mb-10">
          Selected professional references and recognitions that validate real impact, operational responsibility, and collaboration with global teams and enterprise partners.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recognitions.map((item, index) => (
            <div
              key={index}
              className="bg-[#172A45]/50 backdrop-blur-sm rounded-lg p-6 border border-[#172A45]/50 hover:border-[#64FFDA] transition-all group"
            >
              <div className="w-full h-20 mb-4 flex items-center justify-start">
                <img
                  src={item.logo}
                  alt={item.footer}
                  className="h-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#64FFDA]">{item.title}</h3>
              <p className="text-gray-300 text-sm lg:text-base mb-4 leading-relaxed">{item.text}</p>
              <p className="text-gray-200 text-sm lg:text-base font-semibold mb-4">{item.footer}</p>
              {item.photo && (
                <div className="w-full mb-4 flex items-center justify-center bg-[#0A192F]/30 rounded overflow-visible">
                  <img
                    src={item.photo}
                    alt={`${item.footer} recognition`}
                    className="h-16 w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-[2] origin-center"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecognitionsReferences;
