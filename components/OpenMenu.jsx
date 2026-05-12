import React from 'react'
import { MoonIcon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const OpenMenu = () => {
  const {theme, toggleTheme} = useTheme(); 

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-400' : 'bg-slate-100'} m-1.5 p-1 lg:hidden fixed w-[95vw] mx-[3vw] items-center opacity-90 py-2.5 rounded mt-18`}>
      <div className='flex justify-evenly text-center text-sm md:text-md'>
      <a href='#home'>Home</a>
      <a href='#projects'>Projects</a>
      <a href='#skills'>Skills</a>
      <a href='#about'>About</a>
      <a href='#contact'>Contact</a>
    
      {theme === 'dark' ?
      <Sun color='orange' onClick={toggleTheme}/> :
      <MoonIcon color='orange' onClick={toggleTheme}/>
     }
    </div>
    </div>
  )
}

export default OpenMenu
