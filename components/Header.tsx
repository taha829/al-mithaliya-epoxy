import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'الرئيسية' },
    { to: '/about', label: 'من نحن' },
    { to: '/services', label: 'خدماتنا' },
    { to: '/gallery', label: 'أعمالنا' },
    { to: '/why-us', label: 'لماذا نحن؟' },
    { to: '/testimonials', label: 'آراء العملاء' },
    { to: '/design-generator', label: 'مولد الأفكار' },
    { to: '/consultation', label: 'استشارة مجانية' },
    { to: '/contact', label: 'تواصل معنا' },
  ];
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-gray-900/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-3 text-2xl font-bold text-amber-400">
            <img 
              src="/logo.png" 
              alt="شعار الشركة المثالية" 
              className="w-12 h-12 rounded-full border-2 border-amber-400"
            />
            <span>
              المثالية<span className="text-white">للإيبوكسي</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink 
                key={link.to} 
                to={link.to} 
                className={({isActive}) => `text-gray-300 hover:text-amber-400 transition-colors duration-300 ${isActive ? 'text-amber-400 font-bold' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
          </button>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
           <nav className="flex flex-col items-center py-4 border-t border-gray-700">
            {navLinks.map((link) => (
              <NavLink 
                key={link.to} 
                to={link.to} 
                onClick={() => setIsMenuOpen(false)}
                className={({isActive}) => `w-full text-center text-gray-300 hover:text-amber-400 py-3 transition-colors duration-300 ${isActive ? 'text-amber-400 bg-gray-800 font-bold' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
           </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;