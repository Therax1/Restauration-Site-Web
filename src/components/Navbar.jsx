import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Version mobile - Menu hamburger */}
      <div className="lg:hidden flex justify-between items-center p-4">
        <a href="#" className="flex gap-3 items-center">
          <img src="/assets/logo.png" alt="Restaurant Logo" className="w-10 h-10" />
          <p className="font-bold text-lg">Dhabi Restaurant</p>
        </a>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Contenu principal - Visible sur desktop et mobile (quand menu ouvert) */}
      <nav className={`${isOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row items-center justify-around p-4 bg-white lg:bg-transparent w-full lg:w-auto`}>
        {/* Logo - Masqué en mobile car déjà présent dans la barre supérieure */}
        <a href="#" className="hidden lg:flex gap-3 items-center">
          <img src="/assets/logo.png" alt="Restaurant Logo" className="w-10 h-10" />
          <p className="font-bold text-lg">Dhabi Restaurant</p>
        </a>
        
        {/* Liens de navigation */}
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-4 my-4 lg:my-0">
          <a href="#" className="text-sm hover:text-vert">Product</a>
          <a href="#" className="text-sm hover:text-vert">Recipe</a>
          <a href="#" className="text-sm hover:text-vert">About</a>
        </div>
        
        {/* Bouton et téléphone */}
        <div className="flex flex-col lg:flex-row items-center gap-4 my-4 lg:my-0">
          <a href="#" className="bg-vert py-2 rounded-xl px-4 text-sm lg:text-lg font-bold hover:bg-vert-dark transition">
            Special Offer
          </a>
          <p className="flex items-center gap-2 text-sm lg:text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
              <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z"/>
            </svg>
            +229 01 46 14 38 30
          </p>
        </div>
        
        {/* Icônes utilisateur et panier */}
        <div className="flex gap-4 mt-4 lg:mt-0">
          <button className="border border-black p-2 rounded-full hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
              <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Z"/>
            </svg>
          </button>
          <button className="border border-black p-2 rounded-full relative hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
              <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/>
            </svg>
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">9</span>
          </button>
        </div>
      </nav>
    </>
  );
}