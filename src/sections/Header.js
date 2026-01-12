import React, { useState, useEffect } from 'react';
import logoGPT from '../images/Logo GPT.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 80;
      const sectionPosition = section.offsetTop - headerOffset;
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0A192F]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="cursor-pointer flex items-center gap-3"
            onClick={() => scrollToSection('home')}
          >
            <img 
              src={logoGPT} 
              alt="Logo GPT" 
              className="h-16 md:h-20 lg:h-24 w-auto"
            />
          </div>
          
          <ul className="hidden md:flex items-center gap-6 text-white">
            <li>
              <button 
                onClick={() => scrollToSection('home')}
                className="hover:text-[#64FFDA] transition-colors text-xl md:text-2xl lg:text-3xl font-semibold"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-[#64FFDA] transition-colors text-xl md:text-2xl lg:text-3xl font-semibold"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
