import { ArrowRight } from 'lucide-react'
import React from 'react'

const Button = ({ btnText }) => {
  return (
    <button
     className='flex rounded-xl py-2 px-1.5 border-2 border-green-500 cursor-pointer'
    >
      { btnText }
      <span className='mt-1 px-2'>
        <ArrowRight size={20}/>
      </span>
    </button>
  )
}

export default Button
