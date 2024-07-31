import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5
    });

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleNavigateToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <nav style={{margin: "0 8%", padding: "1vw"}} className="bg-transparent justify-center border-b border-red-950">
      <div className="container flex justify-between items-center">
        <div style={{margin: "0 7.7vw"}} className="flex">
          <button
            onClick={() => handleNavigateToSection('tokoh')}
            style={{margin: "0 9vw", fontSize: "1.3vw"}} className={`text-red-900 spectral-regular ${activeSection === 'tokoh' ? 'font-bold' : ''}`}
          >
            TOKOH
          </button>
          <button
            onClick={() => handleNavigateToSection('home')}
            style={{margin: "0 9vw", fontSize: "1.3vw"}} className={`text-red-900 spectral-regular ${activeSection === 'home' ? 'font-bold' : ''}`}
          >
            HOME
          </button>
          <button
            onClick={() => handleNavigateToSection('timeline')}
            style={{margin: "0 9vw", fontSize: "1.3vw"}} className={`text-red-900 spectral-regular ${activeSection === 'timeline' ? 'font-bold' : ''}`}
          >
            TIMELINE
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
