import React, { useState } from 'react';
import technologiesData from '../data/technologies.json';

interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

export const ExploreTechnologies: React.FC = () => {
  const [stack, setStack] = useState<Technology[]>([]);

  const handleAddToStack = (tech: Technology) => {
    if (stack.some((item) => item.id === tech.id)) {
      alert("This technology is already in your stack!");
      return;
    }
    setStack([...stack, tech]);
  };

  const handleRemoveFromStack = (id: string) => {
    setStack(stack.filter((item) => item.id !== id));
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 py-8 lg:py-12">
        <div className="mb-8 lg:mb-10 text-center lg:text-left">
            <h2 className="font-inter font-extrabold text-[30px] lg:text-[40px] text-gray-900 mb-2">Explore the <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Technologies</span>
            </h2>
            
            <p className="font-jakarta text-gray-600 text-sm lg:text-base">
            Pick one technology per category to build your ideal stack.
            </p>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
        
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologiesData.map((tech: Technology) => {
            const isAdded = stack.some((item) => item.id === tech.id);

            return (
              <div 
                key={tech.id} 
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-5 lg:p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                    </div>
                    

                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FCE7F3] text-[#EC4899]">
                      {tech.badge}
                    </span>
                  </div>

                  <div className="text-left mb-6">
                    <h3 className="font-inter font-bold text-lg lg:text-xl text-gray-900 mb-2">
                      {tech.name}
                    </h3>
                    <p className="font-jakarta text-gray-500 text-xs lg:text-sm line-clamp-2">
                      {tech.description}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-5 bg-gray-50/70 py-2 px-3 rounded-lg border border-gray-100">
                    <span className="font-medium text-gray-700">{tech.category}</span>
                    <span className="text-gray-500">{tech.difficulty}</span>
                    <span className="flex items-center gap-1 font-semibold text-gray-800">
                      <span className="text-amber-400">★</span> {tech.rating}
                    </span>
                  </div>

                  {isAdded ? (
                    <div className="w-full py-2.5 rounded-xl bg-[#FCE7F3] text-[#EC4899] font-semibold text-sm flex items-center justify-center gap-2 shadow-sm">
                      <span>✓ Added to Stack</span>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleAddToStack(tech)}
                      className="w-full py-2.5 rounded-xl font-semibold text-sm transition-all shadow-sm bg-gray-900 hover:bg-gray-800 text-white"
                    >
                      Add to Stack
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:col-span-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-5 lg:p-6 lg:sticky lg:top-6 text-left">
          <div className="mb-4 text-left">
            <h3 className="font-inter font-bold text-lg text-gray-900">Your Stack</h3>
            <p className="font-jakarta text-xs text-gray-500 mt-0.5">
              {stack.length === 0 
                ? "No technologies selected yet." 
                : `${stack.length} Technology Selected`}
            </p>
          </div>

          {stack.length === 0 ? (
            <div className="border-2 border-dashed border-gray-100 rounded-xl py-10 lg:py-12 px-4 text-center">
              <p className="font-jakarta text-sm text-gray-400">Your stack is empty.</p>
            </div>
          ) : (
            <div className="space-y-3 mb-6 max-h-[350px] overflow-y-auto pr-1">
              {stack.map((item) => (
                <div 
                  key={item.id} 
                  className="flex items-center justify-between p-3 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-sm text-gray-900">{item.name}</h4>
                      <p className="font-jakarta text-[11px] text-gray-500">{item.category}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleRemoveFromStack(item.id)}
                    className="w-7 h-7 flex items-center justify-center rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                    title="Remove item"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          {stack.length > 0 && (
            <button
              onClick={handleRemoveAll}
              className="w-full py-2.5 rounded-xl font-semibold text-sm text-red-600 bg-red-50 hover:bg-red-100 transition-colors border border-red-100/60"
            >
              Remove All
            </button>
          )}
        </div>

      </div>
    </section>
  );
};