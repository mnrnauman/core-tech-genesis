
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full py-4 bg-gencore-darker shadow-md fixed top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/5656f83f-4e7e-474f-9976-98023ab9d7e9.png" 
              alt="GENCORE IT Logo" 
              className="h-12 md:h-14" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/solutions" className="nav-link">Solutions</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/testimonials" className="nav-link">Testimonials</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-gencore-darker py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="nav-link px-4" onClick={toggleMenu}>Home</Link>
              <Link to="/services" className="nav-link px-4" onClick={toggleMenu}>Services</Link>
              <Link to="/solutions" className="nav-link px-4" onClick={toggleMenu}>Solutions</Link>
              <Link to="/about" className="nav-link px-4" onClick={toggleMenu}>About</Link>
              <Link to="/blog" className="nav-link px-4" onClick={toggleMenu}>Blog</Link>
              <Link to="/testimonials" className="nav-link px-4" onClick={toggleMenu}>Testimonials</Link>
              <Link to="/contact" className="nav-link px-4" onClick={toggleMenu}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
