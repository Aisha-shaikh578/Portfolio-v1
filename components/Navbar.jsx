import { X, Menu, Sun, MoonIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import OpenMenu from './OpenMenu';
import { motion, useScroll } from 'framer-motion';
import logoLight from '../src/assets/logoLight.png'
import { useTheme } from '../context/ThemeContext';
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(
    JSON.parse(localStorage.getItem('isMenuOpen')) || false
  );
  const {theme, toggleTheme} = useTheme();
  const {scrollYProgress} = useScroll();

  const handleMenuClick = () => {
   setIsMenuOpen(!isMenuOpen);
  }
  
  useEffect(() => {
   localStorage.setItem('isMenuOpen', JSON.stringify(isMenuOpen));
  },[isMenuOpen])

  return (
    <>
    <motion.div 
    style={{scaleX : scrollYProgress}}
    className='h-1.5 rounded-r-2xl fixed z-60 w-full origin-left bg-green-600'></motion.div>

    <nav 
    className={`
      flex ${theme === 'dark' ? 'bg-gray-400' : 'bg-gray-100'} justify-between fixed w-full pt-2 px-2 md:px-4 py-4 items-center opacity-90 z-50
      `}>

      <HashLink smooth to='/#home'>
        <img src={logoLight} alt="logo" className='h-10 rounded-3xl'/>
      </HashLink>

      <div className='space-x-3 hidden lg:flex lg:gap-5'>
        <HashLink smooth to='/#home'>Home</HashLink>
        <HashLink smooth to='/#projects'>Projects</HashLink>
        <HashLink smooth to='/#skills'>Skills</HashLink>
        <HashLink smooth to='/#about'>About</HashLink>
        <HashLink smooth to='/#contact'>Contact</HashLink>

        {
          theme === 'dark' ? 
          <Sun color='#B16406' className='cursor-pointer' onClick={toggleTheme}/>: 
          <MoonIcon color='orange' className='cursor-pointer' onClick={toggleTheme}/>
        }
      </div>

      <div className='lg:hidden cursor-pointer' onClick={handleMenuClick}>
        {
        isMenuOpen ? 
         <X/> : 
         <Menu/>
        }
      </div>
    </nav>
    {isMenuOpen ? <OpenMenu /> : null}
    </>
  )
}

export default Navbar
