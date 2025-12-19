import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { ScrollProvider, useScroll } from './components/ScrollContext';

const AppContent = () => {
  const { isScrolled } = useScroll();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Logo with conditional sizing based on scroll and screen size */}
      <div className={`fixed top-2 left-4 sm:left-8 z-50 transition-all duration-500 ${
        isScrolled ? 'lg:top-2 lg:left-8' : 'lg:top-2 lg:left-8'
      }`}>
        <Link to="/" onClick={scrollToTop} className="block transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl rounded-full">
          <img 
            src="/logo.png"
            alt="Jane's Tidy Team Nashville Home Organization Logo"
            className={`object-contain transition-all duration-500 ${
              isScrolled 
                ? 'w-16 h-16 sm:w-20 sm:h-20 lg:w-40 lg:h-40' 
                : 'w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48'
            }`}
          />
        </Link>
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollProvider>
        <AppContent />
      </ScrollProvider>
    </Router>
  );
}

export default App;