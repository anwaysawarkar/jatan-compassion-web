import React from 'react';

const Donation: React.FC = () => {
  return (
    <section id="donation" className="section-padding">
      <div className="container-custom">
        <h2 className="section-heading">Support JATAN</h2>
        <div className="grid md:grid-cols-1 gap-10 items-stretch">
          <div className="animate-slide-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gray-100 p-6 rounded-lg shadow-inner h-full flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 text-jatan-darkBlue">Donation Details</h3>
              <div className="flex-grow">
                <p className="mb-4 text-gray-700">
                  You can directly support JATAN's mission by donating to the following account:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Bank:</strong> SBI, Mankapur, Nagpur 440030</li>
                  <li><strong>Account Name:</strong> Jatan Sanstha</li>
                  <li><strong>Account Number:</strong> 35299181440</li>
                  <li><strong>IFSC Code:</strong> SBIN0016095</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  Your contribution will help us continue our work in uplifting underprivileged communities through education and empowerment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
