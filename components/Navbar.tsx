import React, { useState, useEffect } from 'react';
import { Menu, X, Building2, Home, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ViewType } from '../types';

interface NavbarProps {
  currentView: ViewType;
  onChangeView: (view: ViewType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onChangeView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Inicio', icon: Home },
    { id: 'real-estate', label: 'Servicio', icon: Building2 },
    { id: 'manifesto', label: 'Visión', icon: Compass },
  ];

  const handleNavClick = (view: ViewType) => {
    onChangeView(view);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Function to find and scroll to element
    const scrollToElement = () => {
      const bookingSection = document.getElementById('booking');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (currentView === 'manifesto') {
      // If we are in manifesto, we need to switch to a view that has the Booking component
      // 'home' has the Booking component
      onChangeView('home');
      // We need a slight delay to allow React to render the new view before scrolling to the element
      setTimeout(() => {
        scrollToElement();
      }, 300);
    } else {
      // Already in a view with Booking, just scroll
      scrollToElement();
    }
    
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-brand-dark/80 backdrop-blur-md border-white/10 py-4' : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => handleNavClick('home')} className="flex items-center gap-3 group">
          <div className="relative w-10 h-10">
             {/* Custom TeikoAI Logo SVG - Finer Wireframe Version */}
             <svg 
               viewBox="0 0 100 110" 
               fill="none" 
               xmlns="http://www.w3.org/2000/svg" 
               className="w-full h-full text-brand-cyan relative z-10 group-hover:scale-105 transition-transform duration-300"
             >
              {/* Outer Hexagon */}
              <path 
                d="M50 5L93.3013 30V80L50 105L6.69873 80V30L50 5Z" 
                stroke="currentColor" 
                strokeWidth="3"
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              {/* Inner Hexagon */}
              <path 
                d="M50 30L71.6506 42.5V67.5L50 80L28.3494 67.5V42.5L50 30Z" 
                stroke="currentColor" 
                strokeWidth="3"
                strokeLinecap="round" 
                strokeLinejoin="round"
                opacity="0.8"
              />
            </svg>
            <div className="absolute inset-0 bg-brand-cyan/20 blur-lg group-hover:bg-brand-cyan/40 transition-all opacity-0 group-hover:opacity-100" />
          </div>
          <span className="text-xl font-display font-bold text-white tracking-wide">
            TeikoAI
          </span>
        </button>

        {/* Desktop Menu - Tabs Style */}
        <div className="hidden md:flex items-center bg-white/5 rounded-full p-1 border border-white/10 backdrop-blur-sm">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id as ViewType)}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-brand-cyan rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="hidden md:block">
          <a 
            href="#booking"
            onClick={handleScrollToBooking}
            className="px-6 py-2.5 text-sm font-semibold bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all hover:border-brand-cyan/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
          >
            Agendar Reunión
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark border-b border-white/10"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => handleNavClick(item.id as ViewType)}
                  className={`flex items-center gap-3 text-lg font-medium p-3 rounded-lg ${
                    currentView === item.id ? 'bg-brand-cyan/20 text-brand-cyan' : 'text-gray-300'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </button>
              ))}
              <a 
                href="#booking"
                onClick={handleScrollToBooking}
                className="mt-4 text-center px-5 py-3 font-semibold bg-brand-cyan text-black rounded-lg"
              >
                Agendar Reunión
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};