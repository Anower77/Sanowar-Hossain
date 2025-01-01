import React from 'react';
import { Clock } from 'lucide-react';

interface RecipeCardProps {
  image: string;
  title: string;
  description: string;
  id: string;
  onViewDetails: (id: string) => void;
}

export function RecipeCard({ image, title, description, id, onViewDetails }: RecipeCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-amber-500/10 transition-all">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{description}</p>
        <button
          onClick={() => onViewDetails(id)}
          className="px-6 py-2 bg-amber-500 text-gray-900 rounded-full font-semibold hover:bg-amber-400 transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
}