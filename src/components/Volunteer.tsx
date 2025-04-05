import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { HandHeart, Users, CalendarCheck, Award } from "lucide-react";

const Volunteer: React.FC = () => {
  const [activeTab, setActiveTab] = useState <'individual' | 'group'>('individual');

  return (
    <section id="volunteer" className="section-padding bg-jatan-blue/10">
      <div className="container-custom">
        <h2 className="section-heading">Join Our Movement</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in opacity-0">
            <h3 className="text-2xl font-semibold mb-4 text-jatan-darkBlue">
              Fascinated by our Initiative? Join Us!
            </h3>
            <p className="mb-6 text-gray-700">
              Become part of our mission to empower underprivileged communities through your time, 
              skills, and passion. Together we can create lasting change.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-jatan-orange/20 p-2 rounded-full mr-4">
                  <HandHeart className="h-5 w-5 text-jatan-orange" />
                </div>
                <div>
                  <h4 className="font-medium">Make a Direct Impact</h4>
                  <p className="text-sm text-gray-600">See the difference you make in real people's lives</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-jatan-orange/20 p-2 rounded-full mr-4">
                  <Users className="h-5 w-5 text-jatan-orange" />
                </div>
                <div>
                  <h4 className="font-medium">Join a Community</h4>
                  <p className="text-sm text-gray-600">Connect with like-minded change-makers</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-jatan-orange/20 p-2 rounded-full mr-4">
                  <Award className="h-5 w-5 text-jatan-orange" />
                </div>
                <div>
                  <h4 className="font-medium">Grow Personally</h4>
                  <p className="text-sm text-gray-600">Develop new skills and gain valuable experience</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 animate-scale-in opacity-0">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">I want to volunteer as:</h3>
              <div className="flex gap-4">
                <button
                  onClick={() => setActiveTab('individual')}
                  className={`flex-1 py-2 px-4 rounded-md border ${
                    activeTab === 'individual' 
                      ? 'bg-jatan-orange text-white border-jatan-orange' 
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  Individual
                </button>
                <button
                  onClick={() => setActiveTab('group')}
                  className={`flex-1 py-2 px-4 rounded-md border ${
                    activeTab === 'group' 
                      ? 'bg-jatan-orange text-white border-jatan-orange' 
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  Group/Organization
                </button>
              </div>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="text-sm text-gray-600 mb-1 block">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-jatan-orange/50"
                  required
                />
              </div>
              
              <div>
                <label className="text-sm text-gray-600 mb-1 block">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-jatan-orange/50"
                  required
                />
              </div>
              
              <div>
                <label className="text-sm text-gray-600 mb-1 block">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 9876543210"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-jatan-orange/50"
                  required
                />
              </div>
              
              {activeTab === 'group' && (
                <div>
                  <label className="text-sm text-gray-600 mb-1 block">Organization Name</label>
                  <input
                    type="text"
                    placeholder="Your organization"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-jatan-orange/50"
                  />
                </div>
              )}
              
              <div>
                <label className="text-sm text-gray-600 mb-1 block">Areas of Interest</label>
                <select 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-jatan-orange/50"
                  multiple={false}
                >
                  <option value="">Select your interests</option>
                  <option value="teaching">Teaching/Education</option>
                  <option value="women-empowerment">Women Empowerment</option>
                  <option value="fundraising">Fundraising</option>
                  <option value="event-management">Event Management</option>
                  <option value="content-creation">Content Creation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm text-gray-600 mb-1 block">Tell us about yourself</label>
                <textarea
                  placeholder="Your skills, experience, and why you want to volunteer with us"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-jatan-orange/50"
                ></textarea>
              </div>
              
              <Button 
                className="w-full bg-jatan-orange hover:bg-jatan-yellow text-white py-3 text-lg" 
                size="lg"
                type="submit"
              >
                <HandHeart className="mr-2 h-5 w-5" /> 
                Join as Volunteer
              </Button>
              
              <p className="text-xs text-center mt-4 text-gray-500">
                We'll contact you within 2-3 working days to discuss opportunities
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
