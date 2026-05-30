import React from 'react'
import Button from '../components/Button'
import SocialIcons from '../components/SocialIcons'
import CodeEditor from '../components/CodeEditor'
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';

const Home = () => {
  return (
    <div id='home' className='flex flex-col lg:flex-row w-full max-w-xl gap-5 p-4 py-14 lg:py-25 mt-10 lg:mt-20 lg:mb-15 lg:max-w-4xl'>
      <div className='space-y-3 lg:w-2xl'>
        <h3 className='heading'>Hi, I'm</h3>
        <h1 className='name'>Aisha</h1>
        <h3 className='heading'>Web Developer</h3>
        <p>I build responsive, scalable, and amazing web applications using modern front-end technologies.</p>

        <div className='flex gap-2 md:gap-3 mt-5 mb-5'>
          <HashLink className='hover:no-underline' smooth to='/#projects'>
            <Button btnText={'View Projects'}/>
          </HashLink>
          <Button btnText={'Resume'}/>
        </div>
       <SocialIcons />
      </div>

       <div className='w-full'>
        <CodeEditor />
       </div>
    </div>
  )
}

export default Home
