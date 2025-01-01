import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">
            Sanowar Hossen
          </Link>

          <button 
            className="md:hidden text-amber-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-full left-0 w-full md:w-auto bg-gray-900 md:bg-transparent border-b md:border-none border-gray-800`}>
            <ul className="flex flex-col md:flex-row items-center w-full md:w-auto gap-6 p-4 md:p-0">
              <li>
                <Link to="/#experience" className="text-gray-300 hover:text-amber-500 transition-colors">Experience</Link>
              </li>
              <li>
                <Link to="/#chefs" className="text-gray-300 hover:text-amber-500 transition-colors">Our Chefs</Link>
              </li>
              <li>
                <Link to="/recipes" className="text-gray-300 hover:text-amber-500 transition-colors">Recipes</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}