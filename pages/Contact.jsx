import React from 'react'
import LineBelow from '../components/LineBelow'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
import Footer from '../components/Footer';
import QRCode from '../components/QRCode';

const Contact = () => {
 const networkAccount = [
  {
    icon: <FaGithub size={30}/>,
    name: 'GitHub',
    url: "https://github.com/Aisha-shaikh578",
  },{
    icon: <FaInstagram size={30}/>,
    name: 'Instagram',
    url: "https://www.instagram.com/build.with.fun/"
  },{
    icon: <FaLinkedin size={30}/>,
    name: 'LinkedIn',
    url: "https://www.linkedin.com/in/aishashaikh05/"
  },{
    icon: <MdEmail size={30}/>,
    name: 'Gmail',
    url: 'mailto:itsaishashaikh05@gmail.com',
  }
 ]

  return (
    <div className='h-screen relative w-full min-h-[70vh] mt-5 py-10 lg:py-15' id='contact'>
      <div className='text-center mb-8 mt-12'>
        <h2 className='text-green-700 font-bold mt-3 md:mt-6 text-lg xl:text-2xl'>Get In Touch</h2>
        <h1 className='text-3xl m-1 font-semibold font-[Allura] md:text-5xl mt-4'>Let's Connect</h1>
        <LineBelow />
      </div>
    
    <div className='flex active:scale-95 flex-wrap gap-2 justify-center'>
      {networkAccount.map((acc,idx) => (
      <a href={acc.url} className='hover:no-underline'>
        <div key={idx} 
        className='border-2 inline-flex items-center gap-2 border-green-600 rounded-md text-sm px-3 py-2 lg:px-4 lg:py-3 md:text-base hover:shadow-lg shadow-green-900/80 transition-all duration-300 ease-in-out hover:bg-green-900 hover:text-white hover:decoration-none'
        >
          {acc.icon}
          <h1 className='mt-1'>{acc.name}</h1>
        </div>
      </a>
      ))}
    </div>

    <div className='flex justify-center mt-[8vh]'>
      <QRCode />
    </div>

  <div className='absolute bottom-5 w-full px-10'>
    <Footer />
  </div>
  </div>
  )
}

export default Contact
