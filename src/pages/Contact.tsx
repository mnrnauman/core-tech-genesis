
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmissionStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Header Section */}
        <section className="py-20 bg-gencore-dark relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gencore-orange/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact Us</h1>
              <div className="h-1 w-20 bg-gencore-orange mx-auto"></div>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                Have questions or ready to start your project? Get in touch with our team.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Information & Form */}
        <section className="py-16 bg-gencore-darker">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-8 text-white">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 bg-gencore-orange/10 rounded-full mr-4">
                      <MapPin className="text-gencore-orange" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Our Office</h3>
                      <p className="text-gray-300">4th Floor, Saeed Alam Tower, Liberty Market, Gulberg, Lahore</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 bg-gencore-orange/10 rounded-full mr-4">
                      <Phone className="text-gencore-orange" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                      <p className="text-gray-300">
                        <a href="tel:+923320000911" className="hover:text-gencore-orange transition-colors">
                          +92 332 0000911
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 bg-gencore-orange/10 rounded-full mr-4">
                      <Mail className="text-gencore-orange" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                      <p className="text-gray-300">
                        <a href="mailto:nauman@gencoreit.com" className="hover:text-gencore-orange transition-colors">
                          nauman@gencoreit.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 bg-gencore-orange/10 rounded-full mr-4">
                      <Clock className="text-gencore-orange" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Business Hours</h3>
                      <p className="text-gray-300">Monday–Friday: 09:00 AM – 07:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="p-3 bg-gencore-orange/10 rounded-full text-gencore-orange hover:bg-gencore-orange hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                    <a href="#" className="p-3 bg-gencore-orange/10 rounded-full text-gencore-orange hover:bg-gencore-orange hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                    <a href="#" className="p-3 bg-gencore-orange/10 rounded-full text-gencore-orange hover:bg-gencore-orange hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                    </a>
                    <a href="#" className="p-3 bg-gencore-orange/10 rounded-full text-gencore-orange hover:bg-gencore-orange hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-gencore-dark p-8 rounded-lg border border-gray-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gencore-orange/10 rounded-full filter blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-900/10 rounded-full filter blur-xl"></div>
                
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h2>
                  
                  {submissionStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-md">
                      <p className="text-green-400 flex items-center">
                        <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        Thank you! Your message has been sent successfully. We'll get back to you soon.
                      </p>
                    </div>
                  )}
                  
                  {submissionStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-md">
                      <p className="text-red-400 flex items-center">
                        <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                        Oops! Something went wrong. Please try again later.
                      </p>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gencore-darker border border-gray-700 rounded-md text-white focus:outline-none focus:border-gencore-orange"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gencore-darker border border-gray-700 rounded-md text-white focus:outline-none focus:border-gencore-orange"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="company" className="block text-gray-300 mb-2">Company Name</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gencore-darker border border-gray-700 rounded-md text-white focus:outline-none focus:border-gencore-orange"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-gray-300 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gencore-darker border border-gray-700 rounded-md text-white focus:outline-none focus:border-gencore-orange"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 bg-gencore-darker border border-gray-700 rounded-md text-white focus:outline-none focus:border-gencore-orange"
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className={`btn-primary w-full ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gencore-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2" size={18} />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-8 bg-gencore-dark">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8 text-white">Our Location</h2>
            
            <div className="rounded-lg overflow-hidden h-96 border border-gray-800">
              {/* Replace with actual Google Maps embed */}
              <div className="w-full h-full bg-gencore-darker flex items-center justify-center">
                <p className="text-gray-400">Google Maps embed would appear here</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-gencore-darker">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8 text-white text-center">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto grid gap-6">
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-white mb-3">What services does GENCORE IT offer?</h3>
                <p className="text-gray-300">We offer a wide range of IT services including Web Development & Hosting, Cloud Solutions, PBX & VoIP, SEO & Digital Marketing, and IT Consultancy.</p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-white mb-3">How quickly can you develop a website?</h3>
                <p className="text-gray-300">The timeline depends on the complexity of your website. A basic website can be completed in 2-3 weeks, while more complex projects may take 1-3 months.</p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Do you provide ongoing support after project completion?</h3>
                <p className="text-gray-300">Yes, we offer ongoing support and maintenance services for all our solutions. We have various support packages tailored to different business needs.</p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-white mb-3">How can I request a quote for my project?</h3>
                <p className="text-gray-300">You can request a quote by filling out the contact form on this page, calling us directly, or sending an email to nauman@gencoreit.com.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
