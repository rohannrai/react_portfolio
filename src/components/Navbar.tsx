import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
    { name: 'Resume', path: '/resume' },
  ];

  return (
    <motion.header 
      className={`fixed w-full z-50 py-4 ${
        scrolled ? 'bg-dark shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <motion.div 
            className="text-secondary"
            style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
            whileHover={{ scale: 1.05 }}
          >
            Rohan Rai
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden-sm md-flex items-center" style={{ gap: '2rem' }}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`${
                location.pathname === link.path ? 'text-secondary' : 'text-light'
              }`}
              style={{ transition: 'color 0.3s ease' }}
            >
              <motion.span
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {link.name}
              </motion.span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md-hidden" style={{ display: 'block' }}>
          <motion.button 
            onClick={toggleMenu}
            className="text-light"
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer',
              zIndex: 60,
              position: 'relative'
            }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              style={{ width: '1.5rem', height: '1.5rem' }}
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu with AnimatePresence for smooth transitions */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md-hidden bg-dark shadow-lg"
            style={{ 
              position: 'fixed', 
              top: '0', 
              left: 0, 
              width: '100%',
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 50
            }}
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="container flex flex-col items-center" style={{ gap: '2rem' }}>
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={link.path}
                    className={`py-2 text-center text-2xl ${
                      location.pathname === link.path ? 'text-secondary' : 'text-light'
                    }`}
                    style={{ 
                      transition: 'color 0.3s ease',
                      display: 'block',
                      width: '100%'
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar; 