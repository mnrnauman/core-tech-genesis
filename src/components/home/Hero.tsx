
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gencore-dark overflow-hidden pt-16">
      {/* Background gradient effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-gencore-dark to-transparent opacity-80"></div>
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-b from-gencore-orange/20 to-transparent blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-blue-900/20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animation-delay-100 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Next Generation <span className="text-gencore-orange">Core IT</span> Solutions
            </h1>
            <p className="text-xl mb-8 text-gray-300 max-w-xl">
              Empowering businesses with innovative technology solutions that drive growth, enhance efficiency, and ensure security.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary group">
                Get a Free Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
              <Link to="/services" className="btn-secondary group">
                Explore Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>
          </div>
          
          <div className="relative animation-delay-300 animate-fade-in hidden lg:block">
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-gencore-orange/20 rounded-lg transform rotate-3 scale-95"></div>
              <div className="absolute inset-0 bg-gencore-darker rounded-lg border border-gray-800 overflow-hidden">
                <img
                  src="/lovable-uploads/4f273fa5-f039-4e2b-8b33-1adebc112bbe.png"
                  alt="GENCORE IT Solutions"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gencore-orange rounded-full blur-xl opacity-50"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-700 rounded-full blur-xl opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
