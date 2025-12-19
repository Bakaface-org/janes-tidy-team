import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-soft' : 'bg-white/95'
    }`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between items-center">
          {/* Empty div to maintain spacing with logo */}
          <div className="flex-shrink-0 pl-32 sm:pl-44 md:pl-52 lg:pl-56" />
          
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-3 rounded-md text-brand-blue hover:text-brand-green focus:outline-none ml-auto"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-7 w-7" aria-hidden="true" />
              ) : (
                <Menu className="h-7 w-7" aria-hidden="true" />
              )}
            </button>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('services')} 
              aria-label="Go to Services section"
              className="text-sm lg:text-base font-medium text-gray-700 hover:text-brand-blue transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 rounded-lg hover:bg-white/40 hover:backdrop-blur-sm hover:shadow-soft"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('process')} 
              aria-label="Go to Process section"
              className="text-sm lg:text-base font-medium text-gray-700 hover:text-brand-blue transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 rounded-lg hover:bg-white/40 hover:backdrop-blur-sm hover:shadow-soft"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              aria-label="Go to About Us section"
              className="text-sm lg:text-base font-medium text-gray-700 hover:text-brand-blue transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 rounded-lg hover:bg-white/40 hover:backdrop-blur-sm hover:shadow-soft"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              aria-label="Go to Contact section"
              className="text-sm lg:text-base font-medium text-gray-700 hover:text-brand-blue transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 rounded-lg hover:bg-white/40 hover:backdrop-blur-sm hover:shadow-soft"
            >
              Contact
            </button>
            <a
              href="https://clienthub.getjobber.com/booking/cfb8885f-4a68-4736-a19e-f391989be14a"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-blue text-white px-4 py-2 rounded-lg text-sm lg:text-base font-bold hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 hover:backdrop-blur-sm hover:shadow-soft"
              aria-label="Book Now"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        mobileMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="flex flex-col space-y-3 px-4">
          <button 
            onClick={() => scrollToSection('services')} 
            aria-label="Go to Services section"
            className="text-base font-medium text-gray-700 hover:text-brand-blue py-2 px-4 rounded-lg transition-all duration-300 hover:bg-white/40 hover:backdrop-blur-sm hover:shadow-soft"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('process')} 
            aria-label="Go to Process section"
            className="text-base font-medium text-gray-700 hover:text-brand-blue py-2 px-4 rounded-lg transition-all duration-300 hover:bg-white/40 hover:backdrop-blur-sm hover:shadow-soft"
          >
            Process
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            aria-label="Go to About Us section"
            className="text-base font-medium text-gray-700 hover:text-brand-blue py-2 px-4 rounded-lg transition-all duration-300 hover:bg-white/40 hover:backdrop-blur-sm hover:shadow-soft"
          >
            About Us
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            aria-label="Go to Contact section"
            className="text-base font-medium text-gray-700 hover:text-brand-blue py-2 px-4 rounded-lg transition-all duration-300 hover:bg-white/40 hover:backdrop-blur-sm hover:shadow-soft"
          >
            Contact
          </button>
          <a
            href="https://clienthub.getjobber.com/booking/cfb8885f-4a68-4736-a19e-f391989be14a"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-blue text-white px-4 py-2 rounded-lg text-sm lg:text-base font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 hover:backdrop-blur-sm hover:shadow-soft w-fit mx-auto"
            aria-label="Book Now"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;