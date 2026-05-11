import React from 'react'
import logoLight from '../src/assets/logoLight.png'
import { FaCopyright } from 'react-icons/fa'
import { BsArrowUpCircleFill } from 'react-icons/bs'
import { easeInOut, motion } from 'framer-motion'

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-between mb-10 gap-5 md:mb-5 lg:mb-20 2xl:mb-30 items-center mt-10'>
      <div>
        <img src={logoLight} alt="logo" className='h-10 rounded-3xl'/>
      </div>

      <div>
        <p className='text-green-900 font-semibold text-xs flex gap-1 md:text-md lg:text-lg items-center'>
          <FaCopyright size={20}/>
          2026 Aisha Shaikh. All rights reserved.
        </p>
      </div>

      <motion.a 
      animate={{y: [0, -7, 0]}}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: easeInOut
      }}
      href='#home'
      >
        <BsArrowUpCircleFill className='text-green-900' size={30}/>
      </motion.a>
    </div>
  )
}

export default Footer
