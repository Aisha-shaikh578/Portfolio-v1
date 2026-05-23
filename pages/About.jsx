import React from 'react'
import LineBelow from '../components/LineBelow'
import myPic from '../src/assets/my-pic.jpg'

const About = () => {
  return (
    <div id='about' className='py-12 lg:py-20'>
       <div className='text-center mb-4 mt-12'>
        <h2 className='text-green-700 font-medium'>Who I Am</h2>
        <h1 className='text-xl m-1 font-semibold'>About Me</h1>
        <LineBelow />
      </div>

      <div className='flex flex-col justify-center items-center md:flex-row md:px-10 mt-10'>
        <div className='mt-8 md:mt-4 lg:mt-0'>
          <img className='rounded-[50%] w-30 md:w-70 h-30 md:h-40 lg:w-40 object-cover xl:h-30 xl:w-30' src={myPic} alt="my pic" />
        </div>

        <div className='px-10 flex flex-col justify-center items-center max-w-xl'>
          <p className='text-green-800 text-lg mt-5 md:mt-0'>
            I am a passionate Frontend Developer who loves building clean, user-friendly, and responsive web applications. <br />
            I enjoy turning ideas into real products using modern front-end technologies
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
