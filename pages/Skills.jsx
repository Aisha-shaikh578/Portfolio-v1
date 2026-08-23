import React from 'react'
import { BsTypescript } from 'react-icons/bs'
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { FaCss } from 'react-icons/fa6'
import { FiGitBranch, FiGithub } from 'react-icons/fi'
import { RiFirebaseLine, RiNextjsFill, RiSupabaseLine, RiTailwindCssFill } from 'react-icons/ri'
import { VscVscode } from 'react-icons/vsc'
import LineBelow from '../components/LineBelow'
import { WiThunderstorm } from 'react-icons/wi'

const Skills = () => {
  return (
    <div id='skills' className='py-12 lg:py-15'>
      <div className='text-center mb-6 mt-10'>
        <h2 className='text-green-700 font-medium'>What I do</h2>
        <h1 className='text-xl m-1 font-semibold'>Skills & Technologies </h1>
        <LineBelow />
      </div>

    <div className='flex flex-col md:flex-row md:gap-10'>
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
          <div className='tech-logo'><RiNextjsFill color='black'/><h2 className='sm-text'>Next.js</h2></div>
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
            <WiThunderstorm color='#b18bba' className='rounded-br-xl rounded-bl-2xl rounded-tl-xl rounded-tr-2xl p-1'/><h2 className='sm-text'>Thunder Client</h2>
          </div>
          <div className='tech-logo'>
            <FiGitBranch color='white' className='bg-[#ff5400] rounded-br-xl rounded-bl-2xl rounded-tl-xl rounded-tr-2xl p-1'/><h2 className='sm-text'>Git</h2>
          </div>
        </div>
      </div>

      <div className='skills-div'>
        <h2 className='heading font-extrabold text-xl'>
          Backend
        </h2>
        <div className='text-4xl flex flex-wrap gap-5 text-center'>
          <div className='tech-logo'>
            <RiFirebaseLine color='#ff5400' className='bg-yellow-200 rounded-full px-1'/><h2 className='sm-text'>Firebase</h2>
          </div>
          <div className='tech-logo'>
            <RiSupabaseLine color='#037d50' className='bg-black rounded-full px-1'/><h2 className='sm-text'>Supabase</h2>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Skills
