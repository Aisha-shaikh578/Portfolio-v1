import { X, Menu, Sun } from 'lucide-react'
import React, { useState } from 'react'
import OpenMenu from './OpenMenu';
import { motion, useScroll } from 'framer-motion';
import logoLight from '../src/assets/logoLight.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {scrollYProgress} = useScroll();

  const handleMenuClick = () => {
   setIsMenuOpen(!isMenuOpen);
  }
  console.log(isMenuOpen)

  return (
    <>
    <motion.div 
    style={{scaleX : scrollYProgress}}
    className='h-1.5 rounded-r-2xl fixed z-1 w-full origin-left bg-green-600'></motion.div>

    <nav className='flex bg-gray-100 justify-between fixed w-full pt-2 px-2 md:px-4 py-4 items-center opacity-90'>
      <div>
        <img src={logoLight} alt="logo" className='h-10 rounded-3xl'/>
      </div>

      <div className='space-x-3 hidden lg:flex'>
        <a href='#home'>Home</a>
        <a href='#projects'>Projects</a>
        <a href='#skills'>Skills</a>
        <a href='#about'>About</a>
        <a href='#contact'>Contact</a>
      
        <Sun color='orange'/>
      </div>

      <div className='lg:hidden cursor-pointer' onClick={handleMenuClick}>
        {
        isMenuOpen ? 
         <X /> : 
         <Menu/>
        }
      </div>
    </nav>
    {isMenuOpen ? <OpenMenu /> : null}
    </>
  )
}

export default Navbar
