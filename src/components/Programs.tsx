
import React from 'react';
import { Book, Users, Home } from 'lucide-react';

const Programs: React.FC = () => {
  const programs = [
    {
      icon: <Book className="h-10 w-10 text-jatan-orange" />,
      title: 'Education for Slum Children',
      description: 'Providing quality education, school supplies, and mentorship to children from slum areas, helping them build a foundation for a brighter future.',
    },
    {
      icon: <Users className="h-10 w-10 text-jatan-orange" />,
      title: 'Weaving Classes for Women',
      description: 'Empowering women through vocational training in traditional and modern weaving techniques, creating pathways to financial independence.',
    },
    {
      icon: <Home className="h-10 w-10 text-jatan-orange" />,
      title: 'Household Support',
      description: 'Providing essential supplies, healthcare assistance, and guidance to struggling households to improve their living conditions and well-being.',
    },
  ];

  return (
    <section id="programs" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="section-heading">Our Programs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-jatan-orange transform hover:-translate-y-2 transition-transform duration-300 animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4 flex justify-center">{program.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-center">{program.title}</h3>
              <p className="text-gray-600 text-center">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
