import React from 'react';
import { RecipeFinder } from '../components/RecipeFinder/RecipeFinder';
import { FeaturedRecipes } from '../components/FeaturedRecipes';

export function RecipesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="pt-20">
        <FeaturedRecipes />
        <RecipeFinder />
      </div>
    </div>
  );
}