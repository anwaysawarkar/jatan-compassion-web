import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users, Award, UserCheck, Shield } from "lucide-react";

interface Member {
  name: string;
  designation: string;
}

const Members: React.FC = () => {
  const [activeCoreIndex, setActiveCoreIndex] = useState(0);
  const [activeMemberIndex, setActiveMemberIndex] = useState(0);
  const visibleCount = 4; // Number of members to show at once

  const coreMembers: Member[] = [
    { name: 'Dr. Ankita Batla', designation: 'Founder Member' },
    { name: 'Mr. Naved Ali', designation: 'President' },
    { name: 'Mrs. Shashi Prabha Shrivastava', designation: 'Vice President & Director' },
    { name: 'Dr. Sarita Gadge', designation: 'Secretary' },
    { name: 'Mrs. Shabana Ali', designation: 'Joint Secretary' },
    { name: 'Mr. Ved Prakash', designation: 'Treasurer' },
  ];

  const otherMembers: Member[] = [
    { name: 'Dr. Shubha Johari', designation: 'Member' },
    { name: 'Dr. Monika Jain', designation: 'Member' },
    { name: 'Dr. Shivesh Prakash', designation: 'Member' },
    { name: 'Mr. Sharad Sapkal', designation: 'Member' },
    { name: 'Mrs. Kamlesh Prashar', designation: 'Member' },
    { name: 'Dr. Tarannum Arif Khan', designation: 'Member' },
    { name: 'Dr. Arif Khan', designation: 'Member' },
    { name: 'Mrs. Asha Tewary', designation: 'Member' },
  ];

  // Create infinite loop arrays
  const createInfiniteLoop = (arr: Member[]) => {
    return [...arr, ...arr.slice(0, visibleCount - 1)];
  };

  const infiniteCoreMembers = createInfiniteLoop(coreMembers);
  const infiniteOtherMembers = createInfiniteLoop(otherMembers);

  // Auto-rotate carousels
  useEffect(() => {
    const coreInterval = setInterval(() => {
      setActiveCoreIndex((prev) => (prev + 1) % coreMembers.length);
    }, 3000);

    const memberInterval = setInterval(() => {
      setActiveMemberIndex((prev) => (prev + 1) % otherMembers.length);
    }, 3500);

    return () => {
      clearInterval(coreInterval);
      clearInterval(memberInterval);
    };
  }, []);

  const nextCoreSlide = () => setActiveCoreIndex((prev) => (prev + 1) % coreMembers.length);
  const prevCoreSlide = () => setActiveCoreIndex((prev) => (prev - 1 + coreMembers.length) % coreMembers.length);

  const nextMemberSlide = () => setActiveMemberIndex((prev) => (prev + 1) % otherMembers.length);
  const prevMemberSlide = () => setActiveMemberIndex((prev) => (prev - 1 + otherMembers.length) % otherMembers.length);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-jatan-dark">
            Our Leadership Team
          </h2>
          <div className="w-24 h-1 bg-jatan-orange mx-auto mt-4"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated individuals steering our mission forward
          </p>
        </div>

        {/* Core Members Carousel */}
        <div className="mb-16">
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeCoreIndex * (100 / visibleCount)}%)` }}>
              {infiniteCoreMembers.map((member, index) => (
                <div key={index} className="flex-shrink-0 w-1/4 px-3">
                  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all h-full">
                    <div className="text-center">
                      <UserCheck className="h-10 w-10 mx-auto text-jatan-orange mb-3" />
                      <h3 className="text-lg font-bold text-gray-800 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-jatan-orange font-semibold text-sm">
                        {member.designation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              onClick={prevCoreSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100"
            >
              <ChevronLeft className="h-6 w-6 text-jatan-orange" />
            </button>
            <button 
              onClick={nextCoreSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100"
            >
              <ChevronRight className="h-6 w-6 text-jatan-orange" />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {coreMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCoreIndex(index)}
                className={`h-2 w-2 rounded-full ${index === activeCoreIndex ? 'bg-jatan-orange w-4' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>

        {/* Other Members Carousel */}
        <div>
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeMemberIndex * (100 / visibleCount)}%)` }}>
              {infiniteOtherMembers.map((member, index) => (
                <div key={index} className="flex-shrink-0 w-1/4 px-3">
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all h-full">
                    <div className="text-center">
                      <UserCheck className="h-8 w-8 mx-auto text-jatan-orange/90 mb-2" />
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-jatan-orange/90 font-medium text-xs">
                        {member.designation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              onClick={prevMemberSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100"
            >
              <ChevronLeft className="h-6 w-6 text-jatan-orange" />
            </button>
            <button 
              onClick={nextMemberSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100"
            >
              <ChevronRight className="h-6 w-6 text-jatan-orange" />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {otherMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveMemberIndex(index)}
                className={`h-2 w-2 rounded-full ${index === activeMemberIndex ? 'bg-jatan-orange w-4' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
          <Award className="inline-block mr-2 h-4 w-4" />
          Our team brings diverse expertise united by a common vision
        </div>
      </div>
    </section>
  );
};

export default Members;