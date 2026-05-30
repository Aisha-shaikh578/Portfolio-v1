import React from 'react'
import ProjectObj from '../src/ProjectObj'
import { FaGithub, FaLink } from 'react-icons/fa'
import LineBelow from '../components/LineBelow'
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div id='projects' className='project-card-div'>
      <div className='text-center mb-4 py-4 lg:py-0'>
        <h2 className='text-green-700 font-medium'>My Work</h2>
        <h1 className='text-xl m-1 font-semibold'>Featured Projects</h1>
        <LineBelow />
      </div>

    <motion.div 
    whileHover={{ scale: 1.1 }}
    className='flex flex-col md:flex-row gap-5 md:gap-10 flex-wrap justify-center'>
      {ProjectObj.map((project,idx) => (
        <div key={idx} className='project-card'>
          <img src={project.image} alt={project.name} className='project-image' />
          <h3 className='title'>{project.name}</h3>
          <p className='heading mb-5 mt-2'>{project.description}</p>
          <div className='stack'>
            {project.stack.map((tech, techIdx) => (
              <span key={techIdx} className='tech'>{tech}</span>
            ))}
          </div>
           <div className='flex justify-between border-t-2 border-t-mist-300 pt-3 mt-3'>
            <a href={project.DemoLink}>Demo<span className='m-1'><FaLink /></span></a>
            <a href={project.GitHubLink}>GitHub<span className='m-1'><FaGithub/></span></a>
           </div>
        </div>
       ))}
    </motion.div>
    </div>
  )
}

export default Projects
