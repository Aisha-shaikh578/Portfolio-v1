import React, { useEffect, useState } from 'react'
import { MoonIcon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const OpenMenu = () => {
  const navItems=[
    'Home',
    'Projects',
    'Skills',
    'About',
    'Contact'
  ];
  const [activeSection, setActiveSection] = useState('home');
  const {theme, toggleTheme} = useTheme(); 

useEffect(() => {
  const sectionIds = ["home", "projects", "skills", "about", "contact"];

  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter((section) => section !== null);

  const observer = new IntersectionObserver(
    () => {
      // An activation point near the top of the screen
      const activationPoint = 160;

      // Find the section crossing that point
      const currentSection = sections.find((section) => {
        const rect = section.getBoundingClientRect();

        return (
          rect.top <= activationPoint &&
          rect.bottom > activationPoint
        );
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
        return;
      }

      // Fallback: choose the section closest to the activation point
      const closestSection = sections.reduce((closest, section) => {
        const rect = section.getBoundingClientRect();

        const distance = Math.abs(rect.top - activationPoint);
        const closestDistance = Math.abs(
          closest.getBoundingClientRect().top - activationPoint
        );

        return distance < closestDistance ? section : closest;
      });

      if (closestSection) {
        setActiveSection(closestSection.id);
      }
    },
    {
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-400' : 'bg-slate-100'} m-1.5 p-1 z-50 lg:hidden fixed mx-[3vw] items-center opacity-90 py-2.5 rounded mt-24 w-[94vw] md:w-[85vw] md:ml-15 transition-all duration-300`}>
      <div className='flex justify-evenly text-center text-sm md:text-lg'>
      {navItems.map((item) => {
        const sectionId = item.toLowerCase();
        const isActive = activeSection === sectionId;
  
        return (
          <button
            key={item}
            onClick={() => handleNavClick(sectionId)}
            className={`relative pb-1 text-sm flex lg:hidden font-semibold cursor-pointer transition-all duration-300
              ${isActive ? "text-emerald-800 font-medium" : "text-gray-600"}
            `}
          >
            {item}

            {isActive && (
              <span className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 w-1/2 rounded-full
              bg-emerald-700 ${isActive ? 'w-1/2 opacity-100' : 'w-0 opacity-0'}`} />
            )}
          </button>
        );
      })}
    
      {theme === 'dark' ?
      <Sun color='#B16406' onClick={toggleTheme}/> :
      <MoonIcon color='orange' onClick={toggleTheme}/>
     }
    </div>
    </div>
  )
}

export default OpenMenu
