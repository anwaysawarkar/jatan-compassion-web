
import React from 'react';
import { Book, Users, Home } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselPrevious,
  CarouselNext 
} from "@/components/ui/carousel";

const Programs: React.FC = () => {
  const programs = [
    {
      icon: <Book className="h-10 w-10 text-jatan-orange" />,
      title: 'Education for Slum Children',
      description: 'Providing remedial educational assistance to children from slum communities, focusing on strengthening foundational learning, bridging academic gaps, and building confidence through inclusive support and mentorship.',
      color: 'border-jatan-orange',
      bgColor: 'from-jatan-orange/5 to-jatan-orange/10'
    },
    {
      icon: <Users className="h-10 w-10 text-jatan-blue" />,
      title: 'Silai Classes for Women',
      description: 'Providing basic stitching and tailoring training to women from underprivileged communities, helping them gain practical skills for income generation and self-reliance.',
      color: 'border-jatan-blue',
      bgColor: 'from-jatan-blue/5 to-jatan-blue/10'
    },
    {
      icon: <Home className="h-10 w-10 text-jatan-teal" />,
      title: 'E-classes for Women & Children',
      description: 'Providing access to digital learning for women and children from underserved communities, helping them continue their education and build basic computer skills in a supportive environment.',
      color: 'border-jatan-teal',
      bgColor: 'from-jatan-teal/5 to-jatan-teal/10'
    },
  ];

  return (
    <section id="programs" className="section-padding bg-gradient-to-b from-white to-blue-50">
      <div className="container-custom">
        <h2 className="section-heading text-jatan-darkBlue">Our Programs</h2>
        
        {/* Desktop view: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg shadow-lg p-6 border-t-4 ${program.color} transform hover:-translate-y-2 transition-transform duration-300 animate-fade-in opacity-0 bg-gradient-to-br ${program.bgColor}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4 flex justify-center">{program.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-center">{program.title}</h3>
              <p className="text-gray-600 text-center">{program.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile view: Carousel */}
        <div className="md:hidden w-full">
          <Carousel className="w-full">
            <CarouselContent>
              {programs.map((program, index) => (
                <CarouselItem key={index} className="pt-4 pb-6">
                  <div 
                    className={`bg-white rounded-lg shadow-lg p-6 border-t-4 ${program.color} h-full bg-gradient-to-br ${program.bgColor}`}
                  >
                    <div className="mb-4 flex justify-center">{program.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-center">{program.title}</h3>
                    <p className="text-gray-600 text-center">{program.description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative static left-0 translate-y-0 mr-2" />
              <CarouselNext className="relative static right-0 translate-y-0 ml-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Programs;
