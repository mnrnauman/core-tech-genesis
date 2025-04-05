
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
              Innovative <span className="text-gencore-orange">IT Solutions</span> that help your business thrive
            </h1>
            <p className="text-xl mb-8 text-gray-300 max-w-xl">
              Empowering businesses with cutting-edge technology services that drive growth, enhance efficiency, and ensure security.
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
            
            <div className="mt-10 flex items-center">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <div className="text-white font-bold mr-3">Excellent</div>
                  <div className="flex">
                    {[1, 2, 3, 4].map((i) => (
                      <svg key={i} className="w-5 h-5 text-gencore-orange" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <svg className="w-5 h-5 text-gencore-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <div className="text-gray-400 text-sm mt-1">Trusted by 200+ businesses worldwide</div>
              </div>
            </div>
          </div>
          
          <div className="relative animation-delay-300 animate-fade-in hidden lg:block">
            <div className="relative w-full h-[500px]">
              {/* Main display - Cloud Dashboard */}
              <div className="absolute right-0 top-0 w-[90%] h-[300px] bg-gencore-darker rounded-lg border border-gray-800 overflow-hidden shadow-2xl">
                <div className="h-8 bg-gray-900 flex items-center px-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-600/30 rounded-md flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                        </svg>
                      </div>
                      <div className="text-white font-medium">Cloud Management Dashboard</div>
                    </div>
                    <div className="text-gencore-orange font-medium">Admin</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-gray-800/50 p-3 rounded-md">
                      <div className="text-gray-400 text-xs mb-1">Active Servers</div>
                      <div className="text-white font-bold">24/24</div>
                      <div className="w-full h-1 bg-gray-700 mt-2">
                        <div className="w-full h-1 bg-green-500"></div>
                      </div>
                    </div>
                    <div className="bg-gray-800/50 p-3 rounded-md">
                      <div className="text-gray-400 text-xs mb-1">CPU Usage</div>
                      <div className="text-white font-bold">42%</div>
                      <div className="w-full h-1 bg-gray-700 mt-2">
                        <div className="w-[42%] h-1 bg-yellow-500"></div>
                      </div>
                    </div>
                    <div className="bg-gray-800/50 p-3 rounded-md">
                      <div className="text-gray-400 text-xs mb-1">Memory</div>
                      <div className="text-white font-bold">3.8/8 GB</div>
                      <div className="w-full h-1 bg-gray-700 mt-2">
                        <div className="w-[45%] h-1 bg-blue-500"></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-3">
                      <div className="text-white font-medium">Server Status</div>
                      <div className="text-xs text-gencore-orange">Live</div>
                    </div>
                    <div className="space-y-2">
                      {['Web Server', 'Database', 'API Gateway', 'Auth Service'].map((service, idx) => (
                        <div key={idx} className="flex justify-between items-center py-1">
                          <div className="text-gray-300 text-sm">{service}</div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                            <span className="text-xs text-gray-400">Online</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Secondary screen - Analytics */}
              <div className="absolute -bottom-10 -right-5 w-[60%] h-[200px] bg-gencore-darker rounded-lg border border-gray-800 overflow-hidden shadow-2xl transform rotate-3">
                <div className="h-6 bg-gray-900 flex items-center px-3">
                  <div className="flex space-x-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="text-white text-xs font-medium mb-2">Website Analytics</div>
                  <div className="flex space-x-2 mb-3">
                    <div className="text-[10px] px-2 py-0.5 bg-gencore-orange/20 text-gencore-orange rounded-full">Daily</div>
                    <div className="text-[10px] px-2 py-0.5 bg-gray-700 text-gray-300 rounded-full">Weekly</div>
                    <div className="text-[10px] px-2 py-0.5 bg-gray-700 text-gray-300 rounded-full">Monthly</div>
                  </div>
                  <div className="flex items-end h-16 space-x-1">
                    {[40, 65, 35, 50, 90, 75, 55, 80, 60, 70, 30, 85].map((height, idx) => (
                      <div key={idx} className="flex-1">
                        <div 
                          className="w-full bg-gencore-orange/80 rounded-t-sm" 
                          style={{ height: `${height}%` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    <div className="text-[8px] text-gray-400">01 Apr</div>
                    <div className="text-[8px] text-gray-400">13 Apr</div>
                  </div>
                </div>
              </div>
              
              {/* Third screen - Security */}
              <div className="absolute -left-5 bottom-28 w-[40%] h-[180px] bg-gencore-darker rounded-lg border border-gray-800 overflow-hidden shadow-2xl transform -rotate-6">
                <div className="h-6 bg-gray-900 flex items-center px-3">
                  <div className="flex space-x-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="text-white text-xs font-medium mb-2">Security Monitor</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-[10px] text-gray-300">Firewall Status</div>
                      <div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-[10px] text-gray-300">Threats Blocked</div>
                      <div className="text-[10px] text-white font-medium">143</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-[10px] text-gray-300">Last Scan</div>
                      <div className="text-[10px] text-gray-400">2 mins ago</div>
                    </div>
                  </div>
                </div>
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
