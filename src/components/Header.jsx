import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = [
    { label: 'Anasayfa', path: '/' },
    { label: 'Kurumsal', path: '/kurumsal' },
    { label: 'Hizmetler', path: '#hizmetler' },
    { label: 'İletişim', path: '/iletisim' },
  ];
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const menuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: 0 },
  };

  const handleNavClick = (item) => {
    if (item.label === 'Hizmetler') {
      if (window.location.pathname === '/') {
        const section = document.getElementById('hizmetler');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/');
        setTimeout(() => {
          const section = document.getElementById('hizmetler');
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
      }
    } else {
      navigate(item.path);
    }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className={`fixed top-0 left-0 bg-white right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/50 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <motion.img
            src="/images/loo2.png"
            onClick={() => navigate('/')}
            alt="Bella Trix Güzellik Salonu"
            className="h-16 w-auto transition-transform duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          />

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="relative text-lg font-medium text-gray-700 transition-colors duration-300 hover:text-[#d25483] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#d25483] after:transition-all after:duration-300 hover:after:w-full bg-transparent"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden items-center space-x-6 md:flex">
            <a
              href="tel:+905555555555"
              className="group flex items-center space-x-2 rounded-full bg-[#d25483] px-6 py-2.5 text-white transition-all duration-300 hover:bg-[#ff3366] hover:shadow-lg"
            >
              <FaPhoneAlt className="transition-transform duration-300 group-hover:scale-110" />
              <span>Randevu Al</span>
            </a>

            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/kusadasisacbellatrixsalon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 transition-all duration-300 hover:text-[#d25483] hover:scale-110"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.google.com.tr/maps/place/Bella+Trix"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 transition-all duration-300 hover:text-[#d25483] hover:scale-110"
              >
                <FiMapPin size={24} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 transition-colors duration-300 hover:text-[#d25483] md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm md:hidden"
          >
            <div className="flex h-full flex-col p-6">
              <div className="mb-8 flex justify-end">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 transition-colors duration-300 hover:text-[#d25483]"
                  aria-label="Close menu"
                >
                  <FaTimes size={24} />
                </button>
              </div>

              <nav className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleNavClick(item);
                    }}
                    className="text-xl font-medium text-gray-700 transition-colors duration-300 hover:text-[#d25483]"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="mt-auto space-y-6">
                <a
                  href="tel:+905555555555"
                  className="flex items-center justify-center space-x-2 rounded-full bg-[#d25483] px-6 py-3 text-white transition-all duration-300 hover:bg-[#ff3366] hover:shadow-lg"
                >
                  <FaPhoneAlt />
                  <span>Randevu Al</span>
                </a>

                <div className="flex items-center justify-center space-x-6">
                  <a
                    href="https://www.instagram.com/kusadasisacbellatrixsalon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 transition-all duration-300 hover:text-[#d25483] hover:scale-110"
                  >
                    <FaInstagram size={28} />
                  </a>
                  <a
                    href="https://www.google.com.tr/maps/place/Bella+Trix"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 transition-all duration-300 hover:text-[#d25483] hover:scale-110"
                  >
                    <FiMapPin size={28} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
