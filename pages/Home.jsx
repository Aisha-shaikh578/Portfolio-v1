import React from 'react'
import Button from '../components/Button'
import SocialIcons from '../components/SocialIcons'
import CodeEditor from '../components/CodeEditor'
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';

const Home = () => {
  return (
    <section
      id='home'
      className={`w-full max-w-6xl 2xl:py-96 px-5 sm:px-8 lg:px-10 py-24 sm:py-28 lg:py-32 min-h-[95vh] mt-8 md:mt-20 text-[#173524]`}
    >
      <div className='grid w-full items-center gap-12 md:grid-cols-2 lg:gap-14 xl:gap-20 2xl:gap-52'>
        <div className='max-w-3xl'>
          <h1 className='mb-3 text-[clamp(1.75rem,3vw,4.25rem)] font-extrabold tracking-[-0.045em] text-[#174328]'>
            Hi, I&apos;m Aisha
          </h1>
          <h2 className='text-[clamp(3.15rem,5vw,4.15rem)] leading-18 mt-4 font-[Allura] font-semibold text-[#2f5d42]'>
            Web Developer
          </h2>
          <p className='mt-3 max-w-lg leading-7 text-[#2a4c38] text-xl 2xl:text-2xl'>
            I build responsive, scalable, and amazing web applications using modern technologies.
          </p>

        <div className='flex gap-2 md:gap-3 mt-7 mb-5'>
          <HashLink className='hover:no-underline' smooth to='/#projects'>
            <Button  btnText={'View Projects'}/>
          </HashLink>
          <Button btnText={'Resume'}/>
        </div>
       <SocialIcons />
      </div>

        <div className='flex w-full justify-center lg:justify-end'>
          <CodeEditor />
        </div>
      </div>
    </section>
  )
}

export default Home
