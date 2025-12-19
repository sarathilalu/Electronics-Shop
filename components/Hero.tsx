
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            The Future of Tech is <span className="text-indigo-600">Now.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10">
            Discover our curated collection of high-performance electronics. From professional laptops to immersive audio, we power your potential.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all hover:-translate-y-1">
              Shop Now
            </button>
            <button className="px-8 py-4 bg-slate-100 text-slate-900 rounded-xl font-semibold hover:bg-slate-200 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="#4F46E5" d="M44.7,-76.4C58.3,-69.2,70.1,-57.4,77.6,-43.3C85.1,-29.2,88.2,-12.8,87.3,3.7C86.4,20.1,81.4,36.5,72.3,50.7C63.2,64.9,49.9,76.9,34.8,82.1C19.7,87.3,2.8,85.7,-14.1,81.8C-31,77.8,-47.9,71.4,-61.7,60.6C-75.5,49.8,-86.3,34.5,-89.8,17.9C-93.3,1.3,-89.6,-16.6,-81.9,-32.1C-74.1,-47.5,-62.3,-60.5,-48.6,-67.6C-35,-74.7,-19.5,-75.9,-2.7,-71.2C14.1,-66.5,28.2,-55.9,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
