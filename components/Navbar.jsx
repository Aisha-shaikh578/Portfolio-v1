import { X, Menu, Sun } from 'lucide-react'
import React, { useState } from 'react'
import OpenMenu from './OpenMenu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
   setIsMenuOpen(!isMenuOpen);
  }
  console.log(isMenuOpen)

  return (
    <>
    <nav className='flex bg-gray-100 justify-between pt-2 px-2 md:px-4'>
      <div>
        <img src="../src/assets/logoLight.png" alt="logo" className='h-10 rounded-3xl'/>
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
