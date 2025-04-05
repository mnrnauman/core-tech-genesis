
import React from 'react';
import { Users, Clock, ArrowUpRight, DollarSign } from 'lucide-react';

const features = [
  {
    title: 'Expert Team',
    description: 'Our team of certified IT professionals brings years of experience in delivering top-tier solutions tailored to your business needs.',
    icon: Users
  },
  {
    title: '24/7 Support',
    description: 'We provide round-the-clock technical support to ensure your business operations run smoothly without interruption.',
    icon: Clock
  },
  {
    title: 'Scalable Solutions',
    description: 'Our solutions grow with your business, adapting to your evolving requirements without compromising performance.',
    icon: ArrowUpRight
  },
  {
    title: 'Affordable Pricing',
    description: 'Get enterprise-grade IT solutions at competitive prices that deliver exceptional value for your investment.',
    icon: DollarSign
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gencore-darker relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gencore-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Choose Us</h2>
          <div className="h-1 w-20 bg-gencore-orange mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
            We combine industry expertise with innovative technology to deliver solutions that exceed expectations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card card-hover p-6 flex flex-col items-start"
            >
              <div className="p-4 mb-4 bg-gencore-orange/10 rounded-lg">
                <feature.icon className="text-gencore-orange" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
