import React from 'react';

import heroIllustration from '../assets/banner-stack.png'; 

const Hero: React.FC = () => {
  return (
    <section className="w-full max-w-[1216px] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
    
    <div className="flex flex-col justify-left">
      <h1 className="font-inter font-extrabold text-[48px] lg:text-[60px] leading-[1.1] text-gray-900 mb-6">
        Build Your Ideal <br />
        <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
          Development Stack
        </span>
      </h1>
      
      <p className="font-jakarta text-gray-600 text-lg mb-8 max-w-[550px]">
        Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
      </p>
      
      <div className="flex flex-wrap items-center gap-4">
        <button className="px-6 py-3 rounded-[8px] text-white font-semibold bg-gradient-to-r from-[#F97316] to-[#EC4899] shadow-md hover:opacity-95 transition-opacity">
          Explore Technologies
        </button>
        <button className="px-6 py-3 rounded-[8px] text-gray-700 font-semibold border border-gray-300 hover:bg-gray-50 transition-colors">
          Learn More
        </button>
      </div>
    </div>


    <div className="flex justify-center lg:justify-end">
      <img 
        src={heroIllustration}
        alt="Development Stack Illustration" 
        className="w-full max-w-[550px] h-auto object-contain"
      />
    </div>

  </div>
</section>
  );
};

export default Hero;