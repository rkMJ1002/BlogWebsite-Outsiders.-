import React from 'react';
import { Menu, Search, User } from 'lucide-react';

export const Header = ({ setPage }: { setPage: (p: string) => void }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Menu className="w-6 h-6 text-gray-700 cursor-pointer lg:hidden" />
          <button 
            onClick={() => setPage('home')}
            className="text-xl font-bold tracking-tight text-gray-900 cursor-pointer"
          >
            Outsiders.
          </button>
        </div>
        
        <nav className="hidden lg:flex items-center gap-8">
          <button onClick={() => setPage('home')} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">Home</button>
          <button onClick={() => setPage('trips')} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">Trips</button>
          <button onClick={() => setPage('education')} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">Education</button>
          <button onClick={() => setPage('gallery')} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">Gallery</button>
        </nav>

        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 text-gray-500 cursor-pointer hover:text-blue-600 transition-colors" />
          <div className="h-8 w-[1px] bg-gray-200" />
          <User className="w-5 h-5 text-gray-500 cursor-pointer hover:text-blue-600 transition-colors" />
        </div>
      </div>
    </header>
  );
};
