import { QRCodeCanvas } from 'qrcode.react';
import logoLight from '../src/assets/logoLight.jpeg';
import React from 'react'

const QRCode = () => {
  const websiteURL = 'https://www.linkedin.com/in/aishashaikh05/';

  return (
    <div className='
    bg-linear-to-br from-green-800 to-green-50 py-5 px-0 items-center relative flex flex-col w-34 h-38 md:w-40 md:h-40 lg:w-44 lg:h-44 object-contain rounded-lg shadow-lg shadow-green-900/80 
    '>
      <QRCodeCanvas 
      value={websiteURL}
      size={100}
      fgColor='#1f3f2b'
      bgColor='#e7f3eb'
      level='H'
      />
      <h3 className='heading text-sm mt-2 md:mt-4 md:text-md lg:mt-6 lg:text-lg'>Scan to Connect</h3>
      <img src={logoLight} alt="logo" className='rounded-full absolute h-9 w-9 top-13 bg-white'/>
    </div>
  )
}

export default QRCode
