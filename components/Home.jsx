import React from 'react'
import Button from './Button'
import SocialIcons from './SocialIcons'
import CodeEditor from './CodeEditor'

const Home = () => {
  return (
    <div id='home' className='flex flex-col lg:flex-row max-w-xl gap-5 p-4 lg:max-w-4xl'>
      <div className='space-y-3 lg:w-2xl'>
        <h3 className='heading'>Hi, I'm</h3>
        <h1 className='name'>Aisha</h1>
        <h3 className='heading'>Frontend Developer</h3>
        <p>I build responsive, scalable, and amazing web applications using modern front-end technologies.</p>

        <div className='flex gap-2 md:gap-3 mt-5 mb-5'>
          <Button btnText={'View Projects'}/>
          <Button btnText={'Contact Me'}/>
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
