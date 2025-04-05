import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 justify-center">
          
          <div className="text-left">
            <h3 className="text-xl font-semibold mb-4">JATAN</h3>
            <p className="text-gray-400 mb-4">
              Empowering communities through education, skill development, and essential support.
            </p>
            <p className="text-gray-400">
              © {new Date().getFullYear()} JATAN. All rights reserved.
            </p>
          </div>
          
          <div className="text-left">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-jatan-orange transition-colors">About Us</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-jatan-orange transition-colors">Our Programs</a></li>
              <li><a href="#impact" className="text-gray-400 hover:text-jatan-orange transition-colors">Impact</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-jatan-orange transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-jatan-orange transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="text-left">
            <h3 className="text-xl font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#programs" className="text-gray-400 hover:text-jatan-orange transition-colors">Education for Children</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-jatan-orange transition-colors">Silai Classes</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-jatan-orange transition-colors">E-classes for Women & Children</a></li>
              <li><a href="#volunteer" className="text-gray-400 hover:text-jatan-orange transition-colors">Volunteer Opportunities</a></li>
              <li><a href="#" className="text-gray-400 hover:text-jatan-orange transition-colors">Community Events</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-gray-500 text-sm text-center">
          <p>
            JATAN is a registered non-profit organization under the Societies Registration Act.1860. 
            ( Regn. No. MH-697/15(N) Dt:1.9.2015..)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
