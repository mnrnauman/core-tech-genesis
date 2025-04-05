
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Globe, Cloud, Phone, Search, Coffee } from 'lucide-react';

const services = [
  {
    id: 'web',
    title: 'Web Development & Hosting',
    description: 'Custom-built websites, web applications, and reliable hosting services to establish your online presence.',
    longDescription: 'Our web development team creates responsive, user-friendly websites and applications tailored to your specific business needs. We combine cutting-edge technology with intuitive design to deliver solutions that engage your audience and drive conversions. Our hosting services ensure your digital assets are always accessible, secure, and performing optimally.',
    icon: Globe,
    features: [
      'Custom Website Design',
      'Web Application Development',
      'E-commerce Solutions',
      'CMS Implementation',
      'Reliable Web Hosting',
      'Website Maintenance',
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud (Public & Private)',
    description: 'Secure, scalable cloud solutions that provide flexibility and reduce your IT infrastructure costs.',
    longDescription: 'Migrate to the cloud with confidence. Our cloud services deliver the scalability and flexibility your business needs while ensuring your data remains secure. Whether you need public, private, or hybrid cloud solutions, we design and implement robust architectures that optimize performance and minimize costs.',
    icon: Cloud,
    features: [
      'Cloud Migration Services',
      'AWS & Azure Solutions',
      'Private Cloud Development',
      'Hybrid Cloud Architecture',
      'Cloud Security Implementation',
      'Ongoing Cloud Management',
    ]
  },
  {
    id: 'voip',
    title: 'PBX & VoIP',
    description: 'Advanced communication systems that enhance collaboration and improve business connectivity.',
    longDescription: 'Modernize your business communications with our VoIP and PBX solutions. We design and implement reliable voice systems that enhance connectivity while reducing costs. Our solutions integrate seamlessly with your existing infrastructure and can scale as your business grows.',
    icon: Phone,
    features: [
      'IP-PBX System Design',
      'VoIP Implementation',
      'Unified Communications',
      'Call Center Solutions',
      'Video Conferencing Setup',
      '24/7 Support Services',
    ]
  },
  {
    id: 'seo',
    title: 'SEO & Digital Marketing',
    description: 'Strategic digital marketing services to boost your online visibility and drive business growth.',
    longDescription: 'Our digital marketing services help you stand out in today's competitive online landscape. From comprehensive SEO strategies to targeted content marketing, we develop data-driven campaigns that increase your visibility and drive qualified traffic to your business.',
    icon: Search,
    features: [
      'SEO Strategy Development',
      'Content Marketing',
      'Social Media Management',
      'PPC Advertising',
      'Email Marketing Campaigns',
      'Analytics & Reporting',
    ]
  },
  {
    id: 'consultancy',
    title: 'IT Consultancy',
    description: 'Expert guidance on IT strategy, infrastructure planning, and technology implementation.',
    longDescription: 'Our IT consultancy services provide strategic guidance to help you make informed technology decisions. We work closely with your team to understand your business challenges and develop tailored solutions that align with your objectives and budget.',
    icon: Coffee,
    features: [
      'IT Strategy Development',
      'Infrastructure Assessment',
      'Technology Roadmapping',
      'IT Budget Planning',
      'Digital Transformation',
      'Security Auditing',
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Header Section */}
        <section className="py-20 bg-gencore-dark relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Services</h1>
              <div className="h-1 w-20 bg-gencore-orange mx-auto"></div>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions designed to address your business challenges and drive innovation.
              </p>
            </div>
          </div>
        </section>
        
        {/* Services List */}
        <section className="py-16 bg-gencore-darker">
          <div className="container mx-auto px-4 md:px-6">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`py-16 ${index !== services.length - 1 ? 'border-b border-gray-800' : ''}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="p-4 rounded-full bg-gencore-orange/10 w-fit mb-6">
                      <service.icon className="text-gencore-orange" size={32} />
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-white">{service.title}</h2>
                    <p className="text-gray-300 mb-6 text-lg">{service.longDescription}</p>
                    <button className="btn-primary group">
                      Get Started
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </button>
                  </div>
                  
                  <div className="bg-gencore-dark p-8 rounded-lg border border-gray-800">
                    <h3 className="text-xl font-semibold mb-6 text-white">Features</h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-6 h-6 text-gencore-orange mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gencore-dark relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gencore-orange/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-gradient-to-br from-gencore-darker to-blue-900/70 p-8 md:p-12 rounded-xl relative overflow-hidden border border-gray-800 max-w-4xl mx-auto">
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Get Started?</h2>
                <p className="text-gray-300 mb-6 max-w-2xl">
                  Contact us today to discuss how our services can benefit your business. Our team is ready to provide you with a tailored solution that meets your needs.
                </p>
                <a href="/contact" className="btn-primary">
                  Contact Us
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
              </div>
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-gencore-orange/20 rounded-full filter blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-700/20 rounded-full filter blur-2xl"></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
