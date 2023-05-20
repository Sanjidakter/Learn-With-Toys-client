import React from 'react';

const ToyStoreSection = () => {
  return (
    <section className="bg-violet-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-8">Toy Store</h2>
          <p className="text-lg mb-8">Explore our wide range of toys for all ages!</p>
          <button className="bg-white text-violet-900 px-8 py-3 rounded-full shadow-lg hover:bg-violet-800 hover:text-white transition-colors duration-300 mb-8">
            Shop Now
          </button>
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-white shadow-lg mx-2 animate-bounce"></div>
            <div className="w-16 h-16 rounded-full bg-white shadow-lg mx-2 animate-bounce"></div>
            <div className="w-16 h-16 rounded-full bg-white shadow-lg mx-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToyStoreSection;
