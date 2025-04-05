
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { CheckCircle, Award, Target } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Muhammad Nauman',
      position: 'CEO & Founder',
      bio: 'With over 15 years of experience in IT services, Muhammad leads GENCORE IT with a vision to deliver next-generation technology solutions to businesses worldwide.',
      linkedin: 'https://linkedin.com',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80'
    },
    {
      name: 'Nadeem Yaseen',
      position: 'CTO',
      bio: 'Nadeem oversees all technical aspects of GENCORE IT, bringing extensive expertise in cloud architecture, cybersecurity, and enterprise solutions.',
      linkedin: 'https://linkedin.com',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80'
    },
    {
      name: 'Muhammad Shoaib Ghauri',
      position: 'COO',
      bio: 'Shoaib manages the day-to-day operations at GENCORE IT, ensuring efficient delivery of services and maintaining high customer satisfaction.',
      linkedin: 'https://linkedin.com',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80'
    }
  ];

  const timeline = [
    {
      year: '2015',
      title: 'Founded',
      description: 'GENCORE IT was established with a vision to provide innovative IT solutions to businesses.'
    },
    {
      year: '2017',
      title: 'Expansion',
      description: 'Expanded service offerings to include cloud solutions and digital marketing services.'
    },
    {
      year: '2019',
      title: 'Growth',
      description: 'Doubled team size and moved to a larger office in Gulberg, Lahore.'
    },
    {
      year: '2021',
      title: 'Innovation',
      description: 'Launched custom CRM and ERP solutions for specific industries.'
    },
    {
      year: '2023',
      title: 'Global Reach',
      description: 'Extended services to international clients across multiple continents.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Header Section */}
        <section className="py-20 bg-gencore-dark relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About GENCORE IT</h1>
              <div className="h-1 w-20 bg-gencore-orange mx-auto"></div>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                We are a team of technology enthusiasts dedicated to providing next-generation IT solutions for businesses of all sizes.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission & Vision */}
        <section className="py-16 bg-gencore-darker">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="card p-8">
                <div className="flex items-center mb-6">
                  <Target className="text-gencore-orange mr-4" size={32} />
                  <h2 className="text-2xl font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-gray-300">
                  To empower businesses with innovative technology solutions that drive growth, enhance efficiency, and ensure security. We are committed to delivering exceptional service and becoming a trusted technology partner for our clients.
                </p>
              </div>
              
              <div className="card p-8">
                <div className="flex items-center mb-6">
                  <Award className="text-gencore-orange mr-4" size={32} />
                  <h2 className="text-2xl font-bold text-white">Our Vision</h2>
                </div>
                <p className="text-gray-300">
                  To be recognized as a leading provider of next-generation IT solutions globally, known for our technical excellence, innovative approach, and unwavering commitment to client success.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Timeline */}
        <section className="py-16 bg-gencore-dark">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-white text-center">Our Journey</h2>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gencore-orange/30"></div>
              
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-center justify-between mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className={`card p-6 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`} style={{ maxWidth: '300px' }}>
                      <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gencore-orange flex items-center justify-center relative z-10">
                      <span className="text-gencore-dark font-bold">{item.year}</span>
                    </div>
                  </div>
                  
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 bg-gencore-darker">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-white text-center">Our Leadership Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="card card-hover p-6 text-center">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-2 border-gencore-orange"
                  />
                  <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                  <p className="text-gencore-orange mb-4">{member.position}</p>
                  <p className="text-gray-300 mb-6 text-sm">{member.bio}</p>
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gencore-orange hover:text-gencore-orange-light"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    LinkedIn Profile
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-16 bg-gencore-dark">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-white text-center">Our Core Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="card p-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="text-gencore-orange mr-3" size={24} />
                  <h3 className="text-xl font-bold text-white">Innovation</h3>
                </div>
                <p className="text-gray-300">
                  We continuously explore emerging technologies to provide cutting-edge solutions to our clients.
                </p>
              </div>
              
              <div className="card p-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="text-gencore-orange mr-3" size={24} />
                  <h3 className="text-xl font-bold text-white">Excellence</h3>
                </div>
                <p className="text-gray-300">
                  We strive for excellence in every aspect of our work, from technical implementation to customer service.
                </p>
              </div>
              
              <div className="card p-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="text-gencore-orange mr-3" size={24} />
                  <h3 className="text-xl font-bold text-white">Integrity</h3>
                </div>
                <p className="text-gray-300">
                  We operate with honesty, transparency, and accountability in all our business relationships.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-gencore-darker to-blue-900/70">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Work with Us?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our team is ready to help you transform your business with innovative IT solutions.
              </p>
              <a href="/contact" className="btn-primary">
                Contact Us Today
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
