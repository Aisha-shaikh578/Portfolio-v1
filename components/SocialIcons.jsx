import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';

const SocialIcons = () => {
  const socialLinks = [
  {
    url: "https://github.com/Aisha-shaikh578",
    icon : <FaGithub size={33} />,
    name: 'Github'
  },
  {
    url: "https://www.linkedin.com/in/aishashaikh05/",
    icon : <FaLinkedin size={33} />,
    name: 'LinkedIn'
  },
  {
    url: "https://www.instagram.com/build.with.fun/",
    icon : <FaInstagram size={33} />,
    name: 'Instagram'
  },
  {
    url: 'mailto:itsaishashaikh05@gmail.com',
    icon : <MdEmail size={33} />,
    name: 'Mail'
  }
]

  return (
    <div className='flex gap-3 mt-6 lg:m-8'>
      {socialLinks.map((link,idx) => (
        <a className='cursor-pointer text-green-800 hover:scale-110 hover:text-[#0f3d2e] rounded-full duration-300 transition-all social-link hover:no-underline'
         key={idx} href={link.url}>
          <span className='initial-icon'>{link.icon}</span>
          <span className='tooltip text-2xl'>{link.name}</span>
        </a>
      ))}
    </div>
  )
}

export default SocialIcons
