import React from 'react'
import { Sun } from 'lucide-react'

const OpenMenu = () => {
  return (
    <div className='bg-slate-100 m-1.5 p-1 lg:hidden fixed w-[95vw] mx-[3vw] items-center opacity-90 py-2.5 rounded mt-15'>
      <div className='flex justify-evenly text-center text-sm md:text-md'>
      <a href='#home'>Home</a>
      <a href='#projects'>Projects</a>
      <a href='#skills'>Skills</a>
      <a href='#about'>About</a>
      <a href='#contact'>Contact</a>
    
      <Sun color='orange'/>
    </div>
    </div>
  )
}

export default OpenMenu
