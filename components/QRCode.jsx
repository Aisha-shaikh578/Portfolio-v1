import { QRCodeCanvas } from 'qrcode.react';
import logoLight from '../src/assets/logoLight.png';
import React from 'react'

const QRCode = () => {
  const websiteURL = 'https://www.linkedin.com/in/aisha-shaikh-098102405/';

  return (
    <div className='
    bg-linear-to-br from-green-800 to-green-50 p-4 items-center relative flex flex-col rounded-lg shadow-lg shadow-green-900/80 
    '>
      <QRCodeCanvas 
      value={websiteURL}
      size={100}
      fgColor='#1f3f2b'
      bgColor='#e7f3eb'
      level='H'
      />
      <h3 className='heading mt-2 -ml-2'>Scan to Connect</h3>
      <img src={logoLight} alt="logo" className='rounded-full absolute h-9 w-9 top-13 bg-white'/>
    </div>
  )
}

export default QRCode
