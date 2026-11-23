import React from 'react'
import LineBelow from '../components/LineBelow'
import myPic from '../src/assets/my-pic.jpg'

const About = () => {
  return (
    <div id='about' className='py-12 lg:py-20 min-h-[70vh] w-full max-w-6xl mx-auto'>
       <div className='text-center mb-4 mt-18'>
        <h2 className='text-green-700 font-bold mt-3 md:mt-6 text-lg xl:text-2xl'>Who I Am</h2>
        <h1 className='text-3xl m-1 font-semibold font-[Allura] md:text-5xl mt-4'>About Me</h1>
        <LineBelow />
      </div>

      <div className='flex flex-col gap-8 lg:gap-14 xl:gap-20 lg:justify-center items-center lg:flex-row md:px-10 mt-10'>
        <div className='md:mt-4 lg:mt-0'>
          <img className='rounded-full h-36 w-36 sm:w-44 sm:h-44 lg:w-56 lg:h-56 xl:w-74 xl:h-64 object-cover' src={myPic} alt="my pic" />
        </div>

        <div className='flex flex-col justify-center items-center px-8 lg:px-0'>
          <p className='text-green-800 text-base md:text-lg xl:text-2xl leading-7 md:leading-8'>
            I enjoy creating clean, responsive, and user-friendly experiences that combine thoughtful design with functionality.<br />
            I love turning ideas into real-world applications, exploring new technologies and continuously improving my skills by building projects!
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
