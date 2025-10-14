"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-gray-200 py-10 w-full">
      <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center px-6 md:px-10 gap-8 lg:gap-0">
        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-4 sm:gap-x-5 md:gap-x-6 gap-y-6 text-left w-full lg:w-auto">

          {/* Column 1 - CS Expo */}
          <div>
            <h3 className="font-helvetica font-bold text-lg sm:text-xl md:text-xl mb-2 md:mb-3">CS Expo</h3>
            <ul className="font-helvetica text-sm sm:text-base md:text-lg space-y-1 md:space-y-2">
              <li><Link href="#" className="hover:text-[#FF33E1]">About</Link></li>
              <li><Link href="#" className="hover:text-[#FF33E1]">Schedule</Link></li>
              <li><Link href="#" className="hover:text-[#FF33E1]">Panelists</Link></li>
              <li><Link href="#" className="hover:text-[#FF33E1]">Speakers</Link></li>
            </ul>
          </div>

          {/* Column 2 - Dev Day */}
          <div>
            <h3 className="font-helvetica font-bold text-lg sm:text-xl md:text-xl mb-2 md:mb-3">Dev Day</h3>
            <ul className="font-helvetica text-sm sm:text-base md:text-lg space-y-1 md:space-y-2">
              <li><Link href="#" className="hover:text-[#FF33E1]">About</Link></li>
              <li><Link href="#" className="hover:text-[#FF33E1]">Schedule</Link></li>
              <li><Link href="#" className="hover:text-[#FF33E1]">Speakers</Link></li>
            </ul>
          </div>

          {/* Column 3 - Projects */}
          <div>
            <h3 className="font-helvetica font-bold text-lg sm:text-xl md:text-xl mb-2 md:mb-3">Projects</h3>
            <ul className="font-helvetica text-sm sm:text-base md:text-lg space-y-1 md:space-y-2">
              <li><Link href="#" className="hover:text-[#FF33E1]">Collection</Link></li>
              <li><Link href="#" className="hover:text-[#FF33E1]">Hall of Fame</Link></li>
            </ul>
          </div>

          {/* Column 4 - Partners */}
          <div>
            <h3 className="font-helvetica font-bold text-lg sm:text-xl md:text-xl mb-2 md:mb-3">Our Partners</h3>
            <ul className="font-helvetica text-sm sm:text-base md:text-lg space-y-1 md:space-y-2">
              <li><Link href="#" className="hover:text-[#FF33E1]">Media Partners</Link></li>
              <li><Link href="#" className="hover:text-[#FF33E1]">Major Partners</Link></li>
              <li><Link href="#" className="hover:text-[#FF33E1]">Minor Partners</Link></li>
            </ul>
          </div>

          {/* Column 5 - About */}
          <div className="md:ml-7">
            <h3 className="font-helvetica font-bold text-lg sm:text-xl md:text-xl mb-2 md:mb-3">About</h3>
            <ul className="font-helvetica text-sm sm:text-base md:text-lg space-y-1 md:space-y-2">
              <li><Link href="#" className="hover:text-[#FF33E1]">CS Expo 2024</Link></li>
              <li><Link href="#" className="hover:text-[#FF33E1]">CS Teams</Link></li>
              <li><Link href="#" className="hover:text-[#FF33E1]">Committees</Link></li>
              <li><Link href="#" className="hover:text-[#FF33E1]">Faculty</Link></li>
            </ul>
          </div>
        </div>

        {/* Logo */}
        <div className="flex-shrink-0 mx-auto lg:mx-0">
          <Image
            src="/logo/expo_logo.png"
            alt="CS Expo Logo"
            width={200}
            height={200}
            className="object-contain w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-[300px] lg:h-[300px]"
          />
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-300 mt-8 md:mt-12 pt-4 px-6 md:px-10">
        <div className="relative flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-gray-400 gap-4 sm:gap-0">
          {/* Social Icons - Left on desktop, centered on mobile */}
          <div className="flex gap-3 sm:gap-4 order-1 sm:order-1">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF33E1] transition-colors"
            >
              <FaFacebook className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF33E1] transition-colors"
            >
              <FaInstagram className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            </a>
          </div>

          {/* Copyright - Centered on all screens */}
          <div className="order-3 sm:order-2 sm:absolute sm:left-1/2 sm:-translate-x-1/2 text-center">
            © {new Date().getFullYear()} CS EXPO. All rights reserved.
          </div>

          {/* Year - Right on desktop, below on mobile */}
          <div className="order-2 sm:order-3 font-helvetica font-bold text-xl sm:text-3xl md:text-4xl mr-15 sm:mr-6 md:mr-25">
            2025
          </div>
        </div>
      </div>
    </footer>
  );
}