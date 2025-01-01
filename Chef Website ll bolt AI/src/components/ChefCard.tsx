import React from 'react';

interface ChefCardProps {
  image: string;
  name: string;
  description: string;
}

export function ChefCard({ image, name, description }: ChefCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-amber-500/10 transition-all">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
          {name}
        </h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <button className="px-6 py-2 bg-amber-500 text-gray-900 rounded-full font-semibold hover:bg-amber-400 transition-colors">
          Hire Now
        </button>
      </div>
    </div>
  );
}