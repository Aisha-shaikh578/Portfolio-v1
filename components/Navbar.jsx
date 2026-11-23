import { Sun, MoonIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import OpenMenu from './OpenMenu';
import { motion, useScroll } from 'framer-motion';
import logoLight from '../src/assets/logoLight.jpeg'
import { useTheme } from '../context/ThemeContext';
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(
    JSON.parse(localStorage.getItem('isMenuOpen')) || false
  );
  const {theme, toggleTheme} = useTheme();
  const navItems=[
    'Home',
    'Projects',
    'Skills',
    'About',
    'Contact'
  ];
  const [activeSection, setActiveSection] = useState('home');
  const {scrollYProgress} = useScroll();

  const handleMenuClick = () => {
   setIsMenuOpen(!isMenuOpen);
  }

   useEffect(() => {
    const sections = navItems.map((item) =>
      document.getElementById(item.toLowerCase())
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-100px 0px -50% 0px",
        },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [navItems]);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  
  useEffect(() => {
   localStorage.setItem('isMenuOpen', JSON.stringify(isMenuOpen));
  },[isMenuOpen])

  return (
    <>
    <motion.div 
    style={{scaleX : scrollYProgress}}
    className='h-1.5 rounded-r-2xl fixed z-60 w-full origin-left bg-green-600'></motion.div>

    <nav 
    className={`
      flex ${theme === 'dark' ? 'bg-gray-400' : 'bg-gray-100'} justify-between fixed rounded-full w-[90vw] px-5 mt-5 pt-2 ml-5 md:ml-10 lg:ml-12 xl:ml-17 2xl:ml-30 md:px-6 lg:px-6 py-2 items-center opacity-90 z-50
      `}>

      <HashLink smooth to='/#home'>
        <img src={logoLight} alt="logo" className='h-10 rounded-3xl mt-2'/>
      </HashLink>

        {navItems.map((item) => {
        const sectionId = item.toLowerCase();
        const isActive = activeSection === sectionId;

        return (
          <button
            key={item}
            onClick={() => handleNavClick(sectionId)}
            className={`relative pb-1 text-lg transition-colors hidden lg:flex font-semibold cursor-pointer 
              ${isActive ? "text-emerald-800 font-medium" : "text-gray-600"}
            `}
          >
            {item}

            {isActive && (
              <span className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 w-1/2 rounded-full
              bg-emerald-700 transition-all duration-300 ${isActive ? 'w-1/2 opacity-100' : 'w-0 opacity-0'}`}/>
            )}
          </button>
        );
      })}

      <div className='space-x-3 hidden lg:flex lg:gap-5 text-xl'>
        {
          theme === 'dark' ? 
          <Sun color='#B16406' className='cursor-pointer' onClick={toggleTheme}/>: 
          <MoonIcon color='orange' className='cursor-pointer' onClick={toggleTheme}/>
        }
      </div>

      <div className='lg:hidden cursor-pointer transition-all duration-75' onClick={handleMenuClick}>
        <motion.svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <motion.line
            x1='4'
            y1='6'
            x2='20'
            y2='6'
            animate={{
              x1: isMenuOpen ? 6 : 4,
              y1: 6,
              x2: isMenuOpen ? 18 : 20,
              y2: isMenuOpen ? 18 : 6,
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
          <motion.line
            x1='4'
            y1='12'
            x2='20'
            y2='12'
            animate={{ opacity: isMenuOpen ? 0 : 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
          <motion.line
            x1='4'
            y1='18'
            x2='20'
            y2='18'
            animate={{
              x1: isMenuOpen ? 6 : 4,
              y1: 18,
              x2: isMenuOpen ? 18 : 20,
              y2: isMenuOpen ? 6 : 18,
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
        </motion.svg>
      </div>
    </nav>
    {isMenuOpen ? <OpenMenu /> : null}
    </>
  )
}

export default Navbar
