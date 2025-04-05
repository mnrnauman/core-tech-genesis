
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gencore-darker pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img 
              src="/lovable-uploads/5656f83f-4e7e-474f-9976-98023ab9d7e9.png" 
              alt="GENCORE IT Logo" 
              className="h-12 mb-4" 
            />
            <p className="text-gray-400 mb-4">Next Generation Core IT Solutions.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gencore-orange">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gencore-orange">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gencore-orange">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-gencore-orange">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-gencore-orange">Services</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-gencore-orange">Solutions</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-gencore-orange">About</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-gencore-orange">Blog</Link></li>
              <li><Link to="/testimonials" className="text-gray-400 hover:text-gencore-orange">Testimonials</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-gencore-orange">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-gencore-orange">Web Development & Hosting</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-gencore-orange">Cloud (Public & Private)</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-gencore-orange">PBX & VoIP</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-gencore-orange">SEO & Digital Marketing</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-gencore-orange">IT Consultancy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 shrink-0 text-gencore-orange" size={18} />
                <span className="text-gray-400">4th Floor, Saeed Alam Tower, Liberty Market, Gulberg, Lahore</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 shrink-0 text-gencore-orange" size={18} />
                <a href="tel:+923320000911" className="text-gray-400 hover:text-gencore-orange">+92 332 0000911</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 shrink-0 text-gencore-orange" size={18} />
                <a href="mailto:nauman@gencoreit.com" className="text-gray-400 hover:text-gencore-orange">nauman@gencoreit.com</a>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 shrink-0 text-gencore-orange" size={18} />
                <span className="text-gray-400">Monday–Friday: 09:00 AM – 07:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} GENCORE IT. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-400 hover:text-gencore-orange text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gencore-orange text-sm">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gencore-orange text-sm">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
