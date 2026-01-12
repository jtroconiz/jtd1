import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import miFoto from '../images/Jesus troconiz.png';
import fondoImg from '../images/Fondo.png';
import fullBackImg from '../images/Full back.png';

const Hero = () => {
  return (
    <div id="home" className="min-h-screen bg-[#0A192F] relative overflow-hidden pt-20">
      {/* Tech background image - Mobile */}
      <div className="absolute inset-0 md:hidden">
        <img 
          src={fondoImg} 
          alt="Tech background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2A3F]/60 via-[#2A3A4F]/50 to-[#3A4A5F]/40"></div>
      </div>
      {/* Full background image - Tablet (md:) */}
      <div className="absolute inset-0 hidden md:block lg:hidden overflow-hidden">
        <img 
          src={fondoImg} 
          alt="Tech background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2A3F]/60 via-[#2A3A4F]/50 to-[#3A4A5F]/40"></div>
      </div>
      {/* Full background image - Desktop (lg: and up) */}
      <div className="absolute inset-0 hidden lg:block overflow-hidden">
        <img 
          src={fullBackImg} 
          alt="Tech background" 
          className="w-full h-full object-cover object-[center_top]"
        />
      </div>
      {/* Network pattern overlay - Only on mobile */}
      <div className="absolute inset-0 opacity-10 md:hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left side - Text content */}
          <div className="text-white space-y-4 md:space-y-6 order-3 lg:order-1 bg-[#0A192F]/60 md:bg-[#0A192F]/70 lg:bg-[#0A192F]/80 backdrop-blur-sm rounded-lg p-6 md:p-8 lg:p-10">
            {/* Name with green square */}
            <div className="flex items-center gap-3 pt-4 md:pt-6 lg:-mt-4">
              <div className="w-3 h-3 bg-[#64FFDA]"></div>
              <h1 className="text-3xl lg:text-4xl font-bold text-[#64FFDA]">Jesús Troconiz</h1>
            </div>

            {/* Main title */}
            <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Senior / Lead Network & Cloud Engineer
            </h2>

            {/* Key expertise */}
            <p className="text-lg lg:text-xl text-[#64FFDA] -mt-4">
              Network Architecture · Automation · Security · Observability
            </p>
            <p className="text-base lg:text-lg text-gray-400 mb-4">
              Enterprise & Service Provider carrier and mobile Environments
            </p>

            {/* Professional summary */}
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl">
              I design and lead secure, scalable network and cloud infrastructures across enterprise and service provider environments. With 13+ years of experience, I focus on architecture decisions, automation-first infrastructure, advanced monitoring, and data-driven event correlation to improve reliability, reduce operational risk, and enable scalable operations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="https://www.linkedin.com/in/jtroconiz/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#172A45] hover:bg-[#1B2F4F] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a 
                href="#contact" 
                className="flex items-center gap-2 bg-[#64FFDA] hover:bg-[#52E3C2] text-[#0A192F] px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <FaPhone /> Let's Talk?
              </a>
              <a 
                href="mailto:jtroconiz@outlook.com" 
                className="flex items-center gap-2 bg-[#172A45] hover:bg-[#1B2F4F] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <FaEnvelope /> Mail
              </a>
            </div>
          </div>

          {/* Right side - Photo with overlay - Only visible on mobile/tablet */}
          <div className="relative order-1 lg:hidden">
            <div className="relative w-full max-w-md mx-auto">
              {/* Profile photo */}
              <img 
                src={miFoto} 
                alt="Jesús Troconiz" 
                className="w-full rounded-lg shadow-2xl"
              />
              
              {/* Overlay information */}
              <div className="absolute inset-0 flex flex-col justify-between p-4 lg:p-6 text-white pointer-events-none">
                {/* Top overlay - Years */}
                <div className="text-right">
                  <p className="text-xs lg:text-sm font-semibold mb-2 bg-[#0A192F]/70 backdrop-blur-sm px-3 py-1 rounded inline-block">13+ Years Experience</p>
                </div>

                {/* Bottom section - Location and remote only */}
                <div className="text-right space-y-2">
                  <p className="text-xs bg-[#0A192F]/70 backdrop-blur-sm px-3 py-1 rounded inline-block">Based in Madrid, Spain - EU work authorization</p>
                  <p className="text-xs bg-[#64FFDA]/20 backdrop-blur-sm px-3 py-1 rounded inline-block text-[#64FFDA] font-semibold">Remote worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Improving SLA box - Between photo and text, only on mobile/tablet */}
          <div className="order-2 lg:hidden w-full">
            <div className="bg-[#172A45]/80 backdrop-blur-sm rounded-lg p-4 border-l-4 border-[#64FFDA]">
              <p className="text-sm md:text-base text-gray-200">
                Improving SLA and reducing MTTR in large-scale production infrastructures
              </p>
            </div>
          </div>

          {/* Right side - Info box - Only visible on desktop */}
          <div className="relative order-1 lg:order-2 hidden lg:block">
            <div className="relative w-full max-w-md mx-auto lg:max-w-full h-[calc(100vh-20rem)] min-h-[300px]">
              <div className="h-full flex flex-col justify-between p-6 pt-0">
                <div className="flex flex-col gap-4 text-white -mt-48 md:-mt-36 lg:-mt-30">
                  {/* Top - Years */}
                  <div className="text-right">
                    <p className="text-sm lg:text-base font-semibold bg-[#0A192F]/50 backdrop-blur-sm px-3 py-1 rounded inline-block">13+ Years Experience</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-white">
                  {/* MTTR box - Lower position */}
                  <div className="bg-[#172A45]/50 backdrop-blur-sm rounded-lg p-4 border-l-4 border-[#64FFDA]">
                    <p className="text-base lg:text-lg text-gray-200">
                      Improving SLA and reducing MTTR in large-scale production infrastructures
                    </p>
                  </div>
                  
                  {/* Location and Remote - Bottom */}
                  <div className="text-right space-y-2">
                    <p className="text-sm bg-[#0A192F]/50 backdrop-blur-sm px-3 py-1 rounded inline-block">Based in Madrid, Spain - EU work authorization</p>
                    <p className="text-sm bg-[#64FFDA]/20 backdrop-blur-sm px-3 py-1 rounded inline-block text-[#64FFDA] font-semibold">Remote worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

