import React from 'react'
import { useParams } from 'react-router-dom'

const ProjectDetails = () => {
   const { id } = useParams();
  console.log(id)
  return (
      <div className='bg-red-300 p-32 h-screen text-white'>
        { id }
      </div>
  )
}

export default ProjectDetails
