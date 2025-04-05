
import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 flex items-center">
        <div className="container mx-auto px-4 md:px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-8xl font-bold text-gencore-orange mb-6">404</h1>
            <h2 className="text-3xl font-bold text-white mb-6">Page Not Found</h2>
            <p className="text-xl text-gray-300 mb-8">
              The page you are looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="btn-primary">
              Return to Home
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="m15 18-6-6 6-6"></path></svg>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
