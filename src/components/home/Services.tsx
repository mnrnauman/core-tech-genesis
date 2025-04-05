
import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Cloud, Phone, Search, Coffee } from 'lucide-react';

const services = [
  {
    title: 'Web Development & Hosting',
    description: 'Custom-built websites, web applications, and reliable hosting services to establish your online presence.',
    icon: Globe,
    link: '/services#web'
  },
  {
    title: 'Cloud (Public & Private)',
    description: 'Secure, scalable cloud solutions that provide flexibility and reduce your IT infrastructure costs.',
    icon: Cloud,
    link: '/services#cloud'
  },
  {
    title: 'PBX & VoIP',
    description: 'Advanced communication systems that enhance collaboration and improve business connectivity.',
    icon: Phone,
    link: '/services#voip'
  },
  {
    title: 'SEO & Digital Marketing',
    description: 'Strategic digital marketing services to boost your online visibility and drive business growth.',
    icon: Search,
    link: '/services#seo'
  },
  {
    title: 'IT Consultancy',
    description: 'Expert guidance on IT strategy, infrastructure planning, and technology implementation.',
    icon: Coffee,
    link: '/services#consultancy'
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gencore-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="text-gray-300 max-w-2xl mt-6 text-lg">
            Comprehensive IT solutions designed to address your business challenges and drive innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card card-hover p-6 flex flex-col h-full"
            >
              <div className="p-3 rounded-full bg-gencore-orange/10 w-fit mb-4">
                <service.icon className="text-gencore-orange" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 mb-6 flex-grow">{service.description}</p>
              <Link 
                to={service.link}
                className="text-gencore-orange hover:text-gencore-orange-light inline-flex items-center font-medium"
              >
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary">
            View All Services
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
