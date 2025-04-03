
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-jatan-orange/10 to-jatan-blue/10 pt-24 pb-32">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Empowering Communities, <span className="gradient-text">Transforming Lives</span>
            </h1>
            <p className="text-lg mb-8 text-gray-700">
              JATAN is dedicated to uplifting underprivileged communities through quality education for slum children, 
              vocational weaving classes for women, and essential support for poor households.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-jatan-orange hover:bg-jatan-yellow text-white">
                Get Involved
              </Button>
              <Button size="lg" variant="outline" className="border-jatan-orange text-jatan-orange hover:bg-jatan-orange/10">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative mx-auto max-w-lg animate-scale-in">
            <div className="w-full h-72 md:h-96 bg-jatan-blue/20 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-jatan-orange/30 to-jatan-blue/30"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <span className="text-xl font-semibold text-center px-4">Image: Children learning at JATAN center</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-jatan-yellow rounded-full"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-jatan-orange rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
    </div>
  );
};

export default Hero;
