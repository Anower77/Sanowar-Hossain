import React from 'react';
import { ChefCard } from './ChefCard';
import { images } from '../config/images';

export function ChefsSection() {
  const chefs = [
    {
      image: images.chef1,
      name: "John Watson",
      description: "Expert in international cuisine with over 10 years of experience in fine dining establishments."
    },
    {
      image: images.chef2,
      name: "Alexa Gomez",
      description: "Specializes in Mediterranean and fusion cuisine, bringing innovative flavors to traditional dishes."
    },
    {
      image: images.chef3,
      name: "Richard",
      description: "Master of Asian cuisine with expertise in authentic Japanese and Chinese cooking techniques."
    }
  ];

  return (
    <section id="chefs" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-amber-500 text-lg mb-2">Our Chefs</p>
          <h2 className="text-4xl font-bold text-white">Our Awesome Chef's</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chefs.map((chef) => (
            <ChefCard key={chef.name} {...chef} />
          ))}
        </div>
      </div>
    </section>
  );
}