
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Heart, Calendar, Star } from "lucide-react";

const Donate: React.FC = () => {
  const [amount, setAmount] = useState<number | null>(null);
  const [donationType, setDonationType] = useState<string>('one-time');
  
  const predefinedAmounts = [100, 500, 1000, 5000];

  return (
    <section id="donate" className="section-padding bg-jatan-blue/10">
      <div className="container-custom">
        <h2 className="section-heading">Support Our Cause</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in opacity-0">
            <h3 className="text-2xl font-semibold mb-4 text-jatan-darkBlue">Your Donation Makes a Difference</h3>
            <p className="mb-6 text-gray-700">
              Your contribution helps us continue our mission of empowering underprivileged communities through education, 
              skill development, and essential support services.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-jatan-orange/20 p-2 rounded-full mr-4">
                  <Heart className="h-5 w-5 text-jatan-orange" />
                </div>
                <div>
                  <h4 className="font-medium">Transform Lives</h4>
                  <p className="text-sm text-gray-600">Help break the cycle of poverty through education and skills</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-jatan-orange/20 p-2 rounded-full mr-4">
                  <Calendar className="h-5 w-5 text-jatan-orange" />
                </div>
                <div>
                  <h4 className="font-medium">Sustainable Impact</h4>
                  <p className="text-sm text-gray-600">Create lasting change through our established programs</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-jatan-orange/20 p-2 rounded-full mr-4">
                  <Star className="h-5 w-5 text-jatan-orange" />
                </div>
                <div>
                  <h4 className="font-medium">Tax Benefits</h4>
                  <p className="text-sm text-gray-600">All donations are eligible for tax exemption under Section 80G</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 animate-scale-in opacity-0">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Select Donation Type</h3>
              <div className="flex gap-4">
                <button
                  onClick={() => setDonationType('one-time')}
                  className={`flex-1 py-2 px-4 rounded-md border ${
                    donationType === 'one-time' 
                      ? 'bg-jatan-orange text-white border-jatan-orange' 
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  One-time
                </button>
                <button
                  onClick={() => setDonationType('monthly')}
                  className={`flex-1 py-2 px-4 rounded-md border ${
                    donationType === 'monthly' 
                      ? 'bg-jatan-orange text-white border-jatan-orange' 
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  Monthly
                </button>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Choose Amount</h3>
              <div className="grid grid-cols-2 gap-3">
                {predefinedAmounts.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setAmount(amt)}
                    className={`py-2 rounded-md border ${
                      amount === amt 
                        ? 'bg-jatan-orange text-white border-jatan-orange' 
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    ₹{amt}
                  </button>
                ))}
              </div>
              
              <div className="mt-3">
                <label className="text-sm text-gray-600 mb-1 block">Custom Amount (₹)</label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-jatan-orange/50"
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
              </div>
            </div>
            
            <Button 
              className="w-full bg-jatan-orange hover:bg-jatan-yellow text-white py-3 text-lg" 
              size="lg"
            >
              <Heart className="mr-2 h-5 w-5" /> 
              {donationType === 'monthly' ? 'Donate Monthly' : 'Donate Now'}
            </Button>
            
            <p className="text-xs text-center mt-4 text-gray-500">
              Secured by 128-bit encryption. All information is kept private and secure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
