import React from 'react'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Skills from '../pages/Skills'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Navbar from '../components/Navbar'
import { useTheme } from '../context/ThemeContext'
import { Routes, Route } from 'react-router-dom'
import ProjectDetails from '../pages/ProjectDetails'

const App = () => {
  const {theme} = useTheme();
  return (
  <>
   <Navbar />
    <div className={`
      flex flex-col justify-center items-center ${theme === 'dark' ? 'bg-gray-300' : 'bg-white'}
      `}>
      <Routes>
        <Route path='/' 
        element={
        <>
        <Home />
        <Projects /> 
        <Skills />
        <About />
        <Contact />
        </>  
        }/>

        <Route path='/projects/:id' element={ <ProjectDetails/> }/>
      </Routes>
   </div>
  </>
  )
}

export default App