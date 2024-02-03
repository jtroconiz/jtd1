


import React from "react";
import karate from '../images/20211204_174255_01_edited.jpg';

import JTD from '../images/DataCenterJTD_edited.jpg'

const AboutMe = () => {
  const renderResumeItem = (image, title, description, isReverse) => {
    return (
      <div id='aboutme' className={`w-3/4 mx-auto flex flex-col ${isReverse ? "lg:flex-row-reverse" : "lg:flex-row"} ld:flex-col items-center justify-center m-12 rounded-lg  `}>
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
// text-lg lg:text-xl xl:text-2xl font-bold
// md:text-base lg:text-lg xl:text-xl   text-left

  return (
    <div>
      {renderResumeItem(
        JTD,
        "Highly skilled and motivated professional",
        <>
          <ul className="md:text-base lg:text-lg xl:text-xl  list-disc list-inside text-left pr-4 xl:ml-24 xl:mr-24">
            <li>With over 10 years of experience in network engineering, software development, and data analysis, I have honed my expertise in these fields. However, my professional journey is not limited to these technical domains alone. As a dedicated practitioner of Shotokan Karate, I hold a 2nd Kyu brown belt, which reflects my discipline, resilience, and commitment to personal growth.</li>
            <li>Throughout my career, I have demonstrated strong leadership, effective teamwork, and clear communication skills. Thriving in highly demanding environments, I have proven myself as an invaluable asset to any team. Leveraging my proven track record in the telecommunications industry, I am confident that I can bring significant value to your company.</li>
            
            <li> My love for the outdoors finds expression in my regular cycling activities, which not only contribute to my fitness and endurance but also rejuvenate my mind and spirit.</li>
       
          </ul>
        </>,
        false
      )}
      {renderResumeItem(
       karate,
        "",
        <>

          <ul className="md:text-base lg:text-lg xl:text-xl  list-disc list-inside text-left pr-4 xl:ml-24 xl:mr-24">
                 <li>During my downtime, I indulge in editing audio-visual content, where I can blend my technical knowledge with my creative side. This hobby fuels my curiosity and passion for continuously learning new technologies, as I constantly strive to push my limits and explore innovative solutions to complex problems.</li>
              <li> As a self-taught individual, my insatiable curiosity and adaptability are key qualities that drive my professional growth. I am currently seeking my next professional challenge and eagerly look forward to joining a company where I can further develop my skills and contribute to its success. I am open to relocations and willing to travel if required.</li>
          </ul>
        </>,
        true
      )}
</div>


  );
};

export default AboutMe;
