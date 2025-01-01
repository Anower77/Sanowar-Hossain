import React from 'react';
import { images } from '../config/images';
import { socialLinks } from '../config/socialLinks';

export function Hero() {
  return (
    <section className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h3 className="text-amber-500 text-xl mb-4">More Than Faster</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Professional Trainee Chef
            <span className="block text-amber-500">"Culinary Course in Diploma"</span>
            <span className="block">Team work, More Cuisine</span>
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            To become a skillful Chef in a renowned fine dining establishment, where I can showcase my expertise 
            in more cuisine and create innovative dishes that guest. I aim to lead a team of talented Chefs, 
            foster a culture of culinary excellence, and contribute to the establishment's reputation as a 
            culinary destination.
          </p>
          
          <a href="#contact" className="inline-block px-8 py-3 bg-amber-500 text-gray-900 rounded-full font-semibold hover:bg-amber-400 transition-colors mb-8">
            If you know something from me
          </a>

          <div className="flex gap-4 justify-center md:justify-start">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 group"
                aria-label={social.name}
              >
                <img 
                  src={images[social.icon]} 
                  alt={social.name} 
                  className="w-6 h-6 opacity-75 group-hover:opacity-100 transition-opacity"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-amber-500 rounded-full blur-3xl opacity-20 animate-pulse" />
          <img 
            src={images.chef} 
            alt="Chef Portrait" 
            className="relative w-full max-w-md mx-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}