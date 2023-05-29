import React from 'react';
import { FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer id='contact' className='mt-auto bg-custom-blue text-white p-6'>
            <div className='flex justify-center text-3xl space-x-4'>
                <a href="https://www.linkedin.com/in/jtroconiz/" target="_blank" rel="noreferrer" className='p-2  bg-white text-custom-blue rounded-full'>
                    <FaLinkedin />
                </a>
                <a href="https://wa.me/5491165185137" target="_blank" rel="noreferrer" className='p-2 bg-white text-custom-blue rounded-full'>
                  
                    <FaWhatsapp />
                </a>
                <a href="mailto:jtroconiz@outlook.com" target="_blank" rel="noreferrer" className='p-2 bg-white text-custom-blue rounded-full'>
                  <FaEnvelope />
                </a>
            </div>
            <div className='flex justify-center mt-4  '>
                <span className='sm:text-sm md:text-sm lg:text-3xl'>Copyrigth © 2023 Jesus Troconiz. All Rights Reserved</span>
            </div>
        </footer>
    );
}

export default Footer;
