import React from 'react'
import logoLight from '../src/assets/logoLight.png'
import { FaCopyright } from 'react-icons/fa'
import { BsArrowUpCircleFill } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-between mb-20 gap-5 text-center items-center mt-10'>
      <div>
        <img src={logoLight} alt="logo" className='h-10 rounded-3xl'/>
      </div>

      <div>
        <p className='text-green-900 font-semibold flex items-center'>
          <FaCopyright />
          2026 Aisha Shaikh. All rights reserved.
        </p>
      </div>

      <div>
        <BsArrowUpCircleFill className='text-green-900' size={30}/>
      </div>
    </div>
  )
}

export default Footer
