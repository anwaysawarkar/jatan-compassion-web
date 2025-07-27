import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-jatan-orange">JATAN SANSTHA</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-jatan-orange transition-colors">About</a>
            <a href="#programs" className="text-gray-700 hover:text-jatan-orange transition-colors">Programs</a>
            <Link to="/material" className="text-gray-700 hover:text-jatan-orange transition-colors">Material</Link>
            <a href="#impact" className="text-gray-700 hover:text-jatan-orange transition-colors">Impact</a>
            <a href="#contact" className="text-gray-700 hover:text-jatan-orange transition-colors">Contact</a>

            {/* Updated Join Us Button */}
            <a href="#volunteer">
              <Button className="bg-jatan-orange hover:bg-jatan-yellow text-white">
                <Heart className="mr-2 h-4 w-4" /> Join Us!
              </Button>
            </a>
          </div>

          {/* Hamburger for mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <div className="flex flex-col space-y-4 pb-4">
              <a href="#about" className="text-gray-700 hover:text-jatan-orange transition-colors">About</a>
              <a href="#programs" className="text-gray-700 hover:text-jatan-orange transition-colors">Programs</a>
              <Link to="/material" className="text-gray-700 hover:text-jatan-orange transition-colors">Material</Link>
              <a href="#impact" className="text-gray-700 hover:text-jatan-orange transition-colors">Impact</a>
              <a href="#testimonials" className="text-gray-700 hover:text-jatan-orange transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-jatan-orange transition-colors">Contact</a>

              {/* Updated Mobile Join Us Button */}
              <a href="#volunteer">
                <Button className="bg-jatan-orange hover:bg-jatan-yellow text-white w-full">
                  <Heart className="mr-2 h-4 w-4" /> Join Us!
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
