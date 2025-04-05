import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";




const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "src/images/image1.png",
    "src/images/image2.png",
    "src/images/image3.png",
    "src/images/image4.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-jatan-teal/10 to-jatan-blue/10 pt-24 pb-32">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Inspired by <br /><span className="bg-gradient-to-r from-jatan-orange to-jatan-purple text-transparent bg-clip-text">Individual Social Responsibility</span>
            </h1>
            <p className="text-lg mb-8 text-gray-700">
            JATAN empowers women and children from underprivileged communities through initiatives like stitching (silai) classes for women,
            remedial education for students from Class 1 to 9, spoken English and personality development training, 
            and computer education through an e-learning center for both women and children.
            </p>
            <div className="flex flex-wrap gap-4">
            <a href="#volunteer">
                <Button size="lg" className="bg-jatan-orange hover:bg-jatan-orange/90 text-white">
                    Get Involved
                </Button>
            </a>

            <a href="#about">
             <Button size="lg" variant="outline" className="border-jatan-orange text-jatan-orange hover:bg-jatan-orange/10">
               Learn More
             </Button>
           </a>

            </div>
          </div>

          {/* Compact Carousel Container */}
          <div className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] mx-auto">
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl relative bg-gray-50">
              <img
                src={images[currentImage]}
                alt="At JATAN center"
                className="object-cover w-full h-full transition-opacity duration-1000"
                style={{ objectPosition: 'center center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-jatan-orange/30 to-jatan-purple/30 mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
    </div>
  );
};

export default Hero;