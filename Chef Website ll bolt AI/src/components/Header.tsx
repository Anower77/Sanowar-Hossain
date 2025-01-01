import React from 'react';
import { UtensilsCrossed, Search } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <UtensilsCrossed className="w-8 h-8 text-amber-500" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">
              Culinary Master
            </h1>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-gray-300">
            <a href="#" className="hover:text-amber-500 transition-colors">Home</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Recipes</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Chefs</a>
            <a href="#" className="hover:text-amber-500 transition-colors">About</a>
          </div>

          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search recipes..."
              className="bg-gray-800 text-gray-300 pl-10 pr-4 py-2 rounded-full border border-gray-700 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
            />
          </div>
        </div>
      </div>
    </header>
  );
}