import React, { useState } from 'react';
import miFoto from "../images/JTD-Imagotipo-A.jpg"; // Importa la imagen
const Header = () => {
  const sections = [
    { name: 'Home', id: 'home' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'About me', id: 'aboutme' },
    { name: 'Skills', id: 'Skills' },
    { name: 'Contact', id: 'contact' }
  ];

  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 200; // Ajusta esto según la altura de tu encabezado
      const sectionPosition = section.offsetTop - headerOffset;
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
      });
    }
    setOpen(false);
  };

  return (
    <header id="home" className={`fixed w-full top-0 bg-custom-blue z-50 p-2 ${open ? 'bg-custom-blue' : ''}`}>
      <div className="flex items-center justify-between">
        <div className="cursor-pointer" onClick={() => scrollToSection('home')}>
          <img src={miFoto} alt="JTD Logo" className="ml-10 h-32" />
        </div>
        <div onClick={() => setOpen(!open)} className="text-3xl cursor-pointer lg:hidden text-white">
          {open ? 'Close' : 'Menu'}
        </div>
        <ul className={`lg:flex text-3xl  lg:items-center lg:pb-0 lg:pt-0 pb-12 absolute lg:static left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-1000 ease-in ${open ? 'top-[100%] opacity-100' : 'top-[-490px]'} lg:opacity-100 opacity-0 z-20`}>
          {sections.map((section) => (
            <li key={section.id} className="lg:ml-8 text-3xl  lg:my-0 my-7 px-6 ">
              <span className="text-gray-200 hover:text-white duration-500 cursor-pointer" onClick={() => scrollToSection(section.id)}>
                {section.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
