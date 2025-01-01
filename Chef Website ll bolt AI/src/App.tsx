import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { ChefsSection } from './components/ChefsSection';
import { FeaturedRecipes } from './components/FeaturedRecipes';
import { ContactForm } from './components/ContactForm';
import { RecipesPage } from './pages/RecipesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Experience />
              <ChefsSection />
              <FeaturedRecipes />
              <ContactForm />
            </>
          } />
          <Route path="/recipes" element={<RecipesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;