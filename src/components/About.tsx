
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <h2 className="section-heading">About JATAN</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-slide-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
              <h3 className="text-2xl font-semibold mb-4 text-jatan-darkBlue">Our Mission</h3>
              <p className="mb-4 text-gray-700">
                JATAN was founded with a vision to create sustainable development within underprivileged communities
                by providing quality education, skill development, and essential support.
              </p>
              <p className="text-gray-700">
                We believe in empowering individuals to break the cycle of poverty through knowledge, skills,
                and community support networks that foster both personal and societal growth.
              </p>
            </div>
          </div>
          <div className="animate-slide-in opacity-0" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
              <h3 className="text-2xl font-semibold mb-4 text-jatan-darkBlue">Our Story</h3>
              <p className="mb-4 text-gray-700">
                Started in 2010 by a group of passionate social workers, JATAN began as a small initiative
                teaching 15 children in a makeshift classroom. Today, we've grown into a multi-faceted NGO
                serving thousands of beneficiaries across multiple communities.
              </p>
              <p className="text-gray-700">
                Our journey has been one of continuous growth, learning, and deep community engagement,
                always guided by our core values of compassion, integrity, and sustainable impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
