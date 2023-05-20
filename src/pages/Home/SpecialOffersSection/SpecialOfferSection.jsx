import React from 'react';
import d1 from "../../../assets/d1.jpg";
import d2 from "../../../assets/d2.jpg";
import d3 from "../../../assets/d3.jpg";

const SpecialOffersSection = () => {
  return (
    <section className="bg-violet-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 ">Special Offers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" >
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <img
              className="w-full h-40 object-cover rounded-t-lg animate-bounce"
              src={d1}
              alt="Toy 1"
            />
            <div className="p-4">
              {/* Rest of the toy details */}
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <img
              className="w-full h-40 object-cover rounded-t-lg animate-pulse"
              src={d3}
              alt="Toy 2"
            />
            <div className="p-4">
              {/* Rest of the toy details */}
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <img
              className="w-full h-40 object-cover rounded-t-lg animate-bounce"
              src={d2}
              alt="Toy 3"
            />
            <div className="p-4">
              {/* Rest of the toy details */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffersSection;
