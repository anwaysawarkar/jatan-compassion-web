
import React, { useEffect, useState } from 'react';

interface StatProps {
  value: number;
  label: string;
  suffix?: string;
  delay: number;
}

const StatCounter: React.FC<StatProps> = ({ value, label, suffix = "+", delay }) => {
  const [count, setCount] = useState(0);
  const duration = 2000; // Animation duration in ms
  const frameRate = 20; // Update every 20ms

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounting();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`stat-${label.replace(/\s+/g, '-').toLowerCase()}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const startCounting = () => {
    let start = 0;
    const increment = value / (duration / frameRate);
    
    setTimeout(() => {
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, frameRate);
    }, delay);
  };

  return (
    <div 
      id={`stat-${label.replace(/\s+/g, '-').toLowerCase()}`}
      className="text-center animate-count-up opacity-0"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-4xl md:text-5xl font-bold text-jatan-orange mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

const Impact: React.FC = () => {
  return (
    <section id="impact" className="section-padding bg-gradient-to-r from-jatan-cream to-white">
      <div className="container-custom">
        <h2 className="section-heading">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCounter value={500} label="Children Educated" delay={100} />
          <StatCounter value={650} label="Women Empowered" delay={300} />
          <StatCounter value={200} label="Households Supported" delay={500} />
          <StatCounter value={18} label="Years of Service" suffix="" delay={700} />
        </div>
        
        <div className="mt-16 bg-white p-6 rounded-lg shadow-md animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
          <h3 className="text-2xl font-semibold mb-4 text-center text-jatan-darkBlue">Sustainable Development Goals</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-3 bg-blue-50 rounded-lg text-center">
              <div className="font-bold text-jatan-blue text-xl mb-1">SDG 1</div>
              <div className="text-sm">No Poverty</div>
            </div>
            <div className="p-3 bg-red-50 rounded-lg text-center">
              <div className="font-bold text-jatan-orange text-xl mb-1">SDG 4</div>
              <div className="text-sm">Quality Education</div>
            </div>
            <div className="p-3 bg-pink-50 rounded-lg text-center">
              <div className="font-bold text-pink-500 text-xl mb-1">SDG 5</div>
              <div className="text-sm">Women Empowermnet</div>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg text-center">
              <div className="font-bold text-jatan-yellow text-xl mb-1">SDG 8</div>
              <div className="text-sm">Economic Growth</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
