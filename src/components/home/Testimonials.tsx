
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    position: 'CEO, TechStart Inc.',
    testimonial: 'Working with GENCORE IT transformed our business operations. Their cloud solutions saved us significant IT costs while improving our overall efficiency.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80'
  },
  {
    name: 'Michael Chen',
    position: 'CTO, EnterpriseX',
    testimonial: 'The level of technical expertise at GENCORE IT is impressive. Their team implemented a custom ERP solution that perfectly aligned with our complex business requirements.',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80'
  },
  {
    name: 'Emily Rodriguez',
    position: 'Marketing Director, GlobalSales',
    testimonial: 'Their SEO and digital marketing services helped us increase our online visibility significantly. We\'ve seen a 150% increase in quality leads since working with GENCORE IT.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gencore-darker relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gencore-orange/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Our Clients Say</h2>
          <div className="h-1 w-20 bg-gencore-orange mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[320px] md:h-[220px]">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`absolute top-0 left-0 w-full p-8 bg-gencore-dark border border-gray-800 rounded-xl transition-all duration-500 ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-full pointer-events-none'
                }`}
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-gencore-orange"
                  />
                  <div className="text-center md:text-left">
                    <svg className="w-10 h-10 text-gencore-orange/40 mb-4 mx-auto md:mx-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-gray-300 italic mb-4">{testimonial.testimonial}</p>
                    <h4 className="text-white font-medium">{testimonial.name}</h4>
                    <p className="text-gencore-orange text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-gencore-orange' : 'bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
