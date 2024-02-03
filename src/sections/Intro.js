import React from 'react';
import miFoto from "../images/jtd-pic.jpg"; // Import the image

const Intro = () => {
  return (
    <div className="">
      <div className=" pt-6 pb-2 lg:pt-20 lg:pb-3 flex flex-col items-center justify-center text-center   bg-opacity-40 ">
        <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold ext-left pb-8 uppercase ">
        Living in a world where digital downtime can lead to significant losses, <br/> I’m committed to ensuring your business stays connected and secure.
        </h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 ">
        <div className="flex justify-center lg:col-span-5 ">

               <img src={miFoto} alt="AI" className="h-30vh md:h-50vh "  />
        </div>
        <div className="flex flex-col justify-center mx-10 mt-10 relative z-10 lg:col-span-7 ">
                    <h2 id='portfolio'  className=" text-lg lg:text-xl xl:text-2xl font-bold">
                      Welcome, I'm Jesus Troconiz
                    </h2>
                    <h3 className="  md:text-base lg:text-lg xl:text-xl pb-5 text-left">
                      As a seasoned Network & Software Engineer, I leverage my expertise in Cybersecurity, DevOps, Cloud, Infrastructure, and emerging fields like Data Science and AI to provide robust and innovative solutions.
                    </h3>
                    <h2 className=" text-lg lg:text-xl xl:text-2xl font-bold">
                      Bridging Technology and Business
                    </h2>
                    <p className=" md:text-base lg:text-lg xl:text-xl   text-left">
                      I’m your reliable partner in navigating the complex landscape of today’s telecommunications. But it’s not just about the technology. It’s about understanding the unique needs of each business, finding solutions that drive growth, and delivering value to customers. With a strong technical background and a strategic commercial perspective, I bridge the gap between technology and business, turning innovative ideas into reality for the benefit of companies and their customers.
                    </p>
        </div>
      </div>
    </div>
    
  );
};

export default Intro;

