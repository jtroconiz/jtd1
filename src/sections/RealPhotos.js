import React from 'react';
import photo1 from '../images/1.png';
import photo2 from '../images/2.png';
import photo3 from '../images/3.png';
import photo4 from '../images/4.png';
import photo5 from '../images/5.png';
import photo6 from '../images/6.png';

const RealPhotos = () => {
  const photos = [
    {
      src: photo1,
      alt: 'Datacenter validation',
      caption: 'Datacenter validation'
    },
    {
      src: photo2,
      alt: 'Enterprise rack deployment',
      caption: 'Enterprise rack deployment'
    },
    {
      src: photo3,
      alt: 'Fiber & UTP patching',
      caption: 'Fiber & UTP patching'
    },
    {
      src: photo4,
      alt: 'Outdoor telecom installs',
      caption: 'Outdoor telecom installs'
    },
    {
      src: photo5,
      alt: 'Network testing tools',
      caption: 'Network testing tools'
    },
    {
      src: photo6,
      alt: 'Patch panels (fiber/copper)',
      caption: 'Patch panels (fiber/copper)'
    }
  ];

  return (
    <section className="py-16 bg-[#172A45] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center text-[#64FFDA] hover:text-[#64FFDA]">📸 In the Field — Real Network Infrastructure</h2>
        <p className="text-gray-300 text-base lg:text-lg text-center max-w-4xl mx-auto mb-10">
          Hands-on work across datacenters, enterprise sites, and service-provider environments — impacting reliability, performance, and scalability in production systems.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div key={index} className="bg-[#0A192F]/50 rounded-lg overflow-hidden border border-[#172A45]/50 group">
              <div className="w-full aspect-[4/3] bg-[#0A192F]/40 flex items-center justify-center">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-contain transition-transform duration-300 ease-out group-hover:scale-[1.07]"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-gray-200 text-sm lg:text-base font-semibold group-hover:text-[#64FFDA]">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealPhotos;
