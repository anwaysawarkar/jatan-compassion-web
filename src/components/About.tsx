import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <h2 className="section-heading">About JATAN</h2>
        <div className="grid md:grid-cols-2 gap-10 items-stretch"> {/* Changed to items-stretch */}
          <div className="animate-slide-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gray-100 p-6 rounded-lg shadow-inner h-full flex flex-col"> {/* Added flex flex-col */}
              <h3 className="text-2xl font-semibold mb-4 text-jatan-darkBlue">Our Mission</h3>
              <div className="flex-grow"> {/* Added flex-grow wrapper */}
                <p className="mb-4 text-gray-700">
                JATAN, which means effort, is dedicated to empowering underprivileged women and children by promoting the spirit of Individual Social Responsibility.
                We believe that meaningful change begins with small, personal efforts that collectively uplift communities.
                </p>
                <p className="text-gray-700">
                Through free, community-focused initiatives in education, skill development, and personal growth, 
                JATAN emphasizes the power of consistent effort in enabling individuals to become self-reliant, 
                confident, and active contributors to a more equitable society.
                </p>
              </div>
            </div>
          </div>
          <div className="animate-slide-in opacity-0" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gray-100 p-6 rounded-lg shadow-inner h-full flex flex-col"> {/* Added flex flex-col */}
              <h3 className="text-2xl font-semibold mb-4 text-jatan-darkBlue">Our Story</h3>
              <div className="flex-grow"> {/* Added flex-grow wrapper */}
                <p className="mb-4 text-gray-700">
                JATAN was born from the idea of Individual Social Responsibility (ISR), first explored by a group of management students at BIMTECH, Noida, during their CSR lessons. Inspired by the belief that meaningful change begins with personal effort, they transformed a classroom thought into real-world action.
                </p>
                <p className="text-gray-700">
                On 1st September 2008, JATAN's Nagpur chapter was founded, with generous support from Mr. Milan Agnihotri in memory of his grandmother. The initiative was encouraged at its inception by Dr. H. Chaturvedi, Director of BIMTECH, whose words helped spark the journey.

Today, JATAN continues to stand for "the effort" — empowering underprivileged women and children through education, life skills, and community-led change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;