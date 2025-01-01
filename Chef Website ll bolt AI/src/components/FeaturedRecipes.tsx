import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RecipeCard } from './RecipeCard';
import { featuredRecipes } from '../data/featuredRecipes';

export function FeaturedRecipes() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">
            Featured <span className="text-amber-500">Recipes</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Discover our handpicked selection of delicious recipes crafted with passion and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredRecipes.slice(0, 3).map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/recipes" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-amber-500 text-gray-900 rounded-full font-semibold hover:bg-amber-400 transition-colors"
          >
            View All Recipes <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}