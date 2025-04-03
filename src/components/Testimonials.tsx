
import React, { useState } from 'react';
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  category: 'student' | 'woman' | 'community';
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Student",
      content: "JATAN's education program changed my life. I'm the first in my family to attend college, and now I'm studying to become a teacher so I can give back to my community.",
      category: 'student'
    },
    {
      id: 2,
      name: "Meena Devi",
      role: "Weaving Program Graduate",
      content: "Before joining JATAN's weaving program, I had no way to support my family. Now I earn enough to send my children to school and even save a little each month.",
      category: 'woman'
    },
    {
      id: 3,
      name: "Ramesh Kumar",
      role: "Community Member",
      content: "When my family was struggling after I lost my job, JATAN provided us with food and healthcare support. They didn't just help us survive; they helped us rebuild our lives.",
      category: 'community'
    },
    {
      id: 4,
      name: "Anjali Singh",
      role: "Student",
      content: "I never thought I could learn to read and write, but JATAN's teachers never gave up on me. Now I help younger children with their studies in the evening classes.",
      category: 'student'
    },
    {
      id: 5,
      name: "Lakshmi Patel",
      role: "Weaving Program Participant",
      content: "The skills I learned at JATAN allowed me to start my own small business. I now employ three other women from my neighborhood, spreading the impact even further.",
      category: 'woman'
    }
  ];

  const [filter, setFilter] = useState<string>('all');
  const filteredTestimonials = filter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === filter);

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <h2 className="section-heading">Voices of Impact</h2>
        
        <div className="flex justify-center space-x-2 mb-8">
          <Button 
            variant={filter === 'all' ? "default" : "outline"} 
            onClick={() => setFilter('all')}
            className={filter === 'all' ? "bg-jatan-orange hover:bg-jatan-orange/90" : ""}
          >
            All
          </Button>
          <Button 
            variant={filter === 'student' ? "default" : "outline"} 
            onClick={() => setFilter('student')}
            className={filter === 'student' ? "bg-jatan-orange hover:bg-jatan-orange/90" : ""}
          >
            Students
          </Button>
          <Button 
            variant={filter === 'woman' ? "default" : "outline"} 
            onClick={() => setFilter('woman')}
            className={filter === 'woman' ? "bg-jatan-orange hover:bg-jatan-orange/90" : ""}
          >
            Women
          </Button>
          <Button 
            variant={filter === 'community' ? "default" : "outline"} 
            onClick={() => setFilter('community')}
            className={filter === 'community' ? "bg-jatan-orange hover:bg-jatan-orange/90" : ""}
          >
            Community
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-jatan-blue hover-scale animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative mb-4">
                <div className="text-5xl text-jatan-orange/20 absolute -top-3 -left-2">"</div>
                <p className="text-gray-700 relative z-10">{testimonial.content}</p>
              </div>
              <Separator className="my-4" />
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
