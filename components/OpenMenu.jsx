import React from 'react'
import { MoonIcon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const OpenMenu = () => {
  const {theme, toggleTheme} = useTheme(); 

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-400' : 'bg-slate-100'} m-1.5 p-1 z-50 lg:hidden fixed mx-[3vw] items-center opacity-90 py-2.5 rounded mt-24 w-[94vw] md:w-[85vw] md:ml-15 transition-all`}>
      <div className='flex justify-evenly text-center text-sm md:text-lg'>
      <a href='#home'>Home</a>
      <a href='#projects'>Projects</a>
      <a href='#skills'>Skills</a>
      <a href='#about'>About</a>
      <a href='#contact'>Contact</a>
    
      {theme === 'dark' ?
      <Sun color='#B16406' onClick={toggleTheme}/> :
      <MoonIcon color='orange' onClick={toggleTheme}/>
     }
    </div>
    </div>
  )
}

export default OpenMenu
