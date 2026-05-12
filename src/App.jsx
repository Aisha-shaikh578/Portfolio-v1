import React from 'react'
import Home from '../components/Home'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import About from '../components/About'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import { useTheme } from '../context/ThemeContext'

const App = () => {
  const {theme} = useTheme();
  return (
    <>
    <Navbar />
    <div className={`
      flex flex-col justify-center items-center ${theme === 'dark' ? 'bg-gray-300' : 'bg-white'}
      `}>
      <Home />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
    </>
  )
}

export default App
// [#18181b]