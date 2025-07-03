import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
        
        {/* Logo / Brand */}
      <img src="/soukhra.png" alt="Hanoutly Logo" className="h-25 w-auto" />

        {/* Search Bar */}
        <div className="flex-1 mx-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-4 py-2 border border-black-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-black-500"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-black-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation + Button Wrapper */}
        <div className="hidden md:flex items-center gap-6">
          {/* Navigation */}
          <nav className="space-x-6">
            <a href="#" className="text-xs text-red-600 hover:text-black">Home</a>
            <a href="#" className="text-xs text-red-600 hover:text-black">About</a>
            <a href="#" className="text-xs text-red-600 hover:text-black transition">Contact</a>
          </nav>

          {/* Button */}
          <button className="bg-red-600 text-white px-4 py-2 rounded-xl shadow hover:bg-black transition ml-auto">
            Subscribe
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden ml-auto">
          <button className="text-gray-600 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
