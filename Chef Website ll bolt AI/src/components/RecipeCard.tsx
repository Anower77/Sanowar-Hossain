import React from 'react';
import { Clock, Users, ChefHat, ArrowRight } from 'lucide-react';

interface RecipeCardProps {
  title: string;
  image: string;
  time: string;
  servings: number;
  chef: string;
  description: string;
}

export function RecipeCard({ title, image, time, servings, chef, description }: RecipeCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/10 group">
      <div className="relative h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-amber-500" />
            <span className="text-gray-400">{time}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4 text-amber-500" />
            <span className="text-gray-400">{servings} servings</span>
          </div>
          <div className="flex items-center gap-1">
            <ChefHat className="w-4 h-4 text-amber-500" />
            <span className="text-gray-400">{chef}</span>
          </div>
        </div>

        <button className="flex items-center gap-2 text-amber-500 hover:gap-3 transition-all">
          View Recipe <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}