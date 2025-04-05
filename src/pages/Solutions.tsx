
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Building, Home, Hospital, ShoppingBag, Settings } from 'lucide-react';

const solutions = [
  {
    title: 'CRM for Travel',
    description: 'Custom CRM solutions designed specifically for travel agencies to manage customer relationships, bookings, and itineraries efficiently.',
    icon: Building,
    features: [
      'Client Management',
      'Booking Automation',
      'Itinerary Planning',
      'Payment Processing',
      'Email Marketing',
      'Analytics Dashboard'
    ]
  },
  {
    title: 'CRM for Real Estate',
    description: 'Specialized CRM systems for real estate professionals to track leads, manage properties, and automate follow-ups.',
    icon: Home,
    features: [
      'Lead Management',
      'Property Database',
      'Document Management',
      'Transaction Tracking',
      'Client Portal',
      'Mobile Access'
    ]
  },
  {
    title: 'CRM for Healthcare',
    description: 'HIPAA-compliant CRM solutions for healthcare providers to manage patient relationships while ensuring data security.',
    icon: Hospital,
    features: [
      'Patient Management',
      'Appointment Scheduling',
      'Medical Records',
      'Billing Integration',
      'Secure Messaging',
      'Compliance Tools'
    ]
  },
  {
    title: 'CRM for E-Commerce',
    description: 'Integrated CRM systems for online retailers to manage customer data, track purchases, and implement loyalty programs.',
    icon: ShoppingBag,
    features: [
      'Customer Profiles',
      'Order Management',
      'Loyalty Programs',
      'Sales Analytics',
      'Marketing Automation',
      'Inventory Integration'
    ]
  },
  {
    title: 'Custom ERP & Business Automation',
    description: 'Tailored ERP solutions to streamline your business operations and automate critical processes for improved efficiency.',
    icon: Settings,
    features: [
      'Financial Management',
      'Inventory Control',
      'HR Management',
      'Supply Chain Optimization',
      'Project Management',
      'Business Intelligence'
    ]
  },
];

const Solutions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Header Section */}
        <section className="py-20 bg-gencore-dark relative overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gencore-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Industry Solutions</h1>
              <div className="h-1 w-20 bg-gencore-orange mx-auto"></div>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized technology solutions tailored to address the unique challenges of different industries.
              </p>
            </div>
          </div>
        </section>
        
        {/* Solutions Grid */}
        <section className="py-16 bg-gencore-darker">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div 
                  key={index} 
                  className="card card-hover p-8 rounded-lg flex flex-col h-full"
                >
                  <div className="p-4 rounded-full bg-gencore-orange/10 w-fit mb-6">
                    <solution.icon className="text-gencore-orange" size={28} />
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-white">{solution.title}</h2>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  
                  <h3 className="text-lg font-semibold mb-4 text-white">Key Features:</h3>
                  <ul className="grid grid-cols-2 gap-3 mb-6">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-gencore-orange mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto">
                    <button className="btn-primary group">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Custom Solutions Section */}
        <section className="py-16 bg-gencore-dark">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Need a Custom Solution?</h2>
              <p className="text-gray-300 mb-8">
                Don't see a solution that fits your specific industry needs? Our team can develop custom software solutions designed specifically for your business requirements.
              </p>
              <a href="/contact" className="btn-primary">
                Request a Custom Solution
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

export default Solutions;
