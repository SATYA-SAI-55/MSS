
import React from 'react';
import { Page, NavItem } from '../types';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-slate-800">
                <span className="text-indigo-600">Gele</span>Net
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_ITEMS.map((item: NavItem) => (
                <button
                  key={item.name}
                  onClick={() => setActivePage(item.page)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activePage === item.page
                      ? 'bg-indigo-600 text-white'
                      : 'text-slate-600 hover:bg-indigo-500 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
