import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';

const SocialIcons = () => {
  const socialLinks = [
  {
    url: "https://github.com/Aisha-shaikh578",
    icon : <FaGithub size={25} />,
    name: 'Github'
  },
  {
    url: "https://www.linkedin.com/in/aishashaikh05/",
    icon : <FaLinkedin size={25} />,
    name: 'LinkedIn'
  },
  {
    url: "https://www.instagram.com/build.with.fun/",
    icon : <FaInstagram size={25} />,
    name: 'Instagram'
  },
  {
    url: 'mailto:itsaishashaikh05@gmail.com',
    icon : <MdEmail size={25} />,
    name: 'Mail'
  }
]

  return (
    <div className='flex gap-3 m-2 lg:m-3'>
      {socialLinks.map((link,idx) => (
        <a className='cursor-pointer text-green-800 hover:scale-110 hover:text-[#0f3d2e] rounded-full duration-300 transition-all social-link hover:no-underline'
         key={idx} href={link.url}>
          <span className='initial-icon'>{link.icon}</span>
          <span className='tooltip'>{link.name}</span>
        </a>
      ))}
    </div>
  )
}

export default SocialIcons
