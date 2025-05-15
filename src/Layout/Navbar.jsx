import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../utils/data';
import { logo } from '../assets/images/image';
import Button from '../components/Button';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-[#FFEB9A] w-full flex items-center justify-between px-4 py-[1rem] md:px-12">
      {/* Logo */}
      <div className="flex items-center gap-2 md:pl-2 pl-2">
        <img src={logo} alt="KiwiRoo Jobs Logo" className="w-[9.1rem]" />
      </div>
      {/* Desktop Links */}
      <ul className="hidden lg:flex items-center gap-7">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link
              to={link.href}
              className={`text-[#06110C]  Montserrat text-[0.9rem] transition-colors ${
                location.pathname === link.href ? 'font-bold' : 'font-medium'
              }`}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

    <div className="hidden lg:block">
  <Button
    isActive={location.pathname === '/signin'}
  />
</div>

    
      <button
        className="flex md:flex lg:hidden items-center justify-center p-2 px-7 rounded-full hover:bg-[#FFF0A6] transition-colors"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <AnimatePresence mode="wait">
          {menuOpen ? (
            <motion.div
              key="cross"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="15" y2="18" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
      {/* Mobile Menu (Dropdown) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-14 left-0 w-full bg-[#FFF0A6] z-50 lg:hidden"
          >
            <ul className="flex flex-col items-center gap-4 py-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.href}
                    className={`text-black Montserrat text-base font-medium transition-colors ${
                      location.pathname === link.href ? 'font-bold' : ''
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              <li>
                <Button isActive={location.pathname === '/signin'} />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

