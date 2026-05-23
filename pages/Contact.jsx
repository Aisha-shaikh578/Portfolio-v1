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
    url: "https://www.instagram.com/aisha_shaikh.dev?igdh=MTE1cnA2dDVhczM2cA==&utm_source=ig_contacr-invite"
  },{
    icon: <FaLinkedin size={30}/>,
    name: 'LinkedIn',
    url: "https://www.linkedin.com/in/aisha-shaikh-098102405/"
  },{
    icon: <MdEmail size={30}/>,
    name: 'Gmail',
    url: 'mailto:itsaishashaikh05@gmail.com',
  }
 ]

  return (
    <div className='h-screen relative w-full mt-5 py-10 lg:py-15' id='contact'>
      <div className='text-center mb-8 mt-12'>
        <h2 className='text-green-700 font-medium'>Get In Touch</h2>
        <h1 className='text-xl m-1 font-semibold'>Let's Connect</h1>
        <LineBelow />
      </div>
    
    <div className='flex active:scale-95 flex-wrap gap-5 justify-center'>
      {networkAccount.map((acc,idx) => (
      <a href={acc.url}>
        <div key={idx} 
        className='border-2 flex gap-2 border-green-600 rounded px-2.5 py-1 hover:shadow-lg shadow-green-900/80  transition duration-300 ease-in-out hover:bg-green-900 hover:text-white hover:decoration-none'
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
