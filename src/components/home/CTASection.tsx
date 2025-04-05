
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gencore-dark to-blue-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoLTZWMzRoLTZ2LTZoNnYtNmg2djZoNnY2aC02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-gencore-orange/30 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-700/20 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Partner with GENCORE IT for innovative solutions that drive your business forward. Our team of experts is ready to help you achieve your technology goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
      </div>
    </section>
  );
};

export default CTASection;
