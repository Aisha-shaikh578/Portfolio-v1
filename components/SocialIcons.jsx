import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';

const SocialIcons = () => {
  const socialLinks = [
  {
    url: "https://github.com/Aisha-shaikh578",
    icon : <FaGithub size={25} />
  },
  {
    url: "https://www.linkedin.com/in/aisha-shaikh-098102405/",
    icon : <FaLinkedin size={25} />
  },
  {
    url: "https://www.instagram.com/aisha_shaikh.dev?igdh=MTE1cnA2dDVhczM2cA==&utm_source=ig_contacr-invite",
    icon : <FaInstagram size={25} />
  },
  {
    url: 'mailto:itsaishashaikh05@gmail.com',
    icon : <MdEmail size={25} />
  }
]

  return (
    <div className='flex gap-3 m-2 lg:m-3'>
      {socialLinks.map((link,idx) => (
        <a className='cursor-pointer text-green-800 hover:scale-110 hover:text-[#0f3d2e] rounded=-full uration-300 transition-all'
         key={idx} href={link.url}>
          {link.icon}
        </a>
      ))}
    </div>
  )
}

export default SocialIcons
