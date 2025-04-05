
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Calendar, User, Tag } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Cloud Computing: Trends to Watch',
    excerpt: 'Cloud computing continues to evolve at a rapid pace. In this article, we explore the emerging trends that will shape the future of cloud services and how businesses can prepare for these changes.',
    date: 'March 25, 2025',
    author: 'Muhammad Nauman',
    tags: ['Cloud', 'Technology', 'Innovation'],
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=750&q=80'
  },
  {
    id: 2,
    title: 'Cybersecurity Best Practices for Small Businesses',
    excerpt: 'Small businesses are increasingly becoming targets for cyber attacks. Learn about the essential cybersecurity measures that every small business should implement to protect their data and customers.',
    date: 'March 12, 2025',
    author: 'Nadeem Yaseen',
    tags: ['Cybersecurity', 'Small Business', 'Data Protection'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=750&q=80'
  },
  {
    id: 3,
    title: 'How VoIP Technology is Transforming Business Communications',
    excerpt: 'VoIP systems are revolutionizing how businesses communicate internally and with customers. Discover the benefits of VoIP technology and how it can improve your business communications.',
    date: 'February 28, 2025',
    author: 'Muhammad Shoaib Ghauri',
    tags: ['VoIP', 'Communication', 'Technology'],
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=750&q=80'
  },
  {
    id: 4,
    title: 'Digital Marketing Strategies for 2025',
    excerpt: 'As digital marketing continues to evolve, businesses need to adapt their strategies to stay competitive. Explore the most effective digital marketing approaches for success in 2025.',
    date: 'February 15, 2025',
    author: 'Muhammad Nauman',
    tags: ['Digital Marketing', 'SEO', 'Business Growth'],
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=750&q=80'
  },
  {
    id: 5,
    title: 'The Benefits of Custom CRM Solutions',
    excerpt: 'Off-the-shelf CRM solutions don't always meet the specific needs of every business. Learn how custom CRM development can provide tailored solutions that perfectly align with your business processes.',
    date: 'January 30, 2025',
    author: 'Nadeem Yaseen',
    tags: ['CRM', 'Software Development', 'Business Efficiency'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=750&q=80'
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Header Section */}
        <section className="py-20 bg-gencore-dark relative overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gencore-orange/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Blog</h1>
              <div className="h-1 w-20 bg-gencore-orange mx-auto"></div>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                Insights, news, and thought leadership from our technology experts.
              </p>
            </div>
          </div>
        </section>
        
        {/* Blog Posts Section */}
        <section className="py-16 bg-gencore-darker">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Featured Post */}
              <div className="lg:col-span-2 card card-hover p-0 overflow-hidden">
                <div className="relative h-96">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gencore-dark to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 md:p-10">
                    <div className="flex space-x-4 mb-3">
                      <span className="bg-gencore-orange/80 text-white text-xs px-3 py-1 rounded-full">Featured</span>
                      {blogPosts[0].tags.map((tag, idx) => (
                        <span key={idx} className="bg-white/10 text-white text-xs px-3 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">{blogPosts[0].title}</h2>
                    <p className="text-gray-300 mb-5 max-w-3xl">{blogPosts[0].excerpt}</p>
                    <div className="flex flex-wrap items-center space-x-6">
                      <div className="flex items-center text-gray-400">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{blogPosts[0].date}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <User size={16} className="mr-2" />
                        <span className="text-sm">{blogPosts[0].author}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Regular Posts */}
              {blogPosts.slice(1).map((post) => (
                <div key={post.id} className="card card-hover overflow-hidden flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag, idx) => (
                        <span key={idx} className="bg-gencore-orange/10 text-gencore-orange text-xs px-2 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{post.title}</h3>
                    <p className="text-gray-300 mb-5 flex-grow">{post.excerpt}</p>
                    <div className="flex flex-wrap items-center justify-between mt-auto pt-4 border-t border-gray-800">
                      <div className="flex items-center text-gray-400">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{post.date}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <User size={16} className="mr-2" />
                        <span className="text-sm">{post.author}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button className="btn-secondary">
                Load More Articles
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 bg-gencore-dark">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto bg-gencore-darker p-8 md:p-10 rounded-xl border border-gray-800 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-gencore-orange/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white text-center">Subscribe to Our Newsletter</h2>
                <p className="text-center text-gray-300 mb-6">
                  Stay updated with our latest technology insights, tips, and industry news.
                </p>
                <form className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-grow px-4 py-3 rounded-md bg-gencore-dark border border-gray-700 text-white focus:outline-none focus:border-gencore-orange"
                    required
                  />
                  <button type="submit" className="btn-primary whitespace-nowrap">
                    Subscribe
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="m5 9 7 7 7-7"></path></svg>
                  </button>
                </form>
                <p className="text-center text-gray-400 text-sm mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
