import React, { useState } from 'react'

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-gray-900 text-white text-sm">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex space-x-6">
            <span>📞 (973) 373-9000</span>
            <span>📧 info@oilrus.example</span>
          </div>
          <div className="hidden md:block">
            <span>📍 1123 Clinton Avenue, Irvington, NJ 07111</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              <span className="text-amber-500">Oils</span> R US
            </h1>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-amber-500 font-medium transition-colors">
              Home
            </a>

            {/* Oils Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('oils')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-gray-700 hover:text-amber-500 font-medium transition-colors flex items-center">
                Oils
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeDropdown === 'oils' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <a href="#shop-oils" className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors">
                    <div className="font-medium">Shop Oils</div>
                    <div className="text-sm text-gray-500">Browse our fragrance collection</div>
                  </a>
                  <a href="#about-oils" className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors">
                    <div className="font-medium">About Our Oils</div>
                    <div className="text-sm text-gray-500">Learn about our quality standards</div>
                  </a>
                  <a href="#custom-blends" className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors">
                    <div className="font-medium">Custom Blends</div>
                    <div className="text-sm text-gray-500">Create your unique scent</div>
                  </a>
                </div>
              )}
            </div>

            {/* Repairs Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('repairs')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-gray-700 hover:text-amber-500 font-medium transition-colors flex items-center">
                Repairs
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeDropdown === 'repairs' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <a href="#fix-phone" className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors">
                    <div className="font-medium">Fix a Phone</div>
                    <div className="text-sm text-gray-500">Professional repair services</div>
                  </a>
                  <a href="#buy-phone" className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors">
                    <div className="font-medium">Buy a Phone</div>
                    <div className="text-sm text-gray-500">New & refurbished devices</div>
                  </a>
                  <a href="#diagnostics" className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors">
                    <div className="font-medium">Diagnostics</div>
                    <div className="text-sm text-gray-500">Free device assessment</div>
                  </a>
                </div>
              )}
            </div>

            <a href="#services" className="text-gray-700 hover:text-amber-500 font-medium transition-colors">
              Services
            </a>

            <a href="#about" className="text-gray-700 hover:text-amber-500 font-medium transition-colors">
              About
            </a>

            <a href="#contact" className="text-gray-700 hover:text-amber-500 font-medium transition-colors">
              Contact
            </a>

            {/* CTA Button */}
            <a 
              href="#quote" 
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-amber-500">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
