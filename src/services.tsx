import React from "react";
import Navbar from "./Navbar";


const Services: React.FC = () => {
  return (
    <>
      <Navbar />

      <div className="pt-24">
    
        <section className="#">
          <h1 className="#">Our Services</h1>
          <p className="#">
            We provide high quality real estate services to help you find your
            dream property easily and quickly.
          </p>
        </section>

        <section className="#">
          <div className="#">
            
            <div className="shadow-lg p-6 rounded-2xl hover:scale-105 transition duration-300">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold mb-2">Property Sale</h3>
              <p className="text-gray-600">
                Sell your property at the best market price with professional marketing strategies.
              </p>
            </div>

            <div className="shadow-lg p-6 rounded-2xl hover:scale-105 transition duration-300">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold mb-2">Property Rent</h3>
              <p className="text-gray-600">
                Find rental properties that match your budget and lifestyle easily.
              </p>
            </div>

            <div className="shadow-lg p-6 rounded-2xl hover:scale-105 transition duration-300">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Property Management</h3>
              <p className="text-gray-600">
                Professional management solutions for landlords and investors.
              </p>
            </div>

          </div>
        </section>

        <section className="bg-gray-50 py-16 px-6 md:px-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Why Choose Our Services?
              </h2>
              <ul className="s>
                <li> Experienced Real Estate Experts</li>
                <li> 24/7 Customer Support</li>
                <li>Trusted by Hundreds of Clients</li>
                <li> Transparent Pricing</li>
              </ul>
            </div>

            <div>
              <img
                src="/images/services.jpg"
                alt="Real estate services"
              />
            </div>

          </div>
        </section>

      </div>
    </>
  );
};

export default Services;