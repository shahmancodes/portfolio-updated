
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBooksClick = () => {
    navigate('/books');
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/80 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            Portfolio
          </div>
          <div className="hidden md:flex space-x-8">
            {[
              { name: 'Home', action: () => scrollToSection('home') },
              { name: 'About', action: () => scrollToSection('about') },
              { name: 'Education', action: () => scrollToSection('education') },
              { name: 'Experience', action: () => scrollToSection('experience') },
              { name: 'Skills', action: () => scrollToSection('skills') },
              { name: 'Projects', action: () => scrollToSection('projects') },
              { name: 'Books', action: handleBooksClick },
              { name: 'Contact', action: () => scrollToSection('contact') }
            ].map((item) => (
              <button
                key={item.name}
                onClick={item.action}
                className="text-gray-300 hover:text-white transition-colors duration-300 hover:scale-105 transform"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
