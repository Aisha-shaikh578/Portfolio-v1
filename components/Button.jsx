import { ArrowRight } from 'lucide-react'
import React from 'react'

const Button = ({ btnText }) => {
  return (
    <button
     className='flex rounded-xl p-2 border-2 border-green-500 cursor-pointer hover:shadow-lg shadow-green-900/80  transition duration-300 ease-in-out hover:bg-green-900 hover:text-white'
    >
      { btnText }
      <span className='mt-1 px-2'>
        <ArrowRight size={20}/>
      </span>
    </button>
  )
}

export default Button
