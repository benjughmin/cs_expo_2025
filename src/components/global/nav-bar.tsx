'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="text-white py-4 px-6 md:px-10">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/logo/expo_logo.png"
            alt="CS Expo Logo"
            width={80}
            height={80}
            className="w-16 h-16 md:w-20 md:h-20 object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-3 md:gap-4">
          <Link 
            href="/events" 
            className="px-4 md:px-6 py-2 text-sm md:text-base border border-white rounded-full hover:bg-white hover:text-black transition-colors"
          >
            Events
          </Link>
          <Link 
            href="/projects" 
            className="px-4 md:px-6 py-2 text-sm md:text-base border border-white rounded-full hover:bg-white hover:text-black transition-colors"
          >
            Projects
          </Link>
          <Link 
            href="/partners" 
            className="px-4 md:px-6 py-2 text-sm md:text-base border border-white rounded-full hover:bg-white hover:text-black transition-colors"
          >
            Partners
          </Link>
          <Link 
            href="/gallery" 
            className="px-4 md:px-6 py-2 text-sm md:text-base border border-white rounded-full hover:bg-white hover:text-black transition-colors"
          >
            Gallery
          </Link>
          <Link 
            href="/hall-of-fame" 
            className="px-4 md:px-6 py-2 text-sm md:text-base border border-white rounded-full hover:bg-white hover:text-black transition-colors"
          >
            Hall of Fame
          </Link>
          <Link 
            href="/register" 
            className="px-4 md:px-6 py-2 text-sm md:text-base bg-[#a0178e] text-white rounded-full hover:bg-[#FF00DC] hover:text-black transition-colors font-semibold"
          >
            Register Now
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col gap-1.5 z-50 relative"
          aria-label="Toggle menu"
        >
          <span className={`w-7 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-7 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-7 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-98 z-40 transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-5 px-6">
          {/* Logo at top of mobile menu */}
          <div className="mb-6">
            <Image
              src="/logo/expo_logo.png"
              alt="CS Expo Logo"
              width={120}
              height={120}
              className="w-24 h-24 object-contain"
            />
          </div>

          <Link 
            href="events"
            onClick={toggleMenu}
            className="w-full max-w-xs text-center px-8 py-3 text-base border border-white rounded-full hover:bg-white hover:text-black transition-all duration-200"
          >
            Events
          </Link>
          <Link 
            href="projects"
            onClick={toggleMenu}
            className="w-full max-w-xs text-center px-8 py-3 text-base border border-white rounded-full hover:bg-white hover:text-black transition-all duration-200"
          >
            Projects
          </Link>
          <Link 
            href="partners"
            onClick={toggleMenu}
            className="w-full max-w-xs text-center px-8 py-3 text-base border border-white rounded-full hover:bg-white hover:text-black transition-all duration-200"
          >
            Partners
          </Link>
          <Link 
            href="gallery"
            onClick={toggleMenu}
            className="w-full max-w-xs text-center px-8 py-3 text-base border border-white rounded-full hover:bg-white hover:text-black transition-all duration-200"
          >
            Gallery
          </Link>
          <Link 
            href="hall-of-fame"
            onClick={toggleMenu}
            className="w-full max-w-xs text-center px-8 py-3 text-base border border-white rounded-full hover:bg-white hover:text-black transition-all duration-200"
          >
            Hall of Fame
          </Link>
          <Link 
            href="register"
            onClick={toggleMenu}
            className="w-full max-w-xs text-center px-8 py-3 text-base bg-[#a0178e] text-white rounded-full hover:bg-[#FF00DC] hover:text-black transition-all duration-200 font-semibold mt-2"
          >
            Register Now
          </Link>
        </div>
      </div>
    </nav>
  );
}