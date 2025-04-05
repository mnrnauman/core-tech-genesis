
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const clientLogos = [
  {
    name: 'Company 1',
    logo: 'https://via.placeholder.com/150x80/0F172A/D1D5DB?text=Client+1'
  },
  {
    name: 'Company 2',
    logo: 'https://via.placeholder.com/150x80/0F172A/D1D5DB?text=Client+2'
  },
  {
    name: 'Company 3',
    logo: 'https://via.placeholder.com/150x80/0F172A/D1D5DB?text=Client+3'
  },
  {
    name: 'Company 4',
    logo: 'https://via.placeholder.com/150x80/0F172A/D1D5DB?text=Client+4'
  },
  {
    name: 'Company 5',
    logo: 'https://via.placeholder.com/150x80/0F172A/D1D5DB?text=Client+5'
  },
  {
    name: 'Company 6',
    logo: 'https://via.placeholder.com/150x80/0F172A/D1D5DB?text=Client+6'
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    position: 'CEO, TechStart Inc.',
    testimonial: 'Working with GENCORE IT transformed our business operations. Their cloud solutions saved us significant IT costs while improving our overall efficiency. The team was professional, knowledgeable, and responsive throughout the entire implementation process.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80'
  },
  {
    name: 'Michael Chen',
    position: 'CTO, EnterpriseX',
    testimonial: 'The level of technical expertise at GENCORE IT is impressive. Their team implemented a custom ERP solution that perfectly aligned with our complex business requirements. The solution has streamlined our operations and provided valuable business insights that have directly impacted our bottom line.',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80'
  },
  {
    name: 'Emily Rodriguez',
    position: 'Marketing Director, GlobalSales',
    testimonial: 'Their SEO and digital marketing services helped us increase our online visibility significantly. We\'ve seen a 150% increase in quality leads since working with GENCORE IT. Their data-driven approach and regular reporting gave us confidence in the strategies they implemented.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80'
  },
  {
    name: 'David Wilson',
    position: 'IT Manager, HealthPlus',
    testimonial: 'GENCORE IT\'s healthcare CRM solution has revolutionized how we manage patient relationships. The system is HIPAA-compliant, user-friendly, and has significantly improved our patient communication and care coordination. Their support team is always available when we need assistance.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80'
  },
  {
    name: 'Sophia Garcia',
    position: 'Operations Manager, TravelWise',
    testimonial: 'The custom CRM solution developed by GENCORE IT for our travel agency has been a game-changer. It has automated many of our manual processes, improved booking accuracy, and enhanced our customer service. The ROI on this investment has exceeded our expectations.',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80'
  },
  {
    name: 'Robert Kim',
    position: 'CEO, PropertyMasters',
    testimonial: 'As a real estate firm, we needed a specialized CRM that could handle our unique workflow. GENCORE IT delivered a solution that has transformed how we manage properties and client relationships. Their team took the time to understand our business and delivered exactly what we needed.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80'
  }
];

const Testimonials = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Header Section */}
        <section className="py-20 bg-gencore-dark relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gencore-orange/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Client Testimonials</h1>
              <div className="h-1 w-20 bg-gencore-orange mx-auto"></div>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients have to say about their experience working with GENCORE IT.
              </p>
            </div>
          </div>
        </section>
        
        {/* Client Logos */}
        <section className="py-16 bg-gencore-darker">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-12 text-white text-center">Trusted by Businesses</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {clientLogos.map((client, index) => (
                <div key={index} className="flex justify-center">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-12 grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Grid */}
        <section className="py-16 bg-gencore-dark">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-white text-center">What Our Clients Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="card card-hover p-8">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full object-cover border-2 border-gencore-orange"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                      <p className="text-gencore-orange text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                  
                  <svg className="w-10 h-10 text-gencore-orange/30 mb-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  
                  <p className="text-gray-300 mb-4 italic">{testimonial.testimonial}</p>
                  
                  <div className="flex mt-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-gencore-orange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Video Testimonial (Placeholder) */}
        <section className="py-16 bg-gencore-darker">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-white text-center">Video Testimonials</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video bg-gencore-dark rounded-xl overflow-hidden border border-gray-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gencore-orange flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-gencore-orange-light transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gencore-dark ml-1"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    </div>
                    <p className="text-white text-lg font-medium">Client Success Story: TechStart Inc.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-gencore-dark to-blue-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Join Our Success Stories?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to discuss how our IT solutions can transform your business.
              </p>
              <a href="/contact" className="btn-primary">
                Start Your Success Story
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

export default Testimonials;
