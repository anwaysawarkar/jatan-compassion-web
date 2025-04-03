
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">JATAN</h3>
            <p className="text-gray-400 mb-4">
              Empowering communities through education, skill development, and essential support.
            </p>
            <p className="text-gray-400">
              © {new Date().getFullYear()} JATAN. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-jatan-orange transition-colors">About Us</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-jatan-orange transition-colors">Our Programs</a></li>
              <li><a href="#impact" className="text-gray-400 hover:text-jatan-orange transition-colors">Impact</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-jatan-orange transition-colors">Testimonials</a></li>
              <li><a href="#donate" className="text-gray-400 hover:text-jatan-orange transition-colors">Donate</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-jatan-orange transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-jatan-orange transition-colors">Education for Children</a></li>
              <li><a href="#" className="text-gray-400 hover:text-jatan-orange transition-colors">Weaving Classes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-jatan-orange transition-colors">Household Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-jatan-orange transition-colors">Volunteer Opportunities</a></li>
              <li><a href="#" className="text-gray-400 hover:text-jatan-orange transition-colors">Community Events</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to get updates on our impact and upcoming events.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 bg-gray-800 text-gray-200 rounded-l-md focus:outline-none flex-grow"
              />
              <button 
                type="submit" 
                className="bg-jatan-orange hover:bg-jatan-yellow text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>JATAN is a registered non-profit organization under the Indian Trusts Act.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
