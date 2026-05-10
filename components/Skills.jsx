import React from 'react'
import { BsTypescript } from 'react-icons/bs'
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { FaCss } from 'react-icons/fa6'
import { FiGitBranch, FiGithub } from 'react-icons/fi'
import { RiTailwindCssFill } from 'react-icons/ri'
import { VscVscode } from 'react-icons/vsc'
import LineBelow from './LineBelow'

const Skills = () => {
  return (
    <div id='skills'>
      <div className='text-center mb-6 mt-10'>
        <h2 className='text-green-700 font-medium'>What I do</h2>
        <h1 className='text-xl m-1 font-semibold'>Skills & Technologies </h1>
        <LineBelow />
      </div>

      <div className='skills-div'>
        <h2 className='heading font-extrabold text-xl'>
          Frontend
        </h2>
        <div className='text-4xl flex flex-wrap gap-5 text-center'>
          <div className='tech-logo'><FaReact color='66A3FF'/><h2 className='sm-text'>React</h2></div>
          <div className='tech-logo'><FaJs color='ffd000'/><h2 className='sm-text'>JavaScript</h2></div>
          <div className='tech-logo'><FaCss color='0052CC'/><h2 className='sm-text'>CSS</h2></div>
          <div className='tech-logo'><FaHtml5 color='ff4800'/><h2 className='sm-text'>HTML</h2></div>
          <div className='tech-logo'><BsTypescript color='3385FF'/><h2 className='sm-text'>TypeScipt</h2></div>
          <div className='tech-logo'><RiTailwindCssFill color='66A3FF'/><h2 className='sm-text'>Tailwind</h2></div>
        </div>
      </div>

      <div className='skills-div'>
        <h2 className='heading font-extrabold text-xl'>
          Tools
        </h2>
        <div className='text-4xl flex flex-wrap gap-5 text-center'>
          <div className='tech-logo'>
            <FiGithub color='white' className='bg-black rounded-2xl p-1'/><h2 className='sm-text'>GitHub</h2>
          </div>
          <div className='tech-logo'>
            <VscVscode color='0066FF'/><h2 className='sm-text'>VS Code</h2>
          </div>
          <div className='tech-logo'>
            <FiGitBranch color='white' className='bg-[#ff5400] rounded-br-xl rounded-bl-2xl rounded-tl-xl rounded-tr-2xl p-1'/><h2 className='sm-text'>Git</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
