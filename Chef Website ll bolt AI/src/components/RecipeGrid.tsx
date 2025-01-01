import React from 'react';
import { RecipeCard } from './RecipeCard';
import { recipes } from '../data/recipes';

export function RecipeGrid() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured <span className="text-amber-500">Recipes</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover our collection of delicious recipes crafted by expert chefs from around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      </div>
    </section>
  );
}