import React from 'react';
import { ArrowLeft, Clock, Users } from 'lucide-react';

interface RecipeDetailsProps {
  meal: {
    strMeal: string;
    strMealThumb: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    [key: string]: string | null;
  };
  onBack: () => void;
}

export function RecipeDetails({ meal, onBack }: RecipeDetailsProps) {
  const getIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push({ ingredient, measure });
      }
    }
    return ingredients;
  };

  return (
    <div className="bg-gray-800 rounded-xl p-8 max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors mb-6"
      >
        <ArrowLeft className="w-5 h-5" /> Back to results
      </button>
      
      <div className="grid md:grid-cols-2 gap-8">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full rounded-xl"
        />
        
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">{meal.strMeal}</h2>
          <div className="flex gap-4 mb-6">
            <span className="px-3 py-1 bg-amber-500/20 text-amber-500 rounded-full text-sm">
              {meal.strCategory}
            </span>
            <span className="px-3 py-1 bg-amber-500/20 text-amber-500 rounded-full text-sm">
              {meal.strArea}
            </span>
          </div>
          
          <h3 className="text-xl font-semibold text-white mb-3">Ingredients</h3>
          <ul className="space-y-2 mb-6">
            {getIngredients().map(({ ingredient, measure }, index) => (
              <li key={index} className="text-gray-400">
                • {measure} {ingredient}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-white mb-3">Instructions</h3>
        <p className="text-gray-400 whitespace-pre-line">{meal.strInstructions}</p>
      </div>
    </div>
  );
}